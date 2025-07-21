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
    lang: {
        type: StringConstructor;
        default: string;
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
    lang: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onSend?: ((...args: any[]) => any) | undefined;
}>, {
    isDarkMode: boolean;
    lang: string;
    maxChars: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
