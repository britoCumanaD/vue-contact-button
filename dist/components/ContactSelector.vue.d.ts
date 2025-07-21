declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    contacts: {
        type: () => string[];
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    isDarkMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    contacts: {
        type: () => string[];
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    isDarkMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    isDarkMode: boolean;
    lang: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
