(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["novo-cadastro-novo-cadastro-module"],{

/***/ "./node_modules/@fnando/cpf/src/cpf.js":
/*!*********************************************!*\
  !*** ./node_modules/@fnando/cpf/src/cpf.js ***!
  \*********************************************/
/*! exports provided: verifierDigit, format, strip, isValid, generate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifierDigit", function() { return verifierDigit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strip", function() { return strip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
// Blacklist common values.
const BLACKLIST = [
  "00000000000",
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999",
  "12345678909"
];

const STRICT_STRIP_REGEX = /[.-]/g;
const LOOSE_STRIP_REGEX = /[^\d]/g;

function verifierDigit(numbers) {
  numbers = numbers
    .split("")
    .map(function(number){ return parseInt(number, 10); })
  ;

  const modulus = numbers.length + 1;

  const multiplied = numbers.map(function(number, index) {
    return number * (modulus - index);
  });

  const mod = multiplied.reduce(function(buffer, number){
    return buffer + number;
  }) % 11;

  return (mod < 2 ? 0 : 11 - mod);
}

function format(number) {
  return strip(number).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}

function strip(number, strict) {
  const regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
  return (number || "").toString().replace(regex, "");
}

function isValid(number, strict) {
  const stripped = strip(number, strict);

  // CPF must be defined
  if (!stripped) { return false; }

  // CPF must have 11 chars
  if (stripped.length !== 11) { return false; }

  // CPF can't be blacklisted
  if (BLACKLIST.includes(stripped)) { return false; }

  let numbers = stripped.substr(0, 9);
  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return numbers.substr(-2) === stripped.substr(-2);
}

function generate(formatted) {
  let numbers = "";

  for (let i = 0; i < 9; i += 1) {
    numbers += Math.floor(Math.random() * 9);
  }

  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return (formatted ? format(numbers) : numbers);
}


/***/ }),

/***/ "./src/app/novo-cadastro/novo-cadastro.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/novo-cadastro/novo-cadastro.module.ts ***!
  \*******************************************************/
/*! exports provided: NovoCadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoCadastroPageModule", function() { return NovoCadastroPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _novo_cadastro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./novo-cadastro.page */ "./src/app/novo-cadastro/novo-cadastro.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _novo_cadastro_page__WEBPACK_IMPORTED_MODULE_5__["NovoCadastroPage"]
    }
];
var NovoCadastroPageModule = /** @class */ (function () {
    function NovoCadastroPageModule() {
    }
    NovoCadastroPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_novo_cadastro_page__WEBPACK_IMPORTED_MODULE_5__["NovoCadastroPage"]]
        })
    ], NovoCadastroPageModule);
    return NovoCadastroPageModule;
}());



/***/ }),

/***/ "./src/app/novo-cadastro/novo-cadastro.page.html":
/*!*******************************************************!*\
  !*** ./src/app/novo-cadastro/novo-cadastro.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Nova Ficha</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row class=\"login-form\">\n    <ion-col>\n      <div class=\"pins\">\n\t<ion-card class=\"pin\">\n\t  <div>\n            <ion-item>\n              <ion-label>\n\t\t<ion-icon  *ngIf=\"!signUpForm.controls.nome_completo.valid &&\n\t\t\t\t  signUpForm.controls.nome_completo.dirty; else normalIcon\"\n\t\t\t   name=\"warning\" color=\"danger\"></ion-icon>\n\t\t<ng-template #normalIcon> <ion-icon  name=\"person\"></ion-icon>\n\t\t</ng-template>\n\t      </ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-input maxlength=\"40\"\n\t\t\t   (keypress)=\"onKeyUp($event)\"\n\t\t\t   formControlName=\"nome_completo\" placeholder=\"nome completo\"\n\t\t\t   type=\"text\"></ion-input>\n\n\t      </form>\n            </ion-item>\n\t    <div *ngIf=\"!signUpForm.controls.nome_completo.valid &&\n\t\t\tsignUpForm.controls.nome_completo.dirty\"\n\t\t class=\"validator-error\">\n\t      <font color=\"red\" style=\"font-size: 0.9em;\">\n\t\tUse letras e espaços somente.\n\t\t</font>\n\t    </div>\t      \n            <ion-item>\n\t      <ion-label>nascimento</ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-input maxlength=\"10\" type=\"text\" placeholder=\"dd-mm-aaaa\" formControlName=\"data_nasc\">\n\t\t</ion-input>\n\t      </form>\n\t    </ion-item>\n\t    \n            <ion-item>\n\t      <ion-label><ion-icon name=\"contact\"></ion-icon></ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-input  maxlength=\"30\" formControlName=\"rg_identidade\" placeholder=\"identidade (RG)\" type=\"text\"></ion-input>\n\t      </form>\n            </ion-item>\n\t    \n            <ion-item>\n              <ion-label>cpf</ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-input maxlength=\"14\" type=\"text\" placeholder=\"ddd.ddd.ddd-dd\" formControlName=\"cpf\">\n\t\t</ion-input>\n\t      </form>\n            </ion-item>\n\n\t    <ion-item>\n\t      <ion-label>sexo</ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-select formControlName=\"sexo\" interface=\"popover\" placeholder=\"Sexo\">\n\t\t  <ion-select-option value=\"m\" selected=\"sexo === 'm'\">Masculino</ion-select-option>\n\t\t  <ion-select-option value=\"f\" selected=\"sexo === 'f'\">Feminino</ion-select-option>\n\t\t</ion-select>\n\t      </form>\n\t    </ion-item>\n\n            <ion-item>\n              <ion-label><ion-icon name=\"mail\"></ion-icon></ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-input maxlength=\"40\" formControlName=\"email\" placeholder=\"email\" type=\"text\"></ion-input>\n\t      </form>\n            </ion-item>\n\t  </div>\n\t</ion-card>\n\t\n\t<ion-card class=\"pin\">\n\t  <div>\n\t    <ion-item>\n              <ion-label><ion-icon name=\"pin\"></ion-icon></ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-input formControlName=\"cidade\" placeholder=\"cidade\" type=\"text\"></ion-input>\n\t      </form>\n            </ion-item>\n\n\t    <ion-item>\n              <ion-label><ion-icon name=\"pin\"></ion-icon></ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-input formControlName=\"cep\" placeholder=\"CEP residência\" type=\"text\"></ion-input>\n\t      </form>\n            </ion-item>\n\n\t    <ion-item>\n              <ion-label><ion-icon name=\"call\"></ion-icon></ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-input formControlName=\"telefone\" placeholder=\"telefone para contato\" type=\"text\"></ion-input>\n\t      </form>\n            </ion-item>\n\t    \n\t    <ion-item>\n\t      <ion-label>deficiência</ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-select  formControlName=\"deficiencia\" interface=\"popover\" placeholder=\"Escolha uma opção\">\n\t\t  <ion-select-option value=\"nao\" selected={true}>Não</ion-select-option>\n\t\t  <ion-select-option value=\"cad\">Cadeirante</ion-select-option>\n\t\t  <ion-select-option value=\"vis\">Visual</ion-select-option>\n\t\t  <ion-select-option value=\"aud\">Auditiva</ion-select-option>\n\t\t  <ion-select-option value=\"int\">Intelectual</ion-select-option>\n\t\t  <ion-select-option value=\"aut\">Autista</ion-select-option>\n\t\t</ion-select>\n\t      </form>\n\t    </ion-item>\n\n\t    <ion-item>\n\t      <ion-label>cotista</ion-label>\n\t      <form [formGroup]=\"signUpForm\">\n\t\t<ion-select formControlName=\"cotista\" interface=\"popover\" placeholder=\"Escolha uma opção\">\n\t\t  <ion-select-option value=\"nao\" selected={true}>Não</ion-select-option>\n\t\t  <ion-select-option value=\"pre\">Preto</ion-select-option>\n\t\t  <ion-select-option value=\"par\">Pardo</ion-select-option>\n\t\t  <ion-select-option value=\"ind\">Indígena</ion-select-option>\n\t\t</ion-select>\n\t\t</form>\n\t    </ion-item>\n\t  </div>\n\t</ion-card>\n\t<div align=\"center\">\n\t  <ion-button  shape=\"round\" fill=\"solid\" [disabled]=\"!signUpForm.touched\" (click)=\"doSave()\">Enviar</ion-button>\n\t  <ion-button  shape=\"round\" fill=\"solid\" (click)=\"doCancel()\">Retorna</ion-button>\n\t</div>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/novo-cadastro/novo-cadastro.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/novo-cadastro/novo-cadastro.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: var(--ion-color-light);\n  /*\n  scroll-content {\n        display: flex;\n        flex-direction: column;\n    }\n*/ }\n  ion-content .pins {\n    -webkit-column-count: 1;\n            column-count: 1; }\n  ion-content .pin {\n    background-color: #bee;\n    /* display: inline-block;  */ }\n  ion-content .card {\n    margin-top: 5px; }\n  ion-content ion-avatar {\n    margin: 0 !important; }\n  ion-content .item ion-avatar img {\n    width: 9vw;\n    height: 9vw; }\n  ion-content .post-description {\n    padding: 8px;\n    border-bottom: 1px solid #eee; }\n  ion-content ion-row {\n    align-items: center;\n    text-align: center; }\n  ion-content ion-item {\n    border-radius: 30px !important;\n    padding-left: 10px !important;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: 10px;\n    margin-right: 10px;\n    background-color: #f6f6f6;\n    opacity: 0.7;\n    font-size: 0.9em; }\n  ion-content ion-list {\n    margin: 3px; }\n  ion-content ion-select {\n    width: 100%;\n    max-width: 100%; }\n  ion-content ion-input {\n    width: 100%;\n    text-align: right; }\n  ion-content .login-logo {\n    flex: 2; }\n  ion-content .login-form {\n    flex: 1; }\n  ion-content .create-account {\n    color: #fff;\n    text-decoration: underline;\n    background: none;\n    font-size: 0.9em; }\n  ion-content .validation-error {\n    color: red; }\n  ion-content .login-button {\n    width: 100%;\n    border-radius: 30px !important;\n    padding-left: 10px !important;\n    margin-bottom: 10px;\n    font-size: 0.9em;\n    color: #fff;\n    background-color: transparent;\n    border: 1px solid #fff; }\n  @media (min-width: 480px) {\n    ion-content .pins {\n      -webkit-column-count: 2;\n              column-count: 2; }\n    ion-content .item ion-avatar img {\n      width: 7vw !important;\n      height: 7vw !important; } }\n  @media (min-width: 640px) {\n    ion-content .pins {\n      -webkit-column-count: 2;\n              column-count: 2; }\n    ion-content .item ion-avatar img {\n      width: 5vw !important;\n      height: 5vw !important;\n      margin: 6px; } }\n"

/***/ }),

/***/ "./src/app/novo-cadastro/novo-cadastro.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/novo-cadastro/novo-cadastro.page.ts ***!
  \*****************************************************/
/*! exports provided: NovoCadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoCadastroPage", function() { return NovoCadastroPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fnando_cpf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fnando/cpf */ "./node_modules/@fnando/cpf/src/cpf.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/person.service */ "./src/app/services/person.service.ts");
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





var NovoCadastroPage = /** @class */ (function () {
    function NovoCadastroPage(personService, alertCtrl, formBuilder, navCtrl) {
        this.personService = personService;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.accented_regex = '^[a-zA-Z \u00C0-\u017F]+$';
        this.localPerson = undefined;
        this.isInsert = true;
        this.isSaveButtonEnabled = false;
        this.cpf_validators = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(14),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$')
        ]);
        this.nome_completo = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.accented_regex)
        ]));
        this.data_nasc = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$')
        ]));
        this.rg_identidade = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.cpf = this.formBuilder.control('', this.cpf_validators);
        this.sexo = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.email = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.cidade = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.cep = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.telefone = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.deficiencia = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.cotista = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.signUpForm = this.formBuilder.group({
            nome_completo: this.nome_completo,
            data_nasc: this.data_nasc,
            rg_identidade: this.rg_identidade,
            cpf: this.cpf,
            sexo: this.sexo,
            email: this.email,
            cidade: this.cidade,
            cep: this.cep,
            telefone: this.telefone,
            deficiencia: this.deficiencia,
            cotista: this.cotista
        });
    }
    NovoCadastroPage.prototype.ngOnInit = function () {
        this.localPerson = this.personService.getLocalPerson();
        if (this.localPerson !== undefined) {
            // The page is going to be used to modify existing person
            // rather than add a new person.
            this.isInsert = false;
            this.nome_completo.setValue(this.localPerson.nome_completo);
            this.data_nasc.setValue(this.localPerson.data_nasc);
            this.cpf.setValue(this.localPerson.cpf);
            this.rg_identidade.setValue(this.localPerson.rg_identidade);
            this.sexo.setValue(this.localPerson.sexo);
            this.email.setValue(this.localPerson.email);
            this.cidade.setValue(this.localPerson.cidade);
            this.cep.setValue(this.localPerson.cep);
            this.telefone.setValue(this.localPerson.telefone);
            this.deficiencia.setValue(this.localPerson.deficiencia);
            this.cotista.setValue(this.localPerson.cotista);
        }
        else {
            this.isInsert = true;
        }
    };
    NovoCadastroPage.prototype.doCancel = function () {
        this.personService.resetLocalPerson();
        this.navCtrl.goBack();
    };
    NovoCadastroPage.prototype.alertInsertOk = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Sucesso',
                            subHeader: 'Cadastro realizado',
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
    NovoCadastroPage.prototype.alertConflict = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Conflito',
                            subHeader: 'CPF já existente',
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
    NovoCadastroPage.prototype.alertServerFailure = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Problema',
                            subHeader: 'Serviço indisponível',
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
    NovoCadastroPage.prototype.alertProblemaFormato = function (msg1, msg2) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Formato',
                            subHeader: msg1,
                            message: msg2,
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
    NovoCadastroPage.prototype.alertCampoObrigatorio = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Formato',
                            subHeader: 'Campo Obrigatório',
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
    NovoCadastroPage.prototype.onKeyUp = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp(this.accented_regex);
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    };
    NovoCadastroPage.prototype.doSave = function () {
        var _this = this;
        var personData = {
            nome_completo: this.nome_completo.value.trim(),
            data_nasc: this.data_nasc.value,
            rg_identidade: this.rg_identidade.value,
            cpf: this.cpf.value,
            sexo: this.sexo.value,
            email: this.email.value,
            cidade: this.cidade.value,
            cep: this.cep.value,
            telefone: this.telefone.value,
            deficiencia: this.deficiencia.value,
            cotista: this.cotista.value
        };
        if (!this.nome_completo.valid) {
            this.alertProblemaFormato("Nome Completo", "Usar até 40 letras no nome e sobrenome, separados por espaço.");
            return;
        }
        if (!this.data_nasc.valid) {
            this.alertProblemaFormato("Data de Nascimento", "Informar dia, mês e ano no formato 'dd-mm-aaaa'. Ex: 02-02-1996 e 31-12-2008.");
            return;
        }
        if (!this.cpf.valid) {
            this.alertProblemaFormato("Informação de CPF", "Usar dígitos e separadores '.' e '-'. Ex: 123.456.789-00");
            return;
        }
        if (!_fnando_cpf__WEBPACK_IMPORTED_MODULE_3__["isValid"](this.cpf.value)) {
            this.alertProblemaFormato("Informação de CPF", "Não válido. Digitos corretos?");
            return;
        }
        if (!this.nome_completo.touched) {
            this.alertCampoObrigatorio("Favor informar nome completo.");
            return;
        }
        if (this.isInsert) {
            console.log("Sending info to database...");
            console.log(personData);
            this.personService.saveApplicant(personData)
                .subscribe(function (person) {
                console.log("Id recebido: " + person._id);
                _this.alertInsertOk("Informações salvas!");
                _this.personService.persistPersonLocally(person);
                _this.navCtrl.navigateForward('/Perfil');
            }, function (err) {
                console.log(err);
                if (err.status == 409) {
                    _this.alertConflict("Por favor, verifique dados fornecidos.");
                }
                else {
                    _this.alertServerFailure("Por favor, tente mais tarde!");
                }
            });
        }
        else {
            console.log("Updating...");
            console.log(personData);
            this.personService.updateApplicant(personData)
                .subscribe(function (person) {
                console.log("Id recebido: " + person._id);
                _this.alertInsertOk("Informações atualizadas!");
                _this.personService.persistPersonLocally(person);
                _this.navCtrl.navigateForward('/Perfil');
            }, function (err) {
                console.log(err);
                if (err.status == 500) {
                    _this.alertConflict("Registro desconhecido.");
                }
                else {
                    _this.alertServerFailure("Por favor, tente mais tarde!");
                }
            });
        }
    };
    NovoCadastroPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-cadastro',
            template: __webpack_require__(/*! ./novo-cadastro.page.html */ "./src/app/novo-cadastro/novo-cadastro.page.html"),
            styles: [__webpack_require__(/*! ./novo-cadastro.page.scss */ "./src/app/novo-cadastro/novo-cadastro.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_4__["PersonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], NovoCadastroPage);
    return NovoCadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=novo-cadastro-novo-cadastro-module.js.map