(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fazer-login-fazer-login-module"],{

/***/ "./src/app/fazer-login/fazer-login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/fazer-login/fazer-login.module.ts ***!
  \***************************************************/
/*! exports provided: FazerLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FazerLoginPageModule", function() { return FazerLoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _fazer_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fazer-login.page */ "./src/app/fazer-login/fazer-login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _fazer_login_page__WEBPACK_IMPORTED_MODULE_5__["FazerLoginPage"]
    }
];
var FazerLoginPageModule = /** @class */ (function () {
    function FazerLoginPageModule() {
    }
    FazerLoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_fazer_login_page__WEBPACK_IMPORTED_MODULE_5__["FazerLoginPage"]]
        })
    ], FazerLoginPageModule);
    return FazerLoginPageModule;
}());



/***/ }),

/***/ "./src/app/fazer-login/fazer-login.page.html":
/*!***************************************************!*\
  !*** ./src/app/fazer-login/fazer-login.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pré-Inscrição</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-row class=\"login-form\">\n      <ion-col>\n            <!-- ion-list inset class=\"no-border\"-->\n\t    <div>\n \n              <ion-item>\n                <ion-label><ion-icon name=\"person\"></ion-icon></ion-label>\n                <ion-input [(ngModel)]=\"username\" placeholder=\"nome\" type=\"text\"></ion-input>\n              </ion-item>\n \n              <ion-item>\n                <ion-label><ion-icon name=\"lock\"></ion-icon></ion-label>\n                <ion-input [(ngModel)]=\"password\" placeholder=\"senha\" type=\"password\"></ion-input>\n              </ion-item>\n \n            <!--/ion-list-->\n\t    </div>\n\n\t    <!-- button ion-button class=\"login-button\" (click)=\"login()\">Entrar</button-->\n\t    <ion-button (click)=\"login()\" shape=\"round\" fill=\"solid\" secondary class=\"login-button\">Entrar\n\t    </ion-button>\n        </ion-col>\n    </ion-row>\n \n    <!-- ion-row>\n      <ion-col>\n\t<div (click)=\"launchSignup()\" class=\"create-account\">\n          <span>Ou crie sua conta aqui.</span>\n        </div>\n      </ion-col>\n    </ion-row-->\n\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/fazer-login/fazer-login.page.scss":
/*!***************************************************!*\
  !*** ./src/app/fazer-login/fazer-login.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: var(--ion-color-light); }\n  ion-content scroll-content {\n    display: flex;\n    flex-direction: column; }\n  ion-content ion-row {\n    align-items: center;\n    text-align: center; }\n  ion-content ion-item {\n    border-radius: 30px !important;\n    padding-left: 10px !important;\n    margin-bottom: 10px;\n    background-color: #fff;\n    opacity: 0.7;\n    font-size: 0.9em; }\n  ion-content ion-list {\n    margin: 0; }\n  ion-content .login-logo {\n    flex: 2; }\n  ion-content .login-form {\n    flex: 1; }\n  ion-content .create-account {\n    color: #fff;\n    text-decoration: underline;\n    background: none;\n    font-size: 0.9em; }\n  ion-content .login-button {\n    width: 100%;\n    border-radius: 30px !important;\n    padding-left: 10px !important;\n    margin-bottom: 10px;\n    font-size: 0.9em;\n    color: #fff;\n    background-color: transparent;\n    border: 1px solid #fff; }\n"

/***/ }),

/***/ "./src/app/fazer-login/fazer-login.page.ts":
/*!*************************************************!*\
  !*** ./src/app/fazer-login/fazer-login.page.ts ***!
  \*************************************************/
/*! exports provided: FazerLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FazerLoginPage", function() { return FazerLoginPage; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var FazerLoginPage = /** @class */ (function () {
    function FazerLoginPage(personService, alertCtrl, navCtrl) {
        this.personService = personService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.backgroundImage = 'assets/img/background/background-5.jpg';
    }
    FazerLoginPage.prototype.ngOnInit = function () {
    };
    FazerLoginPage.prototype.alertUserAuthFailure = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Acesso',
                            subHeader: 'Informação',
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FazerLoginPage.prototype.login = function () {
        var _this = this;
        var credentials = {
            email: this.username,
            senha: this.password
        };
        console.log("Iniciando autenticação...");
        this.personService.doAuthenticateLogin(credentials)
            .subscribe(function (person) {
            console.log("Auth Ok: " + person.email);
            _this.personService.persistPersonLocally(person);
            _this.navCtrl.navigateRoot('/Perfil');
        }, function (err) {
            console.log(err);
            if (err.status == 401) {
                _this.alertUserAuthFailure("Email ou senha inválidos");
            }
            else {
                _this.alertUserAuthFailure("Usuário inexistente");
            }
        });
    };
    FazerLoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fazer-login',
            template: __webpack_require__(/*! ./fazer-login.page.html */ "./src/app/fazer-login/fazer-login.page.html"),
            styles: [__webpack_require__(/*! ./fazer-login.page.scss */ "./src/app/fazer-login/fazer-login.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], FazerLoginPage);
    return FazerLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=fazer-login-fazer-login-module.js.map