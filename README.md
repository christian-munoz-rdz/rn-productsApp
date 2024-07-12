# Gestor de E-commerce de tienda de ropa

### indice 

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Pantalla de inicio](#pantalla-de-inicio)
- [Detalles de Producto](#detalles-de-producto)
- [Edición de Producto](#edición-de-producto)
- [Agregar Imágenes a un Producto](#agregar-imágenes-a-un-producto)
- [Creación de Producto](#creación-de-producto)

## Descripción

Este proyecto es una aplicación móvil desarrollada con [React Native](https://reactnative.dev/) que permite visualizar y editar el catálogo de un e-commerce de una tienda de ropa. La aplicación consume un backend local y permite realizar las siguientes acciones:

- Visualizar la lista de productos disponibles.
- Visualizar los detalles de un producto tales como: nombre, precio, descripción, stock, tallas disponibles, género y las imágenes del producto.
- Editar todos los campos de un producto y guardar los cambios  a través de un botón.
- Agregar imágenes disponibles en la galería del dispositivo a un producto.
- Crear un nuevo producto con todos los campos necesarios y agregar imágenes disponibles en la galería del dispositivo.

## Tecnologías

<div style="display: flex; justify-content: center;">
<table>
   <thead>
      <tr>
         <th>Tecnologías</th>
         <th></th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><a href="https://reactnative.dev/">React Native</a></td>
         <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width=50></td>
      </tr>
      <tr>
         <td><a href="https://reactnavigation.org/">React Navigation</a></td>
         <td><img src="https://avatars.githubusercontent.com/u/29647600?s=280&v=4" width=50></td>
      </tr>
      <tr>
         <td><a href="https://akveo.github.io/react-native-ui-kitten/">UI Kitten 5.3</a></td>
         <td><img src="https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.36f92bd4.png" height=50></td>
      </tr>
      <tr>
         <td><a href="https://axios-http.com/">Axios</a></td>
         <td><img src="https://axios-http.com/assets/logo.svg" width=120></td>
      </tr>
      <tr>
         <td><a href="https://tanstack.com/query/latest">TanStack Query</a></td>
         <td><img src="https://tanstack.com/_build/assets/logo-color-600w-Bx4vtR8J.png" width=50></td>
      </tr>
      <tr>
         <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
         <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width=50></td>
      </tr>
      <tr>
         <td><a href="https://formik.org/">Formik</a></td>
         <td><img src="https://static-00.iconduck.com/assets.00/formik-icon-1024x1024-deyd4zqw.png" width=50></td>
      </tr>
      <tr>
         <td><a href="https://zustand-demo.pmnd.rs/">Zustand</a></td>
         <td><img src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560" width=100></td>
      </tr>
   </tbody>
</table>
</div>

## Pantalla de inicio

La pantalla de inicio muestra las tarjetas de los productos disponibles en el catálogo en dos columnas. Cada tarjeta muestra la imagen del producto y su nombre.

<div style="display: flex; justify-content: space-between;"> 
   <img src="screenshots/home_screen01.png" height="400">
   <img src="screenshots/home_screen02.png" height="400">
   <img src="screenshots/home_screen03.png" height="400">
</div>

## Detalles de Producto

Esta pantalla muestra los detalles de un producto en específico. Todo está distribuido en una sola columna y sigue los estilos definidos por el tema de UI Kitten. 

<div style="display: flex; justify-content: space-between;"> 
   <img src="screenshots/details01.png" height="400">
   <img src="screenshots/details02.png" height="400">
   <img src="screenshots/details03.png" height="400">
</div>

## Edición de Producto

Toda la información de un producto puede ser editada cuando entras a ver sus detalles, solamente debes presionar el botón de guardar para que los cambios se guarden en el backend y la información sea actualizada.

<div style="display: flex; justify-content: space-between;"> 
   <img src="screenshots/edicion01.png" height="400">
   <img src="screenshots/edicion02.png" height="400">
   <img src="screenshots/edicion03.png" height="400">
</div>

## Agregar Imágenes a un Producto

La aplicación permite agregar imágenes a un producto desde la galería del dispositivo. Al presionar el ícono de foto en la parte superior derecha de la pantalla de detalles, se abre la galería del dispositivo y se pueden seleccionar hasta 10 imágenes. 

<div style="display: flex; justify-content: center; gap: 100px;"> 
   <img src="screenshots/images01.png" height="400">
   <img src="screenshots/images02.png" height="400">
</div>

## Creación de Producto

Al presionar el FAB (Floating Action Button) en la pantalla de inicio, se abre una pantalla que permite crear un nuevo producto. Todos los campos son requeridos y se pueden agregar hasta 10 imágenes desde la galería del dispositivo. Al final el producto se guarda en el backend y se muestra en la pantalla de inicio.

<div style="display: flex; justify-content: space-between;"> 
   <img src="screenshots/create01.png" height="400">
   <img src="screenshots/create02.png" height="400">
   <img src="screenshots/create03.png" height="400">
</div>