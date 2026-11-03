# ¡Mi Portafolio!

Este es el repositorio que aloja mi portafolio, está hecho en Vanilla y empaquetado con Vite, muchas gracias por visitar.

## Agregar un proyecto

Los proyectos se administran desde `public/projects.json`. Agrega un objeto al arreglo con estos campos:

```json
{
  "title": "Nombre del proyecto",
  "description": "Descripción breve del proyecto.",
  "url": "https://ejemplo.com",
  "repositoryUrl": "https://github.com/usuario/proyecto",
  "image": "/images/captura.png",
  "imageAlt": "Descripción de la captura para lectores de pantalla"
}
```

Coloca la imagen en `public/images/` y usa su ruta desde la raíz del sitio en `image`. Mantén las comas entre objetos JSON y no agregues una coma después del último. Las tarjetas se generan automáticamente al cargar el portafolio.
