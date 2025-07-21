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

export const translations: Record<string, Translations> = {
  en: {
    floatText: {
      close: 'Close',
    },
    contactSelector: {
      email: '📧 Email',
      whatsapp: '📱 WhatsApp',
      telegram: '✈️ Telegram',
      phone: '📞 Phone',
      linkedin: '💼 LinkedIn',
    },
    chatWindow: {
      placeholder: 'Write your message...',
      send: 'Send',
    },
  },
  es: {
    floatText: {
      close: 'Cerrar',
    },
    contactSelector: {
      email: '📧 Email',
      whatsapp: '📱 WhatsApp',
      telegram: '✈️ Telegram',
      phone: '📞 Teléfono',
      linkedin: '💼 LinkedIn',
    },
    chatWindow: {
      placeholder: 'Escribe tu mensaje...',
      send: 'Enviar',
    },
  },
  fr: {
    floatText: {
      close: 'Fermer',
    },
    contactSelector: {
      email: '📧 Email',
      whatsapp: '📱 WhatsApp',
      telegram: '✈️ Telegram',
      phone: '📞 Téléphone',
      linkedin: '💼 LinkedIn',
    },
    chatWindow: {
      placeholder: 'Écrivez votre message...',
      send: 'Envoyer',
    },
  },
  de: {
    floatText: {
      close: 'Schließen',
    },
    contactSelector: {
      email: '📧 E-Mail',
      whatsapp: '📱 WhatsApp',
      telegram: '✈️ Telegram',
      phone: '📞 Telefon',
      linkedin: '💼 LinkedIn',
    },
    chatWindow: {
      placeholder: 'Schreiben Sie Ihre Nachricht...',
      send: 'Senden',
    },
  },
  pt: {
    floatText: {
      close: 'Fechar',
    },
    contactSelector: {
      email: '📧 Email',
      whatsapp: '📱 WhatsApp',
      telegram: '✈️ Telegram',
      phone: '📞 Telefone',
      linkedin: '💼 LinkedIn',
    },
    chatWindow: {
      placeholder: 'Escreva sua mensagem...',
      send: 'Enviar',
    },
  },
  it: {
    floatText: {
      close: 'Chiudi',
    },
    contactSelector: {
      email: '📧 Email',
      whatsapp: '📱 WhatsApp',
      telegram: '✈️ Telegram',
      phone: '📞 Telefono',
      linkedin: '💼 LinkedIn',
    },
    chatWindow: {
      placeholder: 'Scrivi il tuo messaggio...',
      send: 'Invia',
    },
  },
};

export const getTranslation = (lang: string): Translations => {
  return translations[lang] || translations.en;
};