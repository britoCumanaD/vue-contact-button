declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    contacts: {
        type: () => string[];
        required: true;
    };
    maxChars: {
        type: NumberConstructor;
        default: number;
    };
    isDarkMode: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    send: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    contacts: {
        type: () => string[];
        required: true;
    };
    maxChars: {
        type: NumberConstructor;
        default: number;
    };
    isDarkMode: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSend?: ((...args: any[]) => any) | undefined;
}>, {
    isDarkMode: boolean;
    maxChars: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
