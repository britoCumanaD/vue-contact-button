declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    chatInWindow: {
        type: BooleanConstructor;
        default: boolean;
    };
    contacts: {
        type: () => string[];
        default: () => string[];
    };
    floatText: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    bottom: {
        type: StringConstructor;
        default: string;
    };
    left: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    mainColor: {
        type: StringConstructor;
        default: string;
    };
    secondaryColor: {
        type: StringConstructor;
        default: string;
    };
    maxChars: {
        type: NumberConstructor;
        default: number;
    };
    darkMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoDetectTheme: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    send: (...args: any[]) => void;
    openContact: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    chatInWindow: {
        type: BooleanConstructor;
        default: boolean;
    };
    contacts: {
        type: () => string[];
        default: () => string[];
    };
    floatText: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    bottom: {
        type: StringConstructor;
        default: string;
    };
    left: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    mainColor: {
        type: StringConstructor;
        default: string;
    };
    secondaryColor: {
        type: StringConstructor;
        default: string;
    };
    maxChars: {
        type: NumberConstructor;
        default: number;
    };
    darkMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoDetectTheme: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSend?: ((...args: any[]) => any) | undefined;
    onOpenContact?: ((...args: any[]) => any) | undefined;
}>, {
    mainColor: string;
    secondaryColor: string;
    label: string;
    bottom: string;
    left: string;
    right: string;
    top: string;
    contacts: string[];
    maxChars: number;
    chatInWindow: boolean;
    floatText: string;
    darkMode: boolean;
    autoDetectTheme: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
