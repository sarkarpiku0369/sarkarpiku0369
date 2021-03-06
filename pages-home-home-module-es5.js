(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
    /***/
    "./src/app/pages/home/home-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component */
      "./src/app/pages/home/home.component.ts");

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }];

      var HomeRoutingModule = /*#__PURE__*/_createClass(function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      });

      HomeRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function HomeRoutingModule_Factory(t) {
          return new (t || HomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/home/home.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/pages.service */
      "./src/app/service/pages.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      function HomeComponent_section_1_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 41);
        }

        if (rf & 2) {
          var slide_r14 = ctx.$implicit;
          var i_r15 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMapInterpolate2"]("background-image: url(", ctx_r13.homePageData.image_path, "", slide_r14.image, ");");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", i_r15 == 0 ? "show" : "");
        }
      }

      function HomeComponent_section_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_section_1_div_1_div_1_Template, 1, 5, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r8.homePageData.extra_data.type1);
        }
      }

      function HomeComponent_section_1_div_32_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](c_r17.name);
        }
      }

      function HomeComponent_section_1_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_section_1_div_32_a_1_Template, 2, 1, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_section_1_div_32_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r18.showMore();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Show more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r9.homePageData.category.slice(0, 8));
        }
      }

      function HomeComponent_section_1_div_33_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](c_r21.name);
        }
      }

      function HomeComponent_section_1_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_section_1_div_33_a_1_Template, 2, 1, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_section_1_div_33_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r22.showLess();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Show less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r10.homePageData.category);
        }
      }

      var _c0 = function _c0() {
        return ["/signup"];
      };

      function HomeComponent_section_1_form_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      }

      function HomeComponent_section_1_div_38_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](c_r25.name);
        }
      }

      function HomeComponent_section_1_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_section_1_div_38_a_1_Template, 2, 1, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r12.homePageData.category);
        }
      }

      function HomeComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_section_1_div_1_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "hire a pro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "find customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h2", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_section_1_Template_input_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, HomeComponent_section_1_div_32_Template, 4, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, HomeComponent_section_1_div_33_Template, 4, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h2", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, HomeComponent_section_1_form_37_Template, 3, 2, "form", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, HomeComponent_section_1_div_38_Template, 2, 1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.homePageData.image_path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.homePageData.extra_data.type1[0].title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.homePageData && ctx_r0.homePageData.category && ctx_r0.showmore);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.homePageData && ctx_r0.homePageData.category && ctx_r0.showless);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.homePageData.extra_data.type1[0].sub_title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.homePageData && ctx_r0.homePageData.category);
        }
      }

      function HomeComponent_section_2_div_14_div_1_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var t_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r32.name);
        }
      }

      var _c1 = function _c1(a1) {
        return ["/project-details", a1];
      };

      function HomeComponent_section_2_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, HomeComponent_section_2_div_14_div_1_span_12_Template, 2, 1, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "4.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "( 11 reviews)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](24, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " $120/hour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var service_r30 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c1, service_r30.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r29.image_path && service_r30.gallery[0] ? ctx_r29.image_path + service_r30.gallery[0].file : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r29.image_path && service_r30 && service_r30.user && service_r30.user.avatar ? ctx_r29.image_path + (service_r30 == null ? null : service_r30.user.avatar) : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c1, service_r30.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](service_r30 && service_r30.user && service_r30.user.name ? service_r30.user.name : "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", service_r30.tag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](16, _c1, service_r30.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", service_r30.title && service_r30.title.length > 36 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](24, 8, service_r30.title, 0, 30) + "..." : service_r30.title, " ");
        }
      }

      function HomeComponent_section_2_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_section_2_div_14_div_1_Template, 27, 18, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 1, ctx_r28.homePageData.services, 0, 3));
        }
      }

      function HomeComponent_section_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, HomeComponent_section_2_div_14_Template, 3, 5, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.homePageData.extra_data.type2[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r1.homePageData.extra_data.type2[0].body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("routerLink", ctx_r1.homePageData.extra_data.type2[0].btn_url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.homePageData.extra_data.type2[0].btn_text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.homePageData && ctx_r1.homePageData.services);
        }
      }

      function HomeComponent_section_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Download on the");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "App Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "GET IT ON ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Google Play");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r2.homePageData.image_path + ctx_r2.homePageData.extra_data.type3[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.homePageData.extra_data.type3[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r2.homePageData.extra_data.type3[0].body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      var _c2 = function _c2(a1) {
        return ["/service", a1];
      };

      function HomeComponent_section_4_div_6_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var category_r35 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c2, category_r35.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r34.image_path && category_r35.image ? ctx_r34.image_path + category_r35.image : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](category_r35 == null ? null : category_r35.name);
        }
      }

      function HomeComponent_section_4_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HomeComponent_section_4_div_6_a_2_Template, 7, 5, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r33.homePageData.category);
        }
      }

      function HomeComponent_section_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HomeComponent_section_4_div_6_Template, 3, 1, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.homePageData.extra_data.type4[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.homePageData && ctx_r3.homePageData.category);
        }
      }

      function HomeComponent_section_5_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var t_r37 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r36.homePageData.image_path + t_r37.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", t_r37.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("-", t_r37.name, "");
        }
      }

      function HomeComponent_section_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HomeComponent_section_5_div_6_Template, 10, 3, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.homePageData.testimonials);
        }
      }

      function HomeComponent_section_6_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "p", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r38.homePageData.image_path + ctx_r38.homePageData.extra_data.type6[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r38.homePageData.extra_data.type6[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r38.homePageData.extra_data.type6[0].body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function HomeComponent_section_6_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "p", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r39.homePageData.image_path + ctx_r39.homePageData.extra_data.type6[1].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r39.homePageData.extra_data.type6[1].title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r39.homePageData.extra_data.type6[1].body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function HomeComponent_section_6_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "p", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r40.homePageData.image_path + ctx_r40.homePageData.extra_data.type6[2].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r40.homePageData.extra_data.type6[2].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r40.homePageData.extra_data.type6[2].body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function HomeComponent_section_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HomeComponent_section_6_div_7_Template, 12, 3, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HomeComponent_section_6_div_8_Template, 10, 3, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, HomeComponent_section_6_div_9_Template, 12, 3, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r5.homePageData.extra_data.type5[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.homePageData && ctx_r5.homePageData.extra_data && ctx_r5.homePageData.extra_data.type6 && ctx_r5.homePageData.extra_data.type6[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.homePageData && ctx_r5.homePageData.extra_data && ctx_r5.homePageData.extra_data.type6 && ctx_r5.homePageData.extra_data.type6[1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.homePageData && ctx_r5.homePageData.extra_data && ctx_r5.homePageData.extra_data.type6 && ctx_r5.homePageData.extra_data.type6[2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("routerLink", ctx_r5.homePageData.extra_data.type5[0].btn_url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r5.homePageData.extra_data.type5[0].btn_text);
        }
      }

      var _c3 = function _c3(a1) {
        return ["/blog-details", a1];
      };

      function HomeComponent_section_7_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "read more..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var blog_r42 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c3, blog_r42.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r41.image_path ? ctx_r41.image_path + (blog_r42 == null ? null : blog_r42.image2) : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c3, blog_r42.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", blog_r42.page_name.length > 30 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](9, 5, blog_r42.page_name, 0, 30) + "..." : blog_r42.page_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c3, blog_r42.slug));
        }
      }

      var _c4 = function _c4() {
        return ["/blog"];
      };

      function HomeComponent_section_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HomeComponent_section_7_div_7_Template, 14, 15, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r6.homePageData.extra_data.type7[0].title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](8, 3, ctx_r6.homePageData.blogs, 0, 3));
        }
      }

      function HomeComponent_section_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r7.homePageData.extra_data.type8[0].title);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(page, formBuilder, router) {
          _classCallCheck(this, HomeComponent);

          this.page = page;
          this.formBuilder = formBuilder;
          this.router = router;
          this.pageExtraData = [];
          this.showmore = true;
          this.showless = false;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHomePage();
            this.token = localStorage.getItem("token");
            this.searchForm = this.formBuilder.group({
              keyword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              zipcode: ['']
            });
          }
        }, {
          key: "search",
          value: function search() {
            console.log(this.searchForm);

            if (this.searchForm.invalid) {
              return;
            } else {
              this.router.navigate(['/search-result'], {
                queryParams: {
                  keyword: this.searchForm.value.keyword,
                  zipcode: this.searchForm.value.zipcode
                }
              });
            }
          }
        }, {
          key: "jsInit",
          value: function jsInit() {
            /*---------------------
            tesimonila
            --------------------- */
            $('.tesimonial').slick({
              infinite: true,
              autoplay: true,
              dots: true,
              arrows: false,
              speed: 1500,
              slidesToShow: 1,
              pauseOnHover: false
            });
          }
        }, {
          key: "getHomePage",
          value: function getHomePage() {
            var _this = this;

            var self = this;
            this.page.getPage('home').subscribe(function (res) {
              console.log(res);

              if (res.status) {
                _this.homePageData = res; // this.pageExtraData = res.extra_data;

                _this.image_path = res.image_path;
                setTimeout(function () {
                  self.serviceSlider();
                  self.jsInit();
                }, 100);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "serviceSlider",
          value: function serviceSlider() {
            /*---------------------
            service slide
            --------------------- */
            $('.service-slider').slick({
              infinite: true,
              autoplay: true,
              dots: false,
              arrows: true,
              speed: 1000,
              slidesToShow: 3,
              pauseOnHover: false,
              responsive: [{
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }, {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }]
            });
            var index = 0;
            var img = $('.home-slider .slider-slide'); // Get the images to be cycled.

            setInterval(function () {
              // Get the next index.  If at end, restart to the beginning.
              index = index + 1 < img.length ? index + 1 : 0; // Show the next

              img.eq(index).addClass('show'); // Hide the previous

              img.eq(index - 1).removeClass('show');
            }, 5000);
          }
        }, {
          key: "showMore",
          value: function showMore() {
            this.showmore = false;
            this.showless = true;
          }
        }, {
          key: "showLess",
          value: function showLess() {
            this.showmore = true;
            this.showless = false;
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 10,
        vars: 8,
        consts: [["class", "homefix_slider_area", 4, "ngIf"], ["class", "homefix_project_area pt-120 pb-120 ", "id", "homefix_project_area", 4, "ngIf"], ["class", "homefix_about_area pt-120 pb-120", 4, "ngIf"], ["class", "homefix_service_area pt-120 pb-60 ", 4, "ngIf"], ["class", "testimonial_area_start  pt-60 pb-120 ", 4, "ngIf"], ["class", "homefix_works_area pt-120 pb-120", 4, "ngIf"], ["class", "homefix_blog_area  pt-120 pb-120", 4, "ngIf"], ["class", "homefix_signup_area pt-60 pb-60", 4, "ngIf"], [1, "homefix_slider_area"], ["class", "home-slider", 4, "ngIf"], [1, "slider"], [1, "slider-content"], [1, "slider-content-inner"], [1, "container"], [1, "row"], [1, "col-xxl-6", "col-lg-7"], [1, "homefix_slider_item"], [1, "homefix_slider_inner"], [1, "homefix_slider_content"], [1, "slider_subtitle"], [1, "row", "g-0"], ["id", "myTab", "role", "tablist", 1, "sl_nav", "nav", "nav-tabs"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", "onclick", "myFunctionOne()", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "true", "onclick", "myFunction()", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "homefix_slider_title"], [1, "slider_sea_form", 3, "formGroup"], [1, "slide_from_fileds"], [1, "slide_form_field_inner"], ["type", "search", "formControlName", "keyword", "placeholder", "What's on your to-do list?", 1, "home-search-input"], [1, "slide_form_field_inner", "zip_c"], [1, "bi", "bi-geo-alt", "icofont-bubble-down"], ["type", "text", "placeholder", "Zip Code", "formControlName", "zipcode", 1, "home-search-input"], ["type", "submit", "value", "Search", 3, "click"], ["class", "slider_options d-none d-md-inline-block", 4, "ngIf"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["class", "slider_sea_form signup", 4, "ngIf"], ["class", "slider_options d-none d-md-inline-block", "style", "visibility: hidden;", 4, "ngIf"], [1, "home-slider"], ["class", "slider-slide ", 3, "ngClass", "style", 4, "ngFor", "ngForOf"], [1, "slider-slide", 3, "ngClass"], [1, "slider_options", "d-none", "d-md-inline-block"], ["href", "javascript:void(0);", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 2, "color", "black", "background", "#ffca06", 3, "click"], ["href", "javascript:void(0);"], [1, "slider_sea_form", "signup"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "slider_options", "d-none", "d-md-inline-block", 2, "visibility", "hidden"], ["id", "homefix_project_area", 1, "homefix_project_area", "pt-120", "pb-120"], [1, "row", "align-items-center", "mt--30"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-8"], [1, "homefix_proj_left_area", "text-md-start", "text-center"], [1, "homefix_section_title", "mt-30"], [1, "section_title", "mb-3"], [3, "innerHTML"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-4"], [1, "homefix_proj_right_area", "mt-30"], [1, "project_right_btn"], [3, "routerLink"], ["class", "row justify-content-center", 4, "ngIf"], [1, "row", "justify-content-center"], ["class", "col-xxl-4 col-xl-4 col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-4", "col-xl-4", "col-lg-4", "col-md-6"], [1, "proj_single_items", "mt-30"], [1, "proj_single_inner"], [1, "proj_single_thumb", "d-block", 3, "routerLink"], ["onerror", "this.src='assets/images/no-image.png';", "alt", "", 3, "src"], [1, "proj_single_content"], [1, "proj_single_cont_inner"], [1, "proj_client_thumb"], ["onerror", "this.src='assets/images/home/proj_client_img.png';", "alt", "", 3, "src"], [1, "proj_client_name", 3, "routerLink"], [1, "client_name"], [4, "ngFor", "ngForOf"], [1, "proj_ratting"], [1, "proj_raing_per"], [1, "proj_ver_star"], [1, "icofont-ui-rating"], [1, "proj_reviews"], [1, "proj_single_item_title"], [1, "proj_single_item_tilte"], [1, "proj_hours_area"], [1, "homefix_about_area", "pt-120", "pb-120"], [1, "about_right_thumb", "d-lg-block", "d-none"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "col-xl-7", "col-lg-6"], [1, "homefix_about_left_area", "text-lg-start", "text-center"], [1, "homefix_section_title"], [1, "section_title"], [1, "about_button_area", "mt-3"], [1, "about_btn"], ["href", "#"], [1, "icofont-brand-apple"], [1, "down_text"], [1, "btn_text"], ["src", "assets/images/playstore.png", "alt", ""], [1, "homefix_service_area", "pt-120", "pb-60"], [1, "col-xxl-12"], [1, "section_title", "mb-3", "text-lg-start", "text-center"], ["class", "row g-0", 4, "ngIf"], [1, "service-slider"], ["class", "homefix_service_single", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "homefix_service_single", 3, "routerLink"], [1, "homefix_ser_single_inner"], [1, "service_single_thumb"], [1, "service_single_title"], [1, "testimonial_area_start", "pt-60", "pb-120"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12"], [1, "testimonila_items"], [1, "testi_inner", "tesimonial", 2, "background-image", "url('assets/images/home/testi_shape.png')"], ["class", "testi_content", 4, "ngFor", "ngForOf"], [1, "testi_content"], [1, "testi_single_thumb"], ["alt", "", 3, "src"], [1, "testi_description"], [1, "testi_name"], [1, "homefix_works_area", "pt-120", "pb-120"], [1, "section_title", "pb-2"], ["class", "col-xxl-6 col-xl-6 col-lg-6 col-md-7", 4, "ngIf"], ["class", "col-xxl-6 col-xl-6 col-lg-6 col-md-5", 4, "ngIf"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-5"], [1, "works_learnmore"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-7"], [1, "works_single_item", "single_1"], [1, "works_single_item_inner"], [1, "works_single_item_cont"], [1, "works_icons"], [1, "text-md-start", "text-center"], [1, "text-md-start", "text-center", 3, "innerHTML"], [1, "works_bg_img", "d-md-block", "d-none"], ["src", "assets/images/home/works_bg.png", "alt", ""], [1, "works_single_item", "single_2"], [1, "works_single_item_cont", "work_cont"], [1, "works_single_item", "single_3"], ["src", "assets/images/home/works_bg1.png", "alt", ""], [1, "homefix_blog_area", "pt-120", "pb-120"], [1, "section_title", "text-lg-start", "text-center", 3, "routerLink"], [1, "blog_single_items"], [1, "blog_single_inner"], [1, "blog_single_thumb", 3, "routerLink"], [1, "single_blog_content"], [1, "homefix_signup_area", "pt-60", "pb-60"], [1, "col-xxl-5", "col-xl-5", "col-lg-5", "col-md-12"], [1, "signup_title_area"], [1, "signup_title_inner"], [1, "singup_title_content", "text-lg-start", "text-center"], [1, "signup_title"], [1, "col-xxl-7", "col-xl-7", "col-lg-7", "col-md-12"], [1, "signup_mail_area"], [1, "signup_mail_inner", "text-lg-start", "text-center"], ["action", ""], ["type", "email", "placeholder", "Enter Your E-mail", "name", "", "id", ""], ["type", "text", "placeholder", "Zip Code(optional)", "name", "", "id", ""], ["type", "submit", "value", "sing up"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_section_1_Template, 39, 8, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HomeComponent_section_2_Template, 15, 5, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, HomeComponent_section_3_Template, 25, 3, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, HomeComponent_section_4_Template, 7, 2, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, HomeComponent_section_5_Template, 7, 1, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HomeComponent_section_6_Template, 14, 6, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HomeComponent_section_7_Template, 9, 8, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HomeComponent_section_8_Template, 16, 1, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.homePageData && ctx.homePageData.extra_data && ctx.homePageData.extra_data.type1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.homePageData && ctx.homePageData.extra_data && ctx.homePageData.extra_data.type2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.homePageData && ctx.homePageData.extra_data && ctx.homePageData.extra_data.type3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.homePageData && ctx.homePageData.extra_data && ctx.homePageData.extra_data.type4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.homePageData && ctx.homePageData.testimonials);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.homePageData && ctx.homePageData.extra_data && ctx.homePageData.extra_data.type5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.homePageData && ctx.homePageData.extra_data && ctx.homePageData.extra_data.type7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.homePageData && ctx.homePageData.extra_data && ctx.homePageData.extra_data.type8);
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]],
        styles: [".homefix_slider_content[_ngcontent-%COMP%]   .slider_subtitle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{\n    background: #ffca05 !important;\n    color: #333 !important;\n    font-weight: 600;\n    border-radius: 6px;\n    text-transform: capitalize;\n    border: none;\n}\n.slide_form_field_inner[_ngcontent-%COMP%]   input.home-search-input[_ngcontent-%COMP%]{\n    padding: 18px 16px;\n    border-radius: 0 !important;\n}\n.section_title[_ngcontent-%COMP%]{\n    color: #000;\n}\n\n.pills-profile[_ngcontent-%COMP%]   .slider_sea_form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    width: 100%;\n}\n.slider_sea_form[_ngcontent-%COMP%]{\n    margin-left: 0;\n}\n.slider_sea_form.signup[_ngcontent-%COMP%]{\n    width: auto;\n    border: none;\n}\n.proj_single_item_title[_ngcontent-%COMP%]   .proj_hours_area[_ngcontent-%COMP%]{\n    display: block;\n}\n.proj_client_name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    margin-right: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQUNIOzs7R0FHRztBQUVIO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTs7O0dBR0c7QUFFSDtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnNsaWNrLWRvdHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIGxlZnQ6IDMzJTtcbn1cblxuLnNsaWNrLWRvdHMgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNWY5O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDA7XG59XG5cbi5zbGljay1kb3RzIGxpLnNsaWNrLWFjdGl2ZSBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNmZmNhMDU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNHB4O1xufSAqL1xuLyogXG4uc2xpY2stZG90cyBsaSBidXR0b246YmVmb3Jle1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSAqL1xuXG4uaG9tZWZpeF9zbGlkZXJfY29udGVudCAuc2xpZGVyX3N1YnRpdGxlIC5uYXYgbGkgYnV0dG9uLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjZmZjYTA1ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5zbGlkZV9mb3JtX2ZpZWxkX2lubmVyIGlucHV0LmhvbWUtc2VhcmNoLWlucHV0e1xuICAgIHBhZGRpbmc6IDE4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4uc2VjdGlvbl90aXRsZXtcbiAgICBjb2xvcjogIzAwMDtcbn1cbi8qIC5zbGljay1kb3Rze1xuICAgIGJvdHRvbTogOTBweDtcbiAgICBsZWZ0OiA0MSU7XG59ICovXG5cbi5waWxscy1wcm9maWxlIC5zbGlkZXJfc2VhX2Zvcm0gYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlcl9zZWFfZm9ybXtcbiAgICBtYXJnaW4tbGVmdDogMDtcbn1cbi5zbGlkZXJfc2VhX2Zvcm0uc2lnbnVwe1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2pfc2luZ2xlX2l0ZW1fdGl0bGUgLnByb2pfaG91cnNfYXJlYXtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcm9qX2NsaWVudF9uYW1lIHNwYW57XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomeModule */

    /***/
    function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/home/home-routing.module.ts");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.component */
      "./src/app/pages/home/home.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var HomeModule = /*#__PURE__*/_createClass(function HomeModule() {
        _classCallCheck(this, HomeModule);
      });

      HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: HomeModule
      });
      HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-home-home-module-es5.js.map