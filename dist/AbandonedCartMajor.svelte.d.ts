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
export type AbandonedCartMajorProps = typeof __propDef.props;
export type AbandonedCartMajorEvents = typeof __propDef.events;
export type AbandonedCartMajorSlots = typeof __propDef.slots;
export default class AbandonedCartMajor extends SvelteComponentTyped<AbandonedCartMajorProps, AbandonedCartMajorEvents, AbandonedCartMajorSlots> {
}
export {};
