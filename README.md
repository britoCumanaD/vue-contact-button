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
import ContactButton from 'vue-contact-button'
</script>

<template>
  <ContactButton @click="abrirFormulario" />
</template>
```

## ⚙️ Props disponibles

| Prop     | Tipo    | Descripción                                | Default      |
|----------|---------|--------------------------------------------|--------------|
| icon     | string  | Icono o texto para mostrar (emoji o clase) | ✉️            |
| position | string  | Posición flotante: bottom-right, bottom-left, etc. | bottom-right |
| color    | string  | Color de fondo (hex, var, o clase CSS)     | #00258b      |
| zIndex   | number  | Nivel de superposición                     | 9999         |
| size     | string  | Tamaño del botón: sm, md, lg, xl           | md           |

## 💡 Ejemplo completo

```vue
<ContactButton
  icon="💬"
  position="bottom-left"
  color="var(--color-primary)"
  size="lg"
  @click="useContactModal"
/>
```

## ✨ Características

- 🟢 Compatible con Vue 3
- 🧩 Totalmente personalizable
- 🎨 Soporte para temas (dark/light)
- 🖱️ Soporte para eventos (@click)
- 💬 Ideal para abrir formularios, chats, WhatsApp, etc.

## 📁 Estructura recomendada

```
src/
├── components/
│   └── ContactButton.vue
├── index.ts
├── style.css
```

## 🧑‍💻 Autor

Desarrollado con ❤️ por Daniel Brito

¿Te fue útil este componente? ¡Dale una estrella ⭐️ en GitHub!

## 📄 Licencia

MIT
