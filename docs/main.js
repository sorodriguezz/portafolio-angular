(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! R:\proyectos\proyecto-personales\portafolio\src\main.ts */"zUnb");


/***/ }),

/***/ "0AVB":
/*!***********************************************!*\
  !*** ./src/app/services/lenguajes.service.ts ***!
  \***********************************************/
/*! exports provided: LenguajesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LenguajesService", function() { return LenguajesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _dataTemp_dataLenguajes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataTemp/dataLenguajes */ "2lFz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class LenguajesService {
    constructor() {
    }
    getLenguajes() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_dataTemp_dataLenguajes__WEBPACK_IMPORTED_MODULE_1__["lenguajes"]);
    }
}
LenguajesService.ɵfac = function LenguajesService_Factory(t) { return new (t || LenguajesService)(); };
LenguajesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LenguajesService, factory: LenguajesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2lFz":
/*!*******************************************!*\
  !*** ./src/app/dataTemp/dataLenguajes.ts ***!
  \*******************************************/
/*! exports provided: lenguajes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lenguajes", function() { return lenguajes; });
const lenguajes = [
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


/***/ }),

/***/ "4pmh":
/*!**********************************************************!*\
  !*** ./src/app/pages/curriculum/curriculum.component.ts ***!
  \**********************************************************/
/*! exports provided: CurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumComponent", function() { return CurriculumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class CurriculumComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
CurriculumComponent.ɵfac = function CurriculumComponent_Factory(t) { return new (t || CurriculumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CurriculumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurriculumComponent, selectors: [["app-curriculum"]], decls: 2, vars: 0, template: function CurriculumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "curriculum works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyaWN1bHVtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "LdfT":
/*!**************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.ts ***!
  \**************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var src_app_modal_project_modal_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modal-project/modal-project.component */ "lnOf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_lenguajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/lenguajes.service */ "0AVB");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function InicioComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InicioComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const lenguaje_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.listarProyecto(lenguaje_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lenguaje_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", lenguaje_r4.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function InicioComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No existen proyectos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InicioComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InicioComponent_div_16_div_1_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const proyecto_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.abrirModal(proyecto_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proyecto_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("src", proyecto_r8.imagen.length > 0 ? proyecto_r8.imagen : "./assets/img/portafolio.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proyecto_r8.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proyecto_r8.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", proyecto_r8.url_repo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function InicioComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InicioComponent_div_16_div_1_Template, 14, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.proyectos);
} }
function InicioComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r3.cantidadProyectos, " ", ctx_r3.cantidadProyectos == 1 ? "proyecto" : "proyectos", "");
} }
class InicioComponent {
    constructor(router, lenguajesService, dialog) {
        this.router = router;
        this.lenguajesService = lenguajesService;
        this.dialog = dialog;
        this.lenguajes = [];
        this.proyectos = [];
        this.iconoCaja = '';
        this.nombreLenguaje = 'javascript';
        this.cantidadProyectos = 0;
    }
    ngOnInit() {
        this.cargaLenguajes();
        this.listarProyecto(1);
    }
    cargaLenguajes() {
        this.lenguajesService.getLenguajes().subscribe(resp => {
            this.lenguajes = resp;
        });
    }
    listarProyecto(id) {
        this.lenguajesService.getLenguajes().subscribe(resp => {
            let lenguajeSeleccionado = resp.filter(proyecto => proyecto.id == id);
            this.cantidadProyectos = lenguajeSeleccionado[0].proyectos.length;
            this.iconoCaja = lenguajeSeleccionado[0].imagen;
            this.nombreLenguaje = lenguajeSeleccionado[0].nombre;
            this.proyectos = lenguajeSeleccionado[0].proyectos;
        });
    }
    abrirModal(proyecto) {
        const dialogRef = this.dialog.open(src_app_modal_project_modal_project_component__WEBPACK_IMPORTED_MODULE_0__["ModalProjectComponent"]);
        this.lenguajesService.proyectoSeleccionado = proyecto;
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_lenguajes_service__WEBPACK_IMPORTED_MODULE_3__["LenguajesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 18, vars: 8, consts: [[1, "row"], [1, "col-3", "scroll", 2, "height", "80vh", "overflow", "auto"], ["class", "m-2 d-grid gap-2", 4, "ngFor", "ngForOf"], [1, "col-8", "list-projects", 2, "height", "81vh"], [1, "container"], [1, "text-center", "mt-4"], ["width", "48px", "height", "48px", 3, "src"], [1, "text-center"], [1, "row", "mt-3"], ["class", "alert alert-dark text-center mt-2", "role", "alert", 4, "ngIf"], ["class", "p-3 mb-2 scroll", "style", "height: 65vh;overflow: auto;", 4, "ngIf"], ["class", "text-end", 4, "ngIf"], [1, "m-2", "d-grid", "gap-2"], ["type", "button", 1, "btn-language", "p-3", 3, "click"], ["width", "48px", 3, "src"], ["role", "alert", 1, "alert", "alert-dark", "text-center", "mt-2"], [1, "p-3", "mb-2", "scroll", 2, "height", "65vh", "overflow", "auto"], ["style", "border-radius: 15px", "class", "card border border-dark mt-2 mb-2", 4, "ngFor", "ngForOf"], [1, "card", "border", "border-dark", "mt-2", "mb-2", 2, "border-radius", "15px"], [1, "card-body"], [1, "col-md-3", 2, "display", "flex", "align-items", "center"], ["mat-button", "", 1, "btn", 3, "click"], ["width", "120px", "height", "60px", 2, "border", "1px solid", "color", "black"], [1, "col-md-8"], [1, "card-title"], [1, "card-text"], [1, "col-md-1", 2, "display", "flex", "align-items", "center", "justify-content", "flex-end"], ["target", "_blank", 1, "btn", 3, "href"], ["src", "./assets/img/github.png"], [1, "text-end"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InicioComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, InicioComponent_div_15_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, InicioComponent_div_16_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, InicioComponent_div_17_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lenguajes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.iconoCaja, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, ctx.nombreLenguaje));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proyectos.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proyectos.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proyectos.length !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: [".btn-language[_ngcontent-%COMP%] {\r\n  \r\n\r\n  \r\n  \r\n  border: 0rem;\r\n  filter: none;\r\n  background: #ffffff;\r\n  border-radius: 15px;\r\n}\r\n\r\n.btn-language[_ngcontent-%COMP%]:hover {\r\n  \r\n  \r\n  filter: drop-shadow(0 0 0.2rem #fff);\r\n}\r\n\r\n.list-projects[_ngcontent-%COMP%] {\r\n  \r\n\r\n  background: #FFFFFF;\r\n  border-radius: 15px;\r\n}\r\n\r\n.scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7aUJBQ2U7O0VBRWY7O0lBRUU7RUFDRixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEJBQTRCOztFQUU1QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRTtrQkFDZ0I7O0VBRWhCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7OztHQUdHOztBQUVIOzs7Ozs7R0FNRzs7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkciLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxhbmd1YWdlIHtcclxuICAvKiB3aWR0aDogNzZweDtcclxuICBoZWlnaHQ6IDc2cHg7ICovXHJcblxyXG4gIC8qIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAqL1xyXG4gIC8qIG1peC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5OyAqL1xyXG4gIGJvcmRlcjogMHJlbTtcclxuICBmaWx0ZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLWxhbmd1YWdlOmhvdmVyIHtcclxuICAvKiBtaXgtYmxlbmQtbW9kZTogbm9ybWFsOyAqL1xyXG4gIFxyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMnJlbSAjZmZmKTtcclxufVxyXG5cclxuLmxpc3QtcHJvamVjdHMge1xyXG4gIC8qIHdpZHRoOiAzMDB2dztcclxuICBoZWlnaHQ6IDcwMHB4OyAqL1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiAgXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuIFxyXG59ICovXHJcblxyXG4vKlxyXG5AbWVkaWEgKG1heC13aWR0aDogNDMzcHgpIHtcclxuICAuYnRuLWxhbmd1YWdlIHtcclxuICAgIHdpZHRoOiA4NnB4O1xyXG4gICAgaGVpZ2h0OiA4NnB4O1xyXG4gIH1cclxufSAqL1xyXG4vKlxyXG5AbWVkaWEgKG1heC13aWR0aDogNTMzcHgpIHtcclxuICAuYnRuLWxhbmd1YWdlIHtcclxuICAgIHdpZHRoOiA4MnB4O1xyXG4gICAgaGVpZ2h0OiA4MnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUxM3B4KSB7XHJcbiAgLmJ0bi1sYW5ndWFnZSB7XHJcbiAgICB3aWR0aDogODFweDtcclxuICAgIGhlaWdodDogODFweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xyXG4gIC5idG4tbGFuZ3VhZ2Uge1xyXG4gICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDVweDtcclxuICB9XHJcbn0gKi9cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class AppComponent {
    constructor() {
        this.title = 'portafolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col", "col-md", "col-sm", "col-lg", "col-xl", "m-3"], [1, "nav", "nav-pills", "justify-content-end"], [1, "nav-item", "m-1"], ["routerLink", "./inicio", 1, "nav-link", "button-nav"], [1, "container", "mt-5"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".button-nav[_ngcontent-%COMP%] {\r\n    background-color: rgb(43, 43, 43) !important;\r\n    color: rgb(255, 255, 255) !important;\r\n    border: 1px solid #ffffff !important;\r\n    border-radius: .5rem !important;\r\n    width: 106px !important;\r\n    height: 34px !important;\r\n    display: flex !important;\r\n    align-items: center !important;\r\n    justify-content: center !important;\r\n}\r\n\r\n.button-nav-login[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 255, 255) !important;\r\n    color: rgb(0, 0, 0) !important;\r\n    border: 1px solid #6f6f6f !important;\r\n    border-radius: .5rem !important;\r\n    width: 106px !important;\r\n    height: 34px !important;\r\n    display: flex !important;\r\n    align-items: center !important;\r\n    justify-content: center !important;\r\n}\r\n\r\n.button-nav-login[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(220, 218, 218) !important;\r\n    color: rgb(0, 0, 0) !important;\r\n    width: 106px !important;\r\n    height: 34px !important;\r\n}\r\n\r\n.button-nav[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(255, 255, 255) !important;\r\n    color: rgb(0, 0, 0) !important;\r\n}\r\n\r\n.button-nav-light[_ngcontent-%COMP%] {\r\n    background-color: white !important;\r\n    color: black !important;\r\n    border: 1px solid #ffffff !important;\r\n    border-radius: .5rem !important;\r\n    width: 106px !important;\r\n    height: 34px !important;\r\n    display: flex !important;\r\n    align-items: center !important;\r\n    justify-content: center !important;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n    .justify-content-end[_ngcontent-%COMP%] {\r\n        justify-content: center !important;\r\n    }\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJO1FBQ0ksa0NBQWtDO0lBQ3RDOztBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tbmF2LWxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZmNmY2ZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDZweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLW5hdi1sb2dpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMTgsIDIxOCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDZweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tbmF2OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLW5hdi1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICBcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "LdfT");
/* harmony import */ var _pages_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/curriculum/curriculum.component */ "4pmh");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "qv28");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _modal_project_modal_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-project/modal-project.component */ "lnOf");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"],
        _pages_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumComponent"],
        _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__["ContactoComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _modal_project_modal_project_component__WEBPACK_IMPORTED_MODULE_10__["ModalProjectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]] }); })();


/***/ }),

/***/ "lnOf":
/*!**********************************************************!*\
  !*** ./src/app/modal-project/modal-project.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProjectComponent", function() { return ModalProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_lenguajes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/lenguajes.service */ "0AVB");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ModalProjectComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Demo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.modal.modal.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ModalProjectComponent {
    constructor(lenguajeService) {
        this.lenguajeService = lenguajeService;
        this.modal = [];
    }
    ngOnInit() {
        this.modal = this.lenguajeService.proyectoSeleccionado;
        console.log(this.lenguajeService.proyectoSeleccionado);
    }
}
ModalProjectComponent.ɵfac = function ModalProjectComponent_Factory(t) { return new (t || ModalProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lenguajes_service__WEBPACK_IMPORTED_MODULE_1__["LenguajesService"])); };
ModalProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalProjectComponent, selectors: [["app-modal-project"]], decls: 14, vars: 4, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "container"], [1, "text-center"], ["width", "900", "height", "400", 2, "border", "2px solid", "color", "black", 3, "src"], [1, "row", "mb-5"], [1, "text-break"], ["class", "row", 4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", 1, "btn", "btn-secondary"], [1, "row"], ["target", "_blank", 1, "btn", "btn-primary", 3, "href"]], template: function ModalProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalProjectComponent_div_10_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modal.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.modal.modal.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modal.modal.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal.modal.demo.length > 0);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1wcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "qv28":
/*!******************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.ts ***!
  \******************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class ContactoComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 2, vars: 0, template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contacto works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0by5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "qv28");
/* harmony import */ var _pages_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/curriculum/curriculum.component */ "4pmh");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "LdfT");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: 'inicio',
        component: _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
    },
    {
        path: 'curriculum',
        component: _pages_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_2__["CurriculumComponent"]
    },
    {
        path: 'contacto',
        component: _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_1__["ContactoComponent"]
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: '**',
        redirectTo: 'inicio'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map