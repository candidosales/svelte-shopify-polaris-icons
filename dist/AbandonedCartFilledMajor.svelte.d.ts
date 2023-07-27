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
export type AbandonedCartFilledMajorProps = typeof __propDef.props;
export type AbandonedCartFilledMajorEvents = typeof __propDef.events;
export type AbandonedCartFilledMajorSlots = typeof __propDef.slots;
export default class AbandonedCartFilledMajor extends SvelteComponentTyped<AbandonedCartFilledMajorProps, AbandonedCartFilledMajorEvents, AbandonedCartFilledMajorSlots> {
}
export {};
