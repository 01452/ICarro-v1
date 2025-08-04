(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/navigator/navigator.component */ "./src/app/shared/navigator/navigator.component.ts");



class AppComponent {
    constructor() {
        this.title = 'ilCarro';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigator");
    } }, directives: [_shared_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_1__["NavigatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _cars_cars_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cars/cars.module */ "./src/app/cars/cars.module.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _cars_cars_module__WEBPACK_IMPORTED_MODULE_5__["CarsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _cars_cars_module__WEBPACK_IMPORTED_MODULE_5__["CarsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _cars_cars_module__WEBPACK_IMPORTED_MODULE_5__["CarsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cars/car-details/car-details.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cars/car-details/car-details.component.ts ***!
  \***********************************************************/
/*! exports provided: CarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsComponent", function() { return CarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors */ "./src/app/errors.ts");
/* harmony import */ var _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/dialog/dialog-builder */ "./src/app/service/dialog/dialog-builder.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools */ "./src/app/tools.ts");
/* harmony import */ var _service_reserve_modal_reserve_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/reserve-modal/reserve-modal.component */ "./src/app/service/reserve-modal/reserve-modal.component.ts");
/* harmony import */ var _service_login_registration_modal_login_registration_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/login-registration-modal/login-registration-modal.component */ "./src/app/service/login-registration-modal/login-registration-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cars_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cars-http.service */ "./src/app/cars/cars-http.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../local-store.service */ "./src/app/local-store.service.ts");
/* harmony import */ var _service_static_location_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/static-location.service */ "./src/app/service/static-location.service.ts");
/* harmony import */ var _service_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service/image-slider/image-slider.component */ "./src/app/service/image-slider/image-slider.component.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/__ivy_ngcc__/fesm2015/saturn-datepicker.js");
/* harmony import */ var _service_car_input_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../service/car-input.directive */ "./src/app/service/car-input.directive.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/cars/footer/footer.component.ts");
/* harmony import */ var _service_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../service/car-details/car-details.component */ "./src/app/service/car-details/car-details.component.ts");





















function CarDetailsComponent_car_details_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "car-details", 20);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("car", ctx_r0.car);
} }
function CarDetailsComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r6.getErrors("dates")) == null ? null : tmp_0_0.error, " ");
} }
function CarDetailsComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dates are required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarDetailsComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can't pick date before today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarDetailsComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Second date must be after first date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarDetailsComponent_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date doesn't exists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarDetailsComponent_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Picked period can't contain already picked dates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarDetailsComponent_div_17_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can't book car for less than a day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarDetailsComponent_div_17_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can't pick date after one year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarDetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarDetailsComponent_div_17_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarDetailsComponent_div_17_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarDetailsComponent_div_17_div_3_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarDetailsComponent_div_17_div_4_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarDetailsComponent_div_17_div_5_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarDetailsComponent_div_17_div_6_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarDetailsComponent_div_17_div_7_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CarDetailsComponent_div_17_div_8_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = (tmp_0_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_0_0.error;
    var tmp_1_0 = null;
    const currVal_1 = ((tmp_1_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_1_0.required) && !((tmp_1_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_1_0.matDatepickerParse);
    var tmp_2_0 = null;
    const currVal_2 = (tmp_2_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_2_0.matDatepickerMin;
    var tmp_3_0 = null;
    const currVal_3 = (tmp_3_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_3_0.matDatepickerRange;
    var tmp_4_0 = null;
    const currVal_4 = (tmp_4_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_4_0.matDatepickerParse;
    var tmp_5_0 = null;
    const currVal_5 = ((tmp_5_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_5_0.matDatepickerFilter) || ((tmp_5_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_5_0.bookPeriod);
    var tmp_6_0 = null;
    const currVal_6 = (tmp_6_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_6_0.minRange;
    var tmp_7_0 = null;
    const currVal_7 = (tmp_7_0 = ctx_r3.getErrors("dates")) == null ? null : tmp_7_0.matDatepickerMax;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_7);
} }
function CarDetailsComponent_ng_container_21_li_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", feature_r15, " ");
} }
function CarDetailsComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Engine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "WD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fuel cons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Doors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Distance included");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Features:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CarDetailsComponent_ng_container_21_li_54_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.car.engine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.car.fuel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.car.gear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.car.wheels_drive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.car.fuel_consumption, " L/100km");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.car.doors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.car.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.car.car_class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.formattedAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.car.distance_included, " km");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.car.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.car.features);
} }
class CarDetailsComponent {
    constructor(route, httpService, dialog, datePipe, router, decimalPipe, title, formBuilder, localStore, location, staticLocationService) {
        this.route = route;
        this.httpService = httpService;
        this.dialog = dialog;
        this.datePipe = datePipe;
        this.router = router;
        this.decimalPipe = decimalPipe;
        this.title = title;
        this.formBuilder = formBuilder;
        this.localStore = localStore;
        this.location = location;
        this.staticLocationService = staticLocationService;
        this.minStartDate = new Date();
        this.maxDate = new Date(this.minStartDate.getTime() + 31536000000);
    }
    ngOnDestroy() {
        Object(_tools__WEBPACK_IMPORTED_MODULE_4__["saveFormData"])(this.reserveForm, this.url);
    }
    ngOnInit() {
        this.url = this.router.url;
        this.route.params.subscribe(params => this.serialNumber = params.id);
        this.initForm();
        this.route.queryParams.subscribe(param => {
            if (param.startDate && param.endDate) {
                this.reserveForm.get('dates').setValue({
                    begin: new Date(param.startDate),
                    end: new Date(param.endDate)
                });
            }
            else {
                Object(_tools__WEBPACK_IMPORTED_MODULE_4__["restoreFormData"])(this.reserveForm, this.url);
            }
        });
        this.loadCar();
    }
    getErrors(control) {
        return this.reserveForm.controls[control].errors;
    }
    showDialog() {
        if (this.localStore.getToken()) {
            new _service_reserve_modal_reserve_modal_component__WEBPACK_IMPORTED_MODULE_5__["ReserveDialogBuilder"](this.dialog)
                .car(this.car)
                .dateStart(this.reserveForm.controls.dates.value.begin)
                .dateEnd(this.reserveForm.controls.dates.value.end)
                .show();
        }
        else {
            this.dialog.open(_service_login_registration_modal_login_registration_modal_component__WEBPACK_IMPORTED_MODULE_6__["LoginRegistrationModalComponent"]);
        }
    }
    initForm() {
        const datesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.reserveForm = this.formBuilder.group({
            dates: datesControl
        });
    }
    loadCar() {
        this.httpService.getCar(this.serialNumber)
            .subscribe(car => this.carLoaded(car), this.showError.bind(this));
    }
    showError(error) {
        if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_2__["ConnectionError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Connection error')
                .message('Check your connection and try again')
                .negativeBtn('Close')
                .positiveBtn('Try again', this.loadCar.bind(this))
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_2__["NotFoundError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Car not found')
                .message('Car not found')
                .positiveBtn('Go to previous page', this.location.back)
                .positiveBtn('Search', () => this.router.navigate(['/search']))
                .show();
        }
        else {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Something goes wrong')
                .positiveBtn('Try again', this.loadCar.bind(this))
                .negativeBtn('Close')
                .show();
        }
    }
    carLoaded(car) {
        this.car = car;
        this.setTitle(car);
        this.initFilter(car);
        this.setCarMarker(car);
        this.setLocation(car);
        const validator = this.reserveForm.controls.dates.validator;
        this.reserveForm.controls.dates.setValidators([validator, this.createBookedPeriodValidator(this.car)]);
    }
    setTitle(car) {
        this.title.setTitle(`${car.make} ${car.model} ${car.year}`);
    }
    initFilter(car) {
        this.filter = (d) => {
            let valid = true;
            car.booked_periods.forEach(bookedPeriod => {
                const dateStart = new Date(bookedPeriod.start_date_time);
                const dateEnd = new Date(bookedPeriod.end_date_time);
                if (dateStart.getTime() <= d.getTime() && d.getTime() <= dateEnd.getTime()) {
                    valid = false;
                }
            });
            return valid;
        };
    }
    setCarMarker(car) {
        // Car marker functionality replaced with static data
        // Car location: lat ${car.pick_up_place.latitude}, lng ${car.pick_up_place.longitude}
    }
    setLocation(car) {
        // Use static location data instead of PlacesService
        const staticPlace = this.staticLocationService.getPlaces()[0];
        this.address = staticPlace.formatted_address.split(',');
        this.formattedAddress = staticPlace.formatted_address;
    }
    createBookedPeriodValidator(car) {
        return (control) => {
            const dates = control.value;
            if (car) {
                for (const bookedPeriod of this.car.booked_periods) {
                    const startBook = new Date(bookedPeriod.start_date_time);
                    const endBook = new Date(bookedPeriod.end_date_time);
                    if (
                    // endBook >= begin >= startBook
                    Object(_tools__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dates === null || dates === void 0 ? void 0 : dates.begin, startBook) && Object(_tools__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(endBook, dates === null || dates === void 0 ? void 0 : dates.begin)
                        // endBook >= end >= startBook
                        || Object(_tools__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dates === null || dates === void 0 ? void 0 : dates.end, startBook) && Object(_tools__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(endBook, dates === null || dates === void 0 ? void 0 : dates.end)
                        // end >= startBook >= begin
                        || Object(_tools__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(startBook, dates === null || dates === void 0 ? void 0 : dates.begin) && Object(_tools__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dates === null || dates === void 0 ? void 0 : dates.end, startBook)
                        // end >= endBook >= begin
                        || Object(_tools__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(endBook, dates === null || dates === void 0 ? void 0 : dates.begin) && Object(_tools__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dates === null || dates === void 0 ? void 0 : dates.end, endBook))
                        return {
                            bookPeriod: 'Book period cant contain already booked dates'
                        };
                }
            }
            return null;
        };
    }
}
CarDetailsComponent.ɵfac = function CarDetailsComponent_Factory(t) { return new (t || CarDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cars_http_service__WEBPACK_IMPORTED_MODULE_8__["CarsHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_store_service__WEBPACK_IMPORTED_MODULE_12__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_static_location_service__WEBPACK_IMPORTED_MODULE_13__["StaticLocationService"])); };
CarDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarDetailsComponent, selectors: [["app-car-details"]], decls: 25, vars: 12, consts: [[1, "car-details-container"], [1, "car-gallery"], [3, "photos"], ["class", "car-title", 3, "car", 4, "ngIf"], [1, "dates-select"], [1, "title"], [3, "formGroup"], [1, "input-container"], ["for", "dates", 1, "input-label"], ["datesLabel", ""], [1, "required-marker"], ["formControlName", "dates", "id", "dates", 3, "carInput", "matDatepickerFilter", "max", "min", "satDatepicker", "click"], [3, "rangeMode"], ["datePicker", ""], ["class", "error", 4, "ngIf"], [3, "disabled", "click"], [1, "car-details"], [4, "ngIf"], [1, "google-map"], ["gMap", ""], [1, "car-title", 3, "car"], [1, "error"], [1, "details-container"], [1, "column", "one-line"], [1, "column"], [1, "column", "address-column"], [1, "column", "about-container"], [4, "ngFor", "ngForOf"]], template: function CarDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "image-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarDetailsComponent_car_details_3_Template, 1, 1, "car-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Still available in your area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarDetailsComponent_Template_input_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r2.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "sat-datepicker", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CarDetailsComponent_div_17_Template, 9, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarDetailsComponent_Template_button_click_18_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Rent now!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CarDetailsComponent_ng_container_21_Template, 55, 12, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-footer");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("photos", ctx.car.image_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.car);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reserveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r1)("matDatepickerFilter", ctx.filter)("max", ctx.maxDate)("min", ctx.minStartDate)("satDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangeMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getErrors("dates"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.reserveForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.car);
    } }, directives: [_service_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_14__["ImageSliderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__["SatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _service_car_input_directive__WEBPACK_IMPORTED_MODULE_16__["CarInputDirective"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__["SatDatepicker"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _service_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_18__["CarDetailsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], styles: [".loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30vh;\n  left: 50%;\n  transform: translateY(-50%);\n}\n\n.car-details-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .car-details-container[_ngcontent-%COMP%] {\n    margin-left: 8vw;\n    margin-top: 8vh;\n  }\n}\n\n@media screen and (max-width: 800px), screen and (orientation: portrait) {\n  .car-details-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin: 0 3vw 1rem;\n  }\n}\n\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .car-details-container[_ngcontent-%COMP%]   .car-gallery[_ngcontent-%COMP%] {\n    flex-basis: calc(10 / 17 * 100%);\n  }\n  .car-details-container[_ngcontent-%COMP%]   .car-gallery[_ngcontent-%COMP%]   car-details.car-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .car-details-container[_ngcontent-%COMP%]   .car-gallery[_ngcontent-%COMP%]   car-details.car-title[_ngcontent-%COMP%]     .details-container {\n    margin-left: 5rem;\n  }\n}\n\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .car-details-container[_ngcontent-%COMP%]   .dates-select[_ngcontent-%COMP%] {\n    flex-basis: calc(7 / 17 * 100% - .5rem);\n    margin-left: 0.5rem;\n    padding-top: 6vh;\n    padding-left: 3.5vw;\n    margin-bottom: calc(1.5rem * 4 * 1.2);\n    box-shadow: 0 0.3vh 0.3vw #0000005F;\n  }\n}\n\n@media screen and (max-width: 800px), screen and (orientation: portrait) {\n  .car-details-container[_ngcontent-%COMP%]   .dates-select[_ngcontent-%COMP%] {\n    order: -1;\n    margin-bottom: 2rem;\n    margin-top: 3rem;\n  }\n}\n\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%] {\n    flex-basis: calc(10 / 17 * 100%);\n  }\n}\n\n@media screen and (max-width: 800px), screen and (orientation: portrait) {\n  .car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n}\n\n.car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\n\n.car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n  font: 1em/1.5em \"Rawline Regular\";\n  margin-top: 1rem;\n}\n\n.car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #06263998;\n}\n\n.car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.address) {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(odd) {\n  text-align: right;\n}\n\n.car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(even) {\n  text-align: left;\n  color: #062639;\n  align-self: end;\n}\n\n.car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #062639;\n  list-style-type: none;\n  padding-left: 0;\n}\n\n.car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .column.about-container[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  grid-template-columns: 1fr 5fr;\n}\n\n.car-details-container[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .one-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.car-details-container[_ngcontent-%COMP%]   .google-map[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 50vh;\n  box-shadow: 0 0.3vh 0.3vw #0000005F;\n}\n\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .car-details-container[_ngcontent-%COMP%]   .google-map[_ngcontent-%COMP%] {\n    flex-basis: calc(7 / 17 * 100% - .5rem);\n    margin-left: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9jYXItZGV0YWlscy9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcY2Fyc1xcY2FyLWRldGFpbHNcXGNhci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL2Nhci1kZXRhaWxzL2Nhci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL2Nhci1kZXRhaWxzL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBRUUsYUFBQTtFQUNBLGVBQUE7QUNGRjs7QURJRTtFQUxGO0lBTUksZ0JBQUE7SUFDQSxlQUFBO0VDREY7QUFDRjs7QURJRTtFQVhGO0lBWUksc0JBQUE7SUFDQSxrQkFBQTtFQ0RGO0FBQ0Y7O0FESUk7RUFERjtJQUVJLGdDQUFBO0VDREo7RURHSTtJQUNFLGlCQUFBO0VDRE47RURHTTtJQUNFLGlCQUFBO0VDRFI7QUFDRjs7QURRSTtFQUZGO0lBSUksdUNBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFFQSxxQ0FBQTtJQUVBLG1DRWxERztFRDBDUDtBQUNGOztBRFVJO0VBZEY7SUFlSSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ1BKO0FBQ0Y7O0FEV0k7RUFERjtJQUVJLGdDQUFBO0VDUko7QUFDRjs7QURVSTtFQUxGO0lBTUksZ0JBQUE7RUNQSjtBQUNGOztBRFNJO0VBRUUsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsdUJBQUE7T0FBQSxrQkFBQTtBQ1JOOztBRFVNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7T0FBQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNSUjs7QURVUTtFQUNFLGdCRTlFRTtBRHNFWjs7QURVVTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNSWjs7QURXVTtFQUNFLGlCQUFBO0FDVFo7O0FEWVU7RUFDRSxnQkFBQTtFQUNBLGNFOUZKO0VGK0ZJLGVBQUE7QUNWWjs7QURjUTtFQUNFLGdCQUFBO0VBQ0EsY0VyR0Y7RUZzR0UscUJBQUE7RUFDQSxlQUFBO0FDWlY7O0FEZVE7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0FDYlY7O0FEZ0JRO0VBQ0UsbUJBQUE7QUNkVjs7QURvQkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0UzSEs7QUR5R1Q7O0FEb0JJO0VBTEY7SUFPSSx1Q0FBQTtJQUNBLG1CQUFBO0VDbEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJzL2Nhci1kZXRhaWxzL2Nhci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xuXG4ubG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHZoO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmNhci1kZXRhaWxzLWNvbnRhaW5lciB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICBtYXJnaW4tbGVmdDogOHZ3O1xuICAgIG1hcmdpbi10b3A6IDh2aDtcblxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMCAzdncgMXJlbTtcbiAgfVxuXG4gIC5jYXItZ2FsbGVyeSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgZmxleC1iYXNpczogY2FsYygxMCAvIDE3ICogMTAwJSk7XG5cbiAgICAgIGNhci1kZXRhaWxzLmNhci10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgICAgIDo6bmctZGVlcCAuZGV0YWlscy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhdGVzLXNlbGVjdCB7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAvLy41cmVtIC0gbWFyZ2luXG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDcgLyAxNyAqIDEwMCUgLSAuNXJlbSk7XG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgcGFkZGluZy10b3A6IDZ2aDtcbiAgICAgIHBhZGRpbmctbGVmdDogMy41dnc7XG4gICAgICAvLzEuNXJlbSAtIGNhci1kZXRhaWxzIGZvbnQgc2l6ZS4gNCAtIGZvbnQgc2l6ZSBvZiB0aGUgYmlnZ2VzdCBlbGVtZW50IG9mIGNhci1kZXRhaWxzIChwcmljZSkuIDEuMiAtIGxpbmUgaGVpZ2h0IG9mIGl0XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNXJlbSAqIDQgKiAxLjIpO1xuXG4gICAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBvcmRlcjogLTE7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICB9XG4gIH1cblxuICAuY2FyLWRldGFpbHMge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAgLyAxNyAqIDEwMCUpO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLWNvbnRhaW5lciB7XG5cbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1cmVtLCAxZnIpKTtcbiAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gICAgICAuY29sdW1uIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcbiAgICAgICAgZm9udDogMWVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XG5cbiAgICAgICAgICAmOm5vdCguYWRkcmVzcykge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hYm91dC1jb250YWluZXIge1xuICAgICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm9uZS1saW5lIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmdvb2dsZS1tYXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAvLy41cmVtIC0gbWFyZ2luXG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDcgLyAxNyAqIDEwMCUgLSAuNXJlbSk7XG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIH1cbiAgfVxufVxuIiwiLmxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzB2aDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5jYXItZGV0YWlscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5jYXItZGV0YWlscy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA4dnc7XG4gICAgbWFyZ2luLXRvcDogOHZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuY2FyLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMCAzdncgMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuY2FyLWRldGFpbHMtY29udGFpbmVyIC5jYXItZ2FsbGVyeSB7XG4gICAgZmxleC1iYXNpczogY2FsYygxMCAvIDE3ICogMTAwJSk7XG4gIH1cbiAgLmNhci1kZXRhaWxzLWNvbnRhaW5lciAuY2FyLWdhbGxlcnkgY2FyLWRldGFpbHMuY2FyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuY2FyLWRldGFpbHMtY29udGFpbmVyIC5jYXItZ2FsbGVyeSBjYXItZGV0YWlscy5jYXItdGl0bGUgOjpuZy1kZWVwIC5kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmNhci1kZXRhaWxzLWNvbnRhaW5lciAuZGF0ZXMtc2VsZWN0IHtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDcgLyAxNyAqIDEwMCUgLSAuNXJlbSk7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogNnZoO1xuICAgIHBhZGRpbmctbGVmdDogMy41dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjVyZW0gKiA0ICogMS4yKTtcbiAgICBib3gtc2hhZG93OiAwIDAuM3ZoIDAuM3Z3ICMwMDAwMDA1RjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmNhci1kZXRhaWxzLWNvbnRhaW5lciAuZGF0ZXMtc2VsZWN0IHtcbiAgICBvcmRlcjogLTE7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5jYXItZGV0YWlscy1jb250YWluZXIgLmNhci1kZXRhaWxzIHtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwIC8gMTcgKiAxMDAlKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmNhci1kZXRhaWxzLWNvbnRhaW5lciAuY2FyLWRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cbi5jYXItZGV0YWlscy1jb250YWluZXIgLmNhci1kZXRhaWxzIC5kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTVyZW0sIDFmcikpO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG59XG4uY2FyLWRldGFpbHMtY29udGFpbmVyIC5jYXItZGV0YWlscyAuZGV0YWlscy1jb250YWluZXIgLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xuICBmb250OiAxZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5jYXItZGV0YWlscy1jb250YWluZXIgLmNhci1kZXRhaWxzIC5kZXRhaWxzLWNvbnRhaW5lciAuY29sdW1uIHNwYW4ge1xuICBjb2xvcjogIzA2MjYzOTk4O1xufVxuLmNhci1kZXRhaWxzLWNvbnRhaW5lciAuY2FyLWRldGFpbHMgLmRldGFpbHMtY29udGFpbmVyIC5jb2x1bW4gc3Bhbjpub3QoLmFkZHJlc3MpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY2FyLWRldGFpbHMtY29udGFpbmVyIC5jYXItZGV0YWlscyAuZGV0YWlscy1jb250YWluZXIgLmNvbHVtbiBzcGFuOm50aC1jaGlsZChvZGQpIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2FyLWRldGFpbHMtY29udGFpbmVyIC5jYXItZGV0YWlscyAuZGV0YWlscy1jb250YWluZXIgLmNvbHVtbiBzcGFuOm50aC1jaGlsZChldmVuKSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDYyNjM5O1xuICBhbGlnbi1zZWxmOiBlbmQ7XG59XG4uY2FyLWRldGFpbHMtY29udGFpbmVyIC5jYXItZGV0YWlscyAuZGV0YWlscy1jb250YWluZXIgLmNvbHVtbiB1bCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDYyNjM5O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5jYXItZGV0YWlscy1jb250YWluZXIgLmNhci1kZXRhaWxzIC5kZXRhaWxzLWNvbnRhaW5lciAuY29sdW1uLmFib3V0LWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbn1cbi5jYXItZGV0YWlscy1jb250YWluZXIgLmNhci1kZXRhaWxzIC5kZXRhaWxzLWNvbnRhaW5lciAuY29sdW1uIC5vbmUtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2FyLWRldGFpbHMtY29udGFpbmVyIC5nb29nbGUtbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBib3gtc2hhZG93OiAwIDAuM3ZoIDAuM3Z3ICMwMDAwMDA1Rjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmNhci1kZXRhaWxzLWNvbnRhaW5lciAuZ29vZ2xlLW1hcCB7XG4gICAgZmxleC1iYXNpczogY2FsYyg3IC8gMTcgKiAxMDAlIC0gLjVyZW0pO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIH1cbn0iLCIkc2hhZG93OiAwIC4zdmggLjN2dyAjMDAwMDAwNUY7XG4kcmVkOiAjRUEyMzQwO1xuJGJsYWNrOiAjMDYyNjM5O1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM1RjcyN0U7XG4kZGFyay1ncmV5OiAjMDYyNjM5OTg7XG4kdHJhbnNwYXJlbnQ6ICMwMDAwMDAwMDtcbiR0cmFuc3BhcmVudC13aGl0ZTogI0ZGRkZGRjQwO1xuJHRyYW5zcGFyZW50LXdoaXRlLXN0cm9uZzogI0ZGRkZGRjgwO1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-car-details',
                templateUrl: './car-details.component.html',
                styleUrls: ['./car-details.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _cars_http_service__WEBPACK_IMPORTED_MODULE_8__["CarsHttpService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _local_store_service__WEBPACK_IMPORTED_MODULE_12__["LocalStoreService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] }, { type: _service_static_location_service__WEBPACK_IMPORTED_MODULE_13__["StaticLocationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cars/cars-http.service.ts":
/*!*******************************************!*\
  !*** ./src/app/cars/cars-http.service.ts ***!
  \*******************************************/
/*! exports provided: URL, CarsHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsHttpService", function() { return CarsHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./src/app/errors.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../local-store.service */ "./src/app/local-store.service.ts");








const URL = 'https://rent-cars-app.herokuapp.com';
class CarsHttpService {
    constructor(http, datePipe, localStore) {
        this.http = http;
        this.datePipe = datePipe;
        this.localStore = localStore;
    }
    /**
     * Get all filters from server
     */
    getFilters() {
        return this.http.get(URL + '/filters').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_3__["handleErrors"]).bind(this));
    }
    /**
     * Search cars by all filters that sre sated up in params
     * @param request - SearchCarRequest, fields that are not sated up, or sated up as undefined dont use in server request
     */
    searchCarsByFilters(request) {
        let params = `?`;
        // to much code for setting url params
        // TODO Optimize later
        if (request.startDate) {
            params += `&start_date=${request.startDate}`;
        }
        if (request.endDate) {
            params += `&end_date=${request.endDate}`;
        }
        if (request.ascending) {
            params += `&ascending=${request.ascending}`;
        }
        if (request.fuel) {
            params += `&fuel=${request.fuel}`;
        }
        if (request.gear) {
            params += `&gear=${request.gear}`;
        }
        if (request.currentPage) {
            params += `&current_page=${request.currentPage}`;
        }
        if (request.itemsOnPage) {
            params += `&items_on_page=${request.itemsOnPage}`;
        }
        if (request.latitude) {
            params += `&latitude=${request.latitude}&longitude=${request.longitude}&radius=${request.radius}`;
        }
        else {
            if (request.city) {
                params += `&city=${request.city}`;
            }
        }
        if (request.make) {
            params += `&make=${request.make}`;
        }
        if (request.model) {
            params += `&model=${request.model}`;
        }
        if (request.minAmount) {
            params += `&min_amount=${request.minAmount - 1}`;
        }
        if (request.maxAmount) {
            params += `&max_amount=${request.maxAmount - -1}`;
        }
        if (request.wheelsDrive) {
            params += `&wheels_drive=${request.wheelsDrive}`;
        }
        if (request.year) {
            params += `&year=${request.year}`;
        }
        return this.http.get(URL + '/search/all' + params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_3__["handleErrors"]));
    }
    /**
     * Get max and min price for cars with users filters
     * @param request - filtrs
     */
    getMaxAndMinPrices(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cars;
            request.itemsOnPage = (yield this.searchCarsByFilters(request).toPromise()).items_total;
            cars = (yield this.searchCarsByFilters(request).toPromise()).cars;
            if (cars.length === 0) {
                return { min: -1, max: -1 };
            }
            const carPrices = cars.map(car => car.price_per_day);
            const min = Math.min(...carPrices);
            const max = Math.max(...carPrices);
            return { min, max };
        });
    }
    /**
     * Get all cars from server by users filters without city filter
     * @param params - user filters, city property replaces with undefined
     */
    getAllCars(params) {
        return this.searchCarsByFilters(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])((results) => {
            params.itemsOnPage = results.items_total;
            params.currentPage = 0;
            return this.searchCarsByFilters(params);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.cars))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_3__["handleErrors"]));
    }
    /**
     * Get all car details by car serial number
     * @param carNumber - serial number
     */
    getCar(carNumber) {
        return this.http.get(URL + '/car?serial_number=' + carNumber)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_3__["handleErrors"]));
    }
    /**
     * Reserve car on specific date and time
     * @param carNumber - serial number of car for reservation
     * @param reservation - dates for reservations, personal information of booker
     */
    reserveCar(carNumber, reservation) {
        const token = this.localStore.getToken();
        return this.http.post(URL + '/car/reservation?serial_number=' + carNumber, reservation, {
            headers: {
                Authorization: token
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_3__["handleErrors"]));
    }
    /**
     * Add new car to account.
     * @param car - car details
     * return observable car with details of uploaded car
     */
    addCar(car) {
        const authHeader = this.getAuthHeader();
        return this.http.post(`${URL}/car`, car, {
            headers: authHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_3__["handleErrors"]));
    }
    /**
     * Get 3 best booked cars
     */
    getBestCars() {
        return this.http.get(`${URL}/car/best`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_3__["handleErrors"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(cars => cars.splice(2)));
    }
    /**
     * Get latest comments for specialOffers
     */
    getLatestComments() {
        return this.http.get(`${URL}/comments`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_3__["handleErrors"]));
    }
    getAuthHeader() {
        const token = this.localStore.getToken();
        return token && {
            Authorization: token
        };
    }
}
CarsHttpService.ɵfac = function CarsHttpService_Factory(t) { return new (t || CarsHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"])); };
CarsHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CarsHttpService, factory: CarsHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarsHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }, { type: _local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cars/cars.module.ts":
/*!*************************************!*\
  !*** ./src/app/cars/cars.module.ts ***!
  \*************************************/
/*! exports provided: CarsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModule", function() { return CarsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/cars/search/search.component.ts");
/* harmony import */ var _sub_search_sub_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-search/sub-search.component */ "./src/app/cars/sub-search/sub-search.component.ts");
/* harmony import */ var _search_navigator_search_navigator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-navigator/search-navigator.component */ "./src/app/cars/search-navigator/search-navigator.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/cars/filters/filters.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/cars/map/map.component.ts");
/* harmony import */ var _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./car-details/car-details.component */ "./src/app/cars/car-details/car-details.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/cars/search-results/search-results.component.ts");
/* harmony import */ var _let_car_work_let_car_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./let-car-work/let-car-work.component */ "./src/app/cars/let-car-work/let-car-work.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./special-offers/special-offers.component */ "./src/app/cars/special-offers/special-offers.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/cars/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/__ivy_ngcc__/fesm2015/saturn-datepicker.js");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _cars_http_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cars-http.service */ "./src/app/cars/cars-http.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _m0t0r_ngx_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @m0t0r/ngx-slider */ "./node_modules/@m0t0r/ngx-slider/__ivy_ngcc__/fesm2015/m0t0r-ngx-slider.js");























class CarsModule {
}
CarsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarsModule });
CarsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarsModule_Factory(t) { return new (t || CarsModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _cars_http_service__WEBPACK_IMPORTED_MODULE_16__["CarsHttpService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _m0t0r_ngx_slider__WEBPACK_IMPORTED_MODULE_21__["NgxSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__["SatDatepickerModule"],
            saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__["SatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _service_service_module__WEBPACK_IMPORTED_MODULE_15__["ServiceModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarsModule, { declarations: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _sub_search_sub_search_component__WEBPACK_IMPORTED_MODULE_3__["SubSearchComponent"], _search_navigator_search_navigator_component__WEBPACK_IMPORTED_MODULE_4__["SearchNavigatorComponent"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__["FiltersComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"], _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_7__["CarDetailsComponent"],
        _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultsComponent"], _let_car_work_let_car_work_component__WEBPACK_IMPORTED_MODULE_9__["LetCarWorkComponent"], _special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_11__["SpecialOffersComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _m0t0r_ngx_slider__WEBPACK_IMPORTED_MODULE_21__["NgxSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__["SatDatepickerModule"],
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__["SatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _service_service_module__WEBPACK_IMPORTED_MODULE_15__["ServiceModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]], exports: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"],
        _special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_11__["SpecialOffersComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _sub_search_sub_search_component__WEBPACK_IMPORTED_MODULE_3__["SubSearchComponent"], _search_navigator_search_navigator_component__WEBPACK_IMPORTED_MODULE_4__["SearchNavigatorComponent"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__["FiltersComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"], _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_7__["CarDetailsComponent"],
                    _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultsComponent"], _let_car_work_let_car_work_component__WEBPACK_IMPORTED_MODULE_9__["LetCarWorkComponent"], _special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_11__["SpecialOffersComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _m0t0r_ngx_slider__WEBPACK_IMPORTED_MODULE_21__["NgxSliderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__["SatDatepickerModule"],
                    saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__["SatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                    _service_service_module__WEBPACK_IMPORTED_MODULE_15__["ServiceModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]
                ],
                exports: [
                    _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"],
                    _special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_11__["SpecialOffersComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _cars_http_service__WEBPACK_IMPORTED_MODULE_16__["CarsHttpService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cars/dates-range-validator.ts":
/*!***********************************************!*\
  !*** ./src/app/cars/dates-range-validator.ts ***!
  \***********************************************/
/*! exports provided: DatesRangeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatesRangeValidator", function() { return DatesRangeValidator; });
class DatesRangeValidator {
    constructor() {
    }
    static get validator() {
        return control => {
            const value = control === null || control === void 0 ? void 0 : control.value;
            const dateStart = new Date(value === null || value === void 0 ? void 0 : value.begin);
            const dateEnd = new Date(value === null || value === void 0 ? void 0 : value.end);
            if ((dateEnd === null || dateEnd === void 0 ? void 0 : dateEnd.getTime()) - (dateStart === null || dateStart === void 0 ? void 0 : dateStart.getTime()) < 86400000) {
                return {
                    minRange: 'Range mast be more than 1 day'
                };
            }
            return null;
        };
    }
}


/***/ }),

/***/ "./src/app/cars/filters/filters.component.ts":
/*!***************************************************!*\
  !*** ./src/app/cars/filters/filters.component.ts ***!
  \***************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fuel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fuel */ "./src/app/cars/fuel.ts");
/* harmony import */ var _wheels_drive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wheels-drive */ "./src/app/cars/wheels-drive.ts");
/* harmony import */ var _gear_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gear-types */ "./src/app/cars/gear-types.ts");
/* harmony import */ var _cars_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cars-http.service */ "./src/app/cars/cars-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_car_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/car-input.directive */ "./src/app/service/car-input.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function FiltersComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", filter_r12.make);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", filter_r12.make, " ");
} }
function FiltersComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", model_r13.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", model_r13.model, " ");
} }
function FiltersComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Wrong year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FiltersComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fuel_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fuel_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fuel_r14.name, " ");
} }
function FiltersComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gear_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gear_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gear_r15.name, " ");
} }
function FiltersComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wheelsDrive_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", wheelsDrive_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", wheelsDrive_r16.name, " ");
} }
class FiltersComponent {
    constructor(httpService, route, router, formBuilder) {
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.fuelTypes = _fuel__WEBPACK_IMPORTED_MODULE_3__["FuelType"].getFuels();
        this.wheelsDriveTypes = _wheels_drive__WEBPACK_IMPORTED_MODULE_4__["WheelsDriveTypes"].getWheelsDrives();
        this.gearTypes = _gear_types__WEBPACK_IMPORTED_MODULE_5__["GearTypes"].getGears();
        this.routeParams = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.initFiltersForm();
            this.filters = yield this.httpService.getFilters().toPromise();
            this.filters.sort((a, b) => a.make.localeCompare(b.make));
            this.filters.forEach(value => value.models.sort((a, b) => a.model.localeCompare(b.model)));
            this.route.queryParams.subscribe(params => {
                this.routeParams = Object.assign({}, params);
                this.updateForm();
            });
        });
    }
    search() {
        this.routeParams = Object.assign(Object.assign({}, this.routeParams), this.filtersForm.value);
        this.routeParams.currentPage = 0;
        const searchParams = {
            queryParams: this.routeParams
        };
        this.router.navigate(['search/results'], searchParams).then();
    }
    initFiltersForm() {
        const makeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        const modelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        const fuelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        const yearControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(new Date().getFullYear()),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1885)
        ]);
        const gearControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        const wheelsDriveControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        makeControl.valueChanges.subscribe(value => {
            if (value) {
                modelControl.enable();
            }
            else {
                modelControl.disable();
            }
        });
        this.filtersForm = this.formBuilder.group({
            make: makeControl,
            model: modelControl,
            year: yearControl,
            fuel: fuelControl,
            gear: gearControl,
            wheelsDrive: wheelsDriveControl
        });
    }
    updateForm() {
        this.filtersForm.get('make').setValue(this.routeParams.make);
        this.filtersForm.get('model').setValue(this.routeParams.model);
        this.filtersForm.get('year').setValue(this.routeParams.year);
        this.filtersForm.get('fuel').setValue(this.routeParams.fuel);
        this.filtersForm.get('gear').setValue(this.routeParams.gear);
        this.filtersForm.get('wheelsDrive').setValue(this.routeParams.wheelsDrive);
    }
    getModels(make) {
        var _a, _b;
        return (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.find(value => value.make === make)) === null || _b === void 0 ? void 0 : _b.models;
    }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) { return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cars_http_service__WEBPACK_IMPORTED_MODULE_6__["CarsHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FiltersComponent, selectors: [["app-filters"]], decls: 47, vars: 18, consts: [[1, "filter-card"], [1, "title"], [3, "formGroup", "submit"], [1, "select-container"], ["for", "make", 1, "select-label"], ["makeLabel", ""], ["formControlName", "make", "id", "make", 3, "carInput"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "model", 1, "select-label"], ["modelLabel", ""], ["formControlName", "model", "id", "model", 3, "carInput"], [1, "input-container"], ["for", "year", 1, "input-label"], ["yearLabel", ""], ["formControlName", "year", "id", "year", "type", "number", 3, "carInput"], ["class", "error", 4, "ngIf"], ["for", "fuel", 1, "select-label"], ["fuelLabel", ""], ["formControlName", "fuel", "id", "fuel", 3, "carInput"], ["for", "gear", 1, "select-label"], ["gearLabel", ""], ["formControlName", "gear", "id", "gear", 3, "carInput"], ["for", "wheelsDrive", 1, "select-label"], ["wheelsDriveLabel", ""], ["formControlName", "wheelsDrive", "id", "wheelsDrive", 3, "carInput"], ["type", "submit"], [1, "error"]], template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Find your car now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function FiltersComponent_Template_form_submit_3_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FiltersComponent_option_10_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FiltersComponent_option_17_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FiltersComponent_div_23_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Fuel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, FiltersComponent_option_30_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, FiltersComponent_option_37_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "WD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, FiltersComponent_option_44_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.filtersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getModels(ctx.filtersForm.controls.make.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filtersForm.controls.year.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fuelTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gearTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.wheelsDriveTypes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _service_car_input_directive__WEBPACK_IMPORTED_MODULE_8__["CarInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".filter-card[_ngcontent-%COMP%] {\n  padding-left: 10vw;\n  padding-right: 4vw;\n  padding-top: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9maWx0ZXJzL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFxjYXJzXFxmaWx0ZXJzXFxmaWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY2Fycy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWNhcmQge1xuICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gIHBhZGRpbmctcmlnaHQ6IDR2dztcbiAgcGFkZGluZy10b3A6IDN2aDtcbn1cbiIsIi5maWx0ZXItY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogMTB2dztcbiAgcGFkZGluZy1yaWdodDogNHZ3O1xuICBwYWRkaW5nLXRvcDogM3ZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-filters',
                templateUrl: './filters.component.html',
                styleUrls: ['./filters.component.scss']
            }]
    }], function () { return [{ type: _cars_http_service__WEBPACK_IMPORTED_MODULE_6__["CarsHttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cars/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/cars/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../local-store.service */ "./src/app/local-store.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FooterComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FooterComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "transform": a0 }; };
const _c1 = function (a0, a1) { return { "margin-right": a0, "margin-left": a1 }; };
class FooterComponent {
    constructor(cd, localStore) {
        this.cd = cd;
        this.localStore = localStore;
        this.height = 280;
    }
    ngOnInit() {
    }
    get loggedInFlag() {
        return this.localStore.getToken();
    }
    showTitle(height) {
        if (this.height !== height) {
            this.height = height;
            this.cd.detectChanges();
        }
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 62, vars: 10, consts: [[1, "footer-container"], [1, "description"], ["href", "/", 1, "logo"], ["src", "../../../assets/images/navigator/logo.svg"], [1, "social-networks"], ["href", "https://www.facebook.com/"], [1, "icon-facebook-squared"], ["href", "https://telegram.org/"], [1, "icon-telegram"], ["href", "https://vk.com/"], [1, "icon-vkontakte"], ["href", "https://www.instagram.com/"], [1, "icon-instagram"], ["href", "https://slack.com/"], [1, "icon-slack"], [1, "title-container", 3, "ngStyle"], ["title", ""], [1, "title", 3, "ngStyle"], [1, "page-links"], ["href", "search"], ["href", "let-car-work"], ["href", "terms-of-use"], [4, "ngIf", "ngIfElse"], ["logout", ""], [1, "top-cities-container"], [1, "title"], [1, "top-cities"], ["href", "search/results?city=Rome"], ["href", "search/results?city=Tokyo"], ["href", "search/results?city=Paris"], ["href", "search/results?city=London"], ["href", "search/results?city=Los%20Angeles"], ["href", "search/results?city=Moscow"], ["href", "search/results?city=Warsaw"], ["href", "search/results?city=Berlin"], ["href", "search/results?city=Vienna"], ["href", "search/results?city=Tel%20Aviv"], [1, "address-container"], ["href", "tel:886-720-5721", 1, "telephone"], ["href", "https://www.google.com/maps?q=1600 Amphitheatre Pkwy Mountain View, CA 94043, USA", 1, "address"], ["href", "registration"], ["href", "login"], ["href", "logout"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Best solution for rent your car when you are on holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The ultimate car rental service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Let the car work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FooterComponent_ng_container_28_Template, 5, 0, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FooterComponent_ng_template_29_Template, 2, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Top cities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Rome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Tokyo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Paris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "London");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Los Angeles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Moscow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Warsaw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Berlin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Vienna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Tel Aviv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "address", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "866-720-5721");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 1600 Amphitheatre Pkwy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Mountain View, CA 94043, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "skew(45deg) translateX(calc(" + ctx.height / 2 + " * -1px - 8vw))"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.showTitle(_r0.clientHeight), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, ctx.height / 2 + "px", "calc(" + ctx.height / 2 + "px + 8vw)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedInFlag)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".footer-container[_ngcontent-%COMP%] {\n  background: #062639;\n  display: grid;\n  padding-top: 3vh;\n  padding-right: 8vw;\n  padding-left: 8vw;\n  grid-template-areas: \"description description logo social social\" \"title title title navigator navigator\" \"title title title cities address\" \"title title title cities address\";\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%] {\n    padding-top: 0.2rem;\n    grid-template-areas: \"logo ... ... social\" \"title title title address\";\n  }\n}\n.footer-container[_ngcontent-%COMP%]   span.description[_ngcontent-%COMP%] {\n  grid-area: description;\n  font: 1rem/1.5em \"Rawline Regular\";\n  color: white;\n  align-self: center;\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   span.description[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\n  align-self: center;\n  grid-area: logo;\n  display: grid;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 1rem;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .social-networks[_ngcontent-%COMP%] {\n  grid-area: social;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.footer-container[_ngcontent-%COMP%]   .social-networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font: normal 2rem/2em \"Font Awesome 5 Brands\";\n  letter-spacing: 0.1em;\n  margin: 0 0.5em;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   .social-networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  grid-area: title;\n  display: flex;\n  background-color: #EA2340;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n    transform: skew(45deg) translateX(-2rem);\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  transform: skew(-45deg);\n  font: normal 5rem/1em Bebas Neue;\n  color: #FFFFFF;\n  text-transform: capitalize;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-left: calc(2rem + 2vw);\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .page-links[_ngcontent-%COMP%] {\n  grid-area: navigator;\n  justify-content: flex-end;\n  display: flex;\n  margin-bottom: 2rem;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   .page-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .page-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font: 1rem/1.2em \"Rawline SemiBold\";\n  color: #FFFFFF;\n  margin: 0 1em;\n}\n.footer-container[_ngcontent-%COMP%]   .page-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.footer-container[_ngcontent-%COMP%]   .page-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.footer-container[_ngcontent-%COMP%]   .top-cities-container[_ngcontent-%COMP%] {\n  grid-area: cities;\n  z-index: 1;\n  margin-left: auto;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   .top-cities-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .top-cities-container[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n  font: 1rem/1.5em \"Rawline Regular\";\n  color: #FFFFFF;\n}\n.footer-container[_ngcontent-%COMP%]   .top-cities-container[_ngcontent-%COMP%]   .top-cities[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 1em;\n}\n.footer-container[_ngcontent-%COMP%]   .top-cities-container[_ngcontent-%COMP%]   .top-cities[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font: 1rem/1.5em \"Rawline Regular\";\n  color: #FFFFFF;\n}\n.footer-container[_ngcontent-%COMP%]   address.address-container[_ngcontent-%COMP%] {\n  grid-area: address;\n  justify-content: end;\n  display: grid;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   address.address-container[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    align-content: center;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   address.address-container[_ngcontent-%COMP%]   a.telephone[_ngcontent-%COMP%] {\n  text-align: right;\n  font: Bold 4rem/1em Bebas Neue;\n  color: #EA2340;\n  text-decoration: none;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   address.address-container[_ngcontent-%COMP%]   a.telephone[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    grid-column: 1/-1;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   address.address-container[_ngcontent-%COMP%]   a.address[_ngcontent-%COMP%] {\n  font: 1rem/1.5em \"Rawline Regular\";\n  color: #FFFFFF;\n  text-align: right;\n  text-decoration: none;\n}\n@media screen and (max-width: 1200px), (orientation: portrait) {\n  .footer-container[_ngcontent-%COMP%]   address.address-container[_ngcontent-%COMP%]   a.address[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9mb290ZXIvQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXGNhcnNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL2Zvb3Rlci9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NhcnMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLG1CQ0RNO0VERU4sYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLCtLQUNFO0FFSEo7QUZRRTtFQWRGO0lBZUksbUJBQUE7SUFDQSxzRUFDRTtFRU5KO0FBQ0Y7QUZTRTtFQUNFLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRVBKO0FGU0k7RUFQRjtJQVFJLGFBQUE7RUVOSjtBQUNGO0FGU0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRVBKO0FGU0k7RUFFRTtJQUNFLFlBQUE7RUVSTjtBQUNGO0FGWUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FFVko7QUZZSTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRVZOO0FGWU07RUFORjtJQU9JLGVBQUE7RUVUTjtBQUNGO0FGYUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkNyRUU7QUMwRE47QUZhSTtFQUxGO0lBTUksd0NBQUE7RUVWSjtBQUNGO0FGWUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQU9BLGNDcEZFO0VEcUZGLDBCQUFBO0FFaEJOO0FGVU07RUFORjtJQU9JLGVBQUE7SUFDQSw2QkFBQTtFRVBOO0FBQ0Y7QUZjRTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUVaSjtBRmNJO0VBTkY7SUFPSSxhQUFBO0VFWEo7QUFDRjtBRmFJO0VBQ0UsbUNBQUE7RUFDQSxjQ3JHRTtFRHNHRixhQUFBO0FFWE47QUZhTTtFQUNFLGNBQUE7QUVYUjtBRmNNO0VBQ0UsZUFBQTtBRVpSO0FGaUJFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUVmSjtBRmlCSTtFQUxGO0lBTUksYUFBQTtFRWRKO0FBQ0Y7QUZnQkk7RUFDRSxrQ0FBQTtFQUNBLGNDN0hFO0FDK0dSO0FGaUJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUVmTjtBRmlCTTtFQUNFLGtDQUFBO0VBQ0EsY0N2SUE7QUN3SFI7QUZvQkU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBRWxCSjtBRm9CSTtFQUxGO0lBTUksaUJBQUE7SUFDQSxxQkFBQTtFRWpCSjtBQUNGO0FGbUJJO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNDM0pBO0VENEpBLHFCQUFBO0FFakJOO0FGbUJNO0VBTkY7SUFPSSxlQUFBO0lBQ0EsaUJBQUE7RUVoQk47QUFDRjtBRm1CSTtFQUNFLGtDQUFBO0VBQ0EsY0NwS0U7RURxS0YsaUJBQUE7RUFDQSxxQkFBQTtBRWpCTjtBRm1CTTtFQU5GO0lBT0ksYUFBQTtFRWhCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2Fycy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xuLmZvb3Rlci1jb250YWluZXIge1xuXG4gIGJhY2tncm91bmQ6ICRibGFjaztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZy10b3A6IDN2aDtcbiAgcGFkZGluZy1yaWdodDogOHZ3O1xuICBwYWRkaW5nLWxlZnQ6IDh2dztcblxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBsb2dvIHNvY2lhbCBzb2NpYWwnXG4gICAgJ3RpdGxlIHRpdGxlIHRpdGxlIG5hdmlnYXRvciBuYXZpZ2F0b3InXG4gICAgJ3RpdGxlIHRpdGxlIHRpdGxlIGNpdGllcyBhZGRyZXNzJ1xuICAgICd0aXRsZSB0aXRsZSB0aXRsZSBjaXRpZXMgYWRkcmVzcyc7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIHBhZGRpbmctdG9wOiAuMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgJ2xvZ28gLi4uIC4uLiBzb2NpYWwnXG4gICAgICAndGl0bGUgdGl0bGUgdGl0bGUgYWRkcmVzcyc7XG4gIH1cblxuICBzcGFuLmRlc2NyaXB0aW9uIHtcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuICAgIGZvbnQ6IDFyZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIGEubG9nbyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogbG9nbztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc29jaWFsLW5ldHdvcmtzIHtcbiAgICBncmlkLWFyZWE6IHNvY2lhbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIGEge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udDogbm9ybWFsIDJyZW0vMmVtIFwiRm9udCBBd2Vzb21lIDUgQnJhbmRzXCI7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICAgIG1hcmdpbjogMCAuNWVtO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIHRyYW5zZm9ybTogc2tldyg0NWRlZykgdHJhbnNsYXRlWCgtMnJlbSk7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgdHJhbnNmb3JtOiBza2V3KC00NWRlZyk7XG4gICAgICBmb250OiBub3JtYWwgNXJlbS8xZW0gQmViYXMgTmV1ZTtcblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDJyZW0gKyAydncpO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICB9XG5cbiAgLnBhZ2UtbGlua3Mge1xuICAgIGdyaWQtYXJlYTogbmF2aWdhdG9yO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGZvbnQ6IDFyZW0vMS4yZW0gXCJSYXdsaW5lIFNlbWlCb2xkXCI7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgbWFyZ2luOiAwIDFlbTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRvcC1jaXRpZXMtY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IGNpdGllcztcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBzcGFuLnRpdGxlIHtcbiAgICAgIGZvbnQ6IDFyZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuXG4gICAgLnRvcC1jaXRpZXMge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xuXG4gICAgICBhIHtcbiAgICAgICAgZm9udDogMXJlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZHJlc3MuYWRkcmVzcy1jb250YWluZXIge1xuICAgIGdyaWQtYXJlYTogYWRkcmVzcztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBhLnRlbGVwaG9uZSB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZvbnQ6IEJvbGQgNHJlbS8xZW0gQmViYXMgTmV1ZTtcbiAgICAgIGNvbG9yOiAkcmVkO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhLmFkZHJlc3Mge1xuICAgICAgZm9udDogMXJlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkc2hhZG93OiAwIC4zdmggLjN2dyAjMDAwMDAwNUY7XG4kcmVkOiAjRUEyMzQwO1xuJGJsYWNrOiAjMDYyNjM5O1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM1RjcyN0U7XG4kZGFyay1ncmV5OiAjMDYyNjM5OTg7XG4kdHJhbnNwYXJlbnQ6ICMwMDAwMDAwMDtcbiR0cmFuc3BhcmVudC13aGl0ZTogI0ZGRkZGRjQwO1xuJHRyYW5zcGFyZW50LXdoaXRlLXN0cm9uZzogI0ZGRkZGRjgwO1xuXG4iLCIuZm9vdGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMwNjI2Mzk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmctdG9wOiAzdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDh2dztcbiAgcGFkZGluZy1sZWZ0OiA4dnc7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gbG9nbyBzb2NpYWwgc29jaWFsXCIgXCJ0aXRsZSB0aXRsZSB0aXRsZSBuYXZpZ2F0b3IgbmF2aWdhdG9yXCIgXCJ0aXRsZSB0aXRsZSB0aXRsZSBjaXRpZXMgYWRkcmVzc1wiIFwidGl0bGUgdGl0bGUgdGl0bGUgY2l0aWVzIGFkZHJlc3NcIjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvb3Rlci1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsb2dvIC4uLiAuLi4gc29jaWFsXCIgXCJ0aXRsZSB0aXRsZSB0aXRsZSBhZGRyZXNzXCI7XG4gIH1cbn1cbi5mb290ZXItY29udGFpbmVyIHNwYW4uZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuICBmb250OiAxcmVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuZm9vdGVyLWNvbnRhaW5lciBzcGFuLmRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZm9vdGVyLWNvbnRhaW5lciBhLmxvZ28ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtYXJlYTogbG9nbztcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5mb290ZXItY29udGFpbmVyIGEubG9nbyBpbWcge1xuICAgIGhlaWdodDogMXJlbTtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgLnNvY2lhbC1uZXR3b3JrcyB7XG4gIGdyaWQtYXJlYTogc29jaWFsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmZvb3Rlci1jb250YWluZXIgLnNvY2lhbC1uZXR3b3JrcyBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250OiBub3JtYWwgMnJlbS8yZW0gXCJGb250IEF3ZXNvbWUgNSBCcmFuZHNcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBtYXJnaW46IDAgMC41ZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5mb290ZXItY29udGFpbmVyIC5zb2NpYWwtbmV0d29ya3MgYSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4uZm9vdGVyLWNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBMjM0MDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiBza2V3KDQ1ZGVnKSB0cmFuc2xhdGVYKC0ycmVtKTtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgLnRpdGxlLWNvbnRhaW5lciAudGl0bGUge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB0cmFuc2Zvcm06IHNrZXcoLTQ1ZGVnKTtcbiAgZm9udDogbm9ybWFsIDVyZW0vMWVtIEJlYmFzIE5ldWU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLnRpdGxlLWNvbnRhaW5lciAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygycmVtICsgMnZ3KTtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgLnBhZ2UtbGlua3Mge1xuICBncmlkLWFyZWE6IG5hdmlnYXRvcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLnBhZ2UtbGlua3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5mb290ZXItY29udGFpbmVyIC5wYWdlLWxpbmtzIGEge1xuICBmb250OiAxcmVtLzEuMmVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwIDFlbTtcbn1cbi5mb290ZXItY29udGFpbmVyIC5wYWdlLWxpbmtzIGE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5wYWdlLWxpbmtzIGE6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5mb290ZXItY29udGFpbmVyIC50b3AtY2l0aWVzLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogY2l0aWVzO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLnRvcC1jaXRpZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZm9vdGVyLWNvbnRhaW5lciAudG9wLWNpdGllcy1jb250YWluZXIgc3Bhbi50aXRsZSB7XG4gIGZvbnQ6IDFyZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAudG9wLWNpdGllcy1jb250YWluZXIgLnRvcC1jaXRpZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMWVtO1xufVxuLmZvb3Rlci1jb250YWluZXIgLnRvcC1jaXRpZXMtY29udGFpbmVyIC50b3AtY2l0aWVzIGEge1xuICBmb250OiAxcmVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZvb3Rlci1jb250YWluZXIgYWRkcmVzcy5hZGRyZXNzLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogYWRkcmVzcztcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5mb290ZXItY29udGFpbmVyIGFkZHJlc3MuYWRkcmVzcy1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgYWRkcmVzcy5hZGRyZXNzLWNvbnRhaW5lciBhLnRlbGVwaG9uZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250OiBCb2xkIDRyZW0vMWVtIEJlYmFzIE5ldWU7XG4gIGNvbG9yOiAjRUEyMzQwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5mb290ZXItY29udGFpbmVyIGFkZHJlc3MuYWRkcmVzcy1jb250YWluZXIgYS50ZWxlcGhvbmUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgYWRkcmVzcy5hZGRyZXNzLWNvbnRhaW5lciBhLmFkZHJlc3Mge1xuICBmb250OiAxcmVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuZm9vdGVyLWNvbnRhaW5lciBhZGRyZXNzLmFkZHJlc3MtY29udGFpbmVyIGEuYWRkcmVzcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cars/fuel.ts":
/*!******************************!*\
  !*** ./src/app/cars/fuel.ts ***!
  \******************************/
/*! exports provided: FuelType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelType", function() { return FuelType; });
class FuelType {
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
    static getFuels() {
        return [FuelType.DIESEL, FuelType.PETROL, FuelType.HYBRID, FuelType.ELECTRIC, FuelType.GAS];
    }
}
FuelType.DIESEL = new FuelType('Diesel', 'Diesel');
FuelType.PETROL = new FuelType('Petrol', 'Petrol');
FuelType.HYBRID = new FuelType('Hybrid', 'Hybrid');
FuelType.ELECTRIC = new FuelType('Electric', 'Electric');
FuelType.GAS = new FuelType('Gas', 'Gas');


/***/ }),

/***/ "./src/app/cars/gear-types.ts":
/*!************************************!*\
  !*** ./src/app/cars/gear-types.ts ***!
  \************************************/
/*! exports provided: GearTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearTypes", function() { return GearTypes; });
class GearTypes {
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
    static getGears() {
        return [
            this.AT, this.MT, this.SMT
        ];
    }
}
GearTypes.AT = new GearTypes('AT', 'AT');
GearTypes.MT = new GearTypes('MT', 'MT');
GearTypes.SMT = new GearTypes('SMT', 'SMT');


/***/ }),

/***/ "./src/app/cars/imgur-photo.service.ts":
/*!*********************************************!*\
  !*** ./src/app/cars/imgur-photo.service.ts ***!
  \*********************************************/
/*! exports provided: ImgurPhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgurPhotoService", function() { return ImgurPhotoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class ImgurPhotoService {
    constructor(httpService) {
        this.httpService = httpService;
        this.URL = 'https://api.imgur.com/3/image';
    }
    uploadPhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.URL, formData, {
            reportProgress: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Authorization', `Client-ID 22aa3aa25869147`)
        });
        return this.httpService.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(event => this.getEventMessage(event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    }
    handleErrors(error) {
        if (!error.status) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(`Connection error, try again`);
        }
        if (error.status === 400) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Bad image');
        }
        if (error.status === 429) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('To much photo uploaded. Please try again later');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    }
    getEventMessage(event) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
                return { uploaded: false, percentage: 0 };
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                const percentage = Math.round(event.loaded / event.total * 100);
                return { uploaded: false, percentage };
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                return { uploaded: true, data: event.body };
            default:
                return { uploaded: false };
        }
    }
}
ImgurPhotoService.ɵfac = function ImgurPhotoService_Factory(t) { return new (t || ImgurPhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ImgurPhotoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImgurPhotoService, factory: ImgurPhotoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgurPhotoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cars/let-car-work/let-car-work.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cars/let-car-work/let-car-work.component.ts ***!
  \*************************************************************/
/*! exports provided: LetCarWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetCarWorkComponent", function() { return LetCarWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fuel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fuel */ "./src/app/cars/fuel.ts");
/* harmony import */ var _wheels_drive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wheels-drive */ "./src/app/cars/wheels-drive.ts");
/* harmony import */ var _gear_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gear-types */ "./src/app/cars/gear-types.ts");
/* harmony import */ var _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/dialog/dialog-builder */ "./src/app/service/dialog/dialog-builder.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors */ "./src/app/errors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools */ "./src/app/tools.ts");
/* harmony import */ var _imgur_photo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imgur-photo.service */ "./src/app/cars/imgur-photo.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _cars_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cars-http.service */ "./src/app/cars/cars-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _service_static_location_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../service/static-location.service */ "./src/app/service/static-location.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_car_input_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../service/car-input.directive */ "./src/app/service/car-input.directive.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/cars/footer/footer.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
























const _c0 = ["addressInput"];
function LetCarWorkComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Wrong address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Make is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Model is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Year required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Wrong year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LetCarWorkComponent_div_40_div_1_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LetCarWorkComponent_div_40_div_2_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.getErrors("year").required && !ctx_r8.getErrors("year").min && !ctx_r8.getErrors("year").max);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.getErrors("year").min || ctx_r8.getErrors("year").max);
} }
function LetCarWorkComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Engine is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fuel_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fuel_r39.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fuel_r39.name, " ");
} }
function LetCarWorkComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fuel is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gear_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gear_r40.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gear_r40.name, " ");
} }
function LetCarWorkComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Gear is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wheelsDrive_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", wheelsDrive_r41.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", wheelsDrive_r41.name, " ");
} }
function LetCarWorkComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Wheels drive required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_83_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Number of doors is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_83_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Car must have min 2 door ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_83_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " To much doors ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LetCarWorkComponent_div_83_div_1_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LetCarWorkComponent_div_83_div_2_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LetCarWorkComponent_div_83_div_3_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.getErrors("doors").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.getErrors("doors").min);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.getErrors("doors").max);
} }
function LetCarWorkComponent_div_91_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Number of seats is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_91_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Car must have min 2 seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_91_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " To much seats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LetCarWorkComponent_div_91_div_1_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LetCarWorkComponent_div_91_div_2_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LetCarWorkComponent_div_91_div_3_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.getErrors("seats").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.getErrors("seats").min);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.getErrors("seats").max);
} }
function LetCarWorkComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Car class is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_107_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fuel consumption is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_107_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fuel consumption must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_107_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " To much big fuel consumption ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fuel consumption is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LetCarWorkComponent_div_107_div_2_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LetCarWorkComponent_div_107_div_3_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LetCarWorkComponent_div_107_div_4_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.getErrors("fuelConsumption").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.getErrors("fuelConsumption").min);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.getErrors("fuelConsumption").max);
} }
function LetCarWorkComponent_div_115_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Car registration number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_115_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "To long car registration number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LetCarWorkComponent_div_115_div_1_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LetCarWorkComponent_div_115_div_2_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.getErrors("serialNumber").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.getErrors("serialNumber").maxlength);
} }
function LetCarWorkComponent_div_123_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Price is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_123_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Price must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_123_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " To much big price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LetCarWorkComponent_div_123_div_1_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LetCarWorkComponent_div_123_div_2_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LetCarWorkComponent_div_123_div_3_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.getErrors("price").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.getErrors("price").min);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.getErrors("price").max);
} }
function LetCarWorkComponent_div_131_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Included distance is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_131_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Included distance must be positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LetCarWorkComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LetCarWorkComponent_div_131_div_1_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LetCarWorkComponent_div_131_div_2_Template, 2, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.getErrors("distance").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.getErrors("distance").min);
} }
function LetCarWorkComponent_input_135_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LetCarWorkComponent_input_135_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const i_r59 = ctx.index; const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r61.features[i_r59] = _r60.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", feature_r58);
} }
function LetCarWorkComponent_div_149_mat_progress_bar_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 69);
} if (rf & 2) {
    const progress_r65 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", progress_r65);
} }
function LetCarWorkComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-chip", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function LetCarWorkComponent_div_149_Template_mat_chip_removed_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67); const file_r63 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r66.removePhoto(file_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LetCarWorkComponent_div_149_mat_progress_bar_5_Template, 1, 1, "mat-progress-bar", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r63 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r36.photosUrlsMap.get(file_r63) === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r36.photoNamesMap.get(file_r63), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.photosProgressMap.get(file_r63));
} }
class LetCarWorkComponent {
    constructor(photoService, formBuilder, title, httpService, router, cd, dialog, staticLocationService) {
        this.photoService = photoService;
        this.formBuilder = formBuilder;
        this.title = title;
        this.httpService = httpService;
        this.router = router;
        this.cd = cd;
        this.dialog = dialog;
        this.staticLocationService = staticLocationService;
        this.fuelTypes = _fuel__WEBPACK_IMPORTED_MODULE_3__["FuelType"].getFuels();
        this.wheelsDriveTypes = _wheels_drive__WEBPACK_IMPORTED_MODULE_4__["WheelsDriveTypes"].getWheelsDrives();
        this.gearTypes = _gear_types__WEBPACK_IMPORTED_MODULE_5__["GearTypes"].getGears();
        this.photoUrls = [];
        this.features = [''];
        this.fileNames = 'Add photos of your car';
        this.photosUrlsMap = new Map();
        this.photosProgressMap = new Map();
        this.photoNamesMap = new Map();
        this.loading = false;
        this.places = [];
        this.mapFormResultToCar = (_a) => {
            var { futures, pickUpPlace, wheelsDrive, serialNumber, fuelConsumption, carClass, distance, price } = _a, value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["futures", "pickUpPlace", "wheelsDrive", "serialNumber", "fuelConsumption", "carClass", "distance", "price"]);
            return Object.assign(Object.assign({}, value), { price_per_day: price, distance_included: distance, serial_number: serialNumber, fuel_consumption: fuelConsumption, wheels_drive: wheelsDrive, car_class: carClass, image_url: Array.from(this.photosUrlsMap.values()), features: this.features, pick_up_place: this.place });
        };
    }
    ngOnDestroy() {
        this.carDetailForm.controls.pickUpPlace.setValue(this.addressInput.nativeElement.value);
        this.carDetailForm.controls.photos.setValue(null);
        Object(_tools__WEBPACK_IMPORTED_MODULE_9__["saveFormData"])(this.carDetailForm, this.url);
        Object(_tools__WEBPACK_IMPORTED_MODULE_9__["saveAutocomplete"])(this.place);
        Object(_tools__WEBPACK_IMPORTED_MODULE_9__["saveFiles"])({
            photoNamesMap: this.photoNamesMap,
            photosProgressMap: this.photosProgressMap,
            photosUrlsMap: this.photosUrlsMap
        });
    }
    ngOnInit() {
        this.url = this.router.url;
        this.title.setTitle('Let the car work!');
        this.initForm();
        this.places = this.staticLocationService.getPlaces();
    }
    ngAfterViewInit() {
        this.addPickupPlaceValidator();
        this.cd.detectChanges();
    }
    uploadFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const photo = files.item(i);
            this.photosUrlsMap.set(photo, '');
            this.photosProgressMap.set(photo, 0);
            this.photoNamesMap.set(photo, photo.name);
            this.photoService.uploadPhoto(photo).subscribe(data => {
                if (data.uploaded) {
                    this.photosUrlsMap.set(photo, data.data.data.link);
                    this.photosProgressMap.delete(photo);
                }
                else {
                    if (data.percentage) {
                        this.photosProgressMap.set(photo, data.percentage);
                    }
                }
            }, error => {
                this.photosProgressMap.delete(photo);
                this.photosUrlsMap.delete(photo);
                this.photoNamesMap.set(photo, `Not loaded: ${photo.name}`);
            });
        }
    }
    addCar() {
        const urls = Array.from(this.photosUrlsMap.values());
        if (urls.includes('')) {
            this.carDetailForm.controls.photos.setErrors({
                notLoaded: 'photos not loaded'
            });
            this.carDetailForm.controls.photos.updateValueAndValidity();
            return;
        }
        if (urls.length === 0) {
            this.carDetailForm.controls.photos.setErrors({
                required: 'Photos required'
            });
            this.carDetailForm.controls.photos.updateValueAndValidity();
            return;
        }
        const car = this.mapFormResultToCar(this.carDetailForm.value);
        this.loading = true;
        this.httpService.addCar(car)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => this.loading = false))
            .subscribe(response => this.carAdded(response), error => this.showError(error));
    }
    isControlInvalid(controlName) {
        const control = this.carDetailForm.controls[controlName];
        return control.touched && control.invalid;
    }
    getErrors(controlName) {
        return this.carDetailForm.controls[controlName].errors;
    }
    removePhoto(file) {
        this.photosUrlsMap.delete(file);
        this.photosProgressMap.delete(file);
        this.photoNamesMap.delete(file);
    }
    isFormValid() {
        const urls = Array.from(this.photosUrlsMap.values());
        if (urls.includes('')) {
            this.carDetailForm.controls.photos.setErrors({
                notLoaded: 'photos not loaded'
            });
            this.carDetailForm.controls.photos.updateValueAndValidity();
            return false;
        }
        if (urls.length === 0) {
            this.carDetailForm.controls.photos.setErrors({
                required: 'Photos required'
            });
            this.carDetailForm.controls.photos.updateValueAndValidity();
            return false;
        }
        return this.carDetailForm.valid;
    }
    showError(error) {
        if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_7__["ConnectionError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_6__["DialogBuilder"](this.dialog)
                .title('Connection error')
                .message('Check your connection and try again')
                .negativeBtn('Close')
                .positiveBtn('Try again', this.addCar.bind(this))
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_7__["AuthorizationError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_6__["DialogBuilder"](this.dialog)
                .title('Authorization error')
                .message('You need login or register before rent car')
                .negativeBtn('Close')
                .neutralBtn('Registration', () => this.router.navigate(['/registration'], { queryParams: { url: decodeURI(this.router.url) } }))
                .positiveBtn('Login', () => this.router.navigate(['/login'], { queryParams: { url: decodeURI(this.router.url) } }))
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_7__["AuthenticationError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_6__["DialogBuilder"](this.dialog)
                .title('Forbidden')
                .message('You cant add car from this account')
                .positiveBtn('Ok')
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_7__["BadRequestError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_6__["DialogBuilder"](this.dialog)
                .title('Bad request')
                .message('Wrong car data')
                .positiveBtn('Ok')
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_7__["ConflictError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_6__["DialogBuilder"](this.dialog)
                .title('Conflict')
                .message('Car with this serial number already exists')
                .positiveBtn('Ok')
                .show();
        }
        else {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_6__["DialogBuilder"](this.dialog)
                .title('Something goes wrong')
                .positiveBtn('Try again', this.addCar.bind(this))
                .negativeBtn('Close')
                .show();
        }
    }
    carAdded(car) {
        this.carDetailForm.reset();
        this.photosUrlsMap = new Map();
        this.photosProgressMap = new Map();
        this.photoNamesMap = new Map();
        this.place = null;
        this.addressText = '';
        Object(_tools__WEBPACK_IMPORTED_MODULE_9__["clearFromData"])(this.url);
        Object(_tools__WEBPACK_IMPORTED_MODULE_9__["clearSavedAutocomplete"])();
        Object(_tools__WEBPACK_IMPORTED_MODULE_9__["clearFilesForSave"])();
        new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_6__["DialogBuilder"](this.dialog)
            .title('Car added')
            .message(`${car.make} ${car.model} added successful`)
            .positiveBtn('Show car', () => this.router.navigate(['car', car.serial_number]))
            .negativeBtn('Add another car', () => this.router.navigate(['let-car-work']))
            .neutralBtn('Search cars', () => this.router.navigate(['/']))
            .show();
    }
    initForm() {
        const makeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        const modelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        const yearControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(new Date().getFullYear())
        ]);
        const engineControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        const fuelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        const gearControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        const wheelsDriveControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        const serialNumberControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]);
        const doorsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(8)]);
        const seatsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(20)]);
        const fuelConsumptionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]);
        const carClassControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        const pricePerDayControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(1000)]);
        const aboutControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        const distanceIncludeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]);
        const pickUpPlaceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
            updateOn: 'blur'
        });
        const imagesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        pickUpPlaceControl.setErrors({ error: `wrong address` });
        this.carDetailForm = this.formBuilder.group({
            make: makeControl,
            model: modelControl,
            year: yearControl,
            engine: engineControl,
            fuel: fuelControl,
            gear: gearControl,
            wheelsDrive: wheelsDriveControl,
            serialNumber: serialNumberControl,
            doors: doorsControl,
            seats: seatsControl,
            fuelConsumption: fuelConsumptionControl,
            carClass: carClassControl,
            price: pricePerDayControl,
            about: aboutControl,
            distance: distanceIncludeControl,
            pickUpPlace: pickUpPlaceControl,
            photos: imagesControl
        });
        Object(_tools__WEBPACK_IMPORTED_MODULE_9__["restoreFormData"])(this.carDetailForm, this.url);
        if (!this.addressText)
            this.addressText = this.carDetailForm.controls.pickUpPlace.value;
        const files = Object(_tools__WEBPACK_IMPORTED_MODULE_9__["restoreFiles"])();
        this.photosUrlsMap = (files === null || files === void 0 ? void 0 : files.photosUrlsMap) || new Map();
        this.photosProgressMap = (files === null || files === void 0 ? void 0 : files.photosProgressMap) || new Map();
        this.photoNamesMap = (files === null || files === void 0 ? void 0 : files.photoNamesMap) || new Map();
    }
    addPickupPlaceValidator() {
        const control = this.carDetailForm.get('pickUpPlace');
        if (!this.place)
            control.setErrors({ addressError: '' });
        control.valueChanges.subscribe(value => {
            const selectedPlace = this.places.find(place => place.formatted_address === value);
            if (selectedPlace) {
                this.place = {
                    longitude: selectedPlace.longitude,
                    latitude: selectedPlace.latitude,
                    place_id: selectedPlace.place_id
                };
                this.addressText = selectedPlace.formatted_address;
                control.setErrors(null);
                this.cd.detectChanges();
            }
            else if (!this.place) {
                control.setErrors({ addressError: '' });
            }
        });
    }
    onPlaceSelect(place) {
        this.place = {
            longitude: place.longitude,
            latitude: place.latitude,
            place_id: place.place_id
        };
        this.addressText = place.formatted_address;
        this.carDetailForm.get('pickUpPlace').setValue(place.formatted_address);
        this.carDetailForm.get('pickUpPlace').setErrors(null);
        this.cd.detectChanges();
    }
    get files() {
        return Array.from(this.photoNamesMap.keys());
    }
}
LetCarWorkComponent.ɵfac = function LetCarWorkComponent_Factory(t) { return new (t || LetCarWorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_imgur_photo_service__WEBPACK_IMPORTED_MODULE_10__["ImgurPhotoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cars_http_service__WEBPACK_IMPORTED_MODULE_12__["CarsHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_static_location_service__WEBPACK_IMPORTED_MODULE_15__["StaticLocationService"])); };
LetCarWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LetCarWorkComponent, selectors: [["app-let-car-work"]], viewQuery: function LetCarWorkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addressInput = _t.first);
    } }, decls: 153, vars: 40, consts: [["class", "progress-container", 4, "ngIf"], [1, "car-card"], [1, "title"], [1, "subtitle"], [3, "formGroup", "submit"], [1, "part-label"], [1, "input-container"], ["autocomplete", "address", "formControlName", "pickUpPlace", "id", "pickUpPlace", "placeholder", "Enter your address", "type", "text"], ["addressInput", ""], ["class", "error", 4, "ngIf"], [1, "address-data"], ["for", "make", 1, "input-label"], ["makeLabel", ""], [1, "required-marker"], ["formControlName", "make", "id", "make", "type", "text", 3, "carInput"], ["for", "model", 1, "input-label"], ["modelLabel", ""], ["formControlName", "model", "id", "model", "type", "text", 3, "carInput"], ["for", "year", 1, "input-label"], ["yearLabel", ""], ["formControlName", "year", "id", "year", "type", "number", 3, "carInput"], ["for", "engine", 1, "input-label"], ["engineLabel", ""], ["formControlName", "engine", "id", "engine", "type", "text", 3, "carInput"], [1, "select-container"], ["for", "fuel", 1, "select-label"], ["fuelLabel", ""], ["formControlName", "fuel", "id", "fuel", 3, "carInput"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "gear", 1, "select-label"], ["gearLabel", ""], ["formControlName", "gear", "id", "gear", 3, "carInput"], ["for", "wheelsDrive", 1, "select-label"], ["WDLabel", ""], ["formControlName", "wheelsDrive", "id", "wheelsDrive", 3, "carInput"], ["for", "doors", 1, "input-label"], ["doorsLabel", ""], ["formControlName", "doors", "id", "doors", "type", "number", 3, "carInput"], ["for", "seats", 1, "input-label"], ["seatsLabel", ""], ["formControlName", "seats", "id", "seats", "type", "number", 3, "carInput"], ["for", "class", 1, "input-label"], ["carClassLabel", ""], ["formControlName", "carClass", "id", "class", "type", "text", 3, "carInput"], ["for", "fuelConsumption", 1, "input-label"], ["fuelConsumptionLabel", ""], ["autocomplete", "none", "formControlName", "fuelConsumption", "id", "fuelConsumption", "type", "number", 3, "carInput"], ["for", "serialNumber", 1, "input-label"], ["serialNumberLabel", ""], ["formControlName", "serialNumber", "id", "serialNumber", "type", "text", 3, "carInput"], ["for", "price", 1, "input-label"], ["priceLabel", ""], ["formControlName", "price", "id", "price", "type", "number", 3, "carInput"], ["for", "distance", 1, "input-label"], ["distanceLabel", ""], ["formControlName", "distance", "id", "distance", "type", "number", 3, "carInput"], ["class", "feature-input", "placeholder", "Type feature", "type", "text", 3, "value", "change", 4, "ngFor", "ngForOf"], ["type", "button", 3, "disabled", "click"], [1, "input-container", "about-container"], ["formControlName", "about", "id", "about", "placeholder", "About (max 500 chars)", "rows", "10", "type", "text"], [1, "file-input-container"], ["formControlName", "photos", "id", "photos", "multiple", "", "type", "file", 3, "change"], ["uploadImage", ""], ["for", "photos", 1, "file-input-label"], ["class", "files-chip-container", 4, "ngFor", "ngForOf"], ["type", "submit", 3, "disabled"], [1, "progress-container"], [1, "error"], [4, "ngIf"], [3, "value"], ["placeholder", "Type feature", "type", "text", 1, "feature-input", 3, "value", "change"], ["input", ""], [1, "files-chip-container"], ["removable", "true", "selectable", "false", 3, "disabled", "removed"], ["matChipRemove", "", 1, "icon-cancel-circled"], [3, "value", 4, "ngIf"]], template: function LetCarWorkComponent_Template(rf, ctx) { if (rf & 1) {
        const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LetCarWorkComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Let the car work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Write some details about your car to rent it out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LetCarWorkComponent_Template_form_submit_6_listener() { return ctx.addCar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LetCarWorkComponent_div_12_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Car details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LetCarWorkComponent_div_24_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Model ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LetCarWorkComponent_div_32_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, LetCarWorkComponent_div_40_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Engine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, LetCarWorkComponent_div_48_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Fuel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, LetCarWorkComponent_option_56_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, LetCarWorkComponent_div_57_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Gear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, LetCarWorkComponent_option_65_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, LetCarWorkComponent_div_66_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "WD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, LetCarWorkComponent_option_74_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, LetCarWorkComponent_div_75_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Doors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, LetCarWorkComponent_div_83_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Seats ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, LetCarWorkComponent_div_91_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "label", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Car class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, LetCarWorkComponent_div_99_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "label", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Fuel consumption ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, LetCarWorkComponent_div_107_Template, 5, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "label", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Car registration number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, LetCarWorkComponent_div_115_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "label", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, LetCarWorkComponent_div_123_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "label", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Distance included ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, LetCarWorkComponent_div_131_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Features:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](135, LetCarWorkComponent_input_135_Template, 2, 1, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LetCarWorkComponent_Template_button_click_136_listener() { return ctx.features.push(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Add feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "About:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "textarea", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Photos of your car:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "input", 61, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LetCarWorkComponent_Template_input_change_145_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](146); return ctx.uploadFiles(_r35.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](149, LetCarWorkComponent_div_149_Template, 6, 3, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "app-footer");
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](60);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](78);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](86);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](94);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](102);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](110);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](118);
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.carDetailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("pickUpPlace"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.addressText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("make"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("model"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("year"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("engine"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fuelTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("fuel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gearTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("gear"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.wheelsDriveTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("wheelsDrive"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("doors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("seats"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("carClass"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("fuelConsumption"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("serialNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("distance"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.features[ctx.features.length - 1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fileNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isFormValid());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _service_car_input_directive__WEBPACK_IMPORTED_MODULE_17__["CarInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipRemove"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBar"]], styles: [".car-card[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n}\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .car-card[_ngcontent-%COMP%] {\n    margin-left: 9vw;\n    margin-top: 15vh;\n  }\n}\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .car-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    max-width: 30vw;\n  }\n}\n.car-card[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 3em;\n}\n.car-card[_ngcontent-%COMP%]   .part-label[_ngcontent-%COMP%] {\n  margin-top: 5vh;\n  font: 2em/1em \"Rawline Regular\";\n  color: #062639;\n}\n.car-card[_ngcontent-%COMP%]   .address-data[_ngcontent-%COMP%] {\n  font: 2em/1em \"Rawline Regular\";\n  color: #062639;\n  margin-top: 1em;\n}\n.car-card[_ngcontent-%COMP%]   .feature-input[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n}\n.car-card[_ngcontent-%COMP%]   .file-input-container[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  height: 2em;\n  margin-bottom: 1vh;\n}\n.car-card[_ngcontent-%COMP%]   .file-input-container[_ngcontent-%COMP%]   label.file-input-label[_ngcontent-%COMP%] {\n  border: 1px solid #5F727E;\n  position: absolute;\n  top: 0;\n  margin-bottom: 0;\n  padding: 0.5vh 0 0.5vh 1vw;\n  font: 2em/1em \"Rawline SemiBold\";\n  color: #062639;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.car-card[_ngcontent-%COMP%]   .file-input-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  font: 2em/1em \"Rawline SemiBold\";\n  opacity: 0;\n  width: 100%;\n  padding: 0.5vh 0 0.5vh 1vw;\n}\n.car-card[_ngcontent-%COMP%]   .file-input-container[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  border-color: #EA2340;\n}\n.car-card[_ngcontent-%COMP%]   .files-chip-container[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n.car-card[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  margin-top: 2vh;\n}\n.progress-container[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(255, 255, 255, 0.4);\n  z-index: 10;\n}\n.progress-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9sZXQtY2FyLXdvcmsvQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXGNhcnNcXGxldC1jYXItd29ya1xcbGV0LWNhci13b3JrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL2xldC1jYXItd29yay9sZXQtY2FyLXdvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnMvbGV0LWNhci13b3JrL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFLGtCQUFBO0FDRkY7QURJRTtFQUpGO0lBS0ksZ0JBQUE7SUFDQSxnQkFBQTtFQ0RGO0FBQ0Y7QURJSTtFQURGO0lBRUksZUFBQTtFQ0RKO0FBQ0Y7QURLRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0hKO0FETUU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxjRXhCSTtBRG9CUjtBRE9FO0VBQ0UsK0JBQUE7RUFDQSxjRTdCSTtFRjhCSixlQUFBO0FDTEo7QURRRTtFQUNFLGVBQUE7QUNOSjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUEo7QURTSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0VsREU7RUZtREYsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1BOO0FEVUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNSTjtBRFdJO0VBQ0UscUJFcEVBO0FEMkROO0FEYUU7RUFDRSxlQUFBO0FDWEo7QURjRTtFQUNFLGVBQUE7QUNaSjtBRGdCQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUNiRjtBRGVFO0VBQ0UsWUFBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvY2Fycy9sZXQtY2FyLXdvcmsvbGV0LWNhci13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xuXG4uY2FyLWNhcmQge1xuXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDl2dztcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xuICB9XG5cbiAgZm9ybSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgIH1cbiAgfVxuXG5cbiAgaDEudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG5cbiAgLnBhcnQtbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBmb250OiAyZW0vMWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gICAgY29sb3I6ICRibGFjaztcbiAgfVxuXG4gIC5hZGRyZXNzLWRhdGEge1xuICAgIGZvbnQ6IDJlbS8xZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuXG4gIC5mZWF0dXJlLWlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gIH1cblxuICAuZmlsZS1pbnB1dC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuXG4gICAgbGFiZWwuZmlsZS1pbnB1dC1sYWJlbCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAuNXZoIDAgLjV2aCAxdnc7XG4gICAgICBmb250OiAyZW0vMWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGZvbnQ6IDJlbS8xZW0gXCJSYXdsaW5lIFNlbWlCb2xkXCI7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAuNXZoIDAgLjV2aCAxdnc7XG4gICAgfVxuXG4gICAgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkICsgbGFiZWwge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkcmVkO1xuICAgIH1cbiAgfVxuXG4gIC5maWxlcy1jaGlwLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICB9XG5cbiAgYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICB9XG59XG5cbi5wcm9ncmVzcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICB6LWluZGV4OiAxMDtcblxuICBtYXQtc3Bpbm5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG4iLCIuY2FyLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5jYXItY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDl2dztcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5jYXItY2FyZCBmb3JtIHtcbiAgICBtYXgtd2lkdGg6IDMwdnc7XG4gIH1cbn1cbi5jYXItY2FyZCBoMS50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDNlbTtcbn1cbi5jYXItY2FyZCAucGFydC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgZm9udDogMmVtLzFlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogIzA2MjYzOTtcbn1cbi5jYXItY2FyZCAuYWRkcmVzcy1kYXRhIHtcbiAgZm9udDogMmVtLzFlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogIzA2MjYzOTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLmNhci1jYXJkIC5mZWF0dXJlLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuLmNhci1jYXJkIC5maWxlLWlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuLmNhci1jYXJkIC5maWxlLWlucHV0LWNvbnRhaW5lciBsYWJlbC5maWxlLWlucHV0LWxhYmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVGNzI3RTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNXZoIDAgMC41dmggMXZ3O1xuICBmb250OiAyZW0vMWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICBjb2xvcjogIzA2MjYzOTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNhci1jYXJkIC5maWxlLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGZvbnQ6IDJlbS8xZW0gXCJSYXdsaW5lIFNlbWlCb2xkXCI7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjV2aCAwIDAuNXZoIDF2dztcbn1cbi5jYXItY2FyZCAuZmlsZS1pbnB1dC1jb250YWluZXIgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkICsgbGFiZWwge1xuICBib3JkZXItY29sb3I6ICNFQTIzNDA7XG59XG4uY2FyLWNhcmQgLmZpbGVzLWNoaXAtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuLmNhci1jYXJkIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbi5wcm9ncmVzcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICB6LWluZGV4OiAxMDtcbn1cbi5wcm9ncmVzcy1jb250YWluZXIgbWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59IiwiJHNoYWRvdzogMCAuM3ZoIC4zdncgIzAwMDAwMDVGO1xuJHJlZDogI0VBMjM0MDtcbiRibGFjazogIzA2MjYzOTtcbiR3aGl0ZTogI0ZGRkZGRjtcbiRncmV5OiAjNUY3MjdFO1xuJGRhcmstZ3JleTogIzA2MjYzOTk4O1xuJHRyYW5zcGFyZW50OiAjMDAwMDAwMDA7XG4kdHJhbnNwYXJlbnQtd2hpdGU6ICNGRkZGRkY0MDtcbiR0cmFuc3BhcmVudC13aGl0ZS1zdHJvbmc6ICNGRkZGRkY4MDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LetCarWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-let-car-work',
                templateUrl: './let-car-work.component.html',
                styleUrls: ['./let-car-work.component.scss'],
            }]
    }], function () { return [{ type: _imgur_photo_service__WEBPACK_IMPORTED_MODULE_10__["ImgurPhotoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"] }, { type: _cars_http_service__WEBPACK_IMPORTED_MODULE_12__["CarsHttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] }, { type: _service_static_location_service__WEBPACK_IMPORTED_MODULE_15__["StaticLocationService"] }]; }, { addressInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['addressInput', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/cars/map/map.component.ts":
/*!*******************************************!*\
  !*** ./src/app/cars/map/map.component.ts ***!
  \*******************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors */ "./src/app/errors.ts");
/* harmony import */ var _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/dialog/dialog-builder */ "./src/app/service/dialog/dialog-builder.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cars_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cars-http.service */ "./src/app/cars/cars-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _service_static_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/static-location.service */ "./src/app/service/static-location.service.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");











const _c0 = ["mapContainer"];
function MapComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
} }
class MapComponent {
    constructor(route, http, router, decimalPipe, dialog, staticLocationService) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.decimalPipe = decimalPipe;
        this.dialog = dialog;
        this.staticLocationService = staticLocationService;
        this.showLoading = true;
        this.cars = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.params = Object.assign({}, params);
            this.loadCars();
        });
    }
    loadCars() {
        this.showLoading = true;
        this.http.getAllCars(this.params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.showLoading = false))
            .subscribe(cars => this.onCarsLoaded(cars), this.onError.bind(this));
    }
    onCarsLoaded(cars) {
        this.cars = cars;
    }
    onError(error) {
        if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_2__["ConnectionError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Connection error')
                .message('Check your connection and try again')
                .negativeBtn('Close')
                .positiveBtn('Try again', this.loadCars.bind(this))
                .show();
        }
        else {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Something goes wrong')
                .positiveBtn('Try again', this.loadCars.bind(this))
                .negativeBtn('Close')
                .show();
        }
    }
    navigateToCar(car) {
        const searchParams = {
            queryParams: {
                startDate: this.params.startDate,
                endDate: this.params.endDate
            }
        };
        this.router.navigate(['/car', car.serial_number], searchParams).then();
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cars_http_service__WEBPACK_IMPORTED_MODULE_5__["CarsHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_static_location_service__WEBPACK_IMPORTED_MODULE_8__["StaticLocationService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapContainer = _t.first);
    } }, decls: 3, vars: 2, consts: [[1, "gMap", 3, "hidden"], ["googleMap", ""], ["class", "loading", 4, "ngIf"], [1, "loading"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]], styles: [".loading[_ngcontent-%COMP%]{\n  margin: 30% auto;\n}\n.gMap[_ngcontent-%COMP%]{\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NhcnMvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmd7XG4gIG1hcmdpbjogMzAlIGF1dG87XG59XG4uZ01hcHtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _cars_http_service__WEBPACK_IMPORTED_MODULE_5__["CarsHttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _service_static_location_service__WEBPACK_IMPORTED_MODULE_8__["StaticLocationService"] }]; }, { mapContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapContainer', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/cars/search-navigator/search-navigator.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cars/search-navigator/search-navigator.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNavigatorComponent", function() { return SearchNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sub_search_sub_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub-search/sub-search.component */ "./src/app/cars/sub-search/sub-search.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filters/filters.component */ "./src/app/cars/filters/filters.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map/map.component */ "./src/app/cars/map/map.component.ts");







function SearchNavigatorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchNavigatorComponent_ng_template_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.currentTab = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchNavigatorComponent_ng_template_1_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.currentTab = 2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchNavigatorComponent_ng_template_1_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.currentTab = 3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitchTabs", "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitchTabs", "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitchTabs", "show");
} }
function SearchNavigatorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchNavigatorComponent_ng_template_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.currentTab = 2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchNavigatorComponent_ng_template_2_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.currentTab = 3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchNavigatorComponent_ng_template_2_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.currentTab = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitchTabs", "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitchTabs", "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitchTabs", "show");
} }
function SearchNavigatorComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchNavigatorComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.currentTab = 3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchNavigatorComponent_ng_template_3_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.currentTab = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchNavigatorComponent_ng_template_3_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.currentTab = 2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitchTabs", "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitchTabs", "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitchTabs", "show");
} }
class SearchNavigatorComponent {
    constructor() {
        this.currentTab = 1;
    }
    ngOnInit() {
    }
}
SearchNavigatorComponent.ɵfac = function SearchNavigatorComponent_Factory(t) { return new (t || SearchNavigatorComponent)(); };
SearchNavigatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchNavigatorComponent, selectors: [["app-search-navigator"]], decls: 11, vars: 10, consts: [[1, "nav-tabs", "animated", "fadeIn", 3, "ngSwitch"], [3, "ngSwitchCase"], [3, "hidden"], [1, "nav-tab", "active-tab", "search", 3, "click"], [1, "tab-label"], [1, "icon-search"], [1, "nav-tab", "filter", 3, "click"], [1, "icon-sliders"], [1, "nav-tab", "map", 3, "click"], [1, "icon-location"], [1, "nav-tab", "active-tab", "filter", 3, "click"], [1, "nav-tab", "search", 3, "click"], [1, "nav-tab", "active-tab", "map", 3, "click"]], template: function SearchNavigatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchNavigatorComponent_ng_template_1_Template, 10, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchNavigatorComponent_ng_template_2_Template, 10, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchNavigatorComponent_ng_template_3_Template, 10, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sub-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.currentTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitch", ctx.currentTab === 1 ? "show" : "void")("hidden", ctx.currentTab !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitch", ctx.currentTab === 2 ? "show" : "void")("hidden", ctx.currentTab !== 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ngSwitch", ctx.currentTab === 3 ? "show" : "void")("hidden", ctx.currentTab !== 3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _sub_search_sub_search_component__WEBPACK_IMPORTED_MODULE_3__["SubSearchComponent"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__["FiltersComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]], styles: [".nav-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  transform: translateX(-5%);\n}\n.nav-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  background: #062639;\n}\n.nav-tabs[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  background: #EA2340;\n}\n.nav-tabs[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  background: #5F727E;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-tab[_ngcontent-%COMP%] {\n  width: 100%;\n  transform: skewX(45deg);\n  padding: 1% 0;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-tab.active-tab[_ngcontent-%COMP%] {\n  width: 220%;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-tab[_ngcontent-%COMP%]   .tab-label[_ngcontent-%COMP%] {\n  font: 0.9rem/2em \"Rawline Regular\";\n  transform: skewX(-45deg) translate(-50%, -50%);\n  color: #FFFFFF;\n  position: relative;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9zZWFyY2gtbmF2aWdhdG9yL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFxjYXJzXFxzZWFyY2gtbmF2aWdhdG9yXFxzZWFyY2gtbmF2aWdhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL3NlYXJjaC1uYXZpZ2F0b3Ivc2VhcmNoLW5hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2Fycy9zZWFyY2gtbmF2aWdhdG9yL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtBQ0RGO0FER0U7RUFDRSxtQkVMSTtBRElSO0FESUU7RUFDRSxtQkVWRTtBRFFOO0FES0U7RUFDRSxtQkVYRztBRFFQO0FETUU7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDSko7QURNSTtFQUNFLFdBQUE7QUNKTjtBRE9JO0VBQ0Usa0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGNFM0JFO0VGNEJGLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDTE4iLCJmaWxlIjoic3JjL2FwcC9jYXJzL3NlYXJjaC1uYXZpZ2F0b3Ivc2VhcmNoLW5hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcblxuLm5hdi10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSk7XG5cbiAgLmZpbHRlciB7XG4gICAgYmFja2dyb3VuZDogJGJsYWNrO1xuICB9XG5cbiAgLnNlYXJjaCB7XG4gICAgYmFja2dyb3VuZDogJHJlZDtcbiAgfVxuXG4gIC5tYXAge1xuICAgIGJhY2tncm91bmQ6ICRncmV5O1xuICB9XG5cbiAgLm5hdi10YWIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2tld1goNDVkZWcpO1xuICAgIHBhZGRpbmc6IDElIDA7XG5cbiAgICAmLmFjdGl2ZS10YWIge1xuICAgICAgd2lkdGg6IDIyMCU7XG4gICAgfVxuXG4gICAgLnRhYi1sYWJlbCB7XG4gICAgICBmb250OiAuOXJlbS8yZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgICAgIHRyYW5zZm9ybTogc2tld1goLTQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgfVxuICB9XG59XG4iLCIubmF2LXRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKTtcbn1cbi5uYXYtdGFicyAuZmlsdGVyIHtcbiAgYmFja2dyb3VuZDogIzA2MjYzOTtcbn1cbi5uYXYtdGFicyAuc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI0VBMjM0MDtcbn1cbi5uYXYtdGFicyAubWFwIHtcbiAgYmFja2dyb3VuZDogIzVGNzI3RTtcbn1cbi5uYXYtdGFicyAubmF2LXRhYiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHNrZXdYKDQ1ZGVnKTtcbiAgcGFkZGluZzogMSUgMDtcbn1cbi5uYXYtdGFicyAubmF2LXRhYi5hY3RpdmUtdGFiIHtcbiAgd2lkdGg6IDIyMCU7XG59XG4ubmF2LXRhYnMgLm5hdi10YWIgLnRhYi1sYWJlbCB7XG4gIGZvbnQ6IDAuOXJlbS8yZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgdHJhbnNmb3JtOiBza2V3WCgtNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufSIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('ngSwitch', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => show', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(100%)'
                    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms')])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('ngSwitchTabs', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'skewX(45deg)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(100%) skewX(45deg)'
                    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms')])
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchNavigatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-navigator',
                templateUrl: './search-navigator.component.html',
                styleUrls: ['./search-navigator.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('ngSwitch', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => show', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(100%)'
                            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms')])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('ngSwitchTabs', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'skewX(45deg)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(100%) skewX(45deg)'
                            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms')])
                    ]),
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cars/search-results/search-results.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cars/search-results/search-results.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./src/app/errors.ts");
/* harmony import */ var _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/dialog/dialog-builder */ "./src/app/service/dialog/dialog-builder.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools */ "./src/app/tools.ts");
/* harmony import */ var _cars_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cars-http.service */ "./src/app/cars/cars-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _search_navigator_search_navigator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search-navigator/search-navigator.component */ "./src/app/cars/search-navigator/search-navigator.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/cars/footer/footer.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _service_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/car-card/car-card.component */ "./src/app/service/car-card/car-card.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");















function SearchResultsComponent_ng_container_4_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "car-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/car/" + car_r7.serial_number + "?startDate=" + ctx_r6.startDate + "&endDate=" + ctx_r6.endDate, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("car", car_r7);
} }
const _c0 = function () { return [10, 20, 50]; };
function SearchResultsComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchResultsComponent_ng_container_4_ng_container_1_a_2_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-paginator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function SearchResultsComponent_ng_container_4_ng_container_1_Template_mat_paginator_page_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.changePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.cars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r5.length)("pageIndex", ctx_r5.page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("pageSize", ctx_r5.pageSize);
} }
function SearchResultsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchResultsComponent_ng_container_4_ng_container_1_Template, 4, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cars.length > 0)("ngIfElse", _r3);
} }
function SearchResultsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 11);
} }
function SearchResultsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No available cars in ", ctx_r4.city, "");
} }
class SearchResultsComponent {
    constructor(httpService, router, route, title, dialog) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.title = title;
        this.dialog = dialog;
        this.sortByPriceFromLowToHigh = true;
        this.page = 0;
        this.length = 0;
        this.pageSize = 10;
    }
    ngOnInit() {
        /**
         * Get query params for for search request
         */
        this.route.queryParams.subscribe(params => {
            this.city = params.city;
            this.startDate = params.startDate;
            this.endDate = params.endDate;
            this.minPrice = params.minPrice;
            this.maxPrice = params.maxPrice;
            this.sortByPriceFromLowToHigh = params.ascending === undefined ? true : params.ascending === 'true';
            this.page = params.currentPage;
            this.pageSize = params.itemsOnPage;
            this.title.setTitle(`Cars in ${this.city}`);
            this.params = Object.assign({}, params);
            this.search();
        });
    }
    /**
     * Change page:
     * On change page click receive
     * @param event - param with data about changed page
     * and change current page by navigating
     */
    changePage(event) {
        this.pageSize = event.pageSize;
        this.page = event.pageIndex;
        this.params.currentPage = this.page;
        this.params.itemsOnPage = this.pageSize;
        const searchParams = {
            queryParams: this.params
        };
        this.router.navigate(['/search/results'], searchParams).then();
    }
    /**
     * Get cars from server with params
     */
    search() {
        const cars = this.cars;
        this.cars = undefined;
        this.httpService.searchCarsByFilters(this.params)
            .subscribe(results => this.onSearchSuccess(results), error => this.onSearchError(error, cars));
    }
    onSearchError(error, cars) {
        this.cars = cars;
        if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__["ConnectionError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__["DialogBuilder"](this.dialog)
                .title('Connection error')
                .message('Check your connection and try again')
                .negativeBtn('Close')
                .positiveBtn('Try again', this.search.bind(this))
                .show();
        }
        else {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__["DialogBuilder"](this.dialog)
                .title('Something goes wrong')
                .positiveBtn('Try again', this.search.bind(this))
                .negativeBtn('Close')
                .show();
        }
    }
    onSearchSuccess(searchResults) {
        this.length = searchResults.items_total;
        this.cars = searchResults.cars.sort((car1, car2) => Object(_tools__WEBPACK_IMPORTED_MODULE_3__["compareCars"])(car1, car2, this.sortByPriceFromLowToHigh));
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cars_http_service__WEBPACK_IMPORTED_MODULE_4__["CarsHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], decls: 10, vars: 2, consts: [[1, "search-results-card"], [1, "search-result-navigator"], [1, "search-results"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["noCars", ""], [1, "cars-container"], ["class", "car-container", 3, "href", 4, "ngFor", "ngForOf"], [3, "length", "pageIndex", "pageSizeOptions", "pageSize", "page"], [1, "car-container", 3, "href"], [3, "car"], [1, "loading"], [1, "no-cars-label"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search-navigator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchResultsComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchResultsComponent_ng_template_5_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchResultsComponent_ng_template_7_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cars)("ngIfElse", _r1);
    } }, directives: [_search_navigator_search_navigator_component__WEBPACK_IMPORTED_MODULE_8__["SearchNavigatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _service_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_12__["CarCardComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], styles: [".search-results-card[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 2vw;\n}\n@media screen and (max-width: 800px), screen and (orientation: portrait) {\n  .search-results-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.search-results-card[_ngcontent-%COMP%]   .search-result-navigator[_ngcontent-%COMP%] {\n  flex-basis: calc(6 / 19 * 100%);\n}\n.search-results-card[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  flex-basis: calc(13 / 19 * 100%);\n  padding-left: 4vw;\n  padding-right: 4vw;\n  padding-top: calc(1.8rem + 1%);\n  min-height: 80vh;\n}\n.search-results-card[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 0.4vw;\n}\n@media screen and (max-width: 800px), screen and (orientation: portrait) {\n  .search-results-card[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.search-results-card[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   a.car-container[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: 0.2vw 0.2vw 0.4vh 0.1vw #0000005E;\n}\n.search-results-card[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  margin: 30% auto;\n}\n.search-results-card[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   h3.no-cars-label[_ngcontent-%COMP%] {\n  font: Bold 3rem/1.5em \"Rawline Regular\";\n  color: #EA2340;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9zZWFyY2gtcmVzdWx0cy9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcY2Fyc1xcc2VhcmNoLXJlc3VsdHNcXHNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL3NlYXJjaC1yZXN1bHRzL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0U7RUFKRjtJQUtJLHNCQUFBO0VDQUY7QUFDRjtBREVFO0VBQ0UsK0JBQUE7QUNBSjtBREdFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDRE47QURHTTtFQUxGO0lBTUksMEJBQUE7RUNBTjtBQUNGO0FER1E7RUFDRSxxQkFBQTtFQUNBLDZDQUFBO0FDRFY7QURNSTtFQUNFLGdCQUFBO0FDSk47QURPSTtFQUNFLHVDQUFBO0VBQ0EsY0UzQ0E7RUY0Q0Esa0JBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XG5cbi5zZWFyY2gtcmVzdWx0cy1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDJ2dztcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zZWFyY2gtcmVzdWx0LW5hdmlnYXRvciB7XG4gICAgZmxleC1iYXNpczogY2FsYyg2IC8gMTkgKiAxMDAlKTtcbiAgfVxuXG4gIC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgZmxleC1iYXNpczogY2FsYygxMyAvIDE5ICogMTAwJSk7XG4gICAgcGFkZGluZy1sZWZ0OiA0dnc7XG4gICAgcGFkZGluZy1yaWdodDogNHZ3O1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuOHJlbSArIDElKTtcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xuXG4gICAgLmNhcnMtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBncmlkLWdhcDogLjR2dztcblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIH1cblxuICAgICAgYS5jYXItY29udGFpbmVyIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAuMnZ3IDAuMnZ3IDAuNHZoIDAuMXZ3ICMwMDAwMDA1RVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxvYWRpbmcge1xuICAgICAgbWFyZ2luOiAzMCUgYXV0bztcbiAgICB9XG5cbiAgICBoMy5uby1jYXJzLWxhYmVsIHtcbiAgICAgIGZvbnQ6IEJvbGQgM3JlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cblxuXG4iLCIuc2VhcmNoLXJlc3VsdHMtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAydnc7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuc2VhcmNoLXJlc3VsdHMtY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLnNlYXJjaC1yZXN1bHRzLWNhcmQgLnNlYXJjaC1yZXN1bHQtbmF2aWdhdG9yIHtcbiAgZmxleC1iYXNpczogY2FsYyg2IC8gMTkgKiAxMDAlKTtcbn1cbi5zZWFyY2gtcmVzdWx0cy1jYXJkIC5zZWFyY2gtcmVzdWx0cyB7XG4gIGZsZXgtYmFzaXM6IGNhbGMoMTMgLyAxOSAqIDEwMCUpO1xuICBwYWRkaW5nLWxlZnQ6IDR2dztcbiAgcGFkZGluZy1yaWdodDogNHZ3O1xuICBwYWRkaW5nLXRvcDogY2FsYygxLjhyZW0gKyAxJSk7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59XG4uc2VhcmNoLXJlc3VsdHMtY2FyZCAuc2VhcmNoLXJlc3VsdHMgLmNhcnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMC40dnc7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuc2VhcmNoLXJlc3VsdHMtY2FyZCAuc2VhcmNoLXJlc3VsdHMgLmNhcnMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLnNlYXJjaC1yZXN1bHRzLWNhcmQgLnNlYXJjaC1yZXN1bHRzIC5jYXJzLWNvbnRhaW5lciBhLmNhci1jb250YWluZXI6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAuMnZ3IDAuMnZ3IDAuNHZoIDAuMXZ3ICMwMDAwMDA1RTtcbn1cbi5zZWFyY2gtcmVzdWx0cy1jYXJkIC5zZWFyY2gtcmVzdWx0cyAubG9hZGluZyB7XG4gIG1hcmdpbjogMzAlIGF1dG87XG59XG4uc2VhcmNoLXJlc3VsdHMtY2FyZCAuc2VhcmNoLXJlc3VsdHMgaDMubm8tY2Fycy1sYWJlbCB7XG4gIGZvbnQ6IEJvbGQgM3JlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogI0VBMjM0MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-results',
                templateUrl: './search-results.component.html',
                styleUrls: ['./search-results.component.scss']
            }]
    }], function () { return [{ type: _cars_http_service__WEBPACK_IMPORTED_MODULE_4__["CarsHttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cars/search/search.component.ts":
/*!*************************************************!*\
  !*** ./src/app/cars/search/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dates_range_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dates-range-validator */ "./src/app/cars/dates-range-validator.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _service_static_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/static-location.service */ "./src/app/service/static-location.service.ts");
/* harmony import */ var _service_car_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/car-input.directive */ "./src/app/service/car-input.directive.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/__ivy_ngcc__/fesm2015/saturn-datepicker.js");
/* harmony import */ var _special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../special-offers/special-offers.component */ "./src/app/cars/special-offers/special-offers.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/cars/footer/footer.component.ts");














const _c0 = ["cityInput"];
function SearchComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dates are required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can't pick date before today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_25_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Second date must be after first date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_25_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can't book car for less than a day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_25_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can't pick date after one year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_25_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_25_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_25_div_3_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_25_div_4_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_25_div_5_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = ((tmp_0_0 = ctx_r5.getErrors("dates")) == null ? null : tmp_0_0.required) && !((tmp_0_0 = ctx_r5.getErrors("date")) == null ? null : tmp_0_0.matDatepickerParse);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r5.getErrors("dates")) == null ? null : tmp_1_0.matDatepickerMin;
    var tmp_2_0 = null;
    const currVal_2 = (tmp_2_0 = ctx_r5.getErrors("dates")) == null ? null : tmp_2_0.matDatepickerRange;
    var tmp_3_0 = null;
    const currVal_3 = (tmp_3_0 = ctx_r5.getErrors("dates")) == null ? null : tmp_3_0.minRange;
    var tmp_4_0 = null;
    const currVal_4 = (tmp_4_0 = ctx_r5.getErrors("dates")) == null ? null : tmp_4_0.matDatepickerMax;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_4);
} }
class SearchComponent {
    constructor(datePipe, router, title, formBuilder, staticLocationService) {
        this.datePipe = datePipe;
        this.router = router;
        this.title = title;
        this.formBuilder = formBuilder;
        this.staticLocationService = staticLocationService;
        this.url = 'search';
        this.cities = [];
        this.minStartDate = new Date();
        this.maxDate = new Date(this.minStartDate.getTime() + 31536000000);
    }
    ngOnInit() {
        this.title.setTitle('Search');
        this.initSearchForm();
        this.cities = this.staticLocationService.getCities();
        this.addCityValidator();
    }
    ngOnDestroy() {
        this.searchForm.controls.city.setValue(this.cityInput.nativeElement.value);
        Object(_tools__WEBPACK_IMPORTED_MODULE_3__["saveFormData"])(this.searchForm, this.url);
        Object(_tools__WEBPACK_IMPORTED_MODULE_3__["saveCityValue"])(this.cityValue);
    }
    search(request) {
        const searchParams = {
            queryParams: {
                city: this.cityValue,
                startDate: Object(_tools__WEBPACK_IMPORTED_MODULE_3__["mapDate"])(request.dates.begin),
                endDate: Object(_tools__WEBPACK_IMPORTED_MODULE_3__["mapDate"])(request.dates.end)
            }
        };
        this.router.navigate(['/search/results'], searchParams).then();
    }
    initSearchForm() {
        const cityControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        const datesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _dates_range_validator__WEBPACK_IMPORTED_MODULE_2__["DatesRangeValidator"].validator]);
        this.searchForm = this.formBuilder.group({
            city: cityControl,
            dates: datesControl
        });
        Object(_tools__WEBPACK_IMPORTED_MODULE_3__["restoreFormData"])(this.searchForm, this.url);
        const value = this.searchForm.controls.dates.value;
        if (value) {
            this.searchForm.controls.dates.setValue({
                begin: new Date(value.begin),
                end: new Date(value.end),
            });
        }
        this.cityValue = Object(_tools__WEBPACK_IMPORTED_MODULE_3__["restoreCityValue"])();
    }
    isControlInvalid(controlName) {
        const control = this.searchForm.controls[controlName];
        return (control === null || control === void 0 ? void 0 : control.touched) && (control === null || control === void 0 ? void 0 : control.invalid);
    }
    getErrors(controlName) {
        var _a;
        return (_a = this.searchForm.controls[controlName]) === null || _a === void 0 ? void 0 : _a.errors;
    }
    addCityValidator() {
        const control = this.searchForm.get('city');
        if (!this.cityValue)
            control.setErrors({ addressError: '' });
        control.valueChanges.subscribe(value => {
            const selectedCity = this.cities.find(city => city.name === value || city.short_name === value);
            if (selectedCity) {
                this.cityValue = selectedCity.short_name;
                control.setErrors(null);
            }
            else if (!this.cityValue) {
                control.setErrors({ addressError: '' });
            }
        });
    }
    onCitySelect(city) {
        this.cityValue = city.short_name;
        this.searchForm.get('city').setValue(city.name);
        this.searchForm.get('city').setErrors(null);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_static_location_service__WEBPACK_IMPORTED_MODULE_7__["StaticLocationService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cityInput = _t.first);
    } }, decls: 30, vars: 10, consts: [[1, "search-card"], [1, "search-container"], [1, "title"], [1, "subtitle"], [3, "formGroup", "submit"], [1, "input-container"], ["for", "city", 1, "input-label"], ["cityLabel", ""], [1, "required-marker"], ["formControlName", "city", "id", "city", "placeholder", "", "type", "text", 3, "carInput"], ["cityInput", ""], ["class", "error", 4, "ngIf"], ["for", "dates", 1, "input-label"], ["datesLabel", ""], ["formControlName", "dates", "id", "dates", 3, "carInput", "max", "min", "satDatepicker", "click"], [3, "rangeMode"], ["datePicker", ""], ["type", "submit", 3, "disabled"], [1, "error"], [4, "ngIf"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Find your car now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Type your data and hit Yalla!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SearchComponent_Template_form_submit_6_listener() { return ctx.search(ctx.searchForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SearchComponent_div_15_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_input_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r4.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "sat-datepicker", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SearchComponent_div_25_Template, 6, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Y\u2019alla!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-special-offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r3)("max", ctx.maxDate)("min", ctx.minStartDate)("satDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangeMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("dates"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.searchForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _service_car_input_directive__WEBPACK_IMPORTED_MODULE_8__["CarInputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_9__["SatDatepickerInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_9__["SatDatepicker"], _special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_10__["SpecialOffersComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: [".search-card[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .search-card[_ngcontent-%COMP%] {\n    background: url('search-background.webp') no-repeat scroll;\n    width: 100%;\n    height: calc(692 / 1920 * 100vw);\n    background-size: 100% 100%;\n  }\n}\n.search-card[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0 0.3vh 0.3vw #0000005F;\n  padding-bottom: 2vmin;\n}\n@media screen and (max-width: 800px), screen and (orientation: portrait) {\n  .search-card[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .search-card[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    padding-left: 10vw;\n    padding-right: 2vw;\n    width: calc(6 / 19 * 100%);\n    margin-top: 10vh;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9zZWFyY2gvQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXGNhcnNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnMvc2VhcmNoL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ0RGO0FER0U7RUFIRjtJQUlJLDBEQUFBO0lBQ0EsV0FBQTtJQUNBLGdDQUFBO0lBQ0EsMEJBQUE7RUNBRjtBQUNGO0FERUU7RUFDRSxtQkVWSTtFRldKLG1DRWRLO0VGZUwscUJBQUE7QUNBSjtBREVJO0VBTEY7SUFNSSxXQUFBO0VDQ0o7QUFDRjtBRENJO0VBVEY7SUFVSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7SUFDQSxnQkFBQTtFQ0VKO0FBQ0Y7QURHQTtFQUNFLGVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcblxuLnNlYXJjaC1jYXJkIHtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZWFyY2gvc2VhcmNoLWJhY2tncm91bmQud2VicFwiKSBuby1yZXBlYXQgc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYyg2OTIgLyAxOTIwICogMTAwdncpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB9XG5cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIHBhZGRpbmctYm90dG9tOiAydm1pbjtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAydnc7XG4gICAgICB3aWR0aDogY2FsYyg2IC8gMTkgKiAxMDAlKTtcbiAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgfVxuXG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuIiwiLnNlYXJjaC1jYXJkIHtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLnNlYXJjaC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NlYXJjaC9zZWFyY2gtYmFja2dyb3VuZC53ZWJwXCIpIG5vLXJlcGVhdCBzY3JvbGw7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDY5MiAvIDE5MjAgKiAxMDB2dyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIH1cbn1cbi5zZWFyY2gtY2FyZCAuc2VhcmNoLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDAgMC4zdmggMC4zdncgIzAwMDAwMDVGO1xuICBwYWRkaW5nLWJvdHRvbTogMnZtaW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuc2VhcmNoLWNhcmQgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5zZWFyY2gtY2FyZCAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJ2dztcbiAgICB3aWR0aDogY2FsYyg2IC8gMTkgKiAxMDAlKTtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICB9XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn0iLCIkc2hhZG93OiAwIC4zdmggLjN2dyAjMDAwMDAwNUY7XG4kcmVkOiAjRUEyMzQwO1xuJGJsYWNrOiAjMDYyNjM5O1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM1RjcyN0U7XG4kZGFyay1ncmV5OiAjMDYyNjM5OTg7XG4kdHJhbnNwYXJlbnQ6ICMwMDAwMDAwMDtcbiR0cmFuc3BhcmVudC13aGl0ZTogI0ZGRkZGRjQwO1xuJHRyYW5zcGFyZW50LXdoaXRlLXN0cm9uZzogI0ZGRkZGRjgwO1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_static_location_service__WEBPACK_IMPORTED_MODULE_7__["StaticLocationService"] }]; }, { cityInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cityInput', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/cars/special-offers/special-offers.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cars/special-offers/special-offers.component.ts ***!
  \*****************************************************************/
/*! exports provided: SpecialOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialOffersComponent", function() { return SpecialOffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cars_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cars-http.service */ "./src/app/cars/cars-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_car_price_label_car_price_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/car-price-label/car-price-label.component */ "./src/app/service/car-price-label/car-price-label.component.ts");





const _c0 = function (a0) { return { backgroundImage: a0 }; };
function SpecialOffersComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "car-price-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "car/" + car_r1.serial_number, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + car_r1.image_url[0] + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", car_r1.make, " ", car_r1.model, " ", car_r1.year, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("car", car_r1);
} }
class SpecialOffersComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.cars = this.httpService.getBestCars();
        this.comments = this.httpService.getLatestComments();
    }
}
SpecialOffersComponent.ɵfac = function SpecialOffersComponent_Factory(t) { return new (t || SpecialOffersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cars_http_service__WEBPACK_IMPORTED_MODULE_1__["CarsHttpService"])); };
SpecialOffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialOffersComponent, selectors: [["app-special-offers"]], decls: 80, vars: 3, consts: [[1, "special-offers-container"], [1, "title-container"], [1, "red-line-triangle"], [1, "title"], [1, "description"], [1, "action-container"], [1, "action"], ["href", "login", 1, "login-btn"], [1, "subtitle-container"], [1, "cars-count-container"], [1, "cars-count"], [1, "offers-container"], [1, "red", "line"], [1, "cars-container"], [3, "href", 4, "ngFor", "ngForOf"], [1, "right-top", "red-triangle"], [1, "right-top", "black-triangle"], [1, "left-bottom", "red-triangle"], [1, "bottom"], [1, "black", "line"], [1, "left-bottom", "black-triangle"], [1, "feedback-container"], [1, "feedback-body"], [1, "feedback"], [1, "feedback-text"], [1, "feedback-name"], [1, "feedback-date"], [3, "href"], [1, "car-img-container"], [1, "car-image", 3, "ngStyle"], [1, "car-details-container"], [1, "car-title"], [1, "car-price-label"], [3, "car"]], template: function SpecialOffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Never mistaken for anything else ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "One of the best services for renting car for holiday. Here you can rent every car that you want in every city with good prices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Affordable prices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Guaranteed cars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Join now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "most popular choices in your area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The most popular car that we have on our service. You can rent very of them for best price. Just click on them");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SpecialOffersComponent_a_25_Template, 8, 8, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Latest feedback from our customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Fabulous car! Excellent driving, perfect exterior, very comfortable inside. Not so dramatic consumption. It was great experience! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Brian O'Corner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "8 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Car is easy driving, good looking and has fantastic speed skill. My friend also enjoyed the car. We would love to come back ! We had amazing week with amazing vehicle. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Barbara Dror");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "19 January 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Our car was modern and extremely well equipped. The facilities are great. Interior trim is of excellent quality. It made us happy after a previous experience in another place. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "John Bayramov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "25 February 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Dreaming car with the heart of lion. We\u2019ve made a distance about 500 miles. Modern design. A/C in each zone. We loved to drive it and we really enjoyed our adventure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sara Miles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "14 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " If I\u2019ll be back in Rome I certainly return to it. Lovely transport which had all the amenities one would need at home. Perfect comfort I simply loved it. I highly recommend this car. :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Acacio Frascella");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "12 January 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " This car exceeded my expectations. One of the best vehicles i have had till now at a generous price. The host were really helpful and friendly. Would definitely recommend it to everyone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Cirilla Di Gennaro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "12 February 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 1, ctx.cars));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _service_car_price_label_car_price_label_component__WEBPACK_IMPORTED_MODULE_3__["CarPriceLabelComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".special-offers-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.title-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  background: #062639;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  box-shadow: 0 0.3vh 0.3vw #0000005F;\n  padding: 10vh 2vw 6vh;\n  justify-content: space-around;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .title-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 2rem 2vw 2rem;\n  }\n}\n\n.title-container[_ngcontent-%COMP%]   .red-line-triangle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1vh;\n  left: 0;\n  width: 84vw;\n  height: 0;\n  border-bottom: 2vh #EA2340 solid;\n  border-right: transparent solid 3vw;\n}\n\n.title-container[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n  font: Bold 4rem/1em Bebas Neue;\n  color: white;\n  text-transform: capitalize;\n  flex-basis: 25%;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .title-container[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    text-align: center;\n    font-size: 3rem;\n    flex-basis: 100%;\n  }\n}\n\n.title-container[_ngcontent-%COMP%]   span.description[_ngcontent-%COMP%] {\n  font: 1rem/1.5em \"Rawline Regular\";\n  color: white;\n  flex-basis: 40%;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .title-container[_ngcontent-%COMP%]   span.description[_ngcontent-%COMP%] {\n    text-align: center;\n    flex-basis: 100%;\n  }\n}\n\n.title-container[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: min(16rem, 25%);\n  flex-direction: column;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .title-container[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    margin-top: 1rem;\n  }\n}\n\n.title-container[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   span.action[_ngcontent-%COMP%] {\n  font: 2rem/1em \"Rawline SemiBold\";\n  color: #EA2340;\n  flex-basis: 100%;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .title-container[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   span.action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.title-container[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   a.login-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: #EA2340;\n  box-shadow: 0 0.3vh 0.3vw #0000005F;\n  color: white;\n  font: 1rem/1em \"Rawline SemiBold\";\n  padding: 0.6em 2em 0.7em;\n  text-align: center;\n  align-self: flex-start;\n  margin-top: 0.5rem;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .title-container[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   a.login-btn[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n}\n\n.subtitle-container[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12vh 8vw 6vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .subtitle-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 2rem 2vw 2rem;\n  }\n}\n\n.subtitle-container[_ngcontent-%COMP%]   .cars-count-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-transform: capitalize;\n  flex-basis: 40%;\n  justify-content: center;\n}\n\n.subtitle-container[_ngcontent-%COMP%]   .cars-count-container[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n  font: normal 4rem/1em Bebas Neue;\n  color: #062639;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .subtitle-container[_ngcontent-%COMP%]   .cars-count-container[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 3rem;\n  }\n}\n\n.subtitle-container[_ngcontent-%COMP%]   .cars-count-container[_ngcontent-%COMP%]   span.cars-count[_ngcontent-%COMP%] {\n  font: Bold 9rem/1em Bebas Neue;\n  color: #EA2340;\n  margin-right: 1rem;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .subtitle-container[_ngcontent-%COMP%]   .cars-count-container[_ngcontent-%COMP%]   span.cars-count[_ngcontent-%COMP%] {\n    font-size: 6rem;\n  }\n}\n\n.subtitle-container[_ngcontent-%COMP%]   span.description[_ngcontent-%COMP%] {\n  font: 1rem/1.5em \"Rawline Regular\";\n  color: #062639;\n  margin-left: 10vw;\n  flex-basis: 40%;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .subtitle-container[_ngcontent-%COMP%]   span.description[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.offers-container[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  position: relative;\n}\n\n.offers-container[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  background: #EA2340 !important;\n}\n\n.offers-container[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  background: #062639 !important;\n}\n\n.offers-container[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1vw;\n  margin: 0;\n}\n\n.offers-container[_ngcontent-%COMP%]   .black-triangle[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: transparent solid 4vw;\n  border-bottom: transparent solid 4vw;\n  border-right: #062639 solid 4vw;\n  border-top: #062639 solid 4vw;\n}\n\n.offers-container[_ngcontent-%COMP%]   .red-triangle[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: transparent solid 8vw;\n  border-bottom: transparent solid 8vw;\n  border-right: #EA2340 solid 8vw;\n  border-top: #EA2340 solid 8vw;\n}\n\n.offers-container[_ngcontent-%COMP%]   .hide-overflow[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  position: relative;\n  overflow: hidden;\n}\n\n.offers-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .offers-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n.offers-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: calc((4rem * 1.2 + 3rem * 1.2) / 2 + 1px);\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .offers-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n    height: 4vw;\n  }\n}\n\n.offers-container[_ngcontent-%COMP%]   .right-top[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.offers-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 800px), (orientation: landscape) {\n  .offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-img-container[_ngcontent-%COMP%] {\n    transform: skewX(45deg) translateX(-4%);\n  }\n}\n\n.offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-img-container[_ngcontent-%COMP%]   .car-image[_ngcontent-%COMP%] {\n  padding-top: 56.25%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media screen and (min-width: 800px), (orientation: landscape) {\n  .offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-img-container[_ngcontent-%COMP%]   .car-image[_ngcontent-%COMP%] {\n    transform: skewX(-45deg) scale(1.6) translateY(-15%);\n  }\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-details-container[_ngcontent-%COMP%] {\n    display: flex;\n    height: calc(3rem * 1.2);\n  }\n}\n\n.offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-details-container[_ngcontent-%COMP%]   span.car-title[_ngcontent-%COMP%] {\n  font: Bold 3rem/1.2em Bebas Neue;\n  color: white;\n  z-index: 1;\n  position: relative;\n  margin-left: 8vw;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-details-container[_ngcontent-%COMP%]   span.car-title[_ngcontent-%COMP%] {\n    color: #062639;\n  }\n}\n\n.offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-details-container[_ngcontent-%COMP%]   .car-price-label[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: relative;\n  margin-left: 8vw;\n  transform: translateY(30%);\n}\n\n.offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-details-container[_ngcontent-%COMP%]   .car-price-label[_ngcontent-%COMP%]     .car-price-value, .offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-details-container[_ngcontent-%COMP%]   .car-price-label[_ngcontent-%COMP%]     .car-price-prefix {\n  color: #EA2340;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .offers-container[_ngcontent-%COMP%]   .cars-container[_ngcontent-%COMP%]   .car-details-container[_ngcontent-%COMP%]   .car-price-label[_ngcontent-%COMP%] {\n    transform: translateY(-50%);\n    margin-left: auto;\n  }\n}\n\n.offers-container[_ngcontent-%COMP%]   .left-bottom[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n\n.feedback-container[_ngcontent-%COMP%] {\n  background: white;\n  padding: 10vh 15vw;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .feedback-container[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n    justify-content: center;\n  }\n}\n\n.feedback-container[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n  font: normal 4rem/1em Bebas Neue;\n  color: #062639;\n  text-transform: capitalize;\n  flex-basis: 7em;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .feedback-container[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    text-align: center;\n  }\n}\n\n.feedback-container[_ngcontent-%COMP%]   .feedback-body[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  margin-top: 3rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 2em;\n}\n\n.feedback-container[_ngcontent-%COMP%]   .feedback-body[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.feedback-container[_ngcontent-%COMP%]   .feedback-body[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%]   span.feedback-text[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  font: 1rem/1.5em \"Rawline Regular\";\n  color: #062639;\n}\n\n.feedback-container[_ngcontent-%COMP%]   .feedback-body[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%]   span.feedback-name[_ngcontent-%COMP%] {\n  font: 1rem/1.3em \"Rawline SemiBold\";\n  color: #EA2340;\n}\n\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .feedback-container[_ngcontent-%COMP%]   .feedback-body[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%]   span.feedback-name[_ngcontent-%COMP%] {\n    margin-right: 3em;\n  }\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .feedback-container[_ngcontent-%COMP%]   .feedback-body[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%]   span.feedback-name[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n\n.feedback-container[_ngcontent-%COMP%]   .feedback-body[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%]   span.feedback-date[_ngcontent-%COMP%] {\n  font: 1rem/1.3em \"Rawline Regular\";\n  color: #06263998;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .feedback-container[_ngcontent-%COMP%]   .feedback-body[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%]   span.feedback-date[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9zcGVjaWFsLW9mZmVycy9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcY2Fyc1xcc3BlY2lhbC1vZmZlcnNcXHNwZWNpYWwtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL3NwZWNpYWwtb2ZmZXJzL3NwZWNpYWwtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL3NwZWNpYWwtb2ZmZXJzL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkVUTTtFRlVOLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1DRWJPO0VGY1AscUJBQUE7RUFDQSw2QkFBQTtBQ0hGOztBREtFO0VBVEY7SUFVSSxzQkFBQTtJQUNBLHNCQUFBO0VDRkY7QUFDRjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7QUNGSjs7QURLRTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBREtJO0VBTkY7SUFPSSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDRko7QUFDRjs7QURLRTtFQUNFLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNISjs7QURLSTtFQUxGO0lBTUksa0JBQUE7SUFDQSxnQkFBQTtFQ0ZKO0FBQ0Y7O0FES0U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0hKOztBREtJO0VBTEY7SUFNSSxnQkFBQTtJQUNBLGdCQUFBO0VDRko7QUFDRjs7QURJSTtFQUNFLGlDQUFBO0VBQ0EsY0VwRUE7RUZxRUEsZ0JBQUE7QUNGTjs7QURJTTtFQUxGO0lBTUksa0JBQUE7RUNETjtBQUNGOztBRElJO0VBQ0UsbUJBQUE7RUFDQSxtQkU5RUE7RUYrRUEsbUNFaEZHO0VGaUZILFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDRk47O0FESU07RUFYRjtJQVlJLGtCQUFBO0VDRE47QUFDRjs7QURNQTtFQUVFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE1FO0VBUkY7SUFTSSxzQkFBQTtJQUNBLHNCQUFBO0VDSEY7QUFDRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDSEo7O0FES0k7RUFDRSxnQ0FBQTtFQUNBLGNFbkhFO0FEZ0hSOztBREtNO0VBSkY7SUFLSSxrQkFBQTtJQUNBLGVBQUE7RUNGTjtBQUNGOztBRE1JO0VBQ0UsOEJBQUE7RUFDQSxjRS9IQTtFRmdJQSxrQkFBQTtBQ0pOOztBRE1NO0VBTEY7SUFNSSxlQUFBO0VDSE47QUFDRjs7QURRRTtFQUNFLGtDQUFBO0VBQ0EsY0UxSUk7RUYySUosaUJBQUE7RUFDQSxlQUFBO0FDTko7O0FET0k7RUFMRjtJQU1JLGtCQUFBO0VDSko7QUFDRjs7QURRQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FET0U7RUFDRSw4QkFBQTtBQ0xKOztBRFFFO0VBQ0UsOEJBQUE7QUNOSjs7QURTRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1BKOztBRFVFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ1JKOztBRFdFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ1RKOztBRFlFO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRGFFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGFJO0VBTEY7SUFNSSxrQkFBQTtFQ1ZKO0FBQ0Y7O0FEWUk7RUFDRSxpREFBQTtBQ1ZOOztBRFlNO0VBSEY7SUFJSSxXQUFBO0VDVE47QUFDRjs7QURhRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNYSjs7QURjRTtFQUNFLFNBQUE7QUNaSjs7QURlRTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtBQ2JKOztBRGVJO0VBSkY7SUFLSSwwQkFBQTtFQ1pKO0FBQ0Y7O0FEY0k7RUFDRSxxQkFBQTtBQ1pOOztBRGVJO0VBS0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNqQk47O0FEV007RUFERjtJQUVJLHVDQUFBO0VDUk47QUFDRjs7QURjTTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ1pSOztBRGNRO0VBTEY7SUFNSSxvREFBQTtFQ1hSO0FBQ0Y7O0FEaUJNO0VBRkY7SUFHSSxhQUFBO0lBQ0Esd0JBQUE7RUNkTjtBQUNGOztBRGdCTTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQXZRWTtBQ3lQcEI7O0FEZ0JRO0VBUEY7SUFRSSxjRXhRRjtFRDJQTjtBQUNGOztBRGdCTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQWpSWTtFQWtSWiwwQkFBQTtBQ2RSOztBRGlCVTtFQUNFLGNFclJOO0FEc1FOOztBRG1CUTtFQVpGO0lBYUksMkJBQUE7SUFDQSxpQkFBQTtFQ2hCUjtBQUNGOztBRHFCRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ25CSjs7QUR1QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNwQkY7O0FEc0JFO0VBTkY7SUFPSSxrQkFBQTtJQUNBLHVCQUFBO0VDbkJGO0FBQ0Y7O0FEcUJFO0VBQ0UsZ0NBQUE7RUFDQSxjRXJUSTtFRnNUSiwwQkFBQTtFQUNBLGVBQUE7QUNuQko7O0FEcUJJO0VBTkY7SUFPSSxlQUFBO0lBQ0Esa0JBQUE7RUNsQko7QUFDRjs7QURxQkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ25CSjs7QURxQkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ25CTjs7QURxQk07RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0U3VUE7QUQwVFI7O0FEc0JNO0VBQ0UsbUNBQUE7RUFDQSxjRW5WRjtBRCtUTjs7QURzQlE7RUFKRjtJQUtJLGlCQUFBO0VDbkJSO0FBQ0Y7O0FEcUJRO0VBUkY7SUFTSSxnQkFBQTtFQ2xCUjtBQUNGOztBRHFCTTtFQUNFLGtDQUFBO0VBQ0EsZ0JFNVZJO0FEeVVaOztBRHFCUTtFQUpGO0lBS0ksZ0JBQUE7RUNsQlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvc3BlY2lhbC1vZmZlcnMvc3BlY2lhbC1vZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcmVkLXRyaWFuZ2xlLXNpZGU6IDh2dztcbiRibGFjay10cmlhbmdsZS1zaWRlOiA0dnc7XG5cbkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcbi5zcGVjaWFsLW9mZmVycy1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gIHBhZGRpbmc6IDEwdmggMnZ3IDZ2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAycmVtIDJ2dyAycmVtO1xuICB9XG5cbiAgLnJlZC1saW5lLXRyaWFuZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxdmg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogODR2dztcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMnZoICRyZWQgc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudCBzb2xpZCAzdnc7XG4gIH1cblxuICBzcGFuLnRpdGxlIHtcbiAgICBmb250OiBCb2xkIDRyZW0vMWVtIEJlYmFzIE5ldWU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZsZXgtYmFzaXM6IDI1JTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgc3Bhbi5kZXNjcmlwdGlvbiB7XG4gICAgZm9udDogMXJlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmbGV4LWJhc2lzOiA0MCU7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmFjdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1iYXNpczogbWluKDE2cmVtLCAyNSUpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cblxuICAgIHNwYW4uYWN0aW9uIHtcbiAgICAgIGZvbnQ6IDJyZW0vMWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGEubG9naW4tYnRuIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBiYWNrZ3JvdW5kOiAkcmVkO1xuICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQ6IDFyZW0vMWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAgICAgcGFkZGluZzogLjZlbSAyZW0gLjdlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN1YnRpdGxlLWNvbnRhaW5lciB7XG5cbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEydmggOHZ3IDZ2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMnJlbSAydncgMnJlbTtcbiAgfVxuXG4gIC5jYXJzLWNvdW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZsZXgtYmFzaXM6IDQwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHNwYW4udGl0bGUge1xuICAgICAgZm9udDogbm9ybWFsIDRyZW0vMWVtIEJlYmFzIE5ldWU7XG4gICAgICBjb2xvcjogJGJsYWNrO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBzcGFuLmNhcnMtY291bnQge1xuICAgICAgZm9udDogQm9sZCA5cmVtLzFlbSBCZWJhcyBOZXVlO1xuICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzcGFuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250OiAxcmVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcbiAgICBmbGV4LWJhc2lzOiA0MCU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5vZmZlcnMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5yZWQge1xuICAgIGJhY2tncm91bmQ6ICRyZWQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ibGFjayB7XG4gICAgYmFja2dyb3VuZDogJGJsYWNrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxdnc7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmJsYWNrLXRyaWFuZ2xlIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50IHNvbGlkICRibGFjay10cmlhbmdsZS1zaWRlO1xuICAgIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50IHNvbGlkICRibGFjay10cmlhbmdsZS1zaWRlO1xuICAgIGJvcmRlci1yaWdodDogJGJsYWNrIHNvbGlkICRibGFjay10cmlhbmdsZS1zaWRlO1xuICAgIGJvcmRlci10b3A6ICRibGFjayBzb2xpZCAkYmxhY2stdHJpYW5nbGUtc2lkZTtcbiAgfVxuXG4gIC5yZWQtdHJpYW5nbGUge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQgc29saWQgJHJlZC10cmlhbmdsZS1zaWRlO1xuICAgIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50IHNvbGlkICRyZWQtdHJpYW5nbGUtc2lkZTtcbiAgICBib3JkZXItcmlnaHQ6ICRyZWQgc29saWQgJHJlZC10cmlhbmdsZS1zaWRlO1xuICAgIGJvcmRlci10b3A6ICRyZWQgc29saWQgJHJlZC10cmlhbmdsZS1zaWRlO1xuICB9XG5cbiAgLmhpZGUtb3ZlcmZsb3cge1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuYm90dG9tIHtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmxpbmUge1xuICAgICAgaGVpZ2h0OiBjYWxjKCg0cmVtICogMS4yICsgM3JlbSAqIDEuMikgLyAyICsgMXB4KTtcblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgIGhlaWdodDogNHZ3O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yaWdodC10b3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAucm93IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuY2Fycy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgLmNhci1pbWctY29udGFpbmVyIHtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZykgdHJhbnNsYXRlWCgtNCUpO1xuICAgICAgfVxuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAuY2FyLWltYWdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDU2LjI1JTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtNDVkZWcpIHNjYWxlKDEuNikgdHJhbnNsYXRlWSgtMTUlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXItZGV0YWlscy1jb250YWluZXIge1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDNyZW0gKiAxLjIpO1xuICAgICAgfVxuXG4gICAgICBzcGFuLmNhci10aXRsZSB7XG4gICAgICAgIGZvbnQ6IEJvbGQgM3JlbS8xLjJlbSBCZWJhcyBOZXVlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRyZWQtdHJpYW5nbGUtc2lkZTtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jYXItcHJpY2UtbGFiZWwge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkcmVkLXRyaWFuZ2xlLXNpZGU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMCUpO1xuXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgLmNhci1wcmljZS12YWx1ZSwgLmNhci1wcmljZS1wcmVmaXgge1xuICAgICAgICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxlZnQtYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgfVxufVxuXG4uZmVlZGJhY2stY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEwdmggMTV2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIHNwYW4udGl0bGUge1xuICAgIGZvbnQ6IG5vcm1hbCA0cmVtLzFlbSBCZWJhcyBOZXVlO1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZmxleC1iYXNpczogN2VtO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmZlZWRiYWNrLWJvZHkge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLWdhcDogMmVtO1xuXG4gICAgLmZlZWRiYWNrIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIHNwYW4uZmVlZGJhY2stdGV4dCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgIGZvbnQ6IDFyZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgIH1cblxuICAgICAgc3Bhbi5mZWVkYmFjay1uYW1lIHtcbiAgICAgICAgZm9udDogMXJlbS8xLjNlbSBcIlJhd2xpbmUgU2VtaUJvbGRcIjtcbiAgICAgICAgY29sb3I6ICRyZWQ7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogM2VtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzcGFuLmZlZWRiYWNrLWRhdGUge1xuICAgICAgICBmb250OiAxcmVtLzEuM2VtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmV5O1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5zcGVjaWFsLW9mZmVycy1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjMDYyNjM5O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBib3gtc2hhZG93OiAwIDAuM3ZoIDAuM3Z3ICMwMDAwMDA1RjtcbiAgcGFkZGluZzogMTB2aCAydncgNnZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAudGl0bGUtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDJyZW0gMnZ3IDJyZW07XG4gIH1cbn1cbi50aXRsZS1jb250YWluZXIgLnJlZC1saW5lLXRyaWFuZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDF2aDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDg0dnc7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnZoICNFQTIzNDAgc29saWQ7XG4gIGJvcmRlci1yaWdodDogdHJhbnNwYXJlbnQgc29saWQgM3Z3O1xufVxuLnRpdGxlLWNvbnRhaW5lciBzcGFuLnRpdGxlIHtcbiAgZm9udDogQm9sZCA0cmVtLzFlbSBCZWJhcyBOZXVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmbGV4LWJhc2lzOiAyNSU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnRpdGxlLWNvbnRhaW5lciBzcGFuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgfVxufVxuLnRpdGxlLWNvbnRhaW5lciBzcGFuLmRlc2NyaXB0aW9uIHtcbiAgZm9udDogMXJlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsZXgtYmFzaXM6IDQwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAudGl0bGUtY29udGFpbmVyIHNwYW4uZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICB9XG59XG4udGl0bGUtY29udGFpbmVyIC5hY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogbWluKDE2cmVtLCAyNSUpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC50aXRsZS1jb250YWluZXIgLmFjdGlvbi1jb250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxufVxuLnRpdGxlLWNvbnRhaW5lciAuYWN0aW9uLWNvbnRhaW5lciBzcGFuLmFjdGlvbiB7XG4gIGZvbnQ6IDJyZW0vMWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICBjb2xvcjogI0VBMjM0MDtcbiAgZmxleC1iYXNpczogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAudGl0bGUtY29udGFpbmVyIC5hY3Rpb24tY29udGFpbmVyIHNwYW4uYWN0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi50aXRsZS1jb250YWluZXIgLmFjdGlvbi1jb250YWluZXIgYS5sb2dpbi1idG4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiAjRUEyMzQwO1xuICBib3gtc2hhZG93OiAwIDAuM3ZoIDAuM3Z3ICMwMDAwMDA1RjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250OiAxcmVtLzFlbSBcIlJhd2xpbmUgU2VtaUJvbGRcIjtcbiAgcGFkZGluZzogMC42ZW0gMmVtIDAuN2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAudGl0bGUtY29udGFpbmVyIC5hY3Rpb24tY29udGFpbmVyIGEubG9naW4tYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cblxuLnN1YnRpdGxlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnZoIDh2dyA2dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuc3VidGl0bGUtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDJyZW0gMnZ3IDJyZW07XG4gIH1cbn1cbi5zdWJ0aXRsZS1jb250YWluZXIgLmNhcnMtY291bnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZsZXgtYmFzaXM6IDQwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3VidGl0bGUtY29udGFpbmVyIC5jYXJzLWNvdW50LWNvbnRhaW5lciBzcGFuLnRpdGxlIHtcbiAgZm9udDogbm9ybWFsIDRyZW0vMWVtIEJlYmFzIE5ldWU7XG4gIGNvbG9yOiAjMDYyNjM5O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5zdWJ0aXRsZS1jb250YWluZXIgLmNhcnMtY291bnQtY29udGFpbmVyIHNwYW4udGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbi5zdWJ0aXRsZS1jb250YWluZXIgLmNhcnMtY291bnQtY29udGFpbmVyIHNwYW4uY2Fycy1jb3VudCB7XG4gIGZvbnQ6IEJvbGQgOXJlbS8xZW0gQmViYXMgTmV1ZTtcbiAgY29sb3I6ICNFQTIzNDA7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuc3VidGl0bGUtY29udGFpbmVyIC5jYXJzLWNvdW50LWNvbnRhaW5lciBzcGFuLmNhcnMtY291bnQge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgfVxufVxuLnN1YnRpdGxlLWNvbnRhaW5lciBzcGFuLmRlc2NyaXB0aW9uIHtcbiAgZm9udDogMXJlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogIzA2MjYzOTtcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIGZsZXgtYmFzaXM6IDQwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuc3VidGl0bGUtY29udGFpbmVyIHNwYW4uZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4ub2ZmZXJzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vZmZlcnMtY29udGFpbmVyIC5yZWQge1xuICBiYWNrZ3JvdW5kOiAjRUEyMzQwICFpbXBvcnRhbnQ7XG59XG4ub2ZmZXJzLWNvbnRhaW5lciAuYmxhY2sge1xuICBiYWNrZ3JvdW5kOiAjMDYyNjM5ICFpbXBvcnRhbnQ7XG59XG4ub2ZmZXJzLWNvbnRhaW5lciAubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDF2dztcbiAgbWFyZ2luOiAwO1xufVxuLm9mZmVycy1jb250YWluZXIgLmJsYWNrLXRyaWFuZ2xlIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50IHNvbGlkIDR2dztcbiAgYm9yZGVyLWJvdHRvbTogdHJhbnNwYXJlbnQgc29saWQgNHZ3O1xuICBib3JkZXItcmlnaHQ6ICMwNjI2Mzkgc29saWQgNHZ3O1xuICBib3JkZXItdG9wOiAjMDYyNjM5IHNvbGlkIDR2dztcbn1cbi5vZmZlcnMtY29udGFpbmVyIC5yZWQtdHJpYW5nbGUge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQgc29saWQgOHZ3O1xuICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudCBzb2xpZCA4dnc7XG4gIGJvcmRlci1yaWdodDogI0VBMjM0MCBzb2xpZCA4dnc7XG4gIGJvcmRlci10b3A6ICNFQTIzNDAgc29saWQgOHZ3O1xufVxuLm9mZmVycy1jb250YWluZXIgLmhpZGUtb3ZlcmZsb3cge1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub2ZmZXJzLWNvbnRhaW5lciAuYm90dG9tIHtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5vZmZlcnMtY29udGFpbmVyIC5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuLm9mZmVycy1jb250YWluZXIgLmJvdHRvbSAubGluZSB7XG4gIGhlaWdodDogY2FsYygoNHJlbSAqIDEuMiArIDNyZW0gKiAxLjIpIC8gMiArIDFweCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm9mZmVycy1jb250YWluZXIgLmJvdHRvbSAubGluZSB7XG4gICAgaGVpZ2h0OiA0dnc7XG4gIH1cbn1cbi5vZmZlcnMtY29udGFpbmVyIC5yaWdodC10b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4ub2ZmZXJzLWNvbnRhaW5lciAucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuLm9mZmVycy1jb250YWluZXIgLmNhcnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAub2ZmZXJzLWNvbnRhaW5lciAuY2Fycy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4ub2ZmZXJzLWNvbnRhaW5lciAuY2Fycy1jb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5vZmZlcnMtY29udGFpbmVyIC5jYXJzLWNvbnRhaW5lciAuY2FyLWltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLm9mZmVycy1jb250YWluZXIgLmNhcnMtY29udGFpbmVyIC5jYXItaW1nLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZykgdHJhbnNsYXRlWCgtNCUpO1xuICB9XG59XG4ub2ZmZXJzLWNvbnRhaW5lciAuY2Fycy1jb250YWluZXIgLmNhci1pbWctY29udGFpbmVyIC5jYXItaW1hZ2Uge1xuICBwYWRkaW5nLXRvcDogNTYuMjUlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAub2ZmZXJzLWNvbnRhaW5lciAuY2Fycy1jb250YWluZXIgLmNhci1pbWctY29udGFpbmVyIC5jYXItaW1hZ2Uge1xuICAgIHRyYW5zZm9ybTogc2tld1goLTQ1ZGVnKSBzY2FsZSgxLjYpIHRyYW5zbGF0ZVkoLTE1JSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAub2ZmZXJzLWNvbnRhaW5lciAuY2Fycy1jb250YWluZXIgLmNhci1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGNhbGMoM3JlbSAqIDEuMik7XG4gIH1cbn1cbi5vZmZlcnMtY29udGFpbmVyIC5jYXJzLWNvbnRhaW5lciAuY2FyLWRldGFpbHMtY29udGFpbmVyIHNwYW4uY2FyLXRpdGxlIHtcbiAgZm9udDogQm9sZCAzcmVtLzEuMmVtIEJlYmFzIE5ldWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogOHZ3O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5vZmZlcnMtY29udGFpbmVyIC5jYXJzLWNvbnRhaW5lciAuY2FyLWRldGFpbHMtY29udGFpbmVyIHNwYW4uY2FyLXRpdGxlIHtcbiAgICBjb2xvcjogIzA2MjYzOTtcbiAgfVxufVxuLm9mZmVycy1jb250YWluZXIgLmNhcnMtY29udGFpbmVyIC5jYXItZGV0YWlscy1jb250YWluZXIgLmNhci1wcmljZS1sYWJlbCB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDh2dztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwJSk7XG59XG4ub2ZmZXJzLWNvbnRhaW5lciAuY2Fycy1jb250YWluZXIgLmNhci1kZXRhaWxzLWNvbnRhaW5lciAuY2FyLXByaWNlLWxhYmVsIDo6bmctZGVlcCAuY2FyLXByaWNlLXZhbHVlLCAub2ZmZXJzLWNvbnRhaW5lciAuY2Fycy1jb250YWluZXIgLmNhci1kZXRhaWxzLWNvbnRhaW5lciAuY2FyLXByaWNlLWxhYmVsIDo6bmctZGVlcCAuY2FyLXByaWNlLXByZWZpeCB7XG4gIGNvbG9yOiAjRUEyMzQwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5vZmZlcnMtY29udGFpbmVyIC5jYXJzLWNvbnRhaW5lciAuY2FyLWRldGFpbHMtY29udGFpbmVyIC5jYXItcHJpY2UtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuLm9mZmVycy1jb250YWluZXIgLmxlZnQtYm90dG9tIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5mZWVkYmFjay1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTB2aCAxNXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZlZWRiYWNrLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4uZmVlZGJhY2stY29udGFpbmVyIHNwYW4udGl0bGUge1xuICBmb250OiBub3JtYWwgNHJlbS8xZW0gQmViYXMgTmV1ZTtcbiAgY29sb3I6ICMwNjI2Mzk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmbGV4LWJhc2lzOiA3ZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZlZWRiYWNrLWNvbnRhaW5lciBzcGFuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uZmVlZGJhY2stY29udGFpbmVyIC5mZWVkYmFjay1ib2R5IHtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMmVtO1xufVxuLmZlZWRiYWNrLWNvbnRhaW5lciAuZmVlZGJhY2stYm9keSAuZmVlZGJhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmVlZGJhY2stY29udGFpbmVyIC5mZWVkYmFjay1ib2R5IC5mZWVkYmFjayBzcGFuLmZlZWRiYWNrLXRleHQge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBmb250OiAxcmVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gIGNvbG9yOiAjMDYyNjM5O1xufVxuLmZlZWRiYWNrLWNvbnRhaW5lciAuZmVlZGJhY2stYm9keSAuZmVlZGJhY2sgc3Bhbi5mZWVkYmFjay1uYW1lIHtcbiAgZm9udDogMXJlbS8xLjNlbSBcIlJhd2xpbmUgU2VtaUJvbGRcIjtcbiAgY29sb3I6ICNFQTIzNDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5mZWVkYmFjay1jb250YWluZXIgLmZlZWRiYWNrLWJvZHkgLmZlZWRiYWNrIHNwYW4uZmVlZGJhY2stbmFtZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuZmVlZGJhY2stY29udGFpbmVyIC5mZWVkYmFjay1ib2R5IC5mZWVkYmFjayBzcGFuLmZlZWRiYWNrLW5hbWUge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gIH1cbn1cbi5mZWVkYmFjay1jb250YWluZXIgLmZlZWRiYWNrLWJvZHkgLmZlZWRiYWNrIHNwYW4uZmVlZGJhY2stZGF0ZSB7XG4gIGZvbnQ6IDFyZW0vMS4zZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgY29sb3I6ICMwNjI2Mzk5ODtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuZmVlZGJhY2stY29udGFpbmVyIC5mZWVkYmFjay1ib2R5IC5mZWVkYmFjayBzcGFuLmZlZWRiYWNrLWRhdGUge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gIH1cbn0iLCIkc2hhZG93OiAwIC4zdmggLjN2dyAjMDAwMDAwNUY7XG4kcmVkOiAjRUEyMzQwO1xuJGJsYWNrOiAjMDYyNjM5O1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM1RjcyN0U7XG4kZGFyay1ncmV5OiAjMDYyNjM5OTg7XG4kdHJhbnNwYXJlbnQ6ICMwMDAwMDAwMDtcbiR0cmFuc3BhcmVudC13aGl0ZTogI0ZGRkZGRjQwO1xuJHRyYW5zcGFyZW50LXdoaXRlLXN0cm9uZzogI0ZGRkZGRjgwO1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialOffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-special-offers',
                templateUrl: './special-offers.component.html',
                styleUrls: ['./special-offers.component.scss']
            }]
    }], function () { return [{ type: _cars_http_service__WEBPACK_IMPORTED_MODULE_1__["CarsHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cars/sub-search/sub-search.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cars/sub-search/sub-search.component.ts ***!
  \*********************************************************/
/*! exports provided: SubSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubSearchComponent", function() { return SubSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dates_range_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dates-range-validator */ "./src/app/cars/dates-range-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cars_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cars-http.service */ "./src/app/cars/cars-http.service.ts");
/* harmony import */ var _service_static_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/static-location.service */ "./src/app/service/static-location.service.ts");
/* harmony import */ var _service_car_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/car-input.directive */ "./src/app/service/car-input.directive.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/__ivy_ngcc__/fesm2015/saturn-datepicker.js");
/* harmony import */ var _m0t0r_ngx_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @m0t0r/ngx-slider */ "./node_modules/@m0t0r/ngx-slider/__ivy_ngcc__/fesm2015/m0t0r-ngx-slider.js");













const _c0 = ["cityInput"];
function SubSearchComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Dates are required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubSearchComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You can't pick date before today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubSearchComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Second date must be after first date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubSearchComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date doesn't exists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubSearchComponent_div_19_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You can't book car for less than a day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubSearchComponent_div_19_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You can't pick date after one year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubSearchComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubSearchComponent_div_19_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SubSearchComponent_div_19_div_2_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SubSearchComponent_div_19_div_3_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SubSearchComponent_div_19_div_4_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SubSearchComponent_div_19_div_5_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SubSearchComponent_div_19_div_6_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var tmp_4_0 = null;
    const currVal_4 = (tmp_4_0 = ctx_r4.getErrors("dates")) == null ? null : tmp_4_0.minRange;
    var tmp_5_0 = null;
    const currVal_5 = (tmp_5_0 = ctx_r4.getErrors("dates")) == null ? null : tmp_5_0.matDatepickerMax;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.getErrors("dates").required && !ctx_r4.getErrors("dates").matDatepickerParse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.getErrors("dates").matDatepickerMin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.getErrors("dates").matDatepickerRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.getErrors("dates").matDatepickerParse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_5);
} }
function SubSearchComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Price range ($/per day):");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-slider", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r5.options);
} }
class SubSearchComponent {
    constructor(router, datePipe, formBuilder, route, httpService, staticLocationService) {
        this.router = router;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.route = route;
        this.httpService = httpService;
        this.staticLocationService = staticLocationService;
        this.cities = [];
        this.minStartDate = new Date();
        this.routeParams = {};
        this.maxDate = new Date(this.minStartDate.getTime() + 31536000000);
        this.mapFormToRouteParams = (_a) => {
            var { dates, priceRange, city } = _a, value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["dates", "priceRange", "city"]);
            let resCity;
            let minAmount = priceRange[0];
            let maxAmount = priceRange[1];
            if (city === '') {
                resCity = '';
            }
            else {
                const selectedCity = this.cities.find(c => c.name === city || c.short_name === city);
                if (selectedCity) {
                    resCity = selectedCity.short_name;
                }
                else {
                    resCity = this.routeParams.city;
                }
            }
            if (resCity !== this.routeParams.city) {
                minAmount = null;
                maxAmount = null;
            }
            return Object.assign(Object.assign({}, value), { startDate: this.mapDate(dates.begin), endDate: this.mapDate(dates.end), minAmount,
                maxAmount, city: resCity });
        };
    }
    ngOnInit() {
        this.initSearchForm();
        this.cities = this.staticLocationService.getCities();
        this.route.queryParams.subscribe(params => {
            const city = params.city;
            this.routeParams = Object.assign({}, params);
            this.setSearchFormValues();
            const minMaxPromise = this.httpService.getMaxAndMinPrices({
                city
            });
            minMaxPromise.then(minMaxValues => {
                if (minMaxValues.max !== -1 && minMaxValues.min !== -1) {
                    const newOptions = Object.assign({}, this.options);
                    newOptions.floor = Math.floor(minMaxValues.min);
                    newOptions.ceil = Math.ceil(minMaxValues.max);
                    const values = [];
                    values[0] = Math.floor(this.routeParams.minAmount || minMaxValues.min);
                    values[1] = Math.ceil(this.routeParams.maxAmount || minMaxValues.max);
                    this.options = newOptions;
                    this.searchForm.controls.priceRange.setValue(values);
                }
            });
        });
    }
    search() {
        this.routeParams = this.mapFormToRouteParams(this.searchForm.value);
        const searchParams = {
            queryParams: this.routeParams
        };
        this.router.navigate(['/search/results'], searchParams).then();
    }
    isControlInvalid(controlName) {
        const control = this.searchForm.controls[controlName];
        return control.touched && control.invalid;
    }
    getErrors(controlName) {
        return this.searchForm.controls[controlName].errors;
    }
    mapDate(date) {
        return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm');
    }
    initSearchForm() {
        const datesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _dates_range_validator__WEBPACK_IMPORTED_MODULE_3__["DatesRangeValidator"].validator]);
        const sortByControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        const priceSliderControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        const cityControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.searchForm = this.formBuilder.group({
            dates: datesControl,
            ascending: sortByControl,
            priceRange: priceSliderControl,
            city: cityControl
        });
    }
    setSearchFormValues() {
        this.searchForm.controls.dates.setValue({
            begin: new Date(this.routeParams.startDate),
            end: new Date(this.routeParams.endDate)
        });
        this.searchForm.controls.ascending.setValue(this.routeParams.ascending || 'true');
        const min = this.routeParams.minAmount || 0;
        const max = this.routeParams.maxAmount || 100;
        this.searchForm.controls.priceRange.setValue([
            parseInt('' + min, 10), parseInt('' + max, 10) // min and max converts to string without this parse
        ]);
        this.searchForm.controls.city.setValue(this.routeParams.city);
    }
    onCitySelect(city) {
        this.searchForm.get('city').setValue(city.name);
    }
}
SubSearchComponent.ɵfac = function SubSearchComponent_Factory(t) { return new (t || SubSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cars_http_service__WEBPACK_IMPORTED_MODULE_6__["CarsHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_static_location_service__WEBPACK_IMPORTED_MODULE_7__["StaticLocationService"])); };
SubSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubSearchComponent, selectors: [["app-sub-search"]], viewQuery: function SubSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cityInput = _t.first);
    } }, decls: 34, vars: 10, consts: [[1, "sub-search-card"], [1, "title"], [3, "formGroup", "submit"], [1, "input-container"], ["for", "city", 1, "input-label"], ["cityLabel", ""], ["formControlName", "city", "id", "city", "placeholder", "", "type", "text", 3, "carInput"], ["cityInput", ""], [1, "input-label"], ["datesLabel", ""], [1, "required-marker"], ["formControlName", "dates", 3, "carInput", "min", "satDatepicker", "max", "click"], [3, "rangeMode"], ["datePicker", ""], ["class", "error", 4, "ngIf"], [1, "sort-by-container"], ["formControlName", "ascending", "id", "low-to-high", "type", "radio", "value", "true"], ["for", "low-to-high", 1, "sort-by-label"], ["for", "low-to-high"], ["formControlName", "ascending", "id", "high-to-low", "type", "radio", "value", "false"], ["for", "high-to-low", 1, "sort-by-label"], ["for", "high-to-low"], ["class", "custom-slider", 4, "ngIf"], ["type", "submit", 3, "disabled"], [1, "error"], [4, "ngIf"], [1, "custom-slider"], ["for", "priceRange", 1, "input-label"], ["formControlName", "priceRange", "id", "priceRange", 3, "options"]], template: function SubSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Find your car now! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SubSearchComponent_Template_form_submit_3_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Dates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubSearchComponent_Template_input_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return _r3.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "sat-datepicker", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SubSearchComponent_div_19_Template, 7, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sort by price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Low to high");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "High to low");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SubSearchComponent_div_31_Template, 4, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carInput", _r2)("min", ctx.minStartDate)("satDatepicker", _r3)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangeMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("dates"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.searchForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _service_car_input_directive__WEBPACK_IMPORTED_MODULE_8__["CarInputDirective"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_9__["SatDatepickerInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_9__["SatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _m0t0r_ngx_slider__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"]], styles: [".sub-search-card[_ngcontent-%COMP%] {\n  padding-left: 5vw;\n  padding-right: 2vw;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  position: relative;\n  height: 4em;\n  overflow: hidden;\n  margin-top: 2vh;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   label.input-label[_ngcontent-%COMP%] {\n  font: 1em/1.5em \"Rawline Regular\";\n  color: #5F727E;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  height: 0;\n  width: 0;\n  opacity: 0;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background: #5F727E 0 0 no-repeat padding-box;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   label.sort-by-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2em;\n  border: 1px solid #5F727E;\n  transform: skewX(45deg);\n  width: calc(50% + .75em - .1em);\n  margin-bottom: 0;\n  padding-left: 0.75em;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   label.sort-by-label[for=low-to-high][_ngcontent-%COMP%] {\n  left: -0.75em;\n  margin-right: 0.1em;\n  border-left: 0;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   label.sort-by-label[for=low-to-high][_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border-left: 1px solid #5F727E;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   label.sort-by-label[for=high-to-low][_ngcontent-%COMP%] {\n  left: 50%;\n  margin-left: 0.1em;\n  border-right: 0;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   label.sort-by-label[for=high-to-low][_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border-right: 1px solid #5F727E;\n}\n.sub-search-card[_ngcontent-%COMP%]   .sort-by-container[_ngcontent-%COMP%]   label.sort-by-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: calc(100% - .75em);\n  margin: 0;\n  padding-left: 2px;\n  transform: skewX(-45deg);\n  white-space: nowrap;\n  font: 1em/1.5em \"Rawline Regular\";\n  color: #06263998;\n  cursor: pointer;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-top: 2vmax;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]   label.input-label[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n  font: 1em/2em \"Rawline Regular\";\n  color: #062639;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]     .ngx-slider .ngx-slider-bar {\n  background: #062639;\n  height: 2px;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]     .ngx-slider .ngx-slider-bubble {\n  font: 1.5em/1em \"Rawline SemiBold\";\n  color: #062639;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]     .ngx-slider .ngx-slider-pointer {\n  top: 0;\n  \n  bottom: auto;\n  height: 0;\n  width: 0;\n  border-bottom: 1em solid #062639;\n  border-left: 0.5em solid transparent;\n  border-right: 0.5em solid transparent;\n  border-radius: 0;\n  background-color: transparent;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]     .ngx-slider .ngx-slider-pointer:after {\n  display: none;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]     .ngx-slider .ngx-slider-bubble {\n  bottom: 1em;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]     .ngx-slider .ngx-slider-limit {\n  font-weight: bold;\n  color: #062639;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]     .ngx-slider .ngx-slider-tick.ng5-slider-selected {\n  background: #062639;\n}\n.sub-search-card[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]     .ngx-slider .ngx-slider-selection {\n  background: #062639;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9zdWItc2VhcmNoL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFxjYXJzXFxzdWItc2VhcmNoXFxzdWItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJzL3N1Yi1zZWFyY2gvc3ViLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2Fycy9zdWItc2VhcmNoL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFLGlCQUFBO0VBQ0Esa0JBQUE7QUNGRjtBRElFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUk7RUFDRSxpQ0FBQTtFQUNBLGNFWkM7QURVUDtBREtJO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDSE47QURLTTtFQUNFLDZDQUFBO0FDSFI7QURLUTtFQUNFLFlBQUE7QUNIVjtBRFFJO0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUVBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtBQ1ROO0FEV007RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDVlI7QURhUTtFQUNFLDhCQUFBO0FDWFY7QURlTTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNiUjtBRGVRO0VBQ0UsK0JBQUE7QUNiVjtBRGlCTTtFQUVFLHlCQUFBO0VBRUEsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JFdkVJO0VGd0VKLGVBQUE7QUNqQlI7QURzQkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNwQko7QURzQkk7RUFDRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0V2RkU7QURtRVI7QUR5QlE7RUFDRSxtQkU3RkY7RUY4RkUsV0FBQTtBQ3ZCVjtBRDBCUTtFQUNFLGtDQUFBO0VBQ0EsY0VuR0Y7QUQyRVI7QUQyQlE7RUFDRSxNQUFBO0VBQVEsc0NBQUE7RUFDUixZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDeEJWO0FEMkJRO0VBQ0UsYUFBQTtBQ3pCVjtBRDRCUTtFQUNFLFdBQUE7QUMxQlY7QUQ2QlE7RUFDRSxpQkFBQTtFQUNBLGNFNUhGO0FEaUdSO0FEOEJRO0VBQ0UsbUJFaElGO0FEb0dSO0FEK0JRO0VBQ0UsbUJFcElGO0FEdUdSIiwiZmlsZSI6InNyYy9hcHAvY2Fycy9zdWItc2VhcmNoL3N1Yi1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XG5cbi5zdWItc2VhcmNoLWNhcmQge1xuXG4gIHBhZGRpbmctbGVmdDogNXZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAydnc7XG5cbiAgLnNvcnQtYnktY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNGVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuXG4gICAgbGFiZWwuaW5wdXQtbGFiZWwge1xuICAgICAgZm9udDogMWVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gICAgICBjb2xvcjogJGdyZXk7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1yYWRpb10ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRncmV5IDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxhYmVsLnNvcnQtYnktbGFiZWwge1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmV5O1xuICAgICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XG4gICAgICAvLy43NWVtIC0gaGFsZiBvZiBsaW5lIGhpZ2gsIC4xZW0gbWFyZ2luXG4gICAgICB3aWR0aDogY2FsYyg1MCUgKyAuNzVlbSAtIC4xZW0pO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIC8vLjc1ZW0gLSBoYWxmIG9mIGxpbiBoaWdoXG4gICAgICBwYWRkaW5nLWxlZnQ6IC43NWVtO1xuXG4gICAgICAmW2Zvcj1cImxvdy10by1oaWdoXCJdIHtcbiAgICAgICAgLy8uNzVlbSAtIGhhbGYgb2YgbGluZSBoaWdoXG4gICAgICAgIGxlZnQ6IC0uNzVlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuMWVtO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcblxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmV5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZbZm9yPVwiaGlnaC10by1sb3dcIl0ge1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuMWVtO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmV5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgLy8uNzVlbSAtIGhhbGYgb2YgbGluIGhpZ2hcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIC43NWVtKTtcblxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC00NWRlZyk7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQ6IDFlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICAgICAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tc2xpZGVyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMnZtYXg7XG5cbiAgICBsYWJlbC5pbnB1dC1sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICAgIGZvbnQ6IDFlbS8yZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5uZ3gtc2xpZGVyIHtcbiAgICAgICAgLm5neC1zbGlkZXItYmFyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmd4LXNsaWRlci1idWJibGUge1xuICAgICAgICAgIGZvbnQ6IDEuNWVtLzFlbSBcIlJhd2xpbmUgU2VtaUJvbGRcIjtcbiAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5neC1zbGlkZXItcG9pbnRlciB7XG4gICAgICAgICAgdG9wOiAwOyAvKiB0byByZW1vdmUgdGhlIGRlZmF1bHQgcG9zaXRpb25pbmcgKi9cbiAgICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFlbSBzb2xpZCAkYmxhY2s7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IC41ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAuNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmd4LXNsaWRlci1wb2ludGVyOmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5neC1zbGlkZXItYnViYmxlIHtcbiAgICAgICAgICBib3R0b206IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZ3gtc2xpZGVyLWxpbWl0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5neC1zbGlkZXItdGljay5uZzUtc2xpZGVyLXNlbGVjdGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubmd4LXNsaWRlci1zZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRibGFjaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbiIsIi5zdWItc2VhcmNoLWNhcmQge1xuICBwYWRkaW5nLWxlZnQ6IDV2dztcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xufVxuLnN1Yi1zZWFyY2gtY2FyZCAuc29ydC1ieS1jb250YWluZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cbi5zdWItc2VhcmNoLWNhcmQgLnNvcnQtYnktY29udGFpbmVyIGxhYmVsLmlucHV0LWxhYmVsIHtcbiAgZm9udDogMWVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gIGNvbG9yOiAjNUY3MjdFO1xufVxuLnN1Yi1zZWFyY2gtY2FyZCAuc29ydC1ieS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuLnN1Yi1zZWFyY2gtY2FyZCAuc29ydC1ieS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZDogIzVGNzI3RSAwIDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuLnN1Yi1zZWFyY2gtY2FyZCAuc29ydC1ieS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN1Yi1zZWFyY2gtY2FyZCAuc29ydC1ieS1jb250YWluZXIgbGFiZWwuc29ydC1ieS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1RjcyN0U7XG4gIHRyYW5zZm9ybTogc2tld1goNDVkZWcpO1xuICB3aWR0aDogY2FsYyg1MCUgKyAuNzVlbSAtIC4xZW0pO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbn1cbi5zdWItc2VhcmNoLWNhcmQgLnNvcnQtYnktY29udGFpbmVyIGxhYmVsLnNvcnQtYnktbGFiZWxbZm9yPWxvdy10by1oaWdoXSB7XG4gIGxlZnQ6IC0wLjc1ZW07XG4gIG1hcmdpbi1yaWdodDogMC4xZW07XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuLnN1Yi1zZWFyY2gtY2FyZCAuc29ydC1ieS1jb250YWluZXIgbGFiZWwuc29ydC1ieS1sYWJlbFtmb3I9bG93LXRvLWhpZ2hdIGxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNUY3MjdFO1xufVxuLnN1Yi1zZWFyY2gtY2FyZCAuc29ydC1ieS1jb250YWluZXIgbGFiZWwuc29ydC1ieS1sYWJlbFtmb3I9aGlnaC10by1sb3ddIHtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMC4xZW07XG4gIGJvcmRlci1yaWdodDogMDtcbn1cbi5zdWItc2VhcmNoLWNhcmQgLnNvcnQtYnktY29udGFpbmVyIGxhYmVsLnNvcnQtYnktbGFiZWxbZm9yPWhpZ2gtdG8tbG93XSBsYWJlbCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1RjcyN0U7XG59XG4uc3ViLXNlYXJjaC1jYXJkIC5zb3J0LWJ5LWNvbnRhaW5lciBsYWJlbC5zb3J0LWJ5LWxhYmVsIGxhYmVsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIC43NWVtKTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgdHJhbnNmb3JtOiBza2V3WCgtNDVkZWcpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250OiAxZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgY29sb3I6ICMwNjI2Mzk5ODtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN1Yi1zZWFyY2gtY2FyZCAuY3VzdG9tLXNsaWRlciB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMnZtYXg7XG59XG4uc3ViLXNlYXJjaC1jYXJkIC5jdXN0b20tc2xpZGVyIGxhYmVsLmlucHV0LWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gIGZvbnQ6IDFlbS8yZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgY29sb3I6ICMwNjI2Mzk7XG59XG4uc3ViLXNlYXJjaC1jYXJkIC5jdXN0b20tc2xpZGVyIDo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1iYXIge1xuICBiYWNrZ3JvdW5kOiAjMDYyNjM5O1xuICBoZWlnaHQ6IDJweDtcbn1cbi5zdWItc2VhcmNoLWNhcmQgLmN1c3RvbS1zbGlkZXIgOjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJ1YmJsZSB7XG4gIGZvbnQ6IDEuNWVtLzFlbSBcIlJhd2xpbmUgU2VtaUJvbGRcIjtcbiAgY29sb3I6ICMwNjI2Mzk7XG59XG4uc3ViLXNlYXJjaC1jYXJkIC5jdXN0b20tc2xpZGVyIDo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyIHtcbiAgdG9wOiAwO1xuICAvKiB0byByZW1vdmUgdGhlIGRlZmF1bHQgcG9zaXRpb25pbmcgKi9cbiAgYm90dG9tOiBhdXRvO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBib3JkZXItYm90dG9tOiAxZW0gc29saWQgIzA2MjYzOTtcbiAgYm9yZGVyLWxlZnQ6IDAuNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDAuNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zdWItc2VhcmNoLWNhcmQgLmN1c3RvbS1zbGlkZXIgOjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXBvaW50ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN1Yi1zZWFyY2gtY2FyZCAuY3VzdG9tLXNsaWRlciA6Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYnViYmxlIHtcbiAgYm90dG9tOiAxZW07XG59XG4uc3ViLXNlYXJjaC1jYXJkIC5jdXN0b20tc2xpZGVyIDo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1saW1pdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzA2MjYzOTtcbn1cbi5zdWItc2VhcmNoLWNhcmQgLmN1c3RvbS1zbGlkZXIgOjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXRpY2submc1LXNsaWRlci1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMwNjI2Mzk7XG59XG4uc3ViLXNlYXJjaC1jYXJkIC5jdXN0b20tc2xpZGVyIDo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMDYyNjM5O1xufSIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SubSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sub-search',
                templateUrl: './sub-search.component.html',
                styleUrls: ['./sub-search.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _cars_http_service__WEBPACK_IMPORTED_MODULE_6__["CarsHttpService"] }, { type: _service_static_location_service__WEBPACK_IMPORTED_MODULE_7__["StaticLocationService"] }]; }, { cityInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['cityInput', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/cars/wheels-drive.ts":
/*!**************************************!*\
  !*** ./src/app/cars/wheels-drive.ts ***!
  \**************************************/
/*! exports provided: WheelsDriveTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelsDriveTypes", function() { return WheelsDriveTypes; });
class WheelsDriveTypes {
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
    static getWheelsDrives() {
        return [
            this.RWD, this.AWD, this.FWD
        ];
    }
}
WheelsDriveTypes.RWD = new WheelsDriveTypes('RWD', 'RWD');
WheelsDriveTypes.AWD = new WheelsDriveTypes('AWD', 'AWD');
WheelsDriveTypes.FWD = new WheelsDriveTypes('FWD', 'FWD');


/***/ }),

/***/ "./src/app/errors.ts":
/*!***************************!*\
  !*** ./src/app/errors.ts ***!
  \***************************/
/*! exports provided: ConnectionError, AuthorizationError, AuthenticationError, ConflictError, BadRequestError, NotFoundError, handleErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionError", function() { return ConnectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationError", function() { return AuthorizationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationError", function() { return AuthenticationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConflictError", function() { return ConflictError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadRequestError", function() { return BadRequestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleErrors", function() { return handleErrors; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class ConnectionError extends Error {
    constructor(message) {
        super(message);
    }
}
class AuthorizationError extends Error {
    constructor(message) {
        super(message);
    }
}
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
    }
}
class ConflictError extends Error {
    constructor(message) {
        super(message);
    }
}
class BadRequestError extends Error {
    constructor(message) {
        super(message);
    }
}
class NotFoundError extends Error {
    constructor(message) {
        super(message);
    }
}
function handleErrors(error) {
    if (!error.status) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new ConnectionError(`Server isn't available, try again`));
    }
    switch (error.status) {
        case 400: return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new BadRequestError('Wrong request params'));
        case 401: return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new AuthorizationError('Wrong email or password'));
        case 403: return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new AuthenticationError('You are not allowed to do this action'));
        case 404: return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new NotFoundError('Not found'));
        case 409: return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new ConflictError('Conflict'));
        default: return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new Error(error.message));
    }
}


/***/ }),

/***/ "./src/app/local-store.service.ts":
/*!****************************************!*\
  !*** ./src/app/local-store.service.ts ***!
  \****************************************/
/*! exports provided: LocalStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStoreService", function() { return LocalStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const TOKEN = 'TOKEN';
const NAME = 'NAME';
const LAST_NAME = 'LAST_NAME';
const EMAIL = 'EMAIL';
const PHONE = 'PHONE';
class LocalStoreService {
    constructor() { }
    saveToken(token) {
        localStorage.setItem(TOKEN, token);
    }
    getToken() {
        return localStorage.getItem(TOKEN);
    }
    deleteToken() {
        localStorage.removeItem(TOKEN);
    }
    saveName(firstName) {
        localStorage.setItem(NAME, firstName);
    }
    getName() {
        return localStorage.getItem(NAME);
    }
    deleteName() {
        localStorage.removeItem(NAME);
    }
    saveLastName(lastName) {
        localStorage.setItem(LAST_NAME, lastName);
    }
    getLastName() {
        return localStorage.getItem(LAST_NAME);
    }
    deleteLastName() {
        localStorage.removeItem(LAST_NAME);
    }
    saveEmail(email) {
        localStorage.setItem(EMAIL, email);
    }
    getEmail() {
        return localStorage.getItem(EMAIL);
    }
    deleteEmail() {
        localStorage.removeItem(EMAIL);
    }
    savePhoneNumber(phoneNumber) {
        localStorage.setItem(PHONE, phoneNumber);
    }
    getPhoneNumber() {
        return localStorage.getItem(PHONE);
    }
    deletePhoneNumber() {
        localStorage.removeItem(PHONE);
    }
}
LocalStoreService.ɵfac = function LocalStoreService_Factory(t) { return new (t || LocalStoreService)(); };
LocalStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStoreService, factory: LocalStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/car-card/car-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/service/car-card/car-card.component.ts ***!
  \********************************************************/
/*! exports provided: CarCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarCardComponent", function() { return CarCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../car-details/car-details.component */ "./src/app/service/car-details/car-details.component.ts");




const _c0 = function (a0) { return { backgroundImage: a0 }; };
function CarCardComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "car-details", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx_r0.car.image_url[0] + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("car", ctx_r0.car);
} }
class CarCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarCardComponent.ɵfac = function CarCardComponent_Factory(t) { return new (t || CarCardComponent)(); };
CarCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarCardComponent, selectors: [["car-card"]], inputs: { car: "car" }, decls: 2, vars: 1, consts: [[1, "car-card"], [4, "ngIf"], [1, "car-img-container", 3, "ngStyle"], [1, "details-card", 3, "car"]], template: function CarCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarCardComponent_ng_container_1_Template, 3, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.car);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_2__["CarDetailsComponent"]], styles: [".car-card[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.car-card[_ngcontent-%COMP%]   .car-img-container[_ngcontent-%COMP%] {\n  padding-top: 56.25%;\n  background-size: 100% auto;\n}\n.car-card[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9jYXItY2FyZC9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcc2VydmljZVxcY2FyLWNhcmRcXGNhci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL2Nhci1jYXJkL2Nhci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0FDQ0o7QURFRTtFQUNFLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UvY2FyLWNhcmQvY2FyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyLWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgLmNhci1pbWctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICB9XG5cbiAgLmRldGFpbHMtY2FyZCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4iLCIuY2FyLWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uY2FyLWNhcmQgLmNhci1pbWctY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG59XG4uY2FyLWNhcmQgLmRldGFpbHMtY2FyZCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'car-card',
                templateUrl: './car-card.component.html',
                styleUrls: ['./car-card.component.scss']
            }]
    }], function () { return []; }, { car: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['car']
        }] }); })();


/***/ }),

/***/ "./src/app/service/car-details/car-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/car-details/car-details.component.ts ***!
  \**************************************************************/
/*! exports provided: CarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsComponent", function() { return CarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _car_price_label_car_price_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../car-price-label/car-price-label.component */ "./src/app/service/car-price-label/car-price-label.component.ts");




function CarDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "car-price-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.car.make, " ", ctx_r0.car.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.car.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("car", ctx_r0.car);
} }
class CarDetailsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CarDetailsComponent.ɵfac = function CarDetailsComponent_Factory(t) { return new (t || CarDetailsComponent)(); };
CarDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarDetailsComponent, selectors: [["car-details"]], inputs: { car: "car" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "details-container"], [1, "title"], [1, "year"], [3, "car"]], template: function CarDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarDetailsComponent_ng_container_0_Template, 7, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.car);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _car_price_label_car_price_label_component__WEBPACK_IMPORTED_MODULE_2__["CarPriceLabelComponent"]], styles: [".details-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.details-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font: Bold 2.25em/1.25em Bebas Neue;\n  color: #062639;\n  text-transform: capitalize;\n}\n.details-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  text-align: left;\n  font: Bold 0.6em/1.2em Bebas Neue;\n  color: #06263998;\n  text-transform: capitalize;\n  margin-left: 1vw;\n}\n.details-container[_ngcontent-%COMP%]   car-price-label[_ngcontent-%COMP%] {\n  margin-left: auto;\n  transform: translateY(-50%);\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9jYXItZGV0YWlscy9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcc2VydmljZVxcY2FyLWRldGFpbHNcXGNhci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL2Nhci1kZXRhaWxzL2Nhci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL2Nhci1kZXRhaWxzL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUNERjtBREdFO0VBQ0UsbUNBQUE7RUFDQSxjRUxJO0VGTUosMEJBQUE7QUNESjtBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCRVJNO0VGU04sMEJBQUE7RUFDQSxnQkFBQTtBQ0ROO0FES0U7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS9jYXItZGV0YWlscy9jYXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcblxuLmRldGFpbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcblxuICAudGl0bGUge1xuICAgIGZvbnQ6IEJvbGQgMi4yNWVtLzEuMjVlbSBCZWJhcyBOZXVlO1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgICAueWVhciB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udDogQm9sZCAuNmVtLzEuMmVtIEJlYmFzIE5ldWU7XG4gICAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgICB9XG4gIH1cblxuICBjYXItcHJpY2UtbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG4iLCIuZGV0YWlscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRldGFpbHMtY29udGFpbmVyIC50aXRsZSB7XG4gIGZvbnQ6IEJvbGQgMi4yNWVtLzEuMjVlbSBCZWJhcyBOZXVlO1xuICBjb2xvcjogIzA2MjYzOTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZGV0YWlscy1jb250YWluZXIgLnRpdGxlIC55ZWFyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udDogQm9sZCAwLjZlbS8xLjJlbSBCZWJhcyBOZXVlO1xuICBjb2xvcjogIzA2MjYzOTk4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWxlZnQ6IDF2dztcbn1cbi5kZXRhaWxzLWNvbnRhaW5lciBjYXItcHJpY2UtbGFiZWwge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiAxO1xufSIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'car-details',
                templateUrl: './car-details.component.html',
                styleUrls: ['./car-details.component.scss']
            }]
    }], function () { return []; }, { car: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/service/car-input.directive.ts":
/*!************************************************!*\
  !*** ./src/app/service/car-input.directive.ts ***!
  \************************************************/
/*! exports provided: CarInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarInputDirective", function() { return CarInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CarInputDirective {
    constructor(el1) {
        this.el1 = el1;
    }
    onMouseEnter() {
        this.label.classList.add('dirty');
    }
    onMouseLeave() {
        if (!this.el1.nativeElement.value) {
            this.label.classList.remove('dirty');
        }
    }
    ngAfterViewChecked() {
        if (this.el1.nativeElement.value) {
            this.label.classList.add('dirty');
        }
    }
}
CarInputDirective.ɵfac = function CarInputDirective_Factory(t) { return new (t || CarInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CarInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CarInputDirective, selectors: [["", "carInput", ""]], hostBindings: function CarInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function CarInputDirective_focusin_HostBindingHandler() { return ctx.onMouseEnter(); })("focusout", function CarInputDirective_focusout_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { label: ["carInput", "label"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[carInput]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['carInput']
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusin']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusout']
        }] }); })();


/***/ }),

/***/ "./src/app/service/car-price-label/car-price-label.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/service/car-price-label/car-price-label.component.ts ***!
  \**********************************************************************/
/*! exports provided: CarPriceLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarPriceLabelComponent", function() { return CarPriceLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class CarPriceLabelComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarPriceLabelComponent.ɵfac = function CarPriceLabelComponent_Factory(t) { return new (t || CarPriceLabelComponent)(); };
CarPriceLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarPriceLabelComponent, selectors: [["car-price-label"]], inputs: { car: "car" }, decls: 8, vars: 4, consts: [[1, "car-price-container"], [1, "car-price-prefix"], [1, "car-price-value"], [1, "car-price-label"]], template: function CarPriceLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "per day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx.car.price_per_day, "1.0-1"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: [".car-price-container[_ngcontent-%COMP%] {\n  background: #FFFFFF 0 0 no-repeat padding-box;\n  box-shadow: 0 0.3vh 0.3vw #0000005F;\n  display: flex;\n  margin-right: 1vh;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.car-price-container[_ngcontent-%COMP%]   .car-price-prefix[_ngcontent-%COMP%] {\n  font: 1em/4.6em \"Rawline SemiBold\";\n  color: #062639;\n  transform: translate(30%, -30%);\n  margin-left: 4px;\n  margin-right: 1vh;\n}\n.car-price-container[_ngcontent-%COMP%]   .car-price-value[_ngcontent-%COMP%] {\n  font: 4em/1.2em Bebas Neue;\n  color: #062639;\n}\n.car-price-container[_ngcontent-%COMP%]   .car-price-label[_ngcontent-%COMP%] {\n  align-self: center;\n  transform: rotate(-90deg) translateX(10%);\n  font: 1em/1.2em Bebas Neue;\n  color: #06263998;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9jYXItcHJpY2UtbGFiZWwvQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXHNlcnZpY2VcXGNhci1wcmljZS1sYWJlbFxcY2FyLXByaWNlLWxhYmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL2Nhci1wcmljZS1sYWJlbC9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NlcnZpY2UvY2FyLXByaWNlLWxhYmVsL2Nhci1wcmljZS1sYWJlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZDQUFBO0VBQ0EsbUNDSk87RURLUCxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUVERjtBRkdFO0VBQ0Usa0NBQUE7RUFDQSxjQ1RJO0VEVUosK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FFREo7QUZJRTtFQUNFLDBCQUFBO0VBQ0EsY0NqQkk7QUNlUjtBRktFO0VBQ0Usa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JDckJRO0VEc0JSLDBCQUFBO0FFSEoiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlL2Nhci1wcmljZS1sYWJlbC9jYXItcHJpY2UtbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XG5cbi5jYXItcHJpY2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlIDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMXZoO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgLmNhci1wcmljZS1wcmVmaXgge1xuICAgIGZvbnQ6IDFlbS80LjZlbSBcIlJhd2xpbmUgU2VtaUJvbGRcIjtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSwgLTMwJSk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDF2aDtcbiAgfVxuXG4gIC5jYXItcHJpY2UtdmFsdWUge1xuICAgIGZvbnQ6IDRlbS8xLjJlbSBCZWJhcyBOZXVlO1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gIH1cblxuICAuY2FyLXByaWNlLWxhYmVsIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVYKDEwJSk7XG4gICAgZm9udDogMWVtLzEuMmVtIEJlYmFzIE5ldWU7XG4gICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbiIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiIsIi5jYXItcHJpY2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwIDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwIDAuM3ZoIDAuM3Z3ICMwMDAwMDA1RjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAxdmg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cbi5jYXItcHJpY2UtY29udGFpbmVyIC5jYXItcHJpY2UtcHJlZml4IHtcbiAgZm9udDogMWVtLzQuNmVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICBjb2xvcjogIzA2MjYzOTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlLCAtMzAlKTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxdmg7XG59XG4uY2FyLXByaWNlLWNvbnRhaW5lciAuY2FyLXByaWNlLXZhbHVlIHtcbiAgZm9udDogNGVtLzEuMmVtIEJlYmFzIE5ldWU7XG4gIGNvbG9yOiAjMDYyNjM5O1xufVxuLmNhci1wcmljZS1jb250YWluZXIgLmNhci1wcmljZS1sYWJlbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVYKDEwJSk7XG4gIGZvbnQ6IDFlbS8xLjJlbSBCZWJhcyBOZXVlO1xuICBjb2xvcjogIzA2MjYzOTk4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarPriceLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'car-price-label',
                templateUrl: './car-price-label.component.html',
                styleUrls: ['./car-price-label.component.scss']
            }]
    }], function () { return []; }, { car: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/service/dialog/dialog-builder.ts":
/*!**************************************************!*\
  !*** ./src/app/service/dialog/dialog-builder.ts ***!
  \**************************************************/
/*! exports provided: DialogBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBuilder", function() { return DialogBuilder; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.component */ "./src/app/service/dialog/dialog.component.ts");


class DialogBuilder {
    constructor(dialog) {
        this.dialog = dialog;
        this.params = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        this.params.data = {};
    }
    title(title) {
        this.params.data.title = title;
        return this;
    }
    message(message) {
        this.params.data.message = message;
        return this;
    }
    negativeBtn(message, listener) {
        this.params.data.negativeBtn = message;
        this.negativeBtnListener = listener;
        return this;
    }
    neutralBtn(message, listener) {
        this.params.data.neutralBtn = message;
        this.neutralBtnListener = listener;
        return this;
    }
    positiveBtn(message, listener) {
        this.params.data.positiveBtn = message;
        this.positiveBtnListener = listener;
        return this;
    }
    show() {
        const dialogRef = this.dialog.open(_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], this.params);
        dialogRef.afterClosed().subscribe(value => {
            if (value.negative) {
                this.negativeBtnListener();
            }
            if (value.neutral) {
                this.neutralBtnListener();
            }
            if (value.positive) {
                this.positiveBtnListener();
            }
        });
        return dialogRef;
    }
}


/***/ }),

/***/ "./src/app/service/dialog/dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/service/dialog/dialog.component.ts ***!
  \****************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function () { return { negative: true }; };
function DialogComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDialogClose", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.negativeBtn);
} }
const _c1 = function () { return { neutral: true }; };
function DialogComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDialogClose", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.neutralBtn);
} }
const _c2 = function () { return { positive: true }; };
function DialogComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDialogClose", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.positiveBtn);
} }
class DialogComponent {
    constructor(dialogData) {
        this.title = dialogData.title;
        this.message = dialogData.message;
        this.negativeBtn = dialogData.negativeBtn;
        this.neutralBtn = dialogData.neutralBtn;
        this.positiveBtn = dialogData.positiveBtn;
    }
    ngOnInit() {
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-error"]], decls: 9, vars: 5, consts: [[1, "dialog-container"], [1, "title"], [1, "message"], [1, "buttons-container"], ["class", "negative-button", 3, "matDialogClose", 4, "ngIf"], ["class", "neutral-button", 3, "matDialogClose", 4, "ngIf"], ["class", "positive-button", 3, "matDialogClose", 4, "ngIf"], [1, "negative-button", 3, "matDialogClose"], [1, "neutral-button", 3, "matDialogClose"], [1, "positive-button", 3, "matDialogClose"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogComponent_button_6_Template, 2, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogComponent_button_7_Template, 2, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialogComponent_button_8_Template, 2, 3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.negativeBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.neutralBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.positiveBtn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".dialog-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font: 2rem/1.35em \"Rawline SemiBold\";\n  color: #EA2340;\n  margin-bottom: 0;\n}\n.dialog-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  font: 1rem/1.35em \"Rawline Regular\";\n  color: #06263998;\n  margin: 0;\n}\n.dialog-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"negative neutral positive\";\n}\n.dialog-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #EA2340;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  border: 0;\n  font: 1em \"Rawline SemiBold\";\n  padding: 0.5em;\n  color: #FFFFFF;\n  box-shadow: 0 0.3vh 0.3vw #062639;\n  margin-top: 2em;\n}\n.dialog-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button.negative-button[_ngcontent-%COMP%] {\n  grid-area: negative;\n}\n.dialog-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button.neutral-button[_ngcontent-%COMP%] {\n  grid-area: neutral;\n}\n.dialog-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button.positive-button[_ngcontent-%COMP%] {\n  grid-area: positive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9kaWFsb2cvQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXHNlcnZpY2VcXGRpYWxvZ1xcZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL2RpYWxvZy9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NlcnZpY2UvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG9DQUFBO0VBQ0EsY0NKRTtFREtGLGdCQUFBO0FFRko7QUZLRTtFQUNFLG1DQUFBO0VBQ0EsZ0JDTlE7RURPUixTQUFBO0FFSEo7QUZNRTtFQUNFLGFBQUE7RUFDQSxnREFBQTtBRUpKO0FGTUk7RUFDRSxtQkNuQkE7RURvQkEsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGNDdEJFO0VEdUJGLGlDQUFBO0VBQ0EsZUFBQTtBRUpOO0FGTU07RUFDRSxtQkFBQTtBRUpSO0FGT007RUFDRSxrQkFBQTtBRUxSO0FGUU07RUFDRSxtQkFBQTtBRU5SIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xuLmRpYWxvZy1jb250YWluZXIge1xuXG4gIC50aXRsZSB7XG4gICAgZm9udDogIDJyZW0vMS4zNWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAgIGNvbG9yOiAkcmVkO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAubWVzc2FnZSB7XG4gICAgZm9udDogMXJlbS8xLjM1ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ25lZ2F0aXZlIG5ldXRyYWwgcG9zaXRpdmUnO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICRyZWQ7XG4gICAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgZm9udDogMWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAgICAgcGFkZGluZzogLjVlbTtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIC4zdmggLjN2dyAkYmxhY2s7XG4gICAgICBtYXJnaW4tdG9wOiAyZW07XG5cbiAgICAgICYubmVnYXRpdmUtYnV0dG9uIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBuZWdhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgJi5uZXV0cmFsLWJ1dHRvbiB7XG4gICAgICAgIGdyaWQtYXJlYTogbmV1dHJhbDtcbiAgICAgIH1cblxuICAgICAgJi5wb3NpdGl2ZS1idXR0b24ge1xuICAgICAgICBncmlkLWFyZWE6IHBvc2l0aXZlO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbn1cbiIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiIsIi5kaWFsb2ctY29udGFpbmVyIC50aXRsZSB7XG4gIGZvbnQ6IDJyZW0vMS4zNWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICBjb2xvcjogI0VBMjM0MDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5tZXNzYWdlIHtcbiAgZm9udDogMXJlbS8xLjM1ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgY29sb3I6ICMwNjI2Mzk5ODtcbiAgbWFyZ2luOiAwO1xufVxuLmRpYWxvZy1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuZWdhdGl2ZSBuZXV0cmFsIHBvc2l0aXZlXCI7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0VBMjM0MDtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgYm9yZGVyOiAwO1xuICBmb250OiAxZW0gXCJSYXdsaW5lIFNlbWlCb2xkXCI7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMCAwLjN2aCAwLjN2dyAjMDYyNjM5O1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIgYnV0dG9uLm5lZ2F0aXZlLWJ1dHRvbiB7XG4gIGdyaWQtYXJlYTogbmVnYXRpdmU7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIgYnV0dG9uLm5ldXRyYWwtYnV0dG9uIHtcbiAgZ3JpZC1hcmVhOiBuZXV0cmFsO1xufVxuLmRpYWxvZy1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbi5wb3NpdGl2ZS1idXR0b24ge1xuICBncmlkLWFyZWE6IHBvc2l0aXZlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/image-slider/image-slider.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/image-slider/image-slider.component.ts ***!
  \****************************************************************/
/*! exports provided: ImageSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function() { return ImageSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["sliderContainer"];
const _c1 = function (a0, a1) { return { "hidden-left": a0, "hidden-right": a1 }; };
function ImageSliderComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, i_r3 < ctx_r1.currentPhoto, i_r3 > ctx_r1.currentPhoto));
} }
const _c2 = function (a0) { return { "height": a0 }; };
class ImageSliderComponent {
    constructor() {
        this.photoUrls = [];
        this.slideTimeout = 5;
        this.containerHeight = '100%';
        this._currentPhoto = 0;
    }
    ngOnInit() {
        this.containerHeight = `${this.sliderContainer.nativeElement.offsetWidth * 9 / 16}px`;
        this.setSlideInterval();
    }
    set currentPhoto(n) {
        const sliderLength = this.photoUrls.length;
        if (n < 0)
            this.currentPhoto = n + sliderLength;
        else if (n >= sliderLength)
            this.currentPhoto = n - sliderLength;
        else {
            this._currentPhoto = n;
        }
    }
    get currentPhoto() {
        return this._currentPhoto;
    }
    minusClick() {
        this.currentPhoto--;
        this.setSlideInterval();
    }
    plusClick() {
        this.currentPhoto++;
        this.setSlideInterval();
    }
    setSlideInterval() {
        clearTimeout(this.timeout);
        clearInterval(this.interval);
        this.timeout = setTimeout(() => this.interval = setInterval(() => this.currentPhoto++, this.slideTimeout * 1000), this.slideTimeout * 1000);
    }
}
ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) { return new (t || ImageSliderComponent)(); };
ImageSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageSliderComponent, selectors: [["image-slider"]], viewQuery: function ImageSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderContainer = _t.first);
    } }, inputs: { photoUrls: ["photos", "photoUrls"], slideTimeout: "slideTimeout" }, decls: 7, vars: 4, consts: [[1, "slider-container", 3, "ngStyle"], ["sliderContainer", ""], [3, "src", "ngClass", 4, "ngFor", "ngForOf"], [1, "plus-btn", 3, "click"], [1, "icon-right-open"], [1, "minus-btn", 3, "click"], [1, "icon-left-open"], [3, "src", "ngClass"]], template: function ImageSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageSliderComponent_img_2_Template, 1, 5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSliderComponent_Template_button_click_3_listener() { return ctx.plusClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSliderComponent_Template_button_click_5_listener() { return ctx.minusClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx.containerHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.photoUrls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".slider-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.slider-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  transition: 0.5s;\n}\n.slider-container[_ngcontent-%COMP%]   img.hidden-left[_ngcontent-%COMP%] {\n  left: -100%;\n}\n.slider-container[_ngcontent-%COMP%]   img.hidden-right[_ngcontent-%COMP%] {\n  left: 100%;\n}\n.slider-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%);\n  background: #FFFFFF40;\n  box-shadow: none;\n}\n.slider-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #FFFFFF80;\n}\n.slider-container[_ngcontent-%COMP%]   button.plus-btn[_ngcontent-%COMP%] {\n  left: calc(100% - 2em);\n}\n.slider-container[_ngcontent-%COMP%]   button.minus-btn[_ngcontent-%COMP%] {\n  left: 2em;\n}\n.slider-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #062639;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9pbWFnZS1zbGlkZXIvQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXHNlcnZpY2VcXGltYWdlLXNsaWRlclxcaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL2ltYWdlLXNsaWRlci9pbWFnZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2UvaW1hZ2Utc2xpZGVyL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0FDRE47QURJSTtFQUNFLFVBQUE7QUNGTjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkVwQmdCO0VGcUJoQixnQkFBQTtBQ0xKO0FET0k7RUFDRSxxQkV2QnFCO0FEa0IzQjtBRFFJO0VBQ0Usc0JBQUE7QUNOTjtBRFNJO0VBQ0UsU0FBQTtBQ1BOO0FEVUk7RUFDRSxVQUFBO0VBQ0EsY0UxQ0U7QURrQ1IiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlL2ltYWdlLXNsaWRlci9pbWFnZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XG4uc2xpZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IC41cztcblxuICAgICYuaGlkZGVuLWxlZnQge1xuICAgICAgbGVmdDogLTEwMCU7XG4gICAgfVxuXG4gICAgJi5oaWRkZW4tcmlnaHQge1xuICAgICAgbGVmdDogMTAwJTtcbiAgICB9XG5cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAkdHJhbnNwYXJlbnQtd2hpdGU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHRyYW5zcGFyZW50LXdoaXRlLXN0cm9uZztcbiAgICB9XG5cbiAgICAmLnBsdXMtYnRuIHtcbiAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDJlbSk7XG4gICAgfVxuXG4gICAgJi5taW51cy1idG4ge1xuICAgICAgbGVmdDogMmVtO1xuICAgIH1cblxuICAgIGkge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgfVxuICB9XG59XG4iLCIuc2xpZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpZGVyLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnNsaWRlci1jb250YWluZXIgaW1nLmhpZGRlbi1sZWZ0IHtcbiAgbGVmdDogLTEwMCU7XG59XG4uc2xpZGVyLWNvbnRhaW5lciBpbWcuaGlkZGVuLXJpZ2h0IHtcbiAgbGVmdDogMTAwJTtcbn1cbi5zbGlkZXItY29udGFpbmVyIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjQwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNsaWRlci1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjgwO1xufVxuLnNsaWRlci1jb250YWluZXIgYnV0dG9uLnBsdXMtYnRuIHtcbiAgbGVmdDogY2FsYygxMDAlIC0gMmVtKTtcbn1cbi5zbGlkZXItY29udGFpbmVyIGJ1dHRvbi5taW51cy1idG4ge1xuICBsZWZ0OiAyZW07XG59XG4uc2xpZGVyLWNvbnRhaW5lciBidXR0b24gaSB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjMDYyNjM5O1xufSIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'image-slider',
                templateUrl: './image-slider.component.html',
                styleUrls: ['./image-slider.component.scss']
            }]
    }], function () { return []; }, { sliderContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sliderContainer', { static: true }]
        }], photoUrls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['photos']
        }], slideTimeout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['slideTimeout']
        }] }); })();


/***/ }),

/***/ "./src/app/service/login-registration-modal/login-registration-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/service/login-registration-modal/login-registration-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LoginRegistrationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegistrationModalComponent", function() { return LoginRegistrationModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/service/login/login.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/service/registration/registration.component.ts");







function LoginRegistrationModalComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoginRegistrationModalComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Registration");
} }
function LoginRegistrationModalComponent_ng_container_5_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 8);
} }
const _c0 = function (a0) { return { "loading": a0 }; };
function LoginRegistrationModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginRegistrationModalComponent_ng_container_5_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-login", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loading", function LoginRegistrationModalComponent_ng_container_5_Template_app_login_loading_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.loading = $event; })("logged-in", function LoginRegistrationModalComponent_ng_container_5_Template_app_login_logged_in_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.dialogRef.close(); })("registration", function LoginRegistrationModalComponent_ng_container_5_Template_app_login_registration_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.loginFlag = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.loading));
} }
function LoginRegistrationModalComponent_ng_template_6_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 8);
} }
function LoginRegistrationModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginRegistrationModalComponent_ng_template_6_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-registration", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loading", function LoginRegistrationModalComponent_ng_template_6_Template_app_registration_loading_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.loading = $event; })("login", function LoginRegistrationModalComponent_ng_template_6_Template_app_registration_login_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.loginFlag = true; })("registered", function LoginRegistrationModalComponent_ng_template_6_Template_app_registration_registered_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r5.loading));
} }
class LoginRegistrationModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.loginFlag = true;
        this.loading = false;
    }
    ngOnInit() {
    }
}
LoginRegistrationModalComponent.ɵfac = function LoginRegistrationModalComponent_Factory(t) { return new (t || LoginRegistrationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
LoginRegistrationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginRegistrationModalComponent, selectors: [["login-registration-modal"]], decls: 8, vars: 4, consts: [[1, "login-registration-dialog-container"], [1, "title"], [4, "ngIf", "ngIfElse"], ["registrationLabel", ""], ["registrationTemplate", ""], ["mode", "indeterminate", 4, "ngIf"], [3, "ngClass"], [3, "loading", "logged-in", "registration"], ["mode", "indeterminate"], [3, "loading", "login", "registered"]], template: function LoginRegistrationModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginRegistrationModalComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginRegistrationModalComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginRegistrationModalComponent_ng_container_5_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginRegistrationModalComponent_ng_template_6_Template, 3, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFlag)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFlag)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]], styles: [".login-registration-dialog-container[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  width: 70vw;\n}\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .login-registration-dialog-container[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n.login-registration-dialog-container[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9sb2dpbi1yZWdpc3RyYXRpb24tbW9kYWwvQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXHNlcnZpY2VcXGxvZ2luLXJlZ2lzdHJhdGlvbi1tb2RhbFxcbG9naW4tcmVnaXN0cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL2xvZ2luLXJlZ2lzdHJhdGlvbi1tb2RhbC9sb2dpbi1yZWdpc3RyYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxlQUFBO0VBQ0EsV0FBQTtBQ0FGO0FERUU7RUFMRjtJQU1JLFlBQUE7RUNDRjtBQUNGO0FEQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UvbG9naW4tcmVnaXN0cmF0aW9uLW1vZGFsL2xvZ2luLXJlZ2lzdHJhdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1yZWdpc3RyYXRpb24tZGlhbG9nLWNvbnRhaW5lciB7XG5cbiAgcGFkZGluZzogMCAxcmVtO1xuICB3aWR0aDogNzB2dztcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG5cbiAgaDEudGl0bGUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuIiwiLmxvZ2luLXJlZ2lzdHJhdGlvbi1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxcmVtO1xuICB3aWR0aDogNzB2dztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmxvZ2luLXJlZ2lzdHJhdGlvbi1kaWFsb2ctY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbn1cbi5sb2dpbi1yZWdpc3RyYXRpb24tZGlhbG9nLWNvbnRhaW5lciBoMS50aXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRegistrationModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'login-registration-modal',
                templateUrl: './login-registration-modal.component.html',
                styleUrls: ['./login-registration-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/service/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/dialog-builder */ "./src/app/service/dialog/dialog-builder.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errors */ "./src/app/errors.ts");
/* harmony import */ var _shared_shared_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared-http.service */ "./src/app/shared/shared-http.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _car_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../car-input.directive */ "./src/app/service/car-input.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function LoginComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It'snot look like email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_8_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_8_div_2_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getErrors("email").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getErrors("email").email);
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(sharedService, formBuilder, dialog) {
        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.loggedInEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.registrationEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.initForm();
    }
    login(loginData) {
        this.loadingEmitter.emit(true);
        this.sharedService.login(loginData.email, loginData.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.loadingEmitter.emit(false)))
            .subscribe((usr) => this.loggedInEventEmitter.emit(), error => this.showError(error, loginData));
    }
    showError(error, loginData) {
        if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_4__["ConnectionError"]) {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__["DialogBuilder"](this.dialog)
                .title('Connection error')
                .message('Check your connection and try again')
                .negativeBtn('Close')
                .positiveBtn('Try again', () => this.login(loginData))
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_4__["AuthorizationError"]) {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__["DialogBuilder"](this.dialog)
                .title('Authorization error')
                .message('Wrong email or password')
                .positiveBtn('Ok')
                .show();
        }
        else {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__["DialogBuilder"](this.dialog)
                .title('Something goes wrong')
                .positiveBtn('Try again', () => this.login(loginData))
                .negativeBtn('Close')
                .show();
        }
    }
    initForm() {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    isControlInvalid(controlName) {
        const control = this.loginForm.controls[controlName];
        return control.touched && control.invalid;
    }
    getErrors(controlName) {
        return this.loginForm.controls[controlName].errors;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_shared_http_service__WEBPACK_IMPORTED_MODULE_5__["SharedHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], outputs: { loggedInEventEmitter: "logged-in", registrationEmitter: "registration", loadingEmitter: "loading" }, decls: 23, vars: 6, consts: [[3, "formGroup", "submit"], [1, "input-container"], ["for", "email", 1, "input-label"], ["emailLabel", ""], [1, "required-marker"], ["autocomplete", "username", "formControlName", "email", "id", "email", "type", "email", 3, "carInput"], ["class", "error", 4, "ngIf"], ["for", "password", 1, "input-label"], ["passwordLabel", ""], ["autocomplete", "current-password", "formControlName", "password", "id", "password", "type", "password", 3, "carInput"], ["type", "submit", 3, "disabled"], [1, "registration-navigator"], [1, "navigator", 3, "click"], [1, "error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_0_listener() { return ctx.login(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Y\u2019alla!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Not registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_21_listener() { return ctx.registrationEmitter.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _car_input_directive__WEBPACK_IMPORTED_MODULE_7__["CarInputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".navigator[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font: 0.8rem/1.5em \"Rawline Regular\";\n  color: #06263998;\n  cursor: pointer;\n}\n\n.registration-navigator[_ngcontent-%COMP%] {\n  font: 0.8rem/1.5em \"Rawline Regular\";\n  color: #06263998;\n  margin-top: 2%;\n}\n\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .registration-navigator[_ngcontent-%COMP%] {\n    margin-left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9sb2dpbi9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcc2VydmljZVxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL2xvZ2luL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLG9DQUFBO0VBQ0EsZ0JFTlU7RUZPVixjQUFBO0FDREY7O0FER0U7RUFMRjtJQU1JLGdCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XG5cbi5uYXZpZ2F0b3Ige1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udDogLjhyZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgY29sb3I6ICRkYXJrLWdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZ2lzdHJhdGlvbi1uYXZpZ2F0b3Ige1xuICBmb250OiAuOHJlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogJGRhcmstZ3JleTtcbiAgbWFyZ2luLXRvcDogMiU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG59XG4iLCIubmF2aWdhdG9yIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQ6IDAuOHJlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogIzA2MjYzOTk4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWdpc3RyYXRpb24tbmF2aWdhdG9yIHtcbiAgZm9udDogMC44cmVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gIGNvbG9yOiAjMDYyNjM5OTg7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5yZWdpc3RyYXRpb24tbmF2aWdhdG9yIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG59IiwiJHNoYWRvdzogMCAuM3ZoIC4zdncgIzAwMDAwMDVGO1xuJHJlZDogI0VBMjM0MDtcbiRibGFjazogIzA2MjYzOTtcbiR3aGl0ZTogI0ZGRkZGRjtcbiRncmV5OiAjNUY3MjdFO1xuJGRhcmstZ3JleTogIzA2MjYzOTk4O1xuJHRyYW5zcGFyZW50OiAjMDAwMDAwMDA7XG4kdHJhbnNwYXJlbnQtd2hpdGU6ICNGRkZGRkY0MDtcbiR0cmFuc3BhcmVudC13aGl0ZS1zdHJvbmc6ICNGRkZGRkY4MDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _shared_shared_http_service__WEBPACK_IMPORTED_MODULE_5__["SharedHttpService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { loggedInEventEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['logged-in']
        }], registrationEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['registration']
        }], loadingEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['loading']
        }] }); })();


/***/ }),

/***/ "./src/app/service/registration/registration.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/registration/registration.component.ts ***!
  \****************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/dialog-builder */ "./src/app/service/dialog/dialog-builder.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errors */ "./src/app/errors.ts");
/* harmony import */ var _shared_shared_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared-http.service */ "./src/app/shared/shared-http.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _car_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../car-input.directive */ "./src/app/service/car-input.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function RegistrationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrong email format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_24_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrong email format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_24_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_24_div_2_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_div_24_div_3_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getError("email").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getError("email").email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getError("email").pattern);
} }
function RegistrationComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must contain minimum 8 symbols");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_32_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must contain 1 uppercase letter, 1 lowercase letter and one number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_32_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_32_div_2_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_div_32_div_3_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getError("password").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getError("password").minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getError("password").pattern);
} }
class RegistrationComponent {
    constructor(sharedService, formBuilder, dialog) {
        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.registeredEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loginEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.initForm();
    }
    register(regData) {
        const user = {
            first_name: regData.firstName,
            second_name: regData.lastName
        };
        this.loadingEmitter.emit(true);
        this.sharedService.registration(user, regData.email, regData.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.loadingEmitter.emit(false)))
            .subscribe((usr) => {
            this.registeredEventEmitter.emit();
        }, error => this.showError(error, regData));
    }
    showError(error, regData) {
        if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_4__["ConnectionError"]) {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__["DialogBuilder"](this.dialog)
                .title('Connection error')
                .message('Check your connection and try again')
                .negativeBtn('Close')
                .positiveBtn('Try again', () => this.register(regData))
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_4__["ConflictError"]) {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__["DialogBuilder"](this.dialog)
                .title('Registration error')
                .message('User with this email already exists')
                .positiveBtn('Ok')
                .show();
        }
        else {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_2__["DialogBuilder"](this.dialog)
                .title('Something goes wrong')
                .positiveBtn('Try again', () => this.register(regData))
                .negativeBtn('Close')
                .show();
        }
    }
    initForm() {
        this.registrationForm = this.formBuilder.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]$  )/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]*/)]],
            termsOfUse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]]
        });
    }
    isControlInvalid(controlName) {
        const control = this.registrationForm.controls[controlName];
        return control.touched && control.invalid;
    }
    getError(controlName) {
        const control = this.registrationForm.controls[controlName];
        return control.errors;
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_shared_http_service__WEBPACK_IMPORTED_MODULE_5__["SharedHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], outputs: { registeredEventEmitter: "registered", loginEmitter: "login", loadingEmitter: "loading" }, decls: 48, vars: 10, consts: [[3, "formGroup", "submit"], [1, "input-container"], ["for", "name", 1, "input-label"], ["nameLabel", ""], [1, "required-marker"], ["autocomplete", "name", "formControlName", "firstName", "id", "name", "type", "text", 3, "carInput"], ["class", "error", 4, "ngIf"], ["for", "lastName", 1, "input-label"], ["lastNameLabel", ""], ["autocomplete", "family-name", "formControlName", "lastName", "id", "lastName", "type", "text", 3, "carInput"], ["for", "email", 1, "input-label"], ["emailLabel", ""], ["autocomplete", "email", "formControlName", "email", "id", "email", "type", "email", 3, "carInput"], ["for", "password", 1, "input-label"], ["passwordLabel", ""], ["autocomplete", "new-password", "formControlName", "password", "id", "password", "type", "password", 3, "carInput"], [1, "checkbox-container"], ["formControlName", "termsOfUse", "id", "terms-of-use", "type", "checkbox"], ["for", "terms-of-use", 1, "checkbox-label", "terms-label"], ["href", "terms-of-use"], ["href", "privacy-police"], ["type", "submit", 3, "disabled"], [1, "login-navigator"], [1, "navigator", 3, "click"], [1, "error"], [4, "ngIf"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegistrationComponent_Template_form_submit_0_listener() { return ctx.register(ctx.registrationForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegistrationComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegistrationComponent_div_16_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegistrationComponent_div_24_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegistrationComponent_div_32_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " I agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Y\u2019alla!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Already registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_span_click_46_listener() { return ctx.loginEmitter.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("firstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registrationForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _car_input_directive__WEBPACK_IMPORTED_MODULE_7__["CarInputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: [".login-navigator[_ngcontent-%COMP%] {\n  font: 0.8rem/1.5em \"Rawline Regular\";\n  color: #06263998;\n  margin-top: 2%;\n}\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .login-navigator[_ngcontent-%COMP%] {\n    margin-left: 10%;\n  }\n}\na[_ngcontent-%COMP%], .navigator[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font: 0.8rem/1.5em \"Rawline Regular\";\n  color: #06263998;\n  cursor: pointer;\n}\n.checkbox-container[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  position: relative;\n}\n.checkbox-container[_ngcontent-%COMP%]   label.terms-label[_ngcontent-%COMP%] {\n  font: 0.8rem/1.5em \"Rawline Regular\";\n  color: #06263998;\n  display: inline-block;\n  position: relative;\n  padding-left: 2em;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9yZWdpc3RyYXRpb24vQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXHNlcnZpY2VcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL3JlZ2lzdHJhdGlvbi9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NlcnZpY2UvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9DQUFBO0VBQ0EsZ0JDQ1U7RURBVixjQUFBO0FFREY7QUZHRTtFQUxGO0lBTUksZ0JBQUE7RUVBRjtBQUNGO0FGR0E7RUFDRSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JDVlU7RURXVixlQUFBO0FFQUY7QUZHQTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtBRURGO0FGR0U7RUFDRSxvQ0FBQTtFQUNBLGdCQ3JCUTtFRHNCUixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FFREoiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XG5cbi5sb2dpbi1uYXZpZ2F0b3Ige1xuICBmb250OiAuOHJlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogJGRhcmstZ3JleTtcbiAgbWFyZ2luLXRvcDogMiU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG59XG5cbmEsIC5uYXZpZ2F0b3Ige1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udDogLjhyZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgY29sb3I6ICRkYXJrLWdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciB7XG5cbiAgbWFyZ2luLXRvcDogMnZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgbGFiZWwudGVybXMtbGFiZWwge1xuICAgIGZvbnQ6IC44cmVtLzEuNWVtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiIsIi5sb2dpbi1uYXZpZ2F0b3Ige1xuICBmb250OiAwLjhyZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgY29sb3I6ICMwNjI2Mzk5ODtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmxvZ2luLW5hdmlnYXRvciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxufVxuXG5hLCAubmF2aWdhdG9yIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQ6IDAuOHJlbS8xLjVlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogIzA2MjYzOTk4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja2JveC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGVja2JveC1jb250YWluZXIgbGFiZWwudGVybXMtbGFiZWwge1xuICBmb250OiAwLjhyZW0vMS41ZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgY29sb3I6ICMwNjI2Mzk5ODtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.scss']
            }]
    }], function () { return [{ type: _shared_shared_http_service__WEBPACK_IMPORTED_MODULE_5__["SharedHttpService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { registeredEventEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['registered']
        }], loginEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['login']
        }], loadingEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['loading']
        }] }); })();


/***/ }),

/***/ "./src/app/service/reserve-modal/reserve-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/service/reserve-modal/reserve-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: ReserveModalComponent, ReserveDialogBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveModalComponent", function() { return ReserveModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveDialogBuilder", function() { return ReserveDialogBuilder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/dialog-builder */ "./src/app/service/dialog/dialog-builder.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../errors */ "./src/app/errors.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools */ "./src/app/tools.ts");
/* harmony import */ var _cars_cars_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cars/cars-http.service */ "./src/app/cars/cars-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../local-store.service */ "./src/app/local-store.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _car_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../car-input.directive */ "./src/app/service/car-input.directive.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
















function ReserveModalComponent_mat_progress_bar_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 25);
} }
function ReserveModalComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReserveModalComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Second name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReserveModalComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReserveModalComponent_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Its not look like email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReserveModalComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReserveModalComponent_div_37_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReserveModalComponent_div_37_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = (tmp_0_0 = ctx_r6.getErrors("emil")) == null ? null : tmp_0_0.required;
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r6.getErrors("emil")) == null ? null : tmp_1_0.email;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
} }
function ReserveModalComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReserveModalComponent_div_45_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrong phone format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReserveModalComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReserveModalComponent_div_45_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReserveModalComponent_div_45_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getErrors("phone").required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getErrors("phone").pattern);
} }
const _c0 = function (a0) { return { "loading": a0 }; };
class ReserveModalComponent {
    constructor(reserveData, httpService, router, localStore, formBuilder, dialog, dialogRef) {
        this.httpService = httpService;
        this.router = router;
        this.localStore = localStore;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.loading = false;
        this.car = reserveData.car;
        this.dateStart = reserveData.dateStart;
        this.dateEnd = reserveData.dateEnd;
    }
    ngOnInit() {
        this.initForm();
    }
    reserveCar(person) {
        this.loading = true;
        const reservationDetails = {
            start_date_time: Object(_tools__WEBPACK_IMPORTED_MODULE_6__["mapDate"])(this.dateStart),
            end_date_time: Object(_tools__WEBPACK_IMPORTED_MODULE_6__["mapDate"])(this.dateEnd),
            person_who_booked: person
        };
        this.localStore.savePhoneNumber(person.phone);
        this.httpService.reserveCar(this.car.serial_number, reservationDetails)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.loading = false))
            .subscribe(order => this.showSuccess(order), error => this.showError(error, person));
    }
    isControlInvalid(controlName) {
        const control = this.reserveForm.controls[controlName];
        return (control === null || control === void 0 ? void 0 : control.touched) && (control === null || control === void 0 ? void 0 : control.invalid);
    }
    getErrors(controlName) {
        var _a;
        return (_a = this.reserveForm.controls[controlName]) === null || _a === void 0 ? void 0 : _a.errors;
    }
    getPrice() {
        var _a, _b;
        return this.car.price_per_day *
            Math.max(1, Math.abs((((_a = this.dateEnd) === null || _a === void 0 ? void 0 : _a.getTime()) - ((_b = this.dateStart) === null || _b === void 0 ? void 0 : _b.getTime())) / 86400000));
    }
    initForm() {
        const firstNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getNameOfUser(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        const lastNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getLastNameOfUser(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        const emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getEmailOfUser(), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        const phoneControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getPhoneOfUser(), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\+?\d{10,12}$/)]);
        this.reserveForm = this.formBuilder.group({
            firstName: firstNameControl,
            lastName: lastNameControl,
            phone: phoneControl,
            email: emailControl
        });
    }
    getNameOfUser() {
        return this.localStore.getName();
    }
    getLastNameOfUser() {
        return this.localStore.getLastName();
    }
    getEmailOfUser() {
        return this.localStore.getEmail();
    }
    getPhoneOfUser() {
        return this.localStore.getPhoneNumber();
    }
    showSuccess(order) {
        this.dialogRef.close();
        new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
            .title('Order success')
            .message(`Your order number ${order.order_number}, order price ${order.amount}$`)
            .positiveBtn('Close', () => window.location.reload())
            .show();
    }
    showError(error, person) {
        if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_5__["ConnectionError"]) {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Connection error')
                .message('Check your connection and try again')
                .negativeBtn('Close')
                .positiveBtn('Try again', () => this.reserveCar(person))
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_5__["AuthorizationError"]) {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Authorization error')
                .message('You need login or register before rent car')
                .negativeBtn('Close')
                .neutralBtn('Registration', () => this.router.navigate(['/registration'], { queryParams: { url: decodeURI(this.router.url) } }))
                .positiveBtn('Login', () => this.router.navigate(['/login'], { queryParams: { url: decodeURI(this.router.url) } }))
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_5__["AuthenticationError"]) {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Forbidden')
                .message('You cant rent this car from this account')
                .positiveBtn('Ok')
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_5__["BadRequestError"]) {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Bad request')
                .message('Wrong params')
                .positiveBtn('Ok')
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_5__["ConflictError"]) {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Conflict')
                .message('This car is already booked for this period')
                .positiveBtn('Ok')
                .show();
        }
        else {
            new _dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_3__["DialogBuilder"](this.dialog)
                .title('Something goes wrong')
                .positiveBtn('Try again', () => this.reserveCar(person))
                .negativeBtn('Close')
                .show();
        }
    }
}
ReserveModalComponent.ɵfac = function ReserveModalComponent_Factory(t) { return new (t || ReserveModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cars_cars_http_service__WEBPACK_IMPORTED_MODULE_7__["CarsHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_store_service__WEBPACK_IMPORTED_MODULE_9__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"])); };
ReserveModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReserveModalComponent, selectors: [["reserve-modal"]], decls: 51, vars: 29, consts: [[1, "reserve-dialog-container"], [1, "title-container"], [1, "title"], [1, "subtitle"], ["mode", "indeterminate", 4, "ngIf"], [3, "ngClass"], [3, "formGroup", "submit"], [1, "input-container"], ["for", "firstName", 1, "input-label"], ["firstNameLabel", ""], [1, "required-marker"], ["autocomplete", "name", "formControlName", "firstName", "id", "firstName", "type", "text", 3, "carInput"], ["class", "error", 4, "ngIf"], ["for", "secondName", 1, "input-label"], ["secondNameLabel", ""], ["autocomplete", "family-name", "formControlName", "lastName", "id", "secondName", "type", "text", 3, "carInput"], ["for", "email", 1, "input-label"], ["emailLabel", ""], ["autocomplete", "email", "formControlName", "email", "id", "email", "type", "email", 3, "carInput"], ["for", "phone", 1, "input-label"], ["phoneLabel", ""], ["autocomplete", "phone", "formControlName", "phone", "id", "phone", "type", "tel", 3, "carInput"], [1, "buttons-container"], ["matDialogClose", "", "type", "button"], ["type", "submit", 3, "disabled"], ["mode", "indeterminate"], [1, "error"], [4, "ngIf"]], template: function ReserveModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReserveModalComponent_mat_progress_bar_11_Template, 1, 0, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ReserveModalComponent_Template_form_submit_13_listener() { return ctx.reserveCar(ctx.reserveForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "First name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ReserveModalComponent_div_21_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Second name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReserveModalComponent_div_29_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ReserveModalComponent_div_37_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ReserveModalComponent_div_45_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Reserve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Order ", ctx.car.make, " ", ctx.car.model, " ", ctx.car.year, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("From ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 18, ctx.dateStart, "dd/MM/yyyy"), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 21, ctx.dateEnd, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 24, ctx.getPrice(), "1.0-1"), "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reserveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("firstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carInput", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.reserveForm.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _car_input_directive__WEBPACK_IMPORTED_MODULE_11__["CarInputDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], styles: [".reserve-dialog-container[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  width: 70vw;\n}\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .reserve-dialog-container[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n.reserve-dialog-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.reserve-dialog-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.reserve-dialog-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.reserve-dialog-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 35%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9yZXNlcnZlLW1vZGFsL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFxzZXJ2aWNlXFxyZXNlcnZlLW1vZGFsXFxyZXNlcnZlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlL3Jlc2VydmUtbW9kYWwvcmVzZXJ2ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLGVBQUE7RUFDQSxXQUFBO0FDREY7QURHRTtFQUxGO0lBTUksWUFBQTtFQ0FGO0FBQ0Y7QURHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDREo7QURHSTtFQUNFLGFBQUE7QUNETjtBREtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNISjtBREtJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS9yZXNlcnZlLW1vZGFsL3Jlc2VydmUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XG4ucmVzZXJ2ZS1kaWFsb2ctY29udGFpbmVyIHtcblxuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiA3MHZ3O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cblxuXG4gIC50aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBoMSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMzUlO1xuICAgICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi5yZXNlcnZlLWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiA3MHZ3O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAucmVzZXJ2ZS1kaWFsb2ctY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbn1cbi5yZXNlcnZlLWRpYWxvZy1jb250YWluZXIgLnRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXNlcnZlLWRpYWxvZy1jb250YWluZXIgLnRpdGxlLWNvbnRhaW5lciBoMSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucmVzZXJ2ZS1kaWFsb2ctY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yZXNlcnZlLWRpYWxvZy1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAzNSU7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReserveModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'reserve-modal',
                templateUrl: './reserve-modal.component.html',
                styleUrls: ['./reserve-modal.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }, { type: _cars_cars_http_service__WEBPACK_IMPORTED_MODULE_7__["CarsHttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _local_store_service__WEBPACK_IMPORTED_MODULE_9__["LocalStoreService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }]; }, null); })();
class ReserveDialogBuilder {
    constructor(dialog) {
        this.dialog = dialog;
        this.params = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        this.params.data = {
            car: null,
            dateStart: null,
            dateEnd: null
        };
    }
    car(car) {
        this.params.data.car = car;
        return this;
    }
    dateStart(dateStart) {
        this.params.data.dateStart = dateStart;
        return this;
    }
    dateEnd(dateEnd) {
        this.params.data.dateEnd = dateEnd;
        return this;
    }
    show() {
        const dialogRef = this.dialog.open(ReserveModalComponent, this.params);
        return dialogRef;
    }
}


/***/ }),

/***/ "./src/app/service/service.module.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/service/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/service/registration/registration.component.ts");
/* harmony import */ var _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-card/car-card.component */ "./src/app/service/car-card/car-card.component.ts");
/* harmony import */ var _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-details/car-details.component */ "./src/app/service/car-details/car-details.component.ts");
/* harmony import */ var _login_registration_modal_login_registration_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-registration-modal/login-registration-modal.component */ "./src/app/service/login-registration-modal/login-registration-modal.component.ts");
/* harmony import */ var _reserve_modal_reserve_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reserve-modal/reserve-modal.component */ "./src/app/service/reserve-modal/reserve-modal.component.ts");
/* harmony import */ var _car_price_label_car_price_label_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./car-price-label/car-price-label.component */ "./src/app/service/car-price-label/car-price-label.component.ts");
/* harmony import */ var _car_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./car-input.directive */ "./src/app/service/car-input.directive.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/service/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./image-slider/image-slider.component */ "./src/app/service/image-slider/image-slider.component.ts");
















class ServiceModule {
}
ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceModule });
ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceModule_Factory(t) { return new (t || ServiceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"], _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_5__["CarCardComponent"], _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_6__["CarDetailsComponent"],
        _login_registration_modal_login_registration_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoginRegistrationModalComponent"], _reserve_modal_reserve_modal_component__WEBPACK_IMPORTED_MODULE_8__["ReserveModalComponent"], _car_price_label_car_price_label_component__WEBPACK_IMPORTED_MODULE_9__["CarPriceLabelComponent"], _car_input_directive__WEBPACK_IMPORTED_MODULE_10__["CarInputDirective"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"],
        _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_14__["ImageSliderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]], exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_5__["CarCardComponent"],
        _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_6__["CarDetailsComponent"],
        _login_registration_modal_login_registration_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoginRegistrationModalComponent"],
        _reserve_modal_reserve_modal_component__WEBPACK_IMPORTED_MODULE_8__["ReserveModalComponent"],
        _car_price_label_car_price_label_component__WEBPACK_IMPORTED_MODULE_9__["CarPriceLabelComponent"],
        _car_input_directive__WEBPACK_IMPORTED_MODULE_10__["CarInputDirective"],
        _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_14__["ImageSliderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"], _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_5__["CarCardComponent"], _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_6__["CarDetailsComponent"],
                    _login_registration_modal_login_registration_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoginRegistrationModalComponent"], _reserve_modal_reserve_modal_component__WEBPACK_IMPORTED_MODULE_8__["ReserveModalComponent"], _car_price_label_car_price_label_component__WEBPACK_IMPORTED_MODULE_9__["CarPriceLabelComponent"], _car_input_directive__WEBPACK_IMPORTED_MODULE_10__["CarInputDirective"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"],
                    _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_14__["ImageSliderComponent"]],
                exports: [
                    _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
                    _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_5__["CarCardComponent"],
                    _car_details_car_details_component__WEBPACK_IMPORTED_MODULE_6__["CarDetailsComponent"],
                    _login_registration_modal_login_registration_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoginRegistrationModalComponent"],
                    _reserve_modal_reserve_modal_component__WEBPACK_IMPORTED_MODULE_8__["ReserveModalComponent"],
                    _car_price_label_car_price_label_component__WEBPACK_IMPORTED_MODULE_9__["CarPriceLabelComponent"],
                    _car_input_directive__WEBPACK_IMPORTED_MODULE_10__["CarInputDirective"],
                    _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_14__["ImageSliderComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/static-location.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/static-location.service.ts ***!
  \****************************************************/
/*! exports provided: StaticLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticLocationService", function() { return StaticLocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StaticLocationService {
    constructor() {
        // Hardcoded cities data - Israeli cities
        this.cities = [
            { name: 'Rehovot', short_name: 'Rehovot' },
            { name: 'Tel Aviv', short_name: 'TLV' },
            { name: 'Jerusalem', short_name: 'JRS' },
            { name: 'Haifa', short_name: 'Haifa' },
            { name: 'Beer Sheva', short_name: 'BeerSheva' },
            { name: 'Netanya', short_name: 'Netanya' },
            { name: 'Ashdod', short_name: 'Ashdod' },
            { name: 'Petah Tikva', short_name: 'PetahTikva' },
            { name: 'Rishon LeZion', short_name: 'RishonLeZion' },
            { name: 'Holon', short_name: 'Holon' }
        ];
        // Hardcoded places data
        this.places = [
            {
                place_id: 'static_place_1',
                formatted_address: '123 Main St, New York, NY 10001, USA',
                latitude: 40.7128,
                longitude: -74.0060
            }
        ];
    }
    getCities() {
        return this.cities;
    }
    getPlaces() {
        return this.places;
    }
}
StaticLocationService.ɵfac = function StaticLocationService_Factory(t) { return new (t || StaticLocationService)(); };
StaticLocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StaticLocationService, factory: StaticLocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticLocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/login-registration/login-registration.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/login-registration/login-registration.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoginRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegistrationComponent", function() { return LoginRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/dialog/dialog-builder */ "./src/app/service/dialog/dialog-builder.ts");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-http.service */ "./src/app/shared/shared-http.service.ts");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../local-store.service */ "./src/app/local-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cars_special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cars/special-offers/special-offers.component */ "./src/app/cars/special-offers/special-offers.component.ts");
/* harmony import */ var _cars_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../cars/footer/footer.component */ "./src/app/cars/footer/footer.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _service_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/login/login.component */ "./src/app/service/login/login.component.ts");
/* harmony import */ var _service_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/registration/registration.component */ "./src/app/service/registration/registration.component.ts");














function LoginRegistrationComponent_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 6);
} }
function LoginRegistrationComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Type your data and hit Yalla!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-login", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loading", function LoginRegistrationComponent_ng_container_4_Template_app_login_loading_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.loading = $event; })("logged-in", function LoginRegistrationComponent_ng_container_4_Template_app_login_logged_in_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.loggedIn(); })("registration", function LoginRegistrationComponent_ng_container_4_Template_app_login_registration_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.loginFlag = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoginRegistrationComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type your data and hit Yalla!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-registration", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loading", function LoginRegistrationComponent_ng_template_5_Template_app_registration_loading_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.loading = $event; })("login", function LoginRegistrationComponent_ng_template_5_Template_app_registration_login_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.loginFlag = true; })("registered", function LoginRegistrationComponent_ng_template_5_Template_app_registration_registered_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.registered(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "loading": a0 }; };
class LoginRegistrationComponent {
    constructor(sharedService, localStore, router, route, title, dialog) {
        this.sharedService = sharedService;
        this.localStore = localStore;
        this.router = router;
        this.route = route;
        this.title = title;
        this.dialog = dialog;
        this._loginFlag = true;
        this.loading = false;
    }
    ngOnInit() {
        /**
         * Get url params that contains url before login
         */
        this.loginFlag = this.router.url.split('?')[0] === '/login';
        this.title.setTitle(this.loginFlag ? 'Login' : 'Registration');
        this.route.queryParams.subscribe(params => this.urlNavigate = params.url || '');
        if (this.localStore.getToken()) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_1__["DialogBuilder"](this.dialog)
                .title('Logged in')
                .message('You are already logged in')
                .positiveBtn('Ok', this.back.bind(this))
                .show();
        }
    }
    loggedIn() {
        new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_1__["DialogBuilder"](this.dialog)
            .title('Logged in')
            .message('Logged in success')
            .positiveBtn('Ok', this.back.bind(this))
            .show();
    }
    registered() {
        new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_1__["DialogBuilder"](this.dialog)
            .title('Registered')
            .message('You are logged in success')
            .positiveBtn('Ok', this.back.bind(this))
            .show();
    }
    /**
     * Parse params from string to array of pairs key: value
     * @param url url with params
     */
    parseParams(url) {
        url = url.split('?')[1];
        if (!url) {
            return;
        }
        const pairs = url.split('&');
        const data = {};
        for (const pair of pairs) {
            const param = pair.split('=');
            data[param[0]] = param[1];
        }
        return data;
    }
    get loginFlag() {
        return this._loginFlag;
    }
    set loginFlag(loginFlag) {
        this.title.setTitle(loginFlag ? 'Login' : 'Registration');
        this._loginFlag = loginFlag;
    }
    back() {
        this.router.navigate([this.urlNavigate.split('?')[0]], { queryParams: this.parseParams(this.urlNavigate) }).then();
    }
}
LoginRegistrationComponent.ɵfac = function LoginRegistrationComponent_Factory(t) { return new (t || LoginRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["SharedHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
LoginRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginRegistrationComponent, selectors: [["app-login-registration"]], decls: 9, vars: 6, consts: [[1, "login-registration-card"], [1, "login-registration-progress-container"], ["mode", "indeterminate", 4, "ngIf"], [1, "login-registration-container", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["registration", ""], ["mode", "indeterminate"], [1, "title"], [1, "subtitle"], [3, "loading", "logged-in", "registration"], [3, "loading", "login", "registered"]], template: function LoginRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginRegistrationComponent_mat_progress_bar_2_Template, 1, 0, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginRegistrationComponent_ng_container_4_Template, 6, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginRegistrationComponent_ng_template_5_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-special-offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFlag)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _cars_special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_8__["SpecialOffersComponent"], _cars_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _service_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _service_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"]], styles: [".login-registration-card[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  display: flex;\n  flex-direction: row-reverse;\n}\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .login-registration-card[_ngcontent-%COMP%] {\n    background: url('login-background.webp') no-repeat scroll;\n    width: 100%;\n    min-height: calc(692 / 1920 * 100vw);\n    background-size: auto 100%;\n  }\n}\n.login-registration-card[_ngcontent-%COMP%]   .login-registration-progress-container[_ngcontent-%COMP%] {\n  background: white;\n  box-shadow: 0 0.3vh 0.3vw #0000005F;\n  padding-bottom: 2vmin;\n}\n@media screen and (max-width: 800px), screen and (orientation: portrait) {\n  .login-registration-card[_ngcontent-%COMP%]   .login-registration-progress-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 800px) and (orientation: landscape) {\n  .login-registration-card[_ngcontent-%COMP%]   .login-registration-progress-container[_ngcontent-%COMP%] {\n    width: calc(6 / 19 * 100%);\n    height: 100%;\n    min-height: calc(692 / 1920 * 100vw);\n  }\n  .login-registration-card[_ngcontent-%COMP%]   .login-registration-progress-container[_ngcontent-%COMP%]   .login-registration-container[_ngcontent-%COMP%] {\n    padding-right: 10vw;\n    padding-left: 2vw;\n    padding-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvZ2luLXJlZ2lzdHJhdGlvbi9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFxsb2dpbi1yZWdpc3RyYXRpb25cXGxvZ2luLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xvZ2luLXJlZ2lzdHJhdGlvbi9sb2dpbi1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sb2dpbi1yZWdpc3RyYXRpb24vQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDREY7QURHRTtFQUxGO0lBTUkseURBQUE7SUFDQSxXQUFBO0lBQ0Esb0NBQUE7SUFDQSwwQkFBQTtFQ0FGO0FBQ0Y7QURFRTtFQUNFLGlCQUFBO0VBQ0EsbUNFaEJLO0VGaUJMLHFCQUFBO0FDQUo7QURFSTtFQUxGO0lBTUksV0FBQTtFQ0NKO0FBQ0Y7QURDSTtFQVRGO0lBVUksMEJBQUE7SUFDQSxZQUFBO0lBQ0Esb0NBQUE7RUNFSjtFREFJO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dpbi1yZWdpc3RyYXRpb24vbG9naW4tcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xuXG4ubG9naW4tcmVnaXN0cmF0aW9uLWNhcmQge1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4vbG9naW4tYmFja2dyb3VuZC53ZWJwXCIpIG5vLXJlcGVhdCBzY3JvbGw7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogY2FsYyg2OTIgLyAxOTIwICogMTAwdncpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdHJhdGlvbi1wcm9ncmVzcy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgcGFkZGluZy1ib3R0b206IDJ2bWluO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgIHdpZHRoOiBjYWxjKDYgLyAxOSAqIDEwMCUpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogY2FsYyg2OTIgLyAxOTIwICogMTAwdncpO1xuXG4gICAgICAubG9naW4tcmVnaXN0cmF0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnZ3O1xuICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmxvZ2luLXJlZ2lzdHJhdGlvbi1jYXJkIHtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAubG9naW4tcmVnaXN0cmF0aW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4vbG9naW4tYmFja2dyb3VuZC53ZWJwXCIpIG5vLXJlcGVhdCBzY3JvbGw7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogY2FsYyg2OTIgLyAxOTIwICogMTAwdncpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICB9XG59XG4ubG9naW4tcmVnaXN0cmF0aW9uLWNhcmQgLmxvZ2luLXJlZ2lzdHJhdGlvbi1wcm9ncmVzcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwLjN2aCAwLjN2dyAjMDAwMDAwNUY7XG4gIHBhZGRpbmctYm90dG9tOiAydm1pbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSwgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5sb2dpbi1yZWdpc3RyYXRpb24tY2FyZCAubG9naW4tcmVnaXN0cmF0aW9uLXByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmxvZ2luLXJlZ2lzdHJhdGlvbi1jYXJkIC5sb2dpbi1yZWdpc3RyYXRpb24tcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICB3aWR0aDogY2FsYyg2IC8gMTkgKiAxMDAlKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogY2FsYyg2OTIgLyAxOTIwICogMTAwdncpO1xuICB9XG4gIC5sb2dpbi1yZWdpc3RyYXRpb24tY2FyZCAubG9naW4tcmVnaXN0cmF0aW9uLXByb2dyZXNzLWNvbnRhaW5lciAubG9naW4tcmVnaXN0cmF0aW9uLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMTB2dztcbiAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgfVxufSIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-registration',
                templateUrl: './login-registration.component.html',
                styleUrls: ['./login-registration.component.scss']
            }]
    }], function () { return [{ type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__["SharedHttpService"] }, { type: _local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/logout/logout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/logout/logout.component.ts ***!
  \***************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools */ "./src/app/tools.ts");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-http.service */ "./src/app/shared/shared-http.service.ts");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../local-store.service */ "./src/app/local-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class LogoutComponent {
    constructor(sharedService, localStore, router, route) {
        this.sharedService = sharedService;
        this.localStore = localStore;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        /**
         * Get url params that contains url before logout
         */
        this.route.queryParams.subscribe(params => this.urlNavigate = params.url || '');
        this.localStore.deleteToken();
        this.localStore.deleteEmail();
        this.localStore.deletePhoneNumber();
        this.localStore.deleteLastName();
        this.localStore.deleteName();
        /**
         * Navigate to previous page
         */
        this.router.navigate([this.urlNavigate.split('?')[0]], { queryParams: Object(_tools__WEBPACK_IMPORTED_MODULE_1__["parseParams"])(this.urlNavigate) }).then();
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["SharedHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 0, vars: 0, template: function LogoutComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.css']
            }]
    }], function () { return [{ type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__["SharedHttpService"] }, { type: _local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/navigator/navigator.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/navigator/navigator.component.ts ***!
  \*********************************************************/
/*! exports provided: NavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function() { return NavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/dialog/dialog-builder */ "./src/app/service/dialog/dialog-builder.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors */ "./src/app/errors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../local-store.service */ "./src/app/local-store.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared-http.service */ "./src/app/shared/shared-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["mobileHeader"];
function NavigatorComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setClosed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", index_r5)("routerLink", link_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r4.label, " ");
} }
function NavigatorComponent_ng_container_4_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_ng_container_4_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.setClosed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", ctx_r8.getUrlParams())("routerLink", link_r9.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r9.label, " ");
} }
function NavigatorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigatorComponent_ng_container_4_a_1_Template, 2, 3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.loginLinks);
} }
function NavigatorComponent_ng_container_5_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_ng_container_5_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.setClosed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const logoutLink_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", ctx_r12.getUrlParams())("routerLink", logoutLink_r13.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", logoutLink_r13.label, " ");
} }
function NavigatorComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigatorComponent_ng_container_5_a_1_Template, 2, 3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_ng_container_5_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.showDeleteAccountDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.logoutLinks);
} }
const _c1 = function (a0) { return { "opened": a0 }; };
const _c2 = function (a0) { return { "hidden": a0 }; };
class NavigatorComponent {
    constructor(router, localStore, dialog, httpService) {
        this.router = router;
        this.localStore = localStore;
        this.dialog = dialog;
        this.httpService = httpService;
        this.navLinks = [
            { path: 'search', label: 'Search' },
            { path: 'let-car-work', label: 'Let the car work' },
            { path: 'terms-of-use', label: 'Terms of use' }
        ];
        this.loginLinks = [
            { path: 'registration', label: 'Sign up' },
            { path: 'login', label: 'Log in' }
        ];
        this.logoutLinks = [
            { path: 'logout', label: 'Logout' }
        ];
        this.opened = false;
    }
    ngOnInit() {
    }
    get loggedIn() {
        return !!this.localStore.getToken();
    }
    getUrlParams() {
        var _a;
        if (this.router.url.split('?')[0] === '/login' || this.router.url.split('?')[0] === '/registration') {
            return { url: decodeURIComponent((_a = this.router.url.split('?')[1]) === null || _a === void 0 ? void 0 : _a.split('url=')[1]) };
        }
        return { url: decodeURI(this.router.url) };
    }
    setOpened() {
        this.opened = true;
    }
    setClosed() {
        this.opened = false;
    }
    showDeleteAccountDialog() {
        this.setClosed();
        new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_1__["DialogBuilder"](this.dialog)
            .title('Delete account?')
            .message('Are you sure that you want delete account? You cant undo this action.')
            .negativeBtn('Close')
            .positiveBtn('Delete', () => this.deleteAccount())
            .show();
    }
    deleteAccount() {
        this.httpService.deleteAccount()
            .subscribe(() => this.accountDeleted(), error => this.deleteError(error));
    }
    accountDeleted() {
        this.localStore.deleteToken();
        this.localStore.deleteEmail();
        this.localStore.deletePhoneNumber();
        this.localStore.deleteLastName();
        this.localStore.deleteName();
    }
    deleteError(error) {
        if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_2__["ConnectionError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_1__["DialogBuilder"](this.dialog)
                .title('Connection error')
                .message('Check your connection and try again')
                .negativeBtn('Close')
                .positiveBtn('Try again', () => this.deleteAccount())
                .show();
        }
        else if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_2__["AuthorizationError"]) {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_1__["DialogBuilder"](this.dialog)
                .title('Authorization error')
                .message('You are not authorized')
                .positiveBtn('Ok')
                .show();
        }
        else {
            new _service_dialog_dialog_builder__WEBPACK_IMPORTED_MODULE_1__["DialogBuilder"](this.dialog)
                .title('Something goes wrong')
                .positiveBtn('Try again', () => this.deleteAccount())
                .negativeBtn('Close')
                .show();
        }
    }
}
NavigatorComponent.ɵfac = function NavigatorComponent_Factory(t) { return new (t || NavigatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_http_service__WEBPACK_IMPORTED_MODULE_6__["SharedHttpService"])); };
NavigatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigatorComponent, selectors: [["app-navigator"]], viewQuery: function NavigatorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mobileHeader = _t.first);
    } }, decls: 14, vars: 9, consts: [[1, "header", 3, "ngClass", "swipeleft"], ["href", "/", 1, "logo", 3, "click"], ["alt", "logo", "src", "../../../assets/images/navigator/logo.svg"], ["class", "navigation-link", 3, "id", "routerLink", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mobile-header"], ["mobileHeader", ""], [3, "click"], [1, "fas", "fa-bars"], ["href", "/", 1, "logo"], [1, "hide-div", 3, "ngClass", "click"], [1, "navigation-link", 3, "id", "routerLink", "click"], ["class", "navigation-link", 3, "queryParams", "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "navigation-link", 3, "queryParams", "routerLink", "click"], [1, "navigation-link", 3, "click"]], template: function NavigatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function NavigatorComponent_Template_div_swipeleft_0_listener() { return ctx.setClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_Template_a_click_1_listener() { return ctx.setClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigatorComponent_a_3_Template, 2, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavigatorComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavigatorComponent_ng_container_5_Template, 4, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_Template_button_click_8_listener() { return ctx.setOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_Template_div_click_12_listener() { return ctx.setClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.opened));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.opened));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@media screen and (min-width: 800px) and (orientation: landscape) {\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    background: #062639;\n    box-shadow: 0 0.3vh 0.3vw #0000005F;\n    padding: 1rem 10vw;\n    align-items: center;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-right: auto;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  .header[_ngcontent-%COMP%]   .navigation-link[_ngcontent-%COMP%] {\n    font: 1rem/1.2em \"Rawline SemiBold\";\n    color: #FFFFFF;\n    align-self: center;\n    margin: 0 2rem;\n  }\n\n  .mobile-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 800px), (orientation: portrait) {\n  .mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    background: #062639;\n    box-shadow: 0 0.3vh 0.3vw #0000005F;\n  }\n  .mobile-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: transparent;\n    color: #FFFFFF;\n    border: 0;\n    margin: 1rem;\n  }\n  .mobile-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-right: auto;\n    align-self: center;\n  }\n  .mobile-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    z-index: 4;\n    width: 70vw;\n    position: absolute;\n    left: -70vw;\n    transition: 0.3s;\n    flex-direction: column;\n    display: flex;\n    background: #062639;\n    box-shadow: 0 0.3vh 0.3vw #0000005F;\n    padding: 1rem;\n    align-items: center;\n  }\n  .header.opened[_ngcontent-%COMP%] {\n    transform: translateX(100%);\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    margin: 1rem;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  .header[_ngcontent-%COMP%]   .navigation-link[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    font: 1rem/1.2em \"Rawline SemiBold\";\n    color: #FFFFFF;\n    align-self: center;\n    margin: 1rem;\n    width: 100%;\n    text-align: center;\n  }\n\n  .hide-div[_ngcontent-%COMP%] {\n    transition: 0.3s;\n  }\n  .hide-div.hidden[_ngcontent-%COMP%] {\n    z-index: 3;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmlnYXRvci9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFxuYXZpZ2F0b3JcXG5hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL25hdmlnYXRvci9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9uYXZpZ2F0b3IvbmF2aWdhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQ0pJO0lES0osbUNDUEs7SURRTCxrQkFBQTtJQUNBLG1CQUFBO0VFREY7RUZHRTtJQUNFLGtCQUFBO0VFREo7RUZHSTtJQUNFLGtCQUFBO0VFRE47RUZLRTtJQUNFLG1DQUFBO0lBQ0EsY0NsQkU7SURtQkYsa0JBQUE7SUFDQSxjQUFBO0VFSEo7O0VGT0E7SUFDRSxhQUFBO0VFSkY7QUFDRjtBRlFBO0VBRUU7SUFDRSxhQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQ3BDSTtJRHFDSixtQ0N2Q0s7RUNnQ1A7RUZTRTtJQUNFLHVCQUFBO0lBQ0EsY0N4Q0U7SUR5Q0YsU0FBQTtJQUNBLFlBQUE7RUVQSjtFRlVFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFRVJKO0VGVUk7SUFDRSxrQkFBQTtFRVJOOztFRmFBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBTUEsYUFBQTtJQUNBLG1CQ3JFSTtJRHNFSixtQ0N4RUs7SUR5RUwsYUFBQTtJQUNBLG1CQUFBO0VFZkY7RUZPRTtJQUNFLDJCQUFBO0VFTEo7RUZjRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtFRVpKO0VGY0k7SUFDRSxrQkFBQTtFRVpOO0VGZ0JFO0lBQ0UsZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLGNDckZFO0lEc0ZGLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFRWRKOztFRmtCQTtJQUNFLGdCQUFBO0VFZkY7RUZpQkU7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxPQUFBO0lBQ0EsTUFBQTtFRWZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2aWdhdG9yL25hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRibGFjaztcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIHBhZGRpbmc6IDFyZW0gMTB2dztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgICBpbWcge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmlnYXRpb24tbGluayB7XG4gICAgICBmb250OiAxcmVtLzEuMmVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCAycmVtO1xuICAgIH1cbiAgfVxuXG4gIC5tb2JpbGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLm1vYmlsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogJGJsYWNrO1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHotaW5kZXg6IDQ7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC03MHZ3O1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJi5vcGVuZWQge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogJGJsYWNrO1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmxvZ28ge1xuICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgIG1hcmdpbjogMXJlbTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZpZ2F0aW9uLWxpbmsge1xuICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgIGZvbnQ6IDFyZW0vMS4yZW0gXCJSYXdsaW5lIFNlbWlCb2xkXCI7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmhpZGUtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG5cbiAgICAmLmhpZGRlbiB7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiJHNoYWRvdzogMCAuM3ZoIC4zdncgIzAwMDAwMDVGO1xuJHJlZDogI0VBMjM0MDtcbiRibGFjazogIzA2MjYzOTtcbiR3aGl0ZTogI0ZGRkZGRjtcbiRncmV5OiAjNUY3MjdFO1xuJGRhcmstZ3JleTogIzA2MjYzOTk4O1xuJHRyYW5zcGFyZW50OiAjMDAwMDAwMDA7XG4kdHJhbnNwYXJlbnQtd2hpdGU6ICNGRkZGRkY0MDtcbiR0cmFuc3BhcmVudC13aGl0ZS1zdHJvbmc6ICNGRkZGRkY4MDtcblxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMwNjI2Mzk7XG4gICAgYm94LXNoYWRvdzogMCAwLjN2aCAwLjN2dyAjMDAwMDAwNUY7XG4gICAgcGFkZGluZzogMXJlbSAxMHZ3O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlciAubG9nbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5oZWFkZXIgLmxvZ28gaW1nIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlciAubmF2aWdhdGlvbi1saW5rIHtcbiAgICBmb250OiAxcmVtLzEuMmVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMnJlbTtcbiAgfVxuXG4gIC5tb2JpbGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCksIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm1vYmlsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzA2MjYzOTtcbiAgICBib3gtc2hhZG93OiAwIDAuM3ZoIDAuM3Z3ICMwMDAwMDA1RjtcbiAgfVxuICAubW9iaWxlLWhlYWRlciBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cbiAgLm1vYmlsZS1oZWFkZXIgLmxvZ28ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLm1vYmlsZS1oZWFkZXIgLmxvZ28gaW1nIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICB6LWluZGV4OiA0O1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNzB2dztcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjMDYyNjM5O1xuICAgIGJveC1zaGFkb3c6IDAgMC4zdmggMC4zdncgIzAwMDAwMDVGO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyLm9wZW5lZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIC5oZWFkZXIgLmxvZ28ge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICB9XG4gIC5oZWFkZXIgLmxvZ28gaW1nIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlciAubmF2aWdhdGlvbi1saW5rIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIGZvbnQ6IDFyZW0vMS4yZW0gXCJSYXdsaW5lIFNlbWlCb2xkXCI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaGlkZS1kaXYge1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgLmhpZGUtZGl2LmhpZGRlbiB7XG4gICAgei1pbmRleDogMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigator',
                templateUrl: './navigator.component.html',
                styleUrls: ['./navigator.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_6__["SharedHttpService"] }]; }, { mobileHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mobileHeader']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/privacy-police/privacy-police.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/privacy-police/privacy-police.component.ts ***!
  \*******************************************************************/
/*! exports provided: PrivacyPoliceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPoliceComponent", function() { return PrivacyPoliceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PrivacyPoliceComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyPoliceComponent.ɵfac = function PrivacyPoliceComponent_Factory(t) { return new (t || PrivacyPoliceComponent)(); };
PrivacyPoliceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPoliceComponent, selectors: [["app-privacy-police"]], decls: 111, vars: 0, consts: [[1, "privacy-police"], [1, "title"], [1, "subtitle"], ["href", "https://www.privacypolicygenerator.info"], ["href", "https://www.disclaimergenerator.org/"], ["href", "https://www.cookieconsent.com/what-are-cookies/"]], template: function PrivacyPoliceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Privacy Policy for ilCarro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "At ilCarro, accessible from ilCarro.xyz, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ilCarro and how we use it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ilCarro. This policy is not applicable to any information collected offline or via channels other than this website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Consent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "By using our website, you hereby consent to our Privacy Policy and agree to its terms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Information we collect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "How we use your information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "We use the information we collect in various ways, including to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Provide, operate, and maintain our webste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Improve, personalize, and expand our webste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Understand and analyze how you use our webste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Develop new products, services, features, and functionality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Send you emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Find and prevent fraud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Log Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ilCarro follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Privacy Policy Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Disclaimer Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cookies and Web Beacons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Like any other website, ilCarro uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "For more general information on cookies, please read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\"What Are Cookies\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Advertising Partners Privacy Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "You may consult this list to find the Privacy Policy for each of the advertising partners of ilCarro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ilCarro, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Note that ilCarro has no access to or control over these cookies that are used by third-party advertisers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Third Party Privacy Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "ilCarro's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "CCPA Privacy Rights (Do Not Sell My Personal Information)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Under the CCPA, among other rights, California consumers have the right to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Request that a business delete any personal data about the consumer that a business has collected.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "privacy-police works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "GDPR Data Protection Rights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "The right to access \u2013 You have the right to request copies of your personal data. We may charge you a small fee for this service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "The right to rectification \u2013 You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "The right to erasure \u2013 You have the right to request that we erase your personal data, under certain conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "The right to restrict processing \u2013 You have the right to request that we restrict the processing of your personal data, under certain conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "The right to object to processing \u2013 You have the right to object to our processing of your personal data, under certain conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "The right to data portability \u2013 You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Children's Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "ilCarro does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".privacy-police[_ngcontent-%COMP%] {\n  margin: 3vw 8vw 2vw;\n}\n.privacy-police[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font: 1rem/1.3em \"Rawline Regular\";\n  color: #062639;\n  margin-bottom: 0.5vw;\n}\n.privacy-police[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #06263998;\n  text-decoration: underline;\n}\n.privacy-police[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font: 1rem/1.3em \"Rawline Regular\";\n  color: #062639;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3ByaXZhY3ktcG9saWNlL0M6XFx3b3JrXFxJY2Fycm9cXGlsQ2Fycm8tbWFzdGVyL3NyY1xcYXBwXFxzaGFyZWRcXHByaXZhY3ktcG9saWNlXFxwcml2YWN5LXBvbGljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3ByaXZhY3ktcG9saWNlL3ByaXZhY3ktcG9saWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcHJpdmFjeS1wb2xpY2UvQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7QUNERjtBRG1CRTtFQUNFLGtDQUFBO0VBQ0EsY0VyQkk7RUZzQkosb0JBQUE7QUNqQko7QURvQkU7RUFDRSxnQkV2QlE7RUZ3QlIsMEJBQUE7QUNsQko7QURxQkU7RUFDRSxrQ0FBQTtFQUNBLGNFaENJO0FEYVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcHJpdmFjeS1wb2xpY2UvcHJpdmFjeS1wb2xpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XG5cbi5wcml2YWN5LXBvbGljZSB7XG4gIG1hcmdpbjogM3Z3IDh2dyAydnc7XG5cbiAgLy9oMS50aXRsZSB7XG4gIC8vICBmb250OiAzcmVtLzEuNWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAvLyAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcbiAgLy8gICAgZm9udDogQm9sZCAycmVtLzEuNWVtIFJhbGV3YXk7XG4gIC8vICB9XG4gIC8vICBjb2xvcjogI0VBMjM0MDtcbiAgLy8gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgLy99XG5cbiAgLy9oMi5zdWJ0aXRsZSB7XG4gIC8vICBtYXJnaW4tdG9wOiAxdnc7XG4gIC8vICBmb250OiAycmVtLzEuNWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAvLyAgY29sb3I6ICNFQTIzNDA7XG4gIC8vfVxuXG4gIHAge1xuICAgIGZvbnQ6IDFyZW0vMS4zZW0gXCJSYXdsaW5lIFJlZ3VsYXJcIjtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IC41dnc7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gIGxpIHtcbiAgICBmb250OiAxcmVtLzEuM2VtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gICAgY29sb3I6ICRibGFjaztcbiAgfVxufVxuIiwiLnByaXZhY3ktcG9saWNlIHtcbiAgbWFyZ2luOiAzdncgOHZ3IDJ2dztcbn1cbi5wcml2YWN5LXBvbGljZSBwIHtcbiAgZm9udDogMXJlbS8xLjNlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogIzA2MjYzOTtcbiAgbWFyZ2luLWJvdHRvbTogMC41dnc7XG59XG4ucHJpdmFjeS1wb2xpY2UgYSB7XG4gIGNvbG9yOiAjMDYyNjM5OTg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnByaXZhY3ktcG9saWNlIGxpIHtcbiAgZm9udDogMXJlbS8xLjNlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogIzA2MjYzOTtcbn0iLCIkc2hhZG93OiAwIC4zdmggLjN2dyAjMDAwMDAwNUY7XG4kcmVkOiAjRUEyMzQwO1xuJGJsYWNrOiAjMDYyNjM5O1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM1RjcyN0U7XG4kZGFyay1ncmV5OiAjMDYyNjM5OTg7XG4kdHJhbnNwYXJlbnQ6ICMwMDAwMDAwMDtcbiR0cmFuc3BhcmVudC13aGl0ZTogI0ZGRkZGRjQwO1xuJHRyYW5zcGFyZW50LXdoaXRlLXN0cm9uZzogI0ZGRkZGRjgwO1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPoliceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-police',
                templateUrl: './privacy-police.component.html',
                styleUrls: ['./privacy-police.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared-http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/shared-http.service.ts ***!
  \***********************************************/
/*! exports provided: SharedHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedHttpService", function() { return SharedHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./src/app/errors.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-store.service */ "./src/app/local-store.service.ts");






const URL = 'https://ilcarro-backend.herokuapp.com/v1';
class SharedHttpService {
    constructor(http, localStore) {
        this.http = http;
        this.localStore = localStore;
    }
    registration(user, email, password) {
        const token = `Basic ${btoa(email + ':' + password)}`;
        const auth = {
            headers: {
                Authorization: token
            }
        };
        return this.http.post(URL + '/registration', user, auth)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_2__["handleErrors"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(value => {
            this.localStore.saveEmail(email);
            this.localStore.saveToken(token);
            this.localStore.saveName(value.first_name);
            this.localStore.saveLastName(value.second_name);
        }));
    }
    login(email, password) {
        const token = `Basic ${btoa(email + ':' + password)}`;
        const auth = {
            headers: {
                Authorization: token
            }
        };
        return this.http.get(URL + '/user/login', auth)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_2__["handleErrors"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(value => {
            this.localStore.saveEmail(email);
            this.localStore.saveToken(token);
            this.localStore.saveName(value.first_name);
            this.localStore.saveLastName(value.second_name);
        }));
    }
    deleteAccount() {
        const token = this.localStore.getToken();
        const auth = {
            headers: {
                Authorization: token
            }
        };
        return this.http.delete(`${URL}/user`, auth)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(_errors__WEBPACK_IMPORTED_MODULE_2__["handleErrors"]));
    }
}
SharedHttpService.ɵfac = function SharedHttpService_Factory(t) { return new (t || SharedHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"])); };
SharedHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedHttpService, factory: SharedHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/shared/logout/logout.component.ts");
/* harmony import */ var _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator/navigator.component */ "./src/app/shared/navigator/navigator.component.ts");
/* harmony import */ var _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms-of-use/terms-of-use.component */ "./src/app/shared/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cars_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cars/search/search.component */ "./src/app/cars/search/search.component.ts");
/* harmony import */ var _cars_let_car_work_let_car_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cars/let-car-work/let-car-work.component */ "./src/app/cars/let-car-work/let-car-work.component.ts");
/* harmony import */ var _cars_cars_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cars/cars.module */ "./src/app/cars/cars.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _cars_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cars/search-results/search-results.component */ "./src/app/cars/search-results/search-results.component.ts");
/* harmony import */ var _cars_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cars/car-details/car-details.component */ "./src/app/cars/car-details/car-details.component.ts");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-registration/login-registration.component */ "./src/app/shared/login-registration/login-registration.component.ts");
/* harmony import */ var _privacy_police_privacy_police_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./privacy-police/privacy-police.component */ "./src/app/shared/privacy-police/privacy-police.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");



















const routes = [
    { path: 'registration', component: _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_14__["LoginRegistrationComponent"] },
    { path: 'login', component: _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_14__["LoginRegistrationComponent"] },
    { path: 'search', component: _cars_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"] },
    { path: 'let-car-work', component: _cars_let_car_work_let_car_work_component__WEBPACK_IMPORTED_MODULE_7__["LetCarWorkComponent"] },
    { path: 'terms-of-use', component: _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_4__["TermsOfUseComponent"] },
    { path: 'privacy-police', component: _privacy_police_privacy_police_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyPoliceComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"] },
    { path: 'search/:city/:startDate/:endDate', component: _cars_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultsComponent"] },
    {
        path: 'search/:city/:startDate/:endDate/:minPrice/:maxPrice/:sortByPriceFromLowToHigh',
        component: _cars_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultsComponent"]
    },
    { path: 'search/results', component: _cars_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultsComponent"] },
    { path: 'car/:id', component: _cars_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_12__["CarDetailsComponent"] },
    { path: '', redirectTo: 'search', pathMatch: 'full' }
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: 'reload',
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadAllModules"]
            }),
            _cars_cars_module__WEBPACK_IMPORTED_MODULE_8__["CarsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _service_service_module__WEBPACK_IMPORTED_MODULE_13__["ServiceModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"], _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_3__["NavigatorComponent"], _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_4__["TermsOfUseComponent"], _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_14__["LoginRegistrationComponent"], _privacy_police_privacy_police_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyPoliceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _cars_cars_module__WEBPACK_IMPORTED_MODULE_8__["CarsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _service_service_module__WEBPACK_IMPORTED_MODULE_13__["ServiceModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"]], exports: [_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_3__["NavigatorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"], _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_3__["NavigatorComponent"], _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_4__["TermsOfUseComponent"], _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_14__["LoginRegistrationComponent"], _privacy_police_privacy_police_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyPoliceComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, {
                        onSameUrlNavigation: 'reload',
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadAllModules"]
                    }),
                    _cars_cars_module__WEBPACK_IMPORTED_MODULE_8__["CarsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _service_service_module__WEBPACK_IMPORTED_MODULE_13__["ServiceModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"]
                ],
                exports: [
                    _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_3__["NavigatorComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/terms-of-use/terms-of-use.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/terms-of-use/terms-of-use.component.ts ***!
  \***************************************************************/
/*! exports provided: TermsOfUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUseComponent", function() { return TermsOfUseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _cars_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cars/footer/footer.component */ "./src/app/cars/footer/footer.component.ts");




class TermsOfUseComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Terms of use');
    }
}
TermsOfUseComponent.ɵfac = function TermsOfUseComponent_Factory(t) { return new (t || TermsOfUseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
TermsOfUseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsOfUseComponent, selectors: [["app-terms-of-use"]], decls: 149, vars: 0, consts: [[1, "terms-container"], [1, "title"], ["href", "https://ilcarro.xyz/"], [1, "subtitle"], ["href", "/privacy-police"]], template: function TermsOfUseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to Il Carro!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "These terms and conditions outline the rules and regulations for the use of Il Carro's Website, located at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ilCarro.xyz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "By accessing this website we assume you accept these terms and conditions. Do not continue to use Il Carro if you do not agree to take all of the terms and conditions stated on this page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person log on this website and compliant to the Company\u2019s terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client\u2019s needs in respect of provision of the Company\u2019s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "We employ the use of cookies. By accessing Il Carro, you agreed to use cookies in agreement with the Il Carro's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Most interactive websites use cookies to let us retrieve the user\u2019s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Unless otherwise stated, Il Carro and/or its licensors own the intellectual property rights for all material on Il Carro. All intellectual property rights are reserved. You may access this from Il Carro for your own personal use subjected to restrictions set in these terms and conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "You must not:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Republish material from Il Carro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sell, rent or sub-license material from Il Carro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Reproduce, duplicate or copy material from Il Carro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Redistribute content from Il Carro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "This Agreement shall begin on the date hereof.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Il Carro does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Il Carro,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Il Carro shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Il Carro reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "You warrant and represent that:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "You hereby grant Il Carro a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Hyperlinking to our Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "The following organizations may link to our Website without prior written approval:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Government agencies;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Search engines;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "News organizations;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party\u2019s site.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "We may consider and approve other link requests from the following types of organizations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "commonly-known consumer and/or business information sources;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "dot.com community sites;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "associations or other groups representing charities;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "online directory distributors;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "internet portals;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "accounting, law and consulting firms; and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "educational institutions and trade associations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Il Carro; and (d) the link is in the context of general resource information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party\u2019s site.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Il Carro. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Approved organizations may hyperlink to our Website as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "By use of our corporate name; or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "By use of the uniform resource locator being linked to; or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party\u2019s site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "No use of Il Carro's logo or other artwork will be allowed for linking absent a trademark license agreement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "iFrames");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Content Liability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Your Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Please read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Reservation of Rights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it\u2019s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Removal of links from our website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "limit or exclude our or your liability for death or personal injury;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "limit or exclude our or your liability for fraud or fraudulent misrepresentation;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "limit any of our or your liabilities in any way that is not permitted under applicable law; or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "exclude any of our or your liabilities that may not be excluded under applicable law.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "app-footer");
    } }, directives: [_cars_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".terms-container[_ngcontent-%COMP%] {\n  margin: 3vw 8vw 2vw;\n}\n.terms-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font: 1rem/1.3em \"Rawline Regular\";\n  color: #062639;\n  margin-bottom: 0.5vw;\n}\n.terms-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #06263998;\n  text-decoration: underline;\n}\n.terms-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font: 1rem/1.3em \"Rawline Regular\";\n  color: #062639;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Rlcm1zLW9mLXVzZS9DOlxcd29ya1xcSWNhcnJvXFxpbENhcnJvLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFx0ZXJtcy1vZi11c2VcXHRlcm1zLW9mLXVzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3Rlcm1zLW9mLXVzZS90ZXJtcy1vZi11c2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC90ZXJtcy1vZi11c2UvQzpcXHdvcmtcXEljYXJyb1xcaWxDYXJyby1tYXN0ZXIvc3JjXFxhcHBcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7QUNERjtBRG1CRTtFQUNFLGtDQUFBO0VBQ0EsY0VyQkk7RUZzQkosb0JBQUE7QUNqQko7QURvQkU7RUFDRSxnQkV2QlE7RUZ3QlIsMEJBQUE7QUNsQko7QURxQkU7RUFDRSxrQ0FBQTtFQUNBLGNFaENJO0FEYVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdGVybXMtb2YtdXNlL3Rlcm1zLW9mLXVzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcblxuLnRlcm1zLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogM3Z3IDh2dyAydnc7XG5cbiAgLy9oMS50aXRsZSB7XG4gIC8vICBmb250OiAzcmVtLzEuNWVtIFwiUmF3bGluZSBTZW1pQm9sZFwiO1xuICAvLyAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpLCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcbiAgLy8gICAgZm9udDogQm9sZCAycmVtLzEuNWVtIFJhbGV3YXk7XG4gIC8vICB9XG4gIC8vICBjb2xvcjogI0VBMjM0MDtcbiAgLy8gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgLy99XG4gIC8vXG4gIC8vaDIuc3VidGl0bGUge1xuICAvLyAgbWFyZ2luLXRvcDogMXZ3O1xuICAvLyAgZm9udDogMnJlbS8xLjVlbSBcIlJhd2xpbmUgU2VtaUJvbGRcIjtcbiAgLy8gIGNvbG9yOiAjRUEyMzQwO1xuICAvL31cblxuICBwIHtcbiAgICBmb250OiAxcmVtLzEuM2VtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiAuNXZ3O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICBsaSB7XG4gICAgZm9udDogMXJlbS8xLjNlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gIH1cbn1cbiIsIi50ZXJtcy1jb250YWluZXIge1xuICBtYXJnaW46IDN2dyA4dncgMnZ3O1xufVxuLnRlcm1zLWNvbnRhaW5lciBwIHtcbiAgZm9udDogMXJlbS8xLjNlbSBcIlJhd2xpbmUgUmVndWxhclwiO1xuICBjb2xvcjogIzA2MjYzOTtcbiAgbWFyZ2luLWJvdHRvbTogMC41dnc7XG59XG4udGVybXMtY29udGFpbmVyIGEge1xuICBjb2xvcjogIzA2MjYzOTk4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi50ZXJtcy1jb250YWluZXIgbGkge1xuICBmb250OiAxcmVtLzEuM2VtIFwiUmF3bGluZSBSZWd1bGFyXCI7XG4gIGNvbG9yOiAjMDYyNjM5O1xufSIsIiRzaGFkb3c6IDAgLjN2aCAuM3Z3ICMwMDAwMDA1RjtcbiRyZWQ6ICNFQTIzNDA7XG4kYmxhY2s6ICMwNjI2Mzk7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzVGNzI3RTtcbiRkYXJrLWdyZXk6ICMwNjI2Mzk5ODtcbiR0cmFuc3BhcmVudDogIzAwMDAwMDAwO1xuJHRyYW5zcGFyZW50LXdoaXRlOiAjRkZGRkZGNDA7XG4kdHJhbnNwYXJlbnQtd2hpdGUtc3Ryb25nOiAjRkZGRkZGODA7XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsOfUseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms-of-use',
                templateUrl: './terms-of-use.component.html',
                styleUrls: ['./terms-of-use.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tools.ts":
/*!**************************!*\
  !*** ./src/app/tools.ts ***!
  \**************************/
/*! exports provided: mapDate, compareCars, compareDates, parseParams, saveFormData, restoreFormData, clearFromData, saveAutocomplete, restoreAutocomplete, clearSavedAutocomplete, saveFiles, restoreFiles, clearFilesForSave, saveCityValue, restoreCityValue, clearCityValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDate", function() { return mapDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareCars", function() { return compareCars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDates", function() { return compareDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseParams", function() { return parseParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFormData", function() { return saveFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreFormData", function() { return restoreFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFromData", function() { return clearFromData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAutocomplete", function() { return saveAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreAutocomplete", function() { return restoreAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSavedAutocomplete", function() { return clearSavedAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFiles", function() { return saveFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreFiles", function() { return restoreFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFilesForSave", function() { return clearFilesForSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCityValue", function() { return saveCityValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreCityValue", function() { return restoreCityValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCityValue", function() { return clearCityValue; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

function mapDate(date) {
    const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en');
    return datePipe.transform(date, 'yyyy-MM-dd HH:mm');
}
function compareCars(car1, car2, lowToHigh) {
    let res = car1.price_per_day - car2.price_per_day;
    if (res !== 0) {
        return lowToHigh ? res : res * -1;
    }
    res = car1.make.localeCompare(car2.make);
    if (res !== 0) {
        return res;
    }
    res = car1.model.localeCompare(car2.model);
    if (res !== 0) {
        return res;
    }
    res = car1.year.localeCompare(car2.year);
    return res;
}
function compareDates(date1, date2) {
    return (date1 === null || date1 === void 0 ? void 0 : date1.getTime()) >= (date2 === null || date2 === void 0 ? void 0 : date2.getTime());
}
/**
 * Parse params from string to array of pairs key: value
 * @param url url with params
 */
function parseParams(url) {
    url = url.split('?')[1];
    if (!url) {
        return;
    }
    const pairs = url.split('&');
    const data = {};
    for (const pair of pairs) {
        const param = pair.split('=');
        data[param[0]] = param[1];
    }
    return data;
}
function saveTimestamp(saveName) {
    localStorage.setItem(`${saveName}-timestamp`, `${new Date().getTime()}`);
}
function checkTimestamp(savedName) {
    const currentTime = new Date().getTime();
    const saveTime = parseInt(localStorage.getItem(`${savedName}-timestamp`), 10);
    return currentTime - saveTime > 3600 * 1000;
}
function saveFormData(formGroup, url) {
    const data = formGroup.getRawValue();
    const jsonData = JSON.stringify(data);
    localStorage.setItem(url, jsonData);
    saveTimestamp(url);
}
function restoreFormData(formGroup, url) {
    if (checkTimestamp(url))
        clearFromData(url);
    const jsonData = localStorage.getItem(url);
    const data = JSON.parse(jsonData);
    if (data)
        formGroup.setValue(data);
}
function clearFromData(url) {
    localStorage.removeItem(url);
}
function saveAutocomplete(place) {
    const jsonData = JSON.stringify(place);
    localStorage.setItem('autocomplete', jsonData);
    saveTimestamp('autocomplete');
}
function restoreAutocomplete() {
    if (checkTimestamp('autocomplete'))
        clearSavedAutocomplete();
    const jsonData = localStorage.getItem('autocomplete');
    return JSON.parse(jsonData);
}
function clearSavedAutocomplete() {
    localStorage.removeItem('autocomplete');
}
function saveFiles(files) {
    const forSave = {
        photoNamesMap: [],
        photosUrlsMap: [],
        photosProgressMap: []
    };
    files.photoNamesMap.forEach((value, key) => forSave.photoNamesMap.push({ key, value }));
    files.photosProgressMap.forEach((value, key) => forSave.photosProgressMap.push({ key, value }));
    files.photosUrlsMap.forEach((value, key) => forSave.photosUrlsMap.push({ key, value }));
    const jsonData = JSON.stringify(forSave);
    localStorage.setItem('files', jsonData);
    saveTimestamp('files');
}
function restoreFiles() {
    if (checkTimestamp('files'))
        clearFilesForSave();
    const jsonData = localStorage.getItem('files');
    const savedData = JSON.parse(jsonData);
    const res = {
        photosProgressMap: new Map(),
        photosUrlsMap: new Map(),
        photoNamesMap: new Map()
    };
    if (savedData) {
        savedData.photoNamesMap.forEach(value => res.photoNamesMap.set(value.key, value.value));
        savedData.photosProgressMap.forEach(value => res.photosProgressMap.set(value.key, value.value));
        savedData.photosUrlsMap.forEach(value => res.photosUrlsMap.set(value.key, value.value));
    }
    return res;
}
function clearFilesForSave() {
    localStorage.removeItem('files');
}
function saveCityValue(data) {
    localStorage.setItem('city-value', data);
    saveTimestamp('city-value');
}
function restoreCityValue() {
    if (checkTimestamp('city-value'))
        clearCityValue();
    return localStorage.getItem('city-value');
}
function clearCityValue() {
    localStorage.removeItem('city-value');
}


/***/ }),

/***/ "./src/environments/environment.ts":
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
 * to ignore zone related dialog stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an dialog is thrown.
 */
// import 'zone.js/dist/zone-dialog';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\Icarro\ilCarro-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map