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
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    isDarkMode: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
