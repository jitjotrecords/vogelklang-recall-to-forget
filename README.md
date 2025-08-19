# TIVCO — Press Kit (GitHub Pages Template)

Esta carpeta está lista para publicar como **GitHub Pages**. Incluye:
- `index.html` — estructura con selector ES/EN, player con playlist y secciones.
- `style.css` — estética Jit Jot (DIY minimal).
- `script.js` — cambio de idioma + lógica de playlist (precarga de los 9 tracks).
- `/audio` — poné aquí tus MP3/WAV (renombrá según los ejemplos).
- `/img` — portada del álbum y fotos (usa `cover.jpg` y `tivco.jpg` o cambia en el HTML).
- `/docs/dossier.pdf` — tu dossier si querés ofrecer descarga.

> **Nota:** Las duraciones se completan solas al cargar metadatos si los archivos de audio los incluyen. Si querés fijarlas manualmente, podés editar el HTML y escribirlas dentro de `<span class="duration">` de cada `<li>`.

---

## Cómo publicarlo gratis con GitHub Pages

1. **Crear repositorio**
   - Iniciá sesión en GitHub y creá un repo público, por ejemplo `tivco-presskit`.
2. **Subir archivos**
   - Subí *todo* el contenido de esta carpeta a la raíz del repo.
3. **Habilitar GitHub Pages**
   - En el repo: **Settings → Pages**.
   - Fuente (**Source**): seleccioná **Deploy from a branch**.
   - Branch: `main` (o `master`) y carpeta `/root`.
   - Guardá y en unos segundos tendrás la URL: `https://TU-USUARIO.github.io/tivco-presskit/`.
4. **Probar**
   - Abrí la URL y verificá el player, textos e imágenes.
5. **Opcional: Dominio propio**
   - En **Settings → Pages**, agregá tu dominio y configurá los DNS.

---

## Reemplazar contenidos rápidos

- **Textos ES/EN:** buscá bloques con `class="lang es"` y `class="lang en"`. El selector alterna visibilidad sin recargar.
- **Portada y foto:** reemplazá `img/cover.jpg` y `img/tivco.jpg`.
- **Audio:** renombrá tus archivos según los ejemplos del `script.js` o ajustá el arreglo `tracks` con tus nombres reales.
- **Dossier:** subí `docs/dossier.pdf` y el botón funcionará.
- **Contacto:** cambiá el e‑mail/links en la sección *Contacto*.

---

## Protección básica de audio

Es streaming simple. Ocultamos rutas visibles, pero no impide descargas avanzadas. Para más control, considerá:
- Links privados expiran (servicios de hosting), o
- Audio en servidores con hotlink protection.

---

¡Listo! Compartí el link con sellos y prensa.
