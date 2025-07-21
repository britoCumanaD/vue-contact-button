# 📮 vue-contact-button

Un botón flotante de contacto fácil de usar y totalmente configurable para proyectos Vue 3. Perfecto para portfolios, landing pages o aplicaciones donde quieras destacar una llamada a la acción.

![npm](https://img.shields.io/npm/v/vue-contact-button?style=flat-square)
![Vue](https://img.shields.io/badge/Vue-3.x-brightgreen?style=flat-square)
![License](https://img.shields.io/github/license/tu-usuario/vue-contact-button?style=flat-square)

---

## 🚀 Instalación

```bash
npm install vue-contact-button
# o
yarn add vue-contact-button
```

## 🧪 Uso básico

```ts
// main.ts
import 'vue-contact-button/dist/style.css'
```

```vue
<script setup>
import { ContactButton } from 'vue-contact-button'
</script>

<template>
  <ContactButton @send="handleSend" />
</template>
```

## ⚙️ Props disponibles

| Prop | Tipo | Descripción | Default |
|------|------|-------------|---------|
| `chatInWindow` | boolean | Mostrar chat en ventana flotante | `true` |
| `contacts` | string[] | Tipos de contacto disponibles | `['email']` |
| `floatText` | string | Texto flotante junto al botón | `''` |
| `top` | string | Posición desde arriba (CSS) | `''` |
| `bottom` | string | Posición desde abajo (CSS) | `'1.5rem'` |
| `left` | string | Posición desde izquierda (CSS) | `''` |
| `right` | string | Posición desde derecha (CSS) | `'1.5rem'` |
| `mainColor` | string | Color principal del botón | `'#3b82f6'` |
| `secondaryColor` | string | Color secundario (texto) | `'#ffffff'` |
| `maxChars` | number | Máximo de caracteres en mensaje | `200` |
| `darkMode` | boolean | Forzar modo oscuro | `false` |
| `autoDetectTheme` | boolean | Auto-detectar tema del sistema | `true` |
| `lang` | string | Idioma de la interfaz | `'en'` |

## 🌍 Idiomas soportados

| Código | Idioma | Ejemplo |
|--------|--------|---------|
| `en` | English | `<ContactButton lang="en" />` |
| `es` | Español | `<ContactButton lang="es" />` |
| `fr` | Français | `<ContactButton lang="fr" />` |
| `de` | Deutsch | `<ContactButton lang="de" />` |
| `pt` | Português | `<ContactButton lang="pt" />` |
| `it` | Italiano | `<ContactButton lang="it" />` |

## 📞 Tipos de contacto disponibles

- `email` - 📧 Email
- `whatsapp` - 📱 WhatsApp  
- `telegram` - ✈️ Telegram
- `phone` - 📞 Teléfono
- `linkedin` - 💼 LinkedIn

## 🎯 Eventos

| Evento | Descripción | Payload |
|--------|-------------|---------|
| `@send` | Se emite cuando se envía un mensaje | `{ contact: string, message: string }` |
| `@openContact` | Se emite cuando `chatInWindow` es `false` | - |

## 💡 Ejemplos de uso

### Ejemplo básico con chat
```vue
<template>
  <ContactButton 
    :contacts="['email', 'whatsapp']"
    floatText="¡Contáctanos!"
    lang="es"
    @send="handleMessage"
  />
</template>

<script setup>
const handleMessage = ({ contact, message }) => {
  console.log(`Contacto: ${contact}, Mensaje: ${message}`)
  // Aquí puedes enviar el mensaje a tu backend
}
</script>
```

### Ejemplo con posicionamiento personalizado
```vue
<template>
  <ContactButton
    top="2rem"
    left="2rem"
    mainColor="#10b981"
    floatText="Need help?"
    lang="en"
  />
</template>
```

### Ejemplo sin ventana de chat
```vue
<template>
  <ContactButton
    :chatInWindow="false"
    floatText="Ouvrir le contact"
    lang="fr"
    @openContact="openContactModal"
  />
</template>

<script setup>
const openContactModal = () => {
  // Abrir tu propio modal o formulario
  console.log('Abrir formulario de contacto personalizado')
}
</script>
```

### Ejemplo con modo oscuro forzado
```vue
<template>
  <ContactButton
    :darkMode="true"
    :autoDetectTheme="false"
    mainColor="#6366f1"
    lang="de"
  />
</template>
```

## 🎨 Personalización de temas

El componente soporta automáticamente modo claro y oscuro:

```vue
<template>
  <!-- Auto-detecta el tema del sistema -->
  <ContactButton :autoDetectTheme="true" />
  
  <!-- Fuerza modo oscuro -->
  <ContactButton :darkMode="true" :autoDetectTheme="false" />
  
  <!-- Colores personalizados -->
  <ContactButton 
    mainColor="var(--primary-color)"
    secondaryColor="var(--text-color)"
  />
</template>
```

## 🧩 Componentes individuales

También puedes usar los componentes por separado:

```vue
<script setup>
import { 
  ContactButton,
  FloatText, 
  ContactSelector, 
  ChatWindow 
} from 'vue-contact-button'
</script>

<template>
  <!-- Texto flotante independiente -->
  <FloatText 
    text="¡Hola!" 
    mainColor="#3b82f6"
    lang="es" 
  />
  
  <!-- Selector de contacto -->
  <ContactSelector 
    :contacts="['email', 'whatsapp']"
    v-model="selectedContact"
    lang="en"
  />
  
  <!-- Ventana de chat -->
  <ChatWindow 
    :contacts="['email']"
    :maxChars="300"
    lang="fr"
    @send="handleSend"
  />
</template>
```

## ✨ Características

- 🟢 Compatible con Vue 3
- 🧩 Totalmente personalizable
- 🎨 Soporte para temas (dark/light) automático
- 🌍 Soporte multi-idioma (6 idiomas incluidos)
- 📱 Diseño responsivo y moderno
- 🖱️ Micro-interacciones y animaciones suaves
- 💾 Persistencia en sessionStorage
- ♿ Accesible (ARIA, contraste alto, reduced motion)
- 🎯 Eventos personalizables
- 📦 Tree-shakeable y optimizado

## 🏗️ Arquitectura

```
src/
├── components/
│   ├── ContactButton.vue    # Componente principal
│   ├── FloatText.vue       # Texto flotante
│   ├── ContactSelector.vue # Selector de contactos
│   └── ChatWindow.vue      # Ventana de chat
├── style/
│   ├── contact-button.css  # Estilos del botón principal
│   ├── float-text.css      # Estilos del texto flotante
│   ├── contact-selector.css # Estilos del selector
│   └── chat-window.css     # Estilos de la ventana de chat
├── utils/
│   └── i18n.ts            # Sistema de traducciones
└── index.ts               # Punto de entrada principal
```

## 🔧 API de traducciones

```typescript
import { getTranslation, translations } from 'vue-contact-button'

// Obtener traducciones para un idioma
const t = getTranslation('es')
console.log(t.chatWindow.send) // "Enviar"

// Acceder a todas las traducciones
console.log(translations.fr.contactSelector.email) // "📧 Email"
```

## 🧑‍💻 Autor

Desarrollado con ❤️ por Daniel Brito

¿Te fue útil este componente? ¡Dale una estrella ⭐️ en GitHub!

## 📄 Licencia

MIT