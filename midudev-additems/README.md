# Exercise (Spanish)

Vite, React, Typescript, Jest, Locastorage, Custom hooks

Published in https://66f55c19908a911e67489424--incredible-liger-620b66.netlify.app/

## commands used in this project

```
npm run dev
npm run build
npm run test
npm run test:cov
```

Youtube video: https://www.youtube.com/watch?v=JW_x-Tq5Vt0

Source: https://github.com/midudev/pruebas-tecnicas/tree/main/live-coding/02-add-items-react

Which sources:  
https://gist.github.com/brandovidal/153d30bb6f639ad26e1796bb010af8c8#ejercicio-1-a%C3%B1adir-y-eliminar-elementos-de-una-lista-react

Ejercicio 1. Añadir y eliminar elementos de una lista (React) Requisitos: Tener instalado Nodejs (v16.x.x o superior). Tener instalado npm.

Duración máxima: 40 minutos

Enunciado:

Crear una app en React que implemente un campo de texto y botón para añadir un elemento.

Cuando se hace click en el botón, el texto en el campo de entrada debe agregarse a continuación en una lista de elementos.

Además, cada vez que se hace click en cualquier elemento de la lista, debe eliminarse de la lista.

```

- [] Dar importancia a la funcionalidad y usabilidad, más que al diseño visual.
  [] El código debe ser enteramente desarrollado en Typescript.
```

# Extended exercises

Extra: creating tests, and specially E2E test.  
Refactor using custom hooks.  
Create tests for one of the custom hooks.

# Proposed extra exercises:

- Convert the hook into a Reducer.
- Add a custo hook for SEO: the custom hook updates the title and sets the metadescription. And shows the number of items.
- Deploy it in netifly.

# e2e testing.

I had to install several packages for jest to work.  
I followed https://www.youtube.com/watch?v=tnCLaxCCKWk&t=1419s

I set all jest testing directly in `package.json`, instead of `jest.config.ts`

=====

For Testing, it's important to know the roles for every tag:

Roles por defecto para etiquetas HTML:
Etiqueta Rol por defecto Descripción
<a>' link' Define un enlace que navega a otra página o recurso.
<button>' button' Define un botón que puede ser clicado para ejecutar una acción.

<header> 'banner'	Representa el encabezado de una sección o página.
<footer> 'contentinfo'	Representa el pie de página de una página o sección.
<article> 'article'	Representa un contenido autónomo.
<section> 'region' (si tiene un encabezado)	Define una sección en un documento.
<nav> 'navigation'	Define un bloque de enlaces de navegación.
<h1> a <h6> 'heading'	Representa encabezados con diferentes niveles de importancia.
<img>	'img'	Define una imagen en el documento.
<input type="text">	'textbox'	Representa un campo de entrada de texto.
<input type="checkbox">	'checkbox'	Representa una casilla de verificación.
<input type="radio">	'radio'	Representa un botón de opción.
<ul>	'list'	Define una lista no ordenada.
<ol>	'list'	Define una lista ordenada.
<li>	'listitem'	Representa un ítem de una lista (ul o ol).
<table>	'table'	Define una tabla de datos.
<th>	'columnheader' o rowheader	Representa un encabezado de columna o fila en una tabla.
<td>	'cell'	Representa una celda en una tabla.
<form>	'form'	Representa un formulario interactivo.
<main>	'main'	Define el contenido principal del documento.
<aside>	'complementary'	Representa contenido complementario al contenido principal.
<details>	'group'	Representa un bloque de detalles adicionales.
<summary>	'button'	Representa el resumen de un bloque de detalles (<details>).
