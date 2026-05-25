#  Consumo de API REST con JSONPlaceholder

Una aplicación web interactiva diseñada para demostrar el consumo asíncrono de una API REST pública ([JSONPlaceholder](https://jsonplaceholder.typicode.com/)) utilizando **JavaScript Vanilla** y la **Fetch API**.

##  Características Principales

* **Carga Dinámica de Usuarios:** Recupera la lista de usuarios desde la API y los inyecta en un menú desplegable (`<select>`) de forma asíncrona.
* **Visualización de Publicaciones (Posts):** Al seleccionar un usuario específico, se realizan peticiones para obtener y renderizar sus publicaciones en formato de tarjetas adaptables.
* **Gestión de Comentarios:**
    * Cada publicación cuenta con un botón para consultar y mostrar sus comentarios respectivos bajo demanda.
    * Funcionalidad interactiva para ocultar los comentarios previamente cargados, manteniendo limpia la interfaz.
* **Simulación de Creación de Datos (POST):** Incluye un formulario anidado en cada publicación para simular el envío de un nuevo comentario hacia la API, registrando el payload y la respuesta del servidor directamente en la consola del navegador.

##  Tecnologías y Herramientas

* **Estructura:** HTML5
* **Estilos y UI:** [Bootstrap 5](https://getbootstrap.com/) (implementado vía CDN para componentes rápidos como tarjetas y botones)
* **Lógica de Negocio:** JavaScript ES6 (Módulos, Promesas, Arrow Functions)
* **Peticiones HTTP:** Fetch API nativa

##  Arquitectura de Archivos

```text
api_prueba_jsonplaceholder/
├── app.js       # Lógica principal, consumo de endpoints y manipulación del DOM
└── index.html   # Estructura principal e importación de scripts/estilos de Bootstrap

```

##  Instalación y Uso Local

Dado que el archivo JavaScript principal se importa como un módulo (`<script type="module" src="./app.js"></script>`), es necesario ejecutar el proyecto a través de un servidor local para evitar restricciones de seguridad del navegador (CORS).

1. Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/JuanEnC/api_prueba_jsonplaceholder.git

```


2. Navega al directorio del proyecto:
```bash
cd api_prueba_jsonplaceholder

```


3. Levanta un servidor local en la raíz del proyecto. Puedes utilizar la extensión **Live Server** de Visual Studio Code o un comando rápido de Node.js:
```bash
npx serve .

```


4. Abre la dirección generada por tu servidor local (usualmente `http://localhost:3000` o similar) en tu navegador de preferencia.

##  Autor

* **JuanEnC** - *Estudiante de Ingeniería de Software | Universidad de Colima* - [Perfil de GitHub](https://www.google.com/search?q=https://github.com/JuanEnC)
