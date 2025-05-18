
#  Catálogo de Películas

Este proyecto consiste en un sitio web que permite listar, buscar, filtrar y visualizar el detalle de películas, además de permitir a los usuarios dejar comentarios. 

---

##  Tecnologías utilizadas

- HTML5
- CSS3 (con Bootstrap 5)
- JavaScript
- Sass (preprocesador CSS)
- Git y GitHub (control de versiones)

---

##  Funcionalidades implementadas

- Visualización de películas con imagen, año y sinopsis.
- Búsqueda por título.
- Filtro por año.
- Paginación.
- Detalle de cada película.
- Comentarios persistentes con localStorage.

---

##  Uso de Sass

Se implementó Sass en el archivo `scss/estilos.scss`, el cual fue compilado a `css/estilos.css`.

Se incluyen:

-  **5 variables Sass**:
- `$rojo-cine`, `$negro-fondo`, `$gris-texto`, `$gris-oscuro`, `$dorado`
-  **Anidación de selectores**
-  **2 casos de interpolación**:
- Clases dinámicas usando `#{$nombre}`

Compilación realizada con:

```bash
sass scss/estilos.scss css/estilos.css --watch
```

---

##  Estructura del proyecto

```
├── index.html
├── detalle.html
├── scss/
│   └── estilos.scss   # Código Sass fuente
├── css/
│   ├── estilos.css    # Archivo compilado
│   └── estilos.css.map (ignorado con .gitignore)
├── js/
│   ├── scripts.js
│   └── detalle.js
```

---

##  Control de versiones

El proyecto fue versionado con Git, y alojado en un repositorio público de GitHub.

### Comandos clave utilizados:

```bash
git init
git add .
git commit -m "Mensaje"
git remote add origin https://github.com/usuario/repositorio.git
git push -u origin master
```

El archivo `.gitignore` fue configurado para excluir el `estilos.css.map` generado por Sass.

---

##   Sitio Web

https://michael-s-marin-e.github.io/Desarrollo-SW-Michael  

## Video Presentación

https://youtu.be/fggovSrfecM

---

##  Autor

**Michael Marin**  
**msmarin@ucompensar.edu.co**

---
