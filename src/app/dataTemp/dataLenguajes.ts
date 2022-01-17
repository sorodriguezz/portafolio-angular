export const lenguajes = [
  {
    id: 1,
    nombre: 'Angular',
    imagen: './assets/img/angular.png',
    proyectos: [
      {
        id: 1,
        nombre: 'API JIKAN',
        imagen: './assets/project/proyecto_jikan.png',
        url_repo: 'https://github.com/soRodriguezz/anime-jikan-angular',
        descripcion: 'Proyecto realizado con Angular consumiendo API JIKAN',
        modal: {
          imagen: './assets/project/proyecto_jikan.png',
          demo: 'https://sorodriguezz.github.io/anime-jikan-angular/',
          descripcion: 'Proyecto realizado en Angular que consume la API de jikan.moe para obtener series de anime, obtener la información de un anime en específico y listar los capitulos en un modal.',
        }
      },
      {
        id: 2,
        nombre: 'API RickAndMorty',
        imagen: './assets/project/proyecto_rickandmorty.png',
        url_repo: 'https://github.com/soRodriguezz/api-rickandmorty-angular',
        descripcion: 'App que usa la API de RickAndMorty para obtener información de los personajes',
        modal: {
          imagen: './assets/project/proyecto_rickandmorty.png',
          demo: 'https://sorodriguezz.github.io/api-rickandmorty-angular/#',
          descripcion: 'Aplicacion para obtener información de los personajes de RickAndMorty, usando la API de RickAndMorty. Usa paginación de bootstrap.',
        }
      },
      {
        id: 3,
        nombre: 'Angular con Effects y Redux',
        imagen: './assets/project/effects-angular-redux.png',
        url_repo: 'https://github.com/soRodriguezz/http-effects-angular-redux',
        descripcion: 'Aplicación de Angular ocupando effects y redux',
        modal: {
          imagen: './assets/project/effects-angular-redux.png',
          demo: 'https://sorodriguezz.github.io/http-effects-angular-redux/',
          descripcion: 'Aplicación realizada en Angular con effects y redux para obtener información de la API reqres.in.',
        }
      },
      {
        id: 4,
        nombre: 'Session storage, onDestroy y Routes',
        imagen: './assets/project/session-storage.png',
        url_repo: 'https://github.com/soRodriguezz/ondestroy-cambio-pagina-angular',
        descripcion: 'Aplicación de Angular ocupando Session storage, onDestroy y Routes',
        modal: {
          imagen: './assets/project/session-storage.png',
          demo: 'https://sorodriguezz.github.io/ondestroy-cambio-pagina-angular/',
          descripcion: 'Aplicación que simula el cambio de pantalla levantando un modal de alerta. Al presionar SI, realiza el cambio de página, el cual es el cierre del componente y activa el ngOnDestroy. Al presionar CANCELAR, se cierra el modal, vuelve a la página desde donde salio y completa los campos con los datos que tenia cargados antes de salir. Esos datos los almacena en session storage por un momento.',
        }
      },
      {
        id: 5,
        nombre: 'Subida de archivos Base64 en Angular',
        imagen: './assets/project/archivo-base64.png',
        url_repo: 'https://github.com/soRodriguezz/base64-angular',
        descripcion: 'Aplicación para manejo de subida de archivos en base64',
        modal: {
          imagen: './assets/project/archivo-base64.png',
          demo: 'https://sorodriguezz.github.io/base64-angular/',
          descripcion: 'Aplicación en Angular que simula la subida de archivos. El dato lo almacena en base64, muestra el nombre del archivo y habilitar el botón para borrar el archivo subido. Para este ejemplo muestra el base64 en consola, el cual se puede copiar y pegar en el navegador para descargar el archivo.',
        }
      },
      {
        id: 6,
        nombre: 'Sort tablas de Bootstrap',
        imagen: './assets/project/sort-table-angular.png',
        url_repo: 'https://github.com/soRodriguezz/table-pagination-sort-angular',
        descripcion: 'Aplicación para ordenamiento de columnas de tablas de Bootstrap',
        modal: {
          imagen: './assets/project/sort-table-angular.png',
          demo: 'https://sorodriguezz.github.io/table-pagination-sort-angular/',
          descripcion: 'Aplicación en Angular que muestra una tabla con paginación y ordenamiento de columnas. El ordenamiento se realiza con el botón de ordenamiento de la columna a traves de una directiva persinalizada de Angular.',
        }
      },
      {
        id: 7,
        nombre: 'Límite de caracteres en textarea',
        imagen: './assets/project/text-area-angular.png',
        url_repo: 'https://github.com/soRodriguezz/textarea-form-angular',
        descripcion: 'Text area con límite de caracteres en Angular',
        modal: {
          imagen: './assets/project/text-area-angular.png',
          demo: 'https://sorodriguezz.github.io/textarea-form-angular/',
          descripcion: 'Aplicación en Angular que muestra un text area con un límite de caracteres. El límite se puede configurar en el componente. A su vez muestra en tiempo real los caracteres escritos.',
        }
      },
      {
        id: 8,
        nombre: 'DataTable en Angular',
        imagen: './assets/project/data-table-angular.png',
        url_repo: 'https://github.com/soRodriguezz/data-table-angular',
        descripcion: 'Librería DataTable en Angular usando restapiexample',
        modal: {
          imagen: './assets/project/data-table-angular.png',
          demo: 'https://sorodriguezz.github.io/data-table-angular/',
          descripcion: 'Aplicación de Angular que usa la librería DataTable para mostrar una tabla con paginación y ordenamiento. La tabla se obtiene de la API de restapiexample. De igual manera muestra los registros por página, la cantidad total de registros y la configuración de registros a mostrar por combobox que en el ejemplo se visualiza de 5 en 5. Y contiene una barra de busqueda, el cual busca en todas las columnas y registros en la tabla',
        }
      },
      {
        id: 9,
        nombre: 'Todo Redux Angular',
        imagen: './assets/project/todo-redux-angular.png',
        url_repo: 'https://github.com/soRodriguezz/todo-app-redux-angular',
        descripcion: 'Uso de Redux en aplicación TODO en Angular',
        modal: {
          imagen: './assets/project/todo-redux-angular.png',
          demo: 'https://sorodriguezz.github.io/todo-app-redux-angular/',
          descripcion: 'Aplicación de tareas construida en Angular usando Redux. Realiza limpiado de tareas, filtro de pendiente y completados.',
        }
      },
      {
        id: 10,
        nombre: 'API Pokémon',
        imagen: './assets/project/apipokemon-angular.png',
        url_repo: 'https://github.com/soRodriguezz/pokemon-angular',
        descripcion: 'Pruebas realizadas a API de Pokémon, realizado en Angular',
        modal: {
          imagen: './assets/project/apipokemon-angular.png',
          demo: 'https://sorodriguezz.github.io/pokemon-angular/',
          descripcion: 'Aplicación de Angular que muestra el pokémon según el criterio en la barra de busqueda. De momento solo muestra tipo y nombre del pokémon',
        }
      },
      {
        id: 11,
        nombre: 'Login usuarios',
        imagen: './assets/project/login-users-angular.png',
        url_repo: 'https://github.com/soRodriguezz/auth-app-angular',
        descripcion: 'Aplicación de Angular para login de usuarios',
        modal: {
          imagen: './assets/project/login-users-angular.png',
          demo: 'https://app-angular-nodejs-auth.herokuapp.com/auth/login',
          descripcion: 'Proyecto que usa Angular, MongoDB y NodeJS para el login de usuarios. La aplicación permite el registro de usuarios, el login y el logout. Los registros quedan guardados en una colección de MongoDB, y el login se realiza con un token enviado por la API. El token se guarda en el localStorage del navegador y se usa para el logout.',
        }
      },
    ]
  },
  {
    id: 2,
    nombre: 'JavaScript',
    imagen: './assets/img/javascript.png',
    proyectos: []
  },
  {
    id: 3,
    nombre: 'Ionic',
    imagen: './assets/img/ionic.png',
    proyectos: []
  },
  {
    id: 4,
    nombre: 'React',
    imagen: './assets/img/react.png',
    proyectos: []
  },
  {
    id: 5,
    nombre: 'Vue',
    imagen: './assets/img/vue.png',
    proyectos: []
  },
  {
    id: 6,
    nombre: 'Python',
    imagen: './assets/img/python.png',
    proyectos: []
  },
  {
    id: 7,
    nombre: 'Node JS',
    imagen: './assets/img/node-js.png',
    proyectos: [
      {
        id: 1,
        nombre: 'API Rest Usuarios',
        imagen: '',
        url_repo: 'https://github.com/soRodriguezz/auth-server-express-nodejs',
        descripcion: 'API para login de usuiarios en Node JS',
        modal: {
          imagen: './assets/project/api-usuario-nodej.png',
          demo: 'https://app-angular-nodejs-auth.herokuapp.com/auth/login',
          descripcion: 'Proyecto que expone una API por el puerto 4000. Contiene configuración de CORS, autenticación con JWT, Hash de contraseñas, Conexión con MongoDB Cloud, configuración de dotenv y generación de JWT renovados. En el directorio public contiene el codigo Angular productivo',
        }
      },
    ]
  },
  {
    id: 8,
    nombre: 'Redux',
    imagen: './assets/img/redux.png',
    proyectos: [
      {
        id: 1,
        nombre: 'Angular con Effects y Redux',
        imagen: './assets/project/effects-angular-redux.png',
        url_repo: 'https://github.com/soRodriguezz/http-effects-angular-redux',
        descripcion: 'Aplicación de Angular ocupando effects y redux',
        modal: {
          imagen: './assets/project/effects-angular-redux.png',
          demo: 'https://sorodriguezz.github.io/http-effects-angular-redux/',
          descripcion: 'Aplicación realizada en Angular con effects y redux para obtener información de la API reqres.in.',
        }
      },
      {
        id: 2,
        nombre: 'Todo Redux Angular',
        imagen: './assets/project/todo-redux-angular.png',
        url_repo: 'https://github.com/soRodriguezz/todo-app-redux-angular',
        descripcion: 'Uso de Redux en aplicación TODO en Angular',
        modal: {
          imagen: './assets/project/todo-redux-angular.png',
          demo: 'https://sorodriguezz.github.io/todo-app-redux-angular/',
          descripcion: 'Aplicación de tareas construida en Angular usando Redux. Realiza limpiado de tareas, filtro de pendiente y completados.',
        }
      },
    ]
  },
  {
    id: 9,
    nombre: 'Spring Boot',
    imagen: './assets/img/spring.png',
    proyectos: []
  },
];