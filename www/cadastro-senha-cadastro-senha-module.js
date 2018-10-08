(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-senha-cadastro-senha-module"],{

/***/ "./src/app/cadastro-senha/cadastro-senha.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/cadastro-senha/cadastro-senha.module.ts ***!
  \*********************************************************/
/*! exports provided: CadastroSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroSenhaPageModule", function() { return CadastroSenhaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _cadastro_senha_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-senha.page */ "./src/app/cadastro-senha/cadastro-senha.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _cadastro_senha_page__WEBPACK_IMPORTED_MODULE_5__["CadastroSenhaPage"]
    }
];
var CadastroSenhaPageModule = /** @class */ (function () {
    function CadastroSenhaPageModule() {
    }
    CadastroSenhaPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastro_senha_page__WEBPACK_IMPORTED_MODULE_5__["CadastroSenhaPage"]]
        })
    ], CadastroSenhaPageModule);
    return CadastroSenhaPageModule;
}());



/***/ }),

/***/ "./src/app/cadastro-senha/cadastro-senha.page.html":
/*!*********************************************************!*\
  !*** ./src/app/cadastro-senha/cadastro-senha.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>CadastroSenha</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cadastro-senha/cadastro-senha.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/cadastro-senha/cadastro-senha.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cadastro-senha/cadastro-senha.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/cadastro-senha/cadastro-senha.page.ts ***!
  \*******************************************************/
/*! exports provided: CadastroSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroSenhaPage", function() { return CadastroSenhaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CadastroSenhaPage = /** @class */ (function () {
    function CadastroSenhaPage() {
    }
    CadastroSenhaPage.prototype.ngOnInit = function () {
    };
    CadastroSenhaPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-senha',
            template: __webpack_require__(/*! ./cadastro-senha.page.html */ "./src/app/cadastro-senha/cadastro-senha.page.html"),
            styles: [__webpack_require__(/*! ./cadastro-senha.page.scss */ "./src/app/cadastro-senha/cadastro-senha.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], CadastroSenhaPage);
    return CadastroSenhaPage;
}());



/***/ })

}]);
//# sourceMappingURL=cadastro-senha-cadastro-senha-module.js.map