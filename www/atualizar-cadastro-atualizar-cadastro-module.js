(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["atualizar-cadastro-atualizar-cadastro-module"],{

/***/ "./src/app/atualizar-cadastro/atualizar-cadastro.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/atualizar-cadastro/atualizar-cadastro.module.ts ***!
  \*****************************************************************/
/*! exports provided: AtualizarCadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtualizarCadastroPageModule", function() { return AtualizarCadastroPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _atualizar_cadastro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atualizar-cadastro.page */ "./src/app/atualizar-cadastro/atualizar-cadastro.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _atualizar_cadastro_page__WEBPACK_IMPORTED_MODULE_5__["AtualizarCadastroPage"]
    }
];
var AtualizarCadastroPageModule = /** @class */ (function () {
    function AtualizarCadastroPageModule() {
    }
    AtualizarCadastroPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_atualizar_cadastro_page__WEBPACK_IMPORTED_MODULE_5__["AtualizarCadastroPage"]]
        })
    ], AtualizarCadastroPageModule);
    return AtualizarCadastroPageModule;
}());



/***/ }),

/***/ "./src/app/atualizar-cadastro/atualizar-cadastro.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/atualizar-cadastro/atualizar-cadastro.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>AtualizarCadastro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/atualizar-cadastro/atualizar-cadastro.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/atualizar-cadastro/atualizar-cadastro.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/atualizar-cadastro/atualizar-cadastro.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/atualizar-cadastro/atualizar-cadastro.page.ts ***!
  \***************************************************************/
/*! exports provided: AtualizarCadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtualizarCadastroPage", function() { return AtualizarCadastroPage; });
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

var AtualizarCadastroPage = /** @class */ (function () {
    function AtualizarCadastroPage() {
    }
    AtualizarCadastroPage.prototype.ngOnInit = function () {
    };
    AtualizarCadastroPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-atualizar-cadastro',
            template: __webpack_require__(/*! ./atualizar-cadastro.page.html */ "./src/app/atualizar-cadastro/atualizar-cadastro.page.html"),
            styles: [__webpack_require__(/*! ./atualizar-cadastro.page.scss */ "./src/app/atualizar-cadastro/atualizar-cadastro.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AtualizarCadastroPage);
    return AtualizarCadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=atualizar-cadastro-atualizar-cadastro-module.js.map