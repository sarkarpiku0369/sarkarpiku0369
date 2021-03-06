(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-service-service-module"], {
    /***/
    "./src/app/pages/service/service-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/service/service-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ServiceRoutingModule */

    /***/
    function srcAppPagesServiceServiceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceRoutingModule", function () {
        return ServiceRoutingModule;
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


      var _service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service.component */
      "./src/app/pages/service/service.component.ts");

      var routes = [{
        path: '',
        component: _service_component__WEBPACK_IMPORTED_MODULE_2__["ServiceComponent"]
      }];

      var ServiceRoutingModule = /*#__PURE__*/_createClass(function ServiceRoutingModule() {
        _classCallCheck(this, ServiceRoutingModule);
      });

      ServiceRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ServiceRoutingModule
      });
      ServiceRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ServiceRoutingModule_Factory(t) {
          return new (t || ServiceRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ServiceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServiceRoutingModule, [{
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
    "./src/app/pages/service/service.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/service/service.component.ts ***!
      \****************************************************/

    /*! exports provided: ServiceComponent */

    /***/
    function srcAppPagesServiceServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceComponent", function () {
        return ServiceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/pages.service */
      "./src/app/service/pages.service.ts");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0(a1) {
        return ["/project-details", a1];
      };

      function ServiceComponent_a_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Avg. Price $170");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var service_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](3, _c0, service_r4.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r0.image_path && service_r4.gallery[0] ? ctx_r0.image_path + (service_r4 == null ? null : service_r4.gallery[0].file) : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](service_r4.title);
        }
      }

      function ServiceComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h3", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "See near you");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var service_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](5, _c0, service_r5.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", ctx_r1.image_path && service_r5.gallery && service_r5.gallery[0] ? "url(" + ctx_r1.image_path + (service_r5 == null ? null : service_r5.gallery[0].file) + ")" : "url(assets/images/no-image.png)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r1.image_path && service_r5.gallery && service_r5.gallery[0] ? ctx_r1.image_path + (service_r5 == null ? null : service_r5.gallery[0].file) : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](service_r5.title);
        }
      }

      function ServiceComponent_section_47_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "img", 60);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r6.image_path + ctx_r6.explorePageData.extra_data.type4[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
        }
      }

      function ServiceComponent_section_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, ServiceComponent_section_47_img_2_Template, 1, 1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "p", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Download on the");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "App Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "p", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "GET IT ON ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Google Play");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r2.image_path && ctx_r2.explorePageData.extra_data.type4[0].image);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r2.explorePageData == null ? null : ctx_r2.explorePageData.extra_data.type4[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r2.explorePageData == null ? null : ctx_r2.explorePageData.extra_data.type4[0].sub_title);
        }
      }

      function ServiceComponent_section_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h3", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r3.image_path && ctx_r3.explorePageData.extra_data.type5[0] ? ctx_r3.image_path + (ctx_r3.explorePageData == null ? null : ctx_r3.explorePageData.extra_data.type5[0].image) : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx_r3.explorePageData == null ? null : ctx_r3.explorePageData.extra_data.type5[0].title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r3.explorePageData == null ? null : ctx_r3.explorePageData.extra_data.type5[0].sub_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r3.explorePageData == null ? null : ctx_r3.explorePageData.extra_data.type5[0].btn_text);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r3.explorePageData == null ? null : ctx_r3.explorePageData.extra_data.type5[1].btn_text);
        }
      }

      var ServiceComponent = /*#__PURE__*/function () {
        function ServiceComponent(pageService) {
          _classCallCheck(this, ServiceComponent);

          this.pageService = pageService;
          this.servicesList = [];
        }

        _createClass(ServiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getServices().then(function () {
              _this.getPage();
            });
          }
        }, {
          key: "getPage",
          value: function getPage() {
            var _this2 = this;

            var self = this;
            this.pageService.getPage('explore').subscribe(function (res) {
              console.log(res);

              if (res.status) {
                _this2.explorePageData = res;
                _this2.image_path = res.image_path;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "sliderLoad",
          value: function sliderLoad() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
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
                      $('.homefix-service-slider').slick({
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

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "getServices",
          value: function getServices() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.pageService.getServices({}).subscribe(function (res) {
                        console.log(res);

                        if (res.status && res.response_data) {
                          _this3.servicesList = res.response_data.data;
                          _this3.image_path = res.image_path ? res.image_path : '';
                        }

                        setTimeout(function () {
                          _this3.sliderLoad();
                        }, 200);
                      }, function (err) {
                        console.log(err);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ServiceComponent;
      }();

      ServiceComponent.??fac = function ServiceComponent_Factory(t) {
        return new (t || ServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]));
      };

      ServiceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: ServiceComponent,
        selectors: [["app-service"]],
        decls: 50,
        vars: 14,
        consts: [[1, "homefix_slider_service_area"], [1, "container"], [1, "row"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12"], [1, "homefix_slider_item"], [1, "homefix_slider_inner"], [1, "homefix_slider_content"], [1, "slider_subtitle", "ms-0"], ["src", "./assets/images/ICON.png", "alt", "", "srcset", ""], [1, "homefix_slider_title"], [1, "homefix_slider_title", 2, "font-size", "16px"], [1, "active", 3, "href"], [1, "homefix_project_area"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-8"], [1, "homefix_proj_left_area"], [1, "homefix_section_title"], [1, "section_title"], [1, "w-100", "w-md-75"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-4"], [1, "homefix_service_area", 2, "padding", "0px 0 15px 0"], [1, "row", "g-0"], [1, "service-slider"], ["class", "homefix_service_single", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "homefix_service_area", "homefix_service_professional_area", 2, "padding", "0px"], [1, "col-xxl-12"], [1, "px-3", 2, "width", "168px", "height", "30px", "background", "#EEF9FF", "border-radius", "10px"], [1, "homefix_service_area", 2, "padding", "0px 0 20px 0"], [1, "row", "service"], [1, "homefix-service-slider"], ["class", "col-xxl-4 col-xl-4 col-lg-4 col-md-6", 3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "homefix_about_area pt-120 pb-120 mt-60 mb-60", 4, "ngIf"], ["class", "homefix_contact_area bg-white mb-60", 4, "ngIf"], [1, "homefix_service_single", 3, "routerLink"], [1, "homefix_ser_single_inner"], [1, "service_single_thumb"], ["onerror", "this.src='assets/images/no-image.png';", "alt", "", 3, "src"], [1, "service_single_title"], [2, "display", "flex", "font-size", "14px"], ["src", "./assets/images/dollar.png", "alt", "", "srcset", "", 1, "pe-2"], [2, "color", "#0062FF"], [1, "col-xxl-4", "col-xl-4", "col-lg-4", "col-md-6", 3, "routerLink"], [1, "homefix_service_single"], [1, "homefix_ser_single_inner", "service_background", 2, "background-size", "cover", "background-repeat", "no-repeat", "background-position", "center", "height", "292px", "position", "relative"], [1, "service_single_thumb", 2, "visibility", "hidden"], ["onerror", "this.src='assets/images/no-image.png';", "alt", "image", 3, "src"], [1, "service_single_title", 2, "position", "absolute", "bottom", "0", "left", "20%"], [1, "text-white"], [2, "font-size", "14px"], [1, "homefix_about_area", "pt-120", "pb-120", "mt-60", "mb-60"], [1, "about_right_thumb", "d-lg-block", "d-none"], ["class", "img-fluid", "alt", "", 3, "src", 4, "ngIf"], [1, "col-xl-7", "col-lg-8"], [1, "homefix_about_left_area", "text-lg-start", "text-center"], [1, "about_button_area", "mt-3"], [1, "about_btn"], ["href", "#"], [1, "icofont-brand-apple"], [1, "down_text"], [1, "btn_text"], ["src", "assets/images/playstore.png", "alt", ""], ["alt", "", 1, "img-fluid", 3, "src"], [1, "homefix_contact_area", "bg-white", "mb-60"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-6"], [1, "my-3"], [1, "about_right_inner"], [1, "about_right_thumb"], ["onerror", "this.src='assets/images/no-image.png';", "alt", "", 1, "img-fluid", 3, "src"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-6", "m-auto"], [1, "homefix_about_left_area", "mar"], [1, "section_title", 2, "font-size", "30px"], [1, "about_button_area", "mb-3", "mb-md-0"], ["type", "button", 1, "btn", "btn-warning", 2, "font-weight", "700", "margin-right", "10px"], ["type", "button", 1, "btn", "btn-outline-dark", 2, "font-weight", "700"]],
        template: function ServiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "section", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "section", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, ServiceComponent_a_32_Template, 11, 5, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "section", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "h3", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "section", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](46, ServiceComponent_div_46_Template, 11, 7, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](47, ServiceComponent_section_47_Template, 26, 3, "section", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](48, ServiceComponent_section_48_Template, 20, 5, "section", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](49, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", ctx.image_path && (ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type1[0]) ? "url(" + ctx.image_path + (ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type1[0].image) + ")" : "url(./assets/images/service.png)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type1[0].title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type1[0].sub_title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("href", ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type1[0].btn_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type1[0].btn_text);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type2[0].title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type2[0].sub_title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.servicesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type3[0].title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.explorePageData == null ? null : ctx.explorePageData.extra_data.type3[0].sub_title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.servicesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.explorePageData && ctx.explorePageData.extra_data.type4[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.explorePageData && ctx.explorePageData.extra_data.type5[0]);
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
        styles: ["@media only screen and (min-width: 767px) {\n    .homefix_slider_content[_ngcontent-%COMP%] {\n        width: 50%;\n    }\n}\n\n.homefix_project_area[_ngcontent-%COMP%]{\n    padding: 80px 0;\n}\n\n.homefix_project_area[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .homefix_proj_left_area[_ngcontent-%COMP%]{\n    padding: 0 10px;\n}\n\n.section_title[_ngcontent-%COMP%]{\n    color: #000;\n}\n\n.homefix_project_area[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n    padding-right: unset;\n    padding-left: unset;\n}\n\n.homefix_service_area[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBOzs7Ozs7O0dBT0ciLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICAuaG9tZWZpeF9zbGlkZXJfY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG4uaG9tZWZpeF9wcm9qZWN0X2FyZWF7XG4gICAgcGFkZGluZzogODBweCAwO1xufVxuXG4uaG9tZWZpeF9wcm9qZWN0X2FyZWEgLmNvbnRhaW5lciAucm93IC5ob21lZml4X3Byb2pfbGVmdF9hcmVhe1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnNlY3Rpb25fdGl0bGV7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5ob21lZml4X3Byb2plY3RfYXJlYSAuY29udGFpbmVye1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG59XG4uaG9tZWZpeF9zZXJ2aWNlX2FyZWEgLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAwO1xufVxuLyogLmhvbWVmaXhfYWJvdXRfYXJlYXtcbiAgICBwYWRkaW5nOiA2OXB4IDA7XG4gICAgbWFyZ2luOiA2NXB4IDA7XG59XG4uaG9tZWZpeF9hYm91dF9hcmVhIC5hYm91dF9yaWdodF90aHVtYntcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSAqLyJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ServiceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-service',
            templateUrl: './service.component.html',
            styleUrls: ['./service.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/service/service.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/service/service.module.ts ***!
      \*************************************************/

    /*! exports provided: ServiceModule */

    /***/
    function srcAppPagesServiceServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceModule", function () {
        return ServiceModule;
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


      var _service_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service-routing.module */
      "./src/app/pages/service/service-routing.module.ts");
      /* harmony import */


      var _service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./service.component */
      "./src/app/pages/service/service.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");

      var ServiceModule = /*#__PURE__*/_createClass(function ServiceModule() {
        _classCallCheck(this, ServiceModule);
      });

      ServiceModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ServiceModule
      });
      ServiceModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ServiceModule_Factory(t) {
          return new (t || ServiceModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ServiceModule, {
          declarations: [_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServiceModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-service-service-module-es5.js.map