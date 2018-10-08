(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"]
    }
];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.page.html":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Ficha de Inscrição</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"header-image\"></div>\n  <div class=\"main-content\" text-wrap text-center>\n    <div class=\"circular\"></div>\n    <h2>{{pessoa.nome_completo}}</h2>\n    <p>{{pessoa.cidade}} &bull; {{pessoa.cep}}</p>\n    <p class=\"profile-description\">Segurança Cibernética</p>\n    <hr>\n  </div>\n  <ion-button shape=\"round\" fill=\"solid\" (click)=\"doEdit()\">Editar</ion-button>\n  <ion-button shape=\"round\" fill=\"solid\" (click)=\"doExit()\">Sair</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .header-image {\n  background-image: url('background.jpg');\n  height: 30vh;\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n  z-index: -1; }\n\nion-content .main-content {\n  margin-top: -20px;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding: 20px;\n  background-color: white;\n  box-shadow: 0px 0px 55px -16px rgba(0, 0, 0, 0.75);\n  position: relative !important; }\n\nion-content .circular {\n  width: 100px;\n  height: 100px;\n  position: inherit;\n  border-radius: 50%;\n  -webkit-border-radius: 150px;\n  -moz-border-radius: 150px;\n  border: solid white;\n  background: url(data:image/png;base64,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) no-repeat;\n  background-size: 100%;\n  margin-top: -70px;\n  margin-left: auto;\n  margin-right: auto; }\n\nion-content .profile-description {\n  font-size: 15px;\n  color: #888; }\n\nion-content .edit-button {\n  width: 100%;\n  border-radius: 30px !important;\n  padding-left: 10px !important;\n  margin-bottom: 10px;\n  font-size: 0.9em;\n  color: #fff;\n  background-color: transparent;\n  border: 1px solid #fff; }\n"

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/person.service */ "./src/app/services/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = /** @class */ (function () {
    function PerfilPage(personServ, navCtrl) {
        this.personServ = personServ;
        this.navCtrl = navCtrl;
    }
    PerfilPage.prototype.doEdit = function () {
        this.navCtrl.navigateForward('/NovoCadastro');
    };
    PerfilPage.prototype.doExit = function () {
        this.personServ.resetLocalPerson();
        this.navCtrl.navigateForward('/home');
    };
    PerfilPage.prototype.ngOnInit = function () {
        this.personServ.load();
        this.pessoa = this.personServ.getLocalPerson();
        console.log("Perfil lido:");
        if (this.personServ.loaded) {
            console.log(this.pessoa);
        }
        else {
            console.log("Vazio");
        }
    };
    PerfilPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.page.html */ "./src/app/perfil/perfil.page.html"),
            styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], PerfilPage);
    return PerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map