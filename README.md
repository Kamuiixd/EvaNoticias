# Proyecto de Noticias

Este proyecto es una aplicación web para mostrar noticias de diferentes categorías, con funcionalidades de búsqueda, visualización de noticias, y gestión de favoritos. Está construido con **React** y utiliza **Material-UI** para los estilos y la disposición de la interfaz.

## Instalación de Dependencias

1. Clona este repositorio en tu máquina local:
git clone <URL_DEL_REPOSITORIO>




#Instala las dependencias con npm:
npm install





#Hooks Utilizados
useState: Permite añadir el estado local dentro de los componentes funcionales de React.
Uso en el proyecto: Se utiliza para manejar estados como los resultados de búsqueda, la carga de noticias, y la página actual de noticias.

useEffect: Permite realizar efectos secundarios en componentes funcionales, como peticiones de datos o suscripciones.
Uso en el proyecto: Se utiliza para realizar la carga de noticias cuando cambia la categoría o el término de búsqueda.

useParams de react-router-dom: Extrae parámetros de la URL.
Uso en el proyecto: Se utiliza para obtener el nombre de la categoría de noticias de la URL.

useSearchParams: Permite acceder a los parámetros de consulta en la URL.
Uso en el proyecto: Se utiliza para obtener y gestionar los parámetros de búsqueda en la barra de direcciones.

useFavorites: Este es un hook personalizado utilizado para gestionar el estado de los favoritos del usuario
Uso en el proyecto: Se utiliza para guardar, eliminar y comprobar si una noticia está marcada como favorita.





#Cómo Ejecutar el Proyecto
npm run dev






#Funcionalidades Implementadas
##Visualización de Noticias:

Las noticias se muestran en tarjetas dentro de una página específica para cada categoría. Las categorías incluyen tecnología, deportes, salud, política, y más.
La aplicación permite la visualización de artículos de noticias con un enlace a su fuente original.
Paginación de Noticias:

La página de noticias incluye paginación para mostrar 5 noticias por página, mejorando la experiencia del usuario al navegar entre grandes cantidades de noticias.
Búsqueda de Noticias:

Los usuarios pueden buscar noticias utilizando un término específico. Los resultados se muestran con el título y la descripción de cada noticia.
Favoritos:

Los usuarios pueden marcar noticias como favoritas. Esta funcionalidad está disponible para cada noticia mostrada, y se pueden ver o eliminar las noticias favoritas en una página separada.
Perfil de Usuario:

La aplicación permite visualizar los datos de un perfil de usuario (nombre de usuario, correo electrónico, y contraseña, aunque la contraseña está oculta por razones de seguridad).
Diseño Responsivo:

El diseño de la aplicación es completamente responsivo gracias a la utilización de Material-UI y su sistema de cuadrículas (Grid). La interfaz se ajusta de forma óptima para dispositivos móviles y de escritorio.
Estilos y Componentes de Material-UI:

Se ha utilizado Material-UI para los componentes visuales como tarjetas (Card), botones (Button), iconos (IconButton), campos de texto, y más, para asegurar un diseño moderno y profesional.
