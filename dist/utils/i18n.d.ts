export interface Translations {
    floatText: {
        close: string;
    };
    contactSelector: {
        email: string;
        whatsapp: string;
        telegram: string;
        phone: string;
        linkedin: string;
    };
    chatWindow: {
        placeholder: string;
        send: string;
    };
}
export declare const translations: Record<string, Translations>;
export declare const getTranslation: (lang: string) => Translations;
