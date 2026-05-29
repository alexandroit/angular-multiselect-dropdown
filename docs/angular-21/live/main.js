"use strict";
(self["webpackChunkstackline_angular21_test"] = self["webpackChunkstackline_angular21_test"] || []).push([["main"],{

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stackline/angular-multiselect-dropdown */ 2224);




function AppComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_13_Template_button_click_0_listener() {
      const skin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.switchSkin(skin_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skin_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.skinSwitchSkin == skin_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.skinLabel(skin_r2));
  }
}
function AppComponent_article_86_angular_multiselect_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-multiselect", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_article_86_angular_multiselect_6_Template_angular_multiselect_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](test_r5.model, $event) || (test_r5.model = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function AppComponent_article_86_angular_multiselect_6_Template_angular_multiselect_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r5.eventPrefix + " select", $event));
    })("onDeSelect", function AppComponent_article_86_angular_multiselect_6_Template_angular_multiselect_onDeSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r5.eventPrefix + " deselect", $event));
    })("onSelectAll", function AppComponent_article_86_angular_multiselect_6_Template_angular_multiselect_onSelectAll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r5.eventPrefix + " selectAll", $event));
    })("onDeSelectAll", function AppComponent_article_86_angular_multiselect_6_Template_angular_multiselect_onDeSelectAll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r5.eventPrefix + " deselectAll", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", test_r5.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", test_r5.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", test_r5.settings);
  }
}
function AppComponent_article_86_angular_multiselect_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r7.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.itemName);
  }
}
function AppComponent_article_86_angular_multiselect_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.detail);
  }
}
function AppComponent_article_86_angular_multiselect_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-multiselect", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_article_86_angular_multiselect_7_Template_angular_multiselect_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](test_r5.model, $event) || (test_r5.model = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function AppComponent_article_86_angular_multiselect_7_Template_angular_multiselect_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r5.eventPrefix + " select", $event));
    })("onDeSelect", function AppComponent_article_86_angular_multiselect_7_Template_angular_multiselect_onDeSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r5.eventPrefix + " deselect", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "c-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_article_86_angular_multiselect_7_ng_template_2_Template, 3, 3, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "c-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_article_86_angular_multiselect_7_ng_template_4_Template, 7, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const test_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", test_r5.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", test_r5.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", test_r5.settings);
  }
}
function AppComponent_article_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 28)(1, "div", 8)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Open this example in StackBlitz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_article_86_angular_multiselect_6_Template, 1, 3, "angular-multiselect", 29)(7, AppComponent_article_86_angular_multiselect_7_Template, 5, 3, "angular-multiselect", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "div", 14)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14)(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14)(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const test_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", test_r5.number, ". ", test_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.stackBlitzUrl(test_r5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !test_r5.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", test_r5.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.htmlCode(test_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.tsCode(test_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.jsonCode(test_r5));
  }
}
function AppComponent_article_94_angular_multiselect_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-multiselect", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_article_94_angular_multiselect_6_Template_angular_multiselect_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](test_r10.model, $event) || (test_r10.model = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function AppComponent_article_94_angular_multiselect_6_Template_angular_multiselect_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r10.eventPrefix + " select", $event));
    })("onDeSelect", function AppComponent_article_94_angular_multiselect_6_Template_angular_multiselect_onDeSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r10.eventPrefix + " deselect", $event));
    })("onSelectAll", function AppComponent_article_94_angular_multiselect_6_Template_angular_multiselect_onSelectAll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r10.eventPrefix + " selectAll", $event));
    })("onDeSelectAll", function AppComponent_article_94_angular_multiselect_6_Template_angular_multiselect_onDeSelectAll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r10.eventPrefix + " deselectAll", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", test_r10.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", test_r10.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", test_r10.settings);
  }
}
function AppComponent_article_94_angular_multiselect_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r12.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.itemName);
  }
}
function AppComponent_article_94_angular_multiselect_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r13 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r13.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.detail);
  }
}
function AppComponent_article_94_angular_multiselect_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-multiselect", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_article_94_angular_multiselect_7_Template_angular_multiselect_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](test_r10.model, $event) || (test_r10.model = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function AppComponent_article_94_angular_multiselect_7_Template_angular_multiselect_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r10.eventPrefix + " select", $event));
    })("onDeSelect", function AppComponent_article_94_angular_multiselect_7_Template_angular_multiselect_onDeSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.record(test_r10.eventPrefix + " deselect", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "c-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_article_94_angular_multiselect_7_ng_template_2_Template, 3, 3, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "c-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_article_94_angular_multiselect_7_ng_template_4_Template, 7, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const test_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", test_r10.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", test_r10.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", test_r10.settings);
  }
}
function AppComponent_article_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 28)(1, "div", 8)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Open this example in StackBlitz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_article_94_angular_multiselect_6_Template, 1, 3, "angular-multiselect", 29)(7, AppComponent_article_94_angular_multiselect_7_Template, 5, 3, "angular-multiselect", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "div", 14)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14)(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14)(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const test_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", test_r10.number, ". ", test_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.stackBlitzUrl(test_r10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !test_r10.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", test_r10.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.htmlCode(test_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.tsCode(test_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.jsonCode(test_r10));
  }
}
function AppComponent_p_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r14);
  }
}
class AppComponent {
  constructor() {
    this.angularVersion = '21.2.14';
    this.packageVersion = '21.1.14';
    this.stackBlitzBaseUrl = 'https://stackblitz.com/github/alexandroit/angular-multiselect-dropdown/tree/stackblitz-angular-21';
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
      itemName: 'Mexico'
    }, {
      id: 8,
      itemName: 'Colombia'
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
      itemName: 'Mexico',
      region: 'Americas'
    }, {
      id: 26,
      itemName: 'Colombia',
      region: 'Americas'
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
      itemName: 'Mexico'
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
      itemName: 'Colombia'
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
    this.overlayCountries = [{
      id: 41,
      itemName: 'Brazil'
    }, {
      id: 42,
      itemName: 'Canada'
    }, {
      id: 43,
      itemName: 'Portugal'
    }, {
      id: 44,
      itemName: 'United States'
    }, {
      id: 45,
      itemName: 'Argentina'
    }, {
      id: 46,
      itemName: 'Germany'
    }, {
      id: 47,
      itemName: 'Mexico'
    }, {
      id: 48,
      itemName: 'Colombia'
    }, {
      id: 49,
      itemName: 'Italy'
    }, {
      id: 50,
      itemName: 'Spain'
    }];
    this.overlaySelected = [{
      id: 42,
      itemName: 'Canada'
    }];
    this.availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
    this.skinSwitchSkin = 'classic';
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
      badgeShowLimit: 3,
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
    this.overlaySettings = this.makeSettings('material', 'Dialog dropdown', {
      tagToBody: true,
      appendToBody: true,
      autoPosition: false,
      position: 'bottom',
      maxHeight: 180,
      badgeShowLimit: 2
    });
    this.skinSwitchCase = this.caseDef('00', 'Skin switcher', 'countries', this.countries, 'skinSwitchSelected', this.skinSwitchSelected, 'skinSwitchSettings', this.skinSwitchSettings, 'skin switch', '{ badgeShowLimit: 3, maxHeight: 220 }', false);
    this.overlayCase = this.caseDef('13', 'Dialog overflow container', 'overlayCountries', this.overlayCountries, 'overlaySelected', this.overlaySelected, 'overlaySettings', this.overlaySettings, 'overlay', "{ tagToBody: true, appendToBody: true, autoPosition: false, position: 'bottom', maxHeight: 180, badgeShowLimit: 2 }", false);
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
  makeSettings(skin, text, options) {
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
      skin: skin
    };
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        settings[key] = options[key];
      }
    }
    return settings;
  }
  switchSkin(skin) {
    var currentModel = this.skinSwitchCase && this.skinSwitchCase.model ? this.skinSwitchCase.model : this.skinSwitchSelected;
    var nextSettings = this.makeSettings(skin, 'Skin ' + this.skinLabel(skin), {
      badgeShowLimit: 3,
      maxHeight: 220
    });
    this.skinSwitchSkin = skin;
    this.skinSwitchSelected = currentModel;
    this.skinSwitchSettings = nextSettings;
    this.skinSwitchCase = this.caseDef('00', 'Skin switcher', 'countries', this.countries, 'skinSwitchSelected', this.skinSwitchSelected, 'skinSwitchSettings', this.skinSwitchSettings, 'skin switch', '{ badgeShowLimit: 3, maxHeight: 220 }', false);
    this.record('skin switch skin', skin);
  }
  skinLabel(skin) {
    return skin.charAt(0).toUpperCase() + skin.slice(1);
  }
  stackBlitzUrl(test) {
    return this.stackBlitzBaseUrl + '/' + this.stackBlitzSlug(test) + '?startScript=start';
  }
  stackBlitzSlug(test) {
    var title = test && test.title ? String(test.title).toLowerCase() : '';
    var eventPrefix = test && test.eventPrefix ? String(test.eventPrefix).toLowerCase() : '';
    if (eventPrefix === 'overlay') {
      return 'dialog';
    }
    if (title.indexOf('search') !== -1) {
      return 'search-filter';
    }
    if (title.indexOf('single') !== -1) {
      return 'single-selection';
    }
    if (title.indexOf('selection limit') !== -1) {
      return 'limit-selection';
    }
    if (title.indexOf('badge') !== -1) {
      return 'limit-badges';
    }
    if (title.indexOf('grouped') !== -1) {
      return 'group-by';
    }
    if (title.indexOf('disabled') !== -1) {
      return 'disabled';
    }
    if (title.indexOf('empty') !== -1) {
      return 'custom-placeholder';
    }
    if (title.indexOf('long list') !== -1) {
      return 'virtual-scrolling';
    }
    if (title.indexOf('lazy') !== -1) {
      return 'lazy-loading-api';
    }
    if (title.indexOf('template') !== -1) {
      return 'templating';
    }
    return 'basic';
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
    return test.modelName + ' = ' + this.tsArray(test.model) + ';\n\n' + test.settingsName + ' = this.makeSettings(\'' + test.settings.skin + '\', \'' + test.settings.text + '\', ' + test.optionsText + ');\n\n' + 'record(type: string, value: any) {\n' + '  var label = value && value.itemName ? value.itemName : JSON.stringify(value);\n' + '  this.events.unshift(type + \': \' + label);\n' + '}';
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
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: false,
      decls: 99,
      vars: 23,
      consts: [[1, "page"], [1, "topbar"], [1, "eyebrow"], [1, "skin-section", "skin-switcher-section"], [1, "section-heading"], [1, "skin-buttons"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "example-row", "custom-skin-sample"], [1, "demo-cell"], ["target", "_blank", "rel", "noopener", 1, "stackblitz-row-link", 3, "href"], [3, "ngModelChange", "onSelect", "onDeSelect", "data", "ngModel", "settings"], [1, "settings-preview"], [1, "code-cell"], [1, "code-grid"], [1, "code-card"], [1, "skin-section", "overlay-section"], [1, "example-row", "overflow-example-row"], [1, "overflow-dialog-frame"], [1, "demo-dialog-surface"], [1, "dialog-copy"], [3, "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "data", "ngModel", "settings"], [1, "skin-section"], [1, "case-list"], ["class", "example-row", 4, "ngFor", "ngForOf"], [1, "skin-section", "material-section"], [1, "activity"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [1, "example-row"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", 4, "ngIf"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", 4, "ngIf"], [1, "swatch-chip"], [1, "swatch"], [1, "option-row"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "header", 1)(2, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3)(7, "div", 4)(8, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Settings-only skin switch");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Skin switcher");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_button_13_Template, 2, 3, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "article", 7)(15, "div", 8)(16, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Updates only settings.skin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Open this example in StackBlitz");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "angular-multiselect", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_angular_multiselect_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.skinSwitchCase.model, $event) || (ctx.skinSwitchCase.model = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function AppComponent_Template_angular_multiselect_onSelect_20_listener($event) {
            return ctx.record("skin switch select", $event);
          })("onDeSelect", function AppComponent_Template_angular_multiselect_onDeSelect_20_listener($event) {
            return ctx.record("skin switch deselect", $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14)(31, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "TS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14)(36, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "JSON");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 15)(41, "div", 4)(42, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Dialog support");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dropdown inside overflow containers");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "article", 16)(47, "div", 8)(48, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Clipping-safe dropdown with tagToBody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Open this example in StackBlitz");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17)(53, "div", 18)(54, "div", 19)(55, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Simulated mat-mdc-dialog-surface");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "overflow hidden, stacking context, and a dropdown near the lower edge.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "angular-multiselect", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_angular_multiselect_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.overlaySelected, $event) || (ctx.overlaySelected = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function AppComponent_Template_angular_multiselect_onSelect_59_listener($event) {
            return ctx.record("overlay select", $event);
          })("onDeSelect", function AppComponent_Template_angular_multiselect_onDeSelect_59_listener($event) {
            return ctx.record("overlay deselect", $event);
          })("onSelectAll", function AppComponent_Template_angular_multiselect_onSelectAll_59_listener($event) {
            return ctx.record("overlay selectAll", $event);
          })("onDeSelectAll", function AppComponent_Template_angular_multiselect_onDeSelectAll_59_listener($event) {
            return ctx.record("overlay deselectAll", $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12)(63, "div", 13)(64, "div", 14)(65, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14)(70, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "TS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14)(75, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "JSON");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "section", 21)(80, "div", 4)(81, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Skin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Classic");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, AppComponent_article_86_Template, 25, 8, "article", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "section", 24)(88, "div", 4)(89, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Skin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Material");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, AppComponent_article_94_Template, 25, 8, "article", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "section", 25)(96, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Event log");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AppComponent_p_98_Template, 2, 1, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Angular ", ctx.angularVersion, " runtime");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@stackline/angular-multiselect-dropdown ", ctx.packageVersion);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableSkins);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.stackBlitzUrl(ctx.skinSwitchCase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.skinSwitchCase.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.skinSwitchCase.model);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.skinSwitchCase.settings);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("skin: ", ctx.skinSwitchSettings.skin);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.htmlCode(ctx.skinSwitchCase));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tsCode(ctx.skinSwitchCase));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jsonCode(ctx.skinSwitchCase));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.stackBlitzUrl(ctx.overlayCase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.overlayCountries);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.overlaySelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.overlaySettings);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("tagToBody: ", ctx.overlaySettings.tagToBody, " | appendToBody: ", ctx.overlaySettings.appendToBody);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.htmlCode(ctx.overlayCase));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tsCode(ctx.overlayCase));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jsonCode(ctx.overlayCase));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classicCases);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.materialCases);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.AngularMultiSelect, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.Item, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.Badge],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 635
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stackline/angular-multiselect-dropdown */ 2224);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4363);





class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__.AngularMultiSelectModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _stackline_angular_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__.AngularMultiSelectModule]
  });
})();

/***/ },

/***/ 5312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule).catch(err => console.error(err));

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map