#!/usr/bin/env bash
# Packs the library, installs the tarball into a fresh Vite + Svelte 5 app with npm,
# then type-checks and builds it. Leaves the app and its build in $OUT for inspection.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${OUT:-$ROOT/consumer-check}"

rm -rf "$OUT" && mkdir -p "$OUT/app/src"
cd "$ROOT"
vp run package
TARBALL="$OUT/$(npm pack --silent --pack-destination "$OUT")"

cd "$OUT/app"
cat > package.json <<'EOF'
{ "name": "consumer", "private": true, "type": "module" }
EOF
cat > vite.config.js <<'EOF'
import { svelte } from '@sveltejs/vite-plugin-svelte';
export default { plugins: [svelte()] };
EOF
cat > tsconfig.json <<'EOF'
{ "compilerOptions": { "strict": true, "module": "esnext", "moduleResolution": "bundler", "target": "esnext", "verbatimModuleSyntax": true, "skipLibCheck": false, "types": [] } }
EOF
cat > index.html <<'EOF'
<div id="app"></div><script type="module" src="/src/main.ts"></script>
EOF
cat > src/main.ts <<'EOF'
import { mount } from 'svelte';
import App from './App.svelte';
mount(App, { target: document.getElementById('app')! });
EOF
cat > src/App.svelte <<'EOF'
<script lang="ts">
	import { WifiMajor, ICON_SIZES, type IconProps } from 'svelte-shopify-polaris-icons';
	import AddMajor from 'svelte-shopify-polaris-icons/AddMajor.svelte';
	const props: IconProps = { size: 'xl', ariaLabel: 'add' };
</script>

<WifiMajor size="lg" class="text-red-500" data-testid="wifi" />
<AddMajor {...props} />
<span>{ICON_SIZES.sm}</span>
EOF

npm install --no-audit --no-fund "$TARBALL" svelte@5 tailwind-merge@3 tailwindcss@4 \
	vite@8 @sveltejs/vite-plugin-svelte@7 typescript@6 svelte-check
npx svelte-check --fail-on-warnings
npx vite build

JS="$(cat dist/assets/*.js)"
for needle in 'M8.967 13.936' 'M10.75 6.75a.75.75 0'; do
	grep -qF "$needle" <<<"$JS" || { echo "FAIL: build output missing '$needle'"; exit 1; }
done
echo "PASS: $(basename "$TARBALL") installs, type-checks and builds in a Vite + Svelte 5 app ($OUT/app/dist)"
