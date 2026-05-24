"use strict";
(self["webpackChunkstackline_angular16_test"] = self["webpackChunkstackline_angular16_test"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stackline/angular-multiselect-dropdown */ 9843);




function AppComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_13_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const theme_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.switchTheme(theme_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const theme_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.skinSwitchTheme == theme_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.themeLabel(theme_r4));
  }
}
function AppComponent_article_45_angular_multiselect_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-multiselect", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_article_45_angular_multiselect_4_Template_angular_multiselect_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](test_r7.model = $event);
    })("onSelect", function AppComponent_article_45_angular_multiselect_4_Template_angular_multiselect_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.record(test_r7.eventPrefix + " select", $event));
    })("onDeSelect", function AppComponent_article_45_angular_multiselect_4_Template_angular_multiselect_onDeSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.record(test_r7.eventPrefix + " deselect", $event));
    })("onSelectAll", function AppComponent_article_45_angular_multiselect_4_Template_angular_multiselect_onSelectAll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.record(test_r7.eventPrefix + " selectAll", $event));
    })("onDeSelectAll", function AppComponent_article_45_angular_multiselect_4_Template_angular_multiselect_onDeSelectAll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.record(test_r7.eventPrefix + " deselectAll", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", test_r7.data)("ngModel", test_r7.model)("settings", test_r7.settings);
  }
}
function AppComponent_article_45_angular_multiselect_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r24.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.itemName);
  }
}
function AppComponent_article_45_angular_multiselect_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r25 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r25.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25.detail);
  }
}
function AppComponent_article_45_angular_multiselect_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-multiselect", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_article_45_angular_multiselect_5_Template_angular_multiselect_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](test_r7.model = $event);
    })("onSelect", function AppComponent_article_45_angular_multiselect_5_Template_angular_multiselect_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.record(test_r7.eventPrefix + " select", $event));
    })("onDeSelect", function AppComponent_article_45_angular_multiselect_5_Template_angular_multiselect_onDeSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.record(test_r7.eventPrefix + " deselect", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "c-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_article_45_angular_multiselect_5_ng_template_2_Template, 3, 3, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "c-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_article_45_angular_multiselect_5_ng_template_4_Template, 7, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const test_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", test_r7.data)("ngModel", test_r7.model)("settings", test_r7.settings);
  }
}
function AppComponent_article_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 21)(1, "div", 8)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_article_45_angular_multiselect_4_Template, 1, 3, "angular-multiselect", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_article_45_angular_multiselect_5_Template, 5, 3, "angular-multiselect", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11)(7, "div", 12)(8, "div", 13)(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const test_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", test_r7.number, ". ", test_r7.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !test_r7.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", test_r7.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.htmlCode(test_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.tsCode(test_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.jsonCode(test_r7));
  }
}
function AppComponent_article_53_angular_multiselect_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-multiselect", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_article_53_angular_multiselect_4_Template_angular_multiselect_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);
      const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](test_r34.model = $event);
    })("onSelect", function AppComponent_article_53_angular_multiselect_4_Template_angular_multiselect_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);
      const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.record(test_r34.eventPrefix + " select", $event));
    })("onDeSelect", function AppComponent_article_53_angular_multiselect_4_Template_angular_multiselect_onDeSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);
      const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.record(test_r34.eventPrefix + " deselect", $event));
    })("onSelectAll", function AppComponent_article_53_angular_multiselect_4_Template_angular_multiselect_onSelectAll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);
      const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r44.record(test_r34.eventPrefix + " selectAll", $event));
    })("onDeSelectAll", function AppComponent_article_53_angular_multiselect_4_Template_angular_multiselect_onDeSelectAll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);
      const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.record(test_r34.eventPrefix + " deselectAll", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", test_r34.data)("ngModel", test_r34.model)("settings", test_r34.settings);
  }
}
function AppComponent_article_53_angular_multiselect_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r51 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r51.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r51.itemName);
  }
}
function AppComponent_article_53_angular_multiselect_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r52 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r52.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52.detail);
  }
}
function AppComponent_article_53_angular_multiselect_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-multiselect", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_article_53_angular_multiselect_5_Template_angular_multiselect_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](test_r34.model = $event);
    })("onSelect", function AppComponent_article_53_angular_multiselect_5_Template_angular_multiselect_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r56.record(test_r34.eventPrefix + " select", $event));
    })("onDeSelect", function AppComponent_article_53_angular_multiselect_5_Template_angular_multiselect_onDeSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r58.record(test_r34.eventPrefix + " deselect", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "c-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_article_53_angular_multiselect_5_ng_template_2_Template, 3, 3, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "c-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_article_53_angular_multiselect_5_ng_template_4_Template, 7, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const test_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", test_r34.data)("ngModel", test_r34.model)("settings", test_r34.settings);
  }
}
function AppComponent_article_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 21)(1, "div", 8)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_article_53_angular_multiselect_4_Template, 1, 3, "angular-multiselect", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_article_53_angular_multiselect_5_Template, 5, 3, "angular-multiselect", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11)(7, "div", 12)(8, "div", 13)(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const test_r34 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", test_r34.number, ". ", test_r34.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !test_r34.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", test_r34.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.htmlCode(test_r34));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.tsCode(test_r34));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.jsonCode(test_r34));
  }
}
function AppComponent_p_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r61);
  }
}
class AppComponent {
  constructor() {
    this.angularVersion = '16.2.12';
    this.packageVersion = '16.0.0';
    this.countries = [{
      id: 1,
      itemName: 'Brazil'
    }, {
      id: 2,
      itemName: 'Canada'
    }, {
      id: 3,
      itemName: 'Portugal'
    }, {
      id: 4,
      itemName: 'United States'
    }, {
      id: 5,
      itemName: 'Argentina'
    }, {
      id: 6,
      itemName: 'Germany'
    }, {
      id: 7,
      itemName: 'Japan'
    }, {
      id: 8,
      itemName: 'South Africa'
    }];
    this.longCountries = [{
      id: 11,
      itemName: 'Federative Republic of Brazil'
    }, {
      id: 12,
      itemName: 'United States of America'
    }, {
      id: 13,
      itemName: 'United Kingdom of Great Britain and Northern Ireland'
    }, {
      id: 14,
      itemName: 'Portuguese Republic'
    }, {
      id: 15,
      itemName: 'Canada'
    }, {
      id: 16,
      itemName: 'Argentina'
    }];
    this.groupedCountries = [{
      id: 21,
      itemName: 'Brazil',
      region: 'Americas'
    }, {
      id: 22,
      itemName: 'Canada',
      region: 'Americas'
    }, {
      id: 23,
      itemName: 'Portugal',
      region: 'Europe'
    }, {
      id: 24,
      itemName: 'Germany',
      region: 'Europe'
    }, {
      id: 25,
      itemName: 'Japan',
      region: 'Asia'
    }, {
      id: 26,
      itemName: 'South Korea',
      region: 'Asia'
    }];
    this.templateItems = [{
      id: 31,
      itemName: 'Primary',
      detail: 'Main interface color',
      color: '#3f51b5'
    }, {
      id: 32,
      itemName: 'Success',
      detail: 'Positive feedback state',
      color: '#2e7d32'
    }, {
      id: 33,
      itemName: 'Warning',
      detail: 'Attention state',
      color: '#ed6c02'
    }, {
      id: 34,
      itemName: 'Danger',
      detail: 'Destructive state',
      color: '#d32f2f'
    }, {
      id: 35,
      itemName: 'Neutral',
      detail: 'Text and surface color',
      color: '#475569'
    }];
    this.largeList = this.buildLargeList();
    this.emptyItems = [];
    this.classicBasic = [{
      id: 2,
      itemName: 'Canada'
    }];
    this.classicSearch = [{
      id: 4,
      itemName: 'United States'
    }];
    this.classicSingle = [{
      id: 1,
      itemName: 'Brazil'
    }];
    this.classicNoCheckbox = [{
      id: 3,
      itemName: 'Portugal'
    }, {
      id: 6,
      itemName: 'Germany'
    }];
    this.classicLimit = [{
      id: 11,
      itemName: 'Federative Republic of Brazil'
    }, {
      id: 12,
      itemName: 'United States of America'
    }];
    this.classicBadge = [{
      id: 11,
      itemName: 'Federative Republic of Brazil'
    }, {
      id: 12,
      itemName: 'United States of America'
    }, {
      id: 13,
      itemName: 'United Kingdom of Great Britain and Northern Ireland'
    }, {
      id: 14,
      itemName: 'Portuguese Republic'
    }];
    this.classicGrouped = [{
      id: 21,
      itemName: 'Brazil',
      region: 'Americas'
    }];
    this.classicDisabled = [{
      id: 6,
      itemName: 'Germany'
    }];
    this.classicEmpty = [];
    this.classicScroll = [{
      id: 104,
      itemName: 'Item 04'
    }];
    this.classicLazy = [{
      id: 106,
      itemName: 'Item 06'
    }];
    this.classicTemplate = [{
      id: 31,
      itemName: 'Primary',
      detail: 'Main interface color',
      color: '#3f51b5'
    }, {
      id: 33,
      itemName: 'Warning',
      detail: 'Attention state',
      color: '#ed6c02'
    }];
    this.materialBasic = [{
      id: 2,
      itemName: 'Canada'
    }];
    this.materialSearch = [{
      id: 4,
      itemName: 'United States'
    }];
    this.materialSingle = [{
      id: 3,
      itemName: 'Portugal'
    }];
    this.materialNoCheckbox = [{
      id: 5,
      itemName: 'Argentina'
    }, {
      id: 7,
      itemName: 'Japan'
    }];
    this.materialLimit = [{
      id: 11,
      itemName: 'Federative Republic of Brazil'
    }, {
      id: 12,
      itemName: 'United States of America'
    }];
    this.materialBadge = [{
      id: 11,
      itemName: 'Federative Republic of Brazil'
    }, {
      id: 12,
      itemName: 'United States of America'
    }, {
      id: 13,
      itemName: 'United Kingdom of Great Britain and Northern Ireland'
    }, {
      id: 14,
      itemName: 'Portuguese Republic'
    }];
    this.materialGrouped = [{
      id: 23,
      itemName: 'Portugal',
      region: 'Europe'
    }];
    this.materialDisabled = [{
      id: 8,
      itemName: 'South Africa'
    }];
    this.materialEmpty = [];
    this.materialScroll = [{
      id: 105,
      itemName: 'Item 05'
    }];
    this.materialLazy = [{
      id: 107,
      itemName: 'Item 07'
    }];
    this.materialTemplate = [{
      id: 32,
      itemName: 'Success',
      detail: 'Positive feedback state',
      color: '#2e7d32'
    }, {
      id: 34,
      itemName: 'Danger',
      detail: 'Destructive state',
      color: '#d32f2f'
    }];
    this.availableThemes = ['classic', 'material', 'dark', 'custom', 'brand'];
    this.skinSwitchTheme = 'classic';
    this.skinSwitchSelected = [{
      id: 2,
      itemName: 'Canada'
    }, {
      id: 3,
      itemName: 'Portugal'
    }, {
      id: 4,
      itemName: 'United States'
    }];
    this.skinSwitchSettings = this.makeSettings('classic', 'Skin Classic', {
      badgeShowLimit: 2,
      maxHeight: 220
    });
    this.classicBasicSettings = this.makeSettings('classic', 'Classic basic', {
      enableSearchFilter: false
    });
    this.classicSearchSettings = this.makeSettings('classic', 'Classic search', {});
    this.classicSingleSettings = this.makeSettings('classic', 'Classic single', {
      singleSelection: true,
      showCheckbox: false,
      enableCheckAll: false
    });
    this.classicNoCheckboxSettings = this.makeSettings('classic', 'Classic no checkbox', {
      showCheckbox: false,
      enableCheckAll: false
    });
    this.classicLimitSettings = this.makeSettings('classic', 'Classic limit 2', {
      limitSelection: 2,
      badgeShowLimit: 2
    });
    this.classicBadgeSettings = this.makeSettings('classic', 'Classic badge limit', {
      badgeShowLimit: 2,
      maxHeight: 220
    });
    this.classicGroupedSettings = this.makeSettings('classic', 'Classic grouped', {
      groupBy: 'region',
      maxHeight: 220
    });
    this.classicDisabledSettings = this.makeSettings('classic', 'Classic disabled', {
      disabled: true
    });
    this.classicEmptySettings = this.makeSettings('classic', 'Classic empty', {
      noDataLabel: 'No records found'
    });
    this.classicScrollSettings = this.makeSettings('classic', 'Classic scroll', {
      maxHeight: 120,
      badgeShowLimit: 3
    });
    this.classicLazySettings = this.makeSettings('classic', 'Classic lazy', {
      lazyLoading: true,
      maxHeight: 120,
      badgeShowLimit: 3
    });
    this.classicTemplateSettings = this.makeSettings('classic', 'Classic template', {
      badgeShowLimit: 3,
      maxHeight: 220
    });
    this.materialBasicSettings = this.makeSettings('material', 'Material basic', {
      enableSearchFilter: false
    });
    this.materialSearchSettings = this.makeSettings('material', 'Material search', {});
    this.materialSingleSettings = this.makeSettings('material', 'Material single', {
      singleSelection: true,
      showCheckbox: false,
      enableCheckAll: false
    });
    this.materialNoCheckboxSettings = this.makeSettings('material', 'Material no checkbox', {
      showCheckbox: false,
      enableCheckAll: false
    });
    this.materialLimitSettings = this.makeSettings('material', 'Material limit 2', {
      limitSelection: 2,
      badgeShowLimit: 2
    });
    this.materialBadgeSettings = this.makeSettings('material', 'Material badge limit', {
      badgeShowLimit: 2,
      maxHeight: 220
    });
    this.materialGroupedSettings = this.makeSettings('material', 'Material grouped', {
      groupBy: 'region',
      maxHeight: 220
    });
    this.materialDisabledSettings = this.makeSettings('material', 'Material disabled', {
      disabled: true
    });
    this.materialEmptySettings = this.makeSettings('material', 'Material empty', {
      noDataLabel: 'No records found'
    });
    this.materialScrollSettings = this.makeSettings('material', 'Material scroll', {
      maxHeight: 120,
      badgeShowLimit: 3
    });
    this.materialLazySettings = this.makeSettings('material', 'Material lazy', {
      lazyLoading: true,
      maxHeight: 120,
      badgeShowLimit: 3
    });
    this.materialTemplateSettings = this.makeSettings('material', 'Material template', {
      badgeShowLimit: 3,
      maxHeight: 220
    });
    this.skinSwitchCase = this.caseDef('00', 'Skin switcher', 'countries', this.countries, 'skinSwitchSelected', this.skinSwitchSelected, 'skinSwitchSettings', this.skinSwitchSettings, 'skin switch', '{ badgeShowLimit: 2, maxHeight: 220 }', false);
    this.classicCases = [this.caseDef('01', 'Basic multi', 'countries', this.countries, 'classicBasic', this.classicBasic, 'classicBasicSettings', this.classicBasicSettings, 'classic basic', '{ enableSearchFilter: false }', false), this.caseDef('02', 'Search + select all', 'countries', this.countries, 'classicSearch', this.classicSearch, 'classicSearchSettings', this.classicSearchSettings, 'classic search', '{}', false), this.caseDef('03', 'Single without checkbox', 'countries', this.countries, 'classicSingle', this.classicSingle, 'classicSingleSettings', this.classicSingleSettings, 'classic single', '{ singleSelection: true, showCheckbox: false, enableCheckAll: false }', false), this.caseDef('04', 'Multi without checkbox', 'countries', this.countries, 'classicNoCheckbox', this.classicNoCheckbox, 'classicNoCheckboxSettings', this.classicNoCheckboxSettings, 'classic no checkbox', '{ showCheckbox: false, enableCheckAll: false }', false), this.caseDef('05', 'Selection limit', 'longCountries', this.longCountries, 'classicLimit', this.classicLimit, 'classicLimitSettings', this.classicLimitSettings, 'classic limit', '{ limitSelection: 2, badgeShowLimit: 2 }', false), this.caseDef('06', 'Badge overflow', 'longCountries', this.longCountries, 'classicBadge', this.classicBadge, 'classicBadgeSettings', this.classicBadgeSettings, 'classic badge', '{ badgeShowLimit: 2, maxHeight: 220 }', false), this.caseDef('07', 'Grouped by region', 'groupedCountries', this.groupedCountries, 'classicGrouped', this.classicGrouped, 'classicGroupedSettings', this.classicGroupedSettings, 'classic grouped', "{ groupBy: 'region', maxHeight: 220 }", false), this.caseDef('08', 'Disabled with value', 'countries', this.countries, 'classicDisabled', this.classicDisabled, 'classicDisabledSettings', this.classicDisabledSettings, 'classic disabled', '{ disabled: true }', false), this.caseDef('09', 'Empty data', 'emptyItems', this.emptyItems, 'classicEmpty', this.classicEmpty, 'classicEmptySettings', this.classicEmptySettings, 'classic empty', "{ noDataLabel: 'No records found' }", false), this.caseDef('10', 'Long list with scroll', 'largeList', this.largeList, 'classicScroll', this.classicScroll, 'classicScrollSettings', this.classicScrollSettings, 'classic scroll', '{ maxHeight: 120, badgeShowLimit: 3 }', false), this.caseDef('11', 'Local lazy loading', 'largeList', this.largeList, 'classicLazy', this.classicLazy, 'classicLazySettings', this.classicLazySettings, 'classic lazy', '{ lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 }', false), this.caseDef('12', 'Item + chip template', 'templateItems', this.templateItems, 'classicTemplate', this.classicTemplate, 'classicTemplateSettings', this.classicTemplateSettings, 'classic template', '{ badgeShowLimit: 3, maxHeight: 220 }', true)];
    this.materialCases = [this.caseDef('01', 'Basic multi', 'countries', this.countries, 'materialBasic', this.materialBasic, 'materialBasicSettings', this.materialBasicSettings, 'material basic', '{ enableSearchFilter: false }', false), this.caseDef('02', 'Search + select all', 'countries', this.countries, 'materialSearch', this.materialSearch, 'materialSearchSettings', this.materialSearchSettings, 'material search', '{}', false), this.caseDef('03', 'Single without checkbox', 'countries', this.countries, 'materialSingle', this.materialSingle, 'materialSingleSettings', this.materialSingleSettings, 'material single', '{ singleSelection: true, showCheckbox: false, enableCheckAll: false }', false), this.caseDef('04', 'Multi without checkbox', 'countries', this.countries, 'materialNoCheckbox', this.materialNoCheckbox, 'materialNoCheckboxSettings', this.materialNoCheckboxSettings, 'material no checkbox', '{ showCheckbox: false, enableCheckAll: false }', false), this.caseDef('05', 'Selection limit', 'longCountries', this.longCountries, 'materialLimit', this.materialLimit, 'materialLimitSettings', this.materialLimitSettings, 'material limit', '{ limitSelection: 2, badgeShowLimit: 2 }', false), this.caseDef('06', 'Badge overflow', 'longCountries', this.longCountries, 'materialBadge', this.materialBadge, 'materialBadgeSettings', this.materialBadgeSettings, 'material badge', '{ badgeShowLimit: 2, maxHeight: 220 }', false), this.caseDef('07', 'Grouped by region', 'groupedCountries', this.groupedCountries, 'materialGrouped', this.materialGrouped, 'materialGroupedSettings', this.materialGroupedSettings, 'material grouped', "{ groupBy: 'region', maxHeight: 220 }", false), this.caseDef('08', 'Disabled with value', 'countries', this.countries, 'materialDisabled', this.materialDisabled, 'materialDisabledSettings', this.materialDisabledSettings, 'material disabled', '{ disabled: true }', false), this.caseDef('09', 'Empty data', 'emptyItems', this.emptyItems, 'materialEmpty', this.materialEmpty, 'materialEmptySettings', this.materialEmptySettings, 'material empty', "{ noDataLabel: 'No records found' }", false), this.caseDef('10', 'Long list with scroll', 'largeList', this.largeList, 'materialScroll', this.materialScroll, 'materialScrollSettings', this.materialScrollSettings, 'material scroll', '{ maxHeight: 120, badgeShowLimit: 3 }', false), this.caseDef('11', 'Local lazy loading', 'largeList', this.largeList, 'materialLazy', this.materialLazy, 'materialLazySettings', this.materialLazySettings, 'material lazy', '{ lazyLoading: true, maxHeight: 120, badgeShowLimit: 3 }', false), this.caseDef('12', 'Item + chip template', 'templateItems', this.templateItems, 'materialTemplate', this.materialTemplate, 'materialTemplateSettings', this.materialTemplateSettings, 'material template', '{ badgeShowLimit: 3, maxHeight: 220 }', true)];
    this.events = ['ready'];
  }
  caseDef(number, title, dataName, data, modelName, model, settingsName, settings, eventPrefix, optionsText, template) {
    return {
      number: number,
      title: title,
      dataName: dataName,
      data: data,
      modelName: modelName,
      model: model,
      settingsName: settingsName,
      settings: settings,
      eventPrefix: eventPrefix,
      optionsText: optionsText,
      template: template
    };
  }
  buildLargeList() {
    var list = [];
    for (var index = 1; index <= 40; index++) {
      var label = index < 10 ? 'Item 0' + index : 'Item ' + index;
      list.push({
        id: 100 + index,
        itemName: label
      });
    }
    return list;
  }
  makeSettings(theme, text, options) {
    var settings = {
      singleSelection: false,
      text: text,
      selectAllText: 'Select all',
      unSelectAllText: 'Clear all',
      enableCheckAll: true,
      enableSearchFilter: true,
      searchPlaceholderText: 'Search',
      badgeShowLimit: 4,
      maxHeight: 260,
      showCheckbox: true,
      noDataLabel: 'No data',
      theme: theme,
      skin: theme
    };
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        settings[key] = options[key];
      }
    }
    return settings;
  }
  switchTheme(theme) {
    var currentModel = this.skinSwitchCase && this.skinSwitchCase.model ? this.skinSwitchCase.model : this.skinSwitchSelected;
    var nextSettings = this.makeSettings(theme, 'Skin ' + this.themeLabel(theme), {
      badgeShowLimit: 2,
      maxHeight: 220
    });
    this.skinSwitchTheme = theme;
    this.skinSwitchSelected = currentModel;
    this.skinSwitchSettings = nextSettings;
    this.skinSwitchCase = this.caseDef('00', 'Skin switcher', 'countries', this.countries, 'skinSwitchSelected', this.skinSwitchSelected, 'skinSwitchSettings', this.skinSwitchSettings, 'skin switch', '{ badgeShowLimit: 2, maxHeight: 220 }', false);
    this.record('skin switch theme', theme);
  }
  themeLabel(theme) {
    return theme.charAt(0).toUpperCase() + theme.slice(1);
  }
  htmlCode(test) {
    var lines = ['<angular-multiselect', '  [data]="' + test.dataName + '"', '  [(ngModel)]="' + test.modelName + '"', '  [settings]="' + test.settingsName + '"', "  (onSelect)=\"record('" + test.eventPrefix + " select', $event)\"", "  (onDeSelect)=\"record('" + test.eventPrefix + " deselect', $event)\""];
    if (!test.settings.singleSelection && !test.settings.disabled) {
      lines.push("  (onSelectAll)=\"record('" + test.eventPrefix + " selectAll', $event)\"");
      lines.push("  (onDeSelectAll)=\"record('" + test.eventPrefix + " deselectAll', $event)\"");
    }
    if (!test.template) {
      lines.push('></angular-multiselect>');
      return lines.join('\n');
    }
    lines.push('>');
    lines.push('  <c-badge>');
    lines.push('    <ng-template let-item="item">');
    lines.push('      <span class="swatch-chip">{{ item.itemName }}</span>');
    lines.push('    </ng-template>');
    lines.push('  </c-badge>');
    lines.push('  <c-item>');
    lines.push('    <ng-template let-item="item">');
    lines.push('      <strong>{{ item.itemName }}</strong>');
    lines.push('      <small>{{ item.detail }}</small>');
    lines.push('    </ng-template>');
    lines.push('  </c-item>');
    lines.push('</angular-multiselect>');
    return lines.join('\n');
  }
  tsCode(test) {
    return test.modelName + ' = ' + this.tsArray(test.model) + ';\n\n' + test.settingsName + ' = this.makeSettings(\'' + test.settings.theme + '\', \'' + test.settings.text + '\', ' + test.optionsText + ');\n\n' + 'record(type: string, value: any) {\n' + '  var label = value && value.itemName ? value.itemName : JSON.stringify(value);\n' + '  this.events.unshift(type + \': \' + label);\n' + '}';
  }
  jsonCode(test) {
    return JSON.stringify({
      data: test.dataName,
      selected: test.model,
      settings: test.settings
    }, null, 2);
  }
  tsArray(items) {
    if (!items || !items.length) {
      return '[]';
    }
    return '[\n' + items.map(item => '  ' + this.tsObject(item)).join(',\n') + '\n]';
  }
  tsObject(item) {
    var keys = Object.keys(item);
    return '{ ' + keys.map(key => key + ': ' + this.tsValue(item[key])).join(', ') + ' }';
  }
  tsValue(value) {
    if (typeof value === 'string') {
      return '\'' + value.replace(/\\/g, '\\\\').replace(/'/g, '\\\'') + '\'';
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    if (value && typeof value === 'object') {
      return this.tsObject(value);
    }
    return 'null';
  }
  record(type, value) {
    var label = value && value.itemName ? value.itemName : JSON.stringify(value);
    if (value && value.length) {
      label = value.length + ' items';
    }
    this.events.unshift(type + ': ' + label);
    this.events = this.events.slice(0, 10);
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 58,
      vars: 14,
      consts: [[1, "page"], [1, "topbar"], [1, "eyebrow"], [1, "skin-section", "skin-switcher-section"], [1, "section-heading"], [1, "theme-buttons"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "example-row", "custom-skin-sample"], [1, "demo-cell"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect"], [1, "settings-preview"], [1, "code-cell"], [1, "code-grid"], [1, "code-card"], [1, "skin-section"], [1, "case-list"], ["class", "example-row", 4, "ngFor", "ngForOf"], [1, "skin-section", "material-section"], [1, "activity"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [1, "example-row"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", 4, "ngIf"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", 4, "ngIf"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "swatch-chip"], [1, "swatch"], [1, "option-row"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "header", 1)(2, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3)(7, "div", 4)(8, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Settings-only theme switch");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Skin switcher");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_button_13_Template, 2, 3, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "article", 7)(15, "div", 8)(16, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Updates only settings.theme / settings.skin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "angular-multiselect", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_angular_multiselect_ngModelChange_18_listener($event) {
            return ctx.skinSwitchCase.model = $event;
          })("onSelect", function AppComponent_Template_angular_multiselect_onSelect_18_listener($event) {
            return ctx.record("skin switch select", $event);
          })("onDeSelect", function AppComponent_Template_angular_multiselect_onDeSelect_18_listener($event) {
            return ctx.record("skin switch deselect", $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "div", 12)(23, "div", 13)(24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13)(29, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "TS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13)(34, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "JSON");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 14)(39, "div", 4)(40, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Skin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Classic");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AppComponent_article_45_Template, 23, 7, "article", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 17)(47, "div", 4)(48, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Skin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Material");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AppComponent_article_53_Template, 23, 7, "article", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 18)(55, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Event log");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AppComponent_p_57_Template, 2, 1, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Angular ", ctx.angularVersion, " runtime");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@stackline/angular-multiselect-dropdown ", ctx.packageVersion, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableThemes);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.skinSwitchCase.data)("ngModel", ctx.skinSwitchCase.model)("settings", ctx.skinSwitchCase.settings);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("theme: ", ctx.skinSwitchSettings.theme, " | skin: ", ctx.skinSwitchSettings.skin, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.htmlCode(ctx.skinSwitchCase));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tsCode(ctx.skinSwitchCase));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jsonCode(ctx.skinSwitchCase));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classicCases);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.materialCases);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__.AngularMultiSelect, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__.Item, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__.Badge],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stackline/angular-multiselect-dropdown */ 9843);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.AngularMultiSelectModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.AngularMultiSelectModule]
  });
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map