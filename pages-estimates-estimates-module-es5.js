(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-estimates-estimates-module"], {
    /***/
    "./src/app/pages/estimates/estimates-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/estimates/estimates-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EstimatesRoutingModule */

    /***/
    function srcAppPagesEstimatesEstimatesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstimatesRoutingModule", function () {
        return EstimatesRoutingModule;
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


      var _estimates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./estimates.component */
      "./src/app/pages/estimates/estimates.component.ts");

      var routes = [{
        path: '',
        component: _estimates_component__WEBPACK_IMPORTED_MODULE_2__["EstimatesComponent"]
      }];

      var EstimatesRoutingModule = /*#__PURE__*/_createClass(function EstimatesRoutingModule() {
        _classCallCheck(this, EstimatesRoutingModule);
      });

      EstimatesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: EstimatesRoutingModule
      });
      EstimatesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function EstimatesRoutingModule_Factory(t) {
          return new (t || EstimatesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](EstimatesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EstimatesRoutingModule, [{
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
    "./src/app/pages/estimates/estimates.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/estimates/estimates.component.ts ***!
      \********************************************************/

    /*! exports provided: EstimatesComponent */

    /***/
    function srcAppPagesEstimatesEstimatesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstimatesComponent", function () {
        return EstimatesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/pages.service */
      "./src/app/service/pages.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      function EstimatesComponent_h4_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.extra_data.type1[0].title, "");
        }
      }

      function EstimatesComponent_h6_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.extra_data.type1[0].sub_title, "");
        }
      }

      function EstimatesComponent_h5_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.extra_data.type1[0].body, "");
        }
      }

      function EstimatesComponent_ul_22_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var e_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](e_r15.title);
        }
      }

      function EstimatesComponent_ul_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, EstimatesComponent_ul_22_li_1_Template, 3, 1, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.extra_data.type2);
        }
      }

      function EstimatesComponent_h4_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r4.extra_data.type3[0].title, "");
        }
      }

      function EstimatesComponent_h6_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Jun 28, 2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EstimatesComponent_p_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "p", 20);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r6.extra_data.type3[0].body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function EstimatesComponent_h3_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r7.extra_data.type4[0].title, "");
        }
      }

      function EstimatesComponent_div_28_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var o_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", o_r17.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](o_r17.sub_title);
        }
      }

      function EstimatesComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, EstimatesComponent_div_28_h5_1_Template, 4, 2, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r8.extra_data.type5);
        }
      }

      function EstimatesComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r9.image_path && ctx_r9.extra_data && ctx_r9.extra_data.type6 && ctx_r9.extra_data.type6[0] && ctx_r9.extra_data.type6[0].image ? ctx_r9.image_path + ctx_r9.extra_data.type6[0].image : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function EstimatesComponent_p_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "p", 20);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r10.extra_data.type6[0].body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function EstimatesComponent_h4_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r11.extra_data.type7[0].title);
        }
      }

      function EstimatesComponent_p_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "p", 20);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r12.extra_data.type8[0].body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function EstimatesComponent_section_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Get free project cost information delivered to your inbox ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var EstimatesComponent = /*#__PURE__*/function () {
        function EstimatesComponent(pageService, route) {
          _classCallCheck(this, EstimatesComponent);

          this.pageService = pageService;
          this.route = route;
        }

        _createClass(EstimatesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.token = localStorage.getItem("token");
            ;
            this.route.params.subscribe(function (parameter) {
              console.log(parameter);

              if (parameter.slug) {
                _this.slug = parameter.slug;

                if (_this.slug) {
                  _this.getCategoryPageDetails(_this.slug);
                }
              }
            });
          }
        }, {
          key: "getCategoryPageDetails",
          value: function getCategoryPageDetails(slug) {
            var _this2 = this;

            // let formData = new FormData();
            // formData.set("slug", slug);
            this.pageService.getPage(slug).subscribe(function (res) {
              console.log(res);

              if (res.status) {
                // this.explorePageData = res;
                if (res.extra_data) {
                  _this2.extra_data = res.extra_data;
                }

                if (res.response_data) {
                  _this2.categoryPageDetails = res.response_data;
                }

                _this2.image_path = res.image_path;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return EstimatesComponent;
      }();

      EstimatesComponent.??fac = function EstimatesComponent_Factory(t) {
        return new (t || EstimatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      EstimatesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EstimatesComponent,
        selectors: [["app-estimates"]],
        decls: 41,
        vars: 16,
        consts: [[1, "account-page", "pt-120", "pb-120"], [1, "container"], [1, "row", "rowarea"], [1, "col-lg-6"], [1, "houes"], [4, "ngIf"], [1, "form-group"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter a zip code", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "houesimg"], ["onerror", "this.src='assets/images/houseimg.png';", "alt", " ", 3, "src"], [1, "cleaning", "pt-10", "pb-60"], [1, "cleanarea"], [1, "costarea"], [3, "innerHTML", 4, "ngIf"], ["class", "costimg", 4, "ngIf"], [1, "estimates"], ["class", "homefix_signup_area pt-60 pb-60", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);"], [3, "innerHTML"], [1, "costimg"], ["onerror", "this.src='assets/images/houseimg1.png';", "alt", " ", 3, "src"], [1, "homefix_signup_area", "pt-60", "pb-60"], [1, "row"], [1, "col-xxl-5", "col-xl-5", "col-lg-5", "col-md-12"], [1, "signup_title_area"], [1, "signup_title_inner"], [1, "singup_title_content", "text-lg-start", "text-center"], [1, "signup_title"], [1, "col-xxl-7", "col-xl-7", "col-lg-7", "col-md-12"], [1, "signup_mail_area"], [1, "signup_mail_inner", "text-lg-start", "text-center"], ["action", ""], ["type", "email", "placeholder", "Enter Your E-mail", "name", "", "id", ""], ["type", "text", "placeholder", "Zip Code(optional)", "name", "", "id", ""], ["type", "submit", "value", "sing up"]],
        template: function EstimatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, EstimatesComponent_h4_8_Template, 2, 1, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, EstimatesComponent_h6_9_Template, 2, 1, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, EstimatesComponent_h5_11_Template, 2, 1, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, EstimatesComponent_ul_22_Template, 2, 1, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, EstimatesComponent_h4_24_Template, 2, 1, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, EstimatesComponent_h6_25_Template, 2, 0, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, EstimatesComponent_p_26_Template, 1, 1, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, EstimatesComponent_h3_27_Template, 2, 1, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, EstimatesComponent_div_28_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, EstimatesComponent_div_29_Template, 2, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, EstimatesComponent_p_30_Template, 1, 1, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, EstimatesComponent_h4_32_Template, 2, 1, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, EstimatesComponent_p_38_Template, 1, 1, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, EstimatesComponent_section_39_Template, 16, 0, "section", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.categoryPageDetails == null ? null : ctx.categoryPageDetails.page_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type1 && ctx.extra_data.type1[0] && ctx.extra_data.type1[0].title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type1 && ctx.extra_data.type1[0] && ctx.extra_data.type1[0].sub_title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type1 && ctx.extra_data.type1[0] && ctx.extra_data.type1[0].body);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.image_path && ctx.extra_data && ctx.extra_data.type1 && ctx.extra_data.type1[0] && ctx.extra_data.type1[0].image ? ctx.image_path + ctx.extra_data.type1[0].image : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type3 && ctx.extra_data.type3[0] && ctx.extra_data.type3[0].title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type3 && ctx.extra_data.type3[0] && ctx.extra_data.type3[0].sub_title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type3 && ctx.extra_data.type3[0] && ctx.extra_data.type3[0].body);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type4 && ctx.extra_data.type4[0] && ctx.extra_data.type4[0].title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type6 && ctx.extra_data.type6[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type6 && ctx.extra_data.type6[0].body);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type7 && ctx.extra_data.type7[0].title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.extra_data && ctx.extra_data.type8 && ctx.extra_data.type8[0].body);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.token);
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VzdGltYXRlcy9lc3RpbWF0ZXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EstimatesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-estimates',
            templateUrl: './estimates.component.html',
            styleUrls: ['./estimates.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/estimates/estimates.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/estimates/estimates.module.ts ***!
      \*****************************************************/

    /*! exports provided: EstimatesModule */

    /***/
    function srcAppPagesEstimatesEstimatesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstimatesModule", function () {
        return EstimatesModule;
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


      var _estimates_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./estimates-routing.module */
      "./src/app/pages/estimates/estimates-routing.module.ts");
      /* harmony import */


      var _estimates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./estimates.component */
      "./src/app/pages/estimates/estimates.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var EstimatesModule = /*#__PURE__*/_createClass(function EstimatesModule() {
        _classCallCheck(this, EstimatesModule);
      });

      EstimatesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: EstimatesModule
      });
      EstimatesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function EstimatesModule_Factory(t) {
          return new (t || EstimatesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _estimates_routing_module__WEBPACK_IMPORTED_MODULE_2__["EstimatesRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](EstimatesModule, {
          declarations: [_estimates_component__WEBPACK_IMPORTED_MODULE_3__["EstimatesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _estimates_routing_module__WEBPACK_IMPORTED_MODULE_2__["EstimatesRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EstimatesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_estimates_component__WEBPACK_IMPORTED_MODULE_3__["EstimatesComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _estimates_routing_module__WEBPACK_IMPORTED_MODULE_2__["EstimatesRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-estimates-estimates-module-es5.js.map