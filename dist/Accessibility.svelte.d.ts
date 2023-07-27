import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AccessibilityProps = typeof __propDef.props;
export type AccessibilityEvents = typeof __propDef.events;
export type AccessibilitySlots = typeof __propDef.slots;
export default class Accessibility extends SvelteComponentTyped<AccessibilityProps, AccessibilityEvents, AccessibilitySlots> {
}
export {};
