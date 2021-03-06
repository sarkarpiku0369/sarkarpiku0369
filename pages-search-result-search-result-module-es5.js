(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-result-search-result-module"], {
    /***/
    "./src/app/pages/search-result/search-result-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/search-result/search-result-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SearchResultRoutingModule */

    /***/
    function srcAppPagesSearchResultSearchResultRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultRoutingModule", function () {
        return SearchResultRoutingModule;
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


      var _search_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-result.component */
      "./src/app/pages/search-result/search-result.component.ts");

      var routes = [{
        path: '',
        component: _search_result_component__WEBPACK_IMPORTED_MODULE_2__["SearchResultComponent"]
      }];

      var SearchResultRoutingModule = /*#__PURE__*/_createClass(function SearchResultRoutingModule() {
        _classCallCheck(this, SearchResultRoutingModule);
      });

      SearchResultRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SearchResultRoutingModule
      });
      SearchResultRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SearchResultRoutingModule_Factory(t) {
          return new (t || SearchResultRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SearchResultRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SearchResultRoutingModule, [{
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
    "./src/app/pages/search-result/search-result.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/search-result/search-result.component.ts ***!
      \****************************************************************/

    /*! exports provided: SearchResultComponent */

    /***/
    function srcAppPagesSearchResultSearchResultComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function () {
        return SearchResultComponent;
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


      var src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/pages.service */
      "./src/app/service/pages.service.ts");
      /* harmony import */


      var _includes_search_header_search_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../includes/search-header/search-header.component */
      "./src/app/includes/search-header/search-header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      var _c0 = function _c0() {
        return ["/search-result"];
      };

      var _c1 = function _c1(a0, a1) {
        return {
          keyword: a0,
          zipcode: a1
        };
      };

      function SearchResultComponent_a_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](4, _c1, c_r2.slug, ctx_r0.zipcode));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", c_r2.name, " ");
        }
      }

      function SearchResultComponent_div_72_div_1_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var t_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r6.name);
        }
      }

      var _c2 = function _c2(a1) {
        return ["/project-details", a1];
      };

      function SearchResultComponent_div_72_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, SearchResultComponent_div_72_div_1_span_12_Template, 2, 1, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "4.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "( 11 reviews)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Contact for price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var service_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c2, service_r4.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r3.image_path && service_r4.gallery[0] ? ctx_r3.image_path + (service_r4 == null ? null : service_r4.gallery[0].file) : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r3.image_path && service_r4.user && service_r4.user.avatar ? ctx_r3.image_path + service_r4.user.avatar : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c2, service_r4.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](service_r4 && service_r4.user && service_r4.user.name ? service_r4.user.name : "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", service_r4.tag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", service_r4.title, " ");
        }
      }

      function SearchResultComponent_div_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SearchResultComponent_div_72_div_1_Template, 30, 11, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.serviceList.data);
        }
      }

      var _c3 = function _c3(a1) {
        return {
          keyword: "all",
          zipcode: a1
        };
      };

      var SearchResultComponent = /*#__PURE__*/function () {
        function SearchResultComponent(route, pageService) {
          _classCallCheck(this, SearchResultComponent);

          this.route = route;
          this.pageService = pageService;
          this.any = [];
          this.zipcode = ''; //   "Filter Data
          // category_id = category ID
          // s = Search service title / category name / Tag name from keyword"

          this.serviceList = [];
        }

        _createClass(SearchResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              console.log(params);
              _this.category = params.keyword;
              _this.zipcode = params.zipcode ? params.zipcode : '';
              console.log(_this.category);

              if (_this.category) {
                if (_this.category == 'all') {
                  _this.getServices('', '');
                } else {
                  _this.getServices(_this.category, _this.zipcode);
                }
              }
            });
            this.getServiceCategory();
          }
        }, {
          key: "getServiceCategory",
          value: function getServiceCategory() {
            var _this2 = this;

            this.pageService.getServiceCategory({}).subscribe(function (res) {
              console.log(res);

              if (res && res.response_data) {
                _this2.categoryList = res.response_data.data;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getServices",
          value: function getServices(category, zipcode) {
            var _this3 = this;

            var formData = new FormData();
            formData.set('s', category);
            formData.set('zipcode', zipcode);
            this.pageService.getServices(formData).subscribe(function (res) {
              console.log(res);

              if (res.status) {
                _this3.serviceList = res.response_data;
                _this3.image_path = res.image_path;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return SearchResultComponent;
      }();

      SearchResultComponent.??fac = function SearchResultComponent_Factory(t) {
        return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]));
      };

      SearchResultComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SearchResultComponent,
        selectors: [["app-search-result"]],
        decls: 122,
        vars: 7,
        consts: [[1, "progectBox", "pt-60", "pb-120"], [1, "container"], [1, "row", "mt--30", "flex-lg-row", "flex-column-reverse"], [1, "col-xl-4", "col-lg-6", "mt-30"], [1, "ssidebar"], [1, "card", "result_card"], [1, "card-body", "topb"], [1, "card-title", 2, "color", "#FAFAFB"], [1, "card-para"], [1, "starbox"], ["href", "#0"], [1, "icofont-star"], [1, "mt-4"], ["type", "button", 1, "btn", "btn-sm", "ps-2", "pe-2", 2, "background", "#00A3FF", "color", "white", "border-radius", "10px"], [1, "pb-2", 2, "font-size", "16px", "font-weight", "600", "color", "#44444F"], [1, "input-group", "mb-3", "srch"], ["type", "text", "placeholder", "Search", "aria-label", "Search", "aria-describedby", "basic-addon1", 1, "form-control", "border-end-0"], ["type", "button", "id", "basic-addon1", 1, "input-group-text", "bg-white", "border-start-0"], [1, "bi", "bi-search"], [1, "checklist"], [3, "routerLink", "queryParams"], [1, "two"], [3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "mt-5"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "c1", "checked", "", 1, "form-check-input"], ["for", "c1", 1, "form-check-label", 2, "color", "#44444F", "font-size", "14px"], ["type", "checkbox", "value", "", "id", "c12", 1, "form-check-input"], ["for", "c12", 1, "form-check-label", 2, "color", "#44444F", "font-size", "14px"], ["type", "checkbox", "value", "", "id", "c13", 1, "form-check-input"], ["for", "c13", 1, "form-check-label", 2, "color", "#44444F", "font-size", "14px"], ["type", "checkbox", "value", "", "id", "c14", 1, "form-check-input"], ["for", "c14", 1, "form-check-label", 2, "color", "#44444F", "font-size", "14px"], [1, "col-xl-8", "col-lg-6"], ["class", "row", 4, "ngIf"], [1, "homefix_works_area", "pt-120", "pb-120"], [1, "row"], [1, "col-xxl-12"], [1, "section_title", "pb-2"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-7"], [1, "works_single_item", "single_1"], [1, "works_single_item_inner"], [1, "works_single_item_cont"], [1, "works_icons"], ["src", "assets/images/icon/hicon-1.png", "alt", ""], [1, "text-md-start", "text-center"], [1, "works_bg_img", "d-md-block", "d-none"], ["src", "assets/images/home/works_bg.png", "alt", ""], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-5"], [1, "works_single_item", "single_2"], [1, "works_single_item_cont", "work_cont"], ["src", "assets/images/icon/hicon-2.png", "alt", ""], [1, "works_single_item", "single_3"], ["src", "assets/images/icon/hicon-3.png", "alt", ""], ["src", "assets/images/home/works_bg1.png", "alt", ""], [1, "works_learnmore"], ["href", "#"], ["class", "col-xl-6", 4, "ngFor", "ngForOf"], [1, "col-xl-6"], [1, "proj_single_items", "mt-30", 3, "routerLink"], [1, "proj_single_inner"], [1, "proj_single_thumb"], ["onerror", "this.src='assets/images/no-image.png';", "alt", "", 3, "src"], [1, "proj_single_content"], [1, "proj_single_cont_inner"], [1, "proj_client_thumb"], ["onerror", "this.src='./assets/images/Group2094.png';", "alt", "", 3, "src"], [1, "proj_client_name", 3, "routerLink"], [1, "client_name"], [4, "ngFor", "ngForOf"], [1, "proj_ratting"], [1, "proj_raing_per"], [1, "proj_ver_star"], [1, "icofont-ui-rating"], [1, "proj_reviews"], [1, "proj_single_item_title"], ["href", "javascript:void(0);"], [1, "proj_single_item_tilte"], [1, "group-btn"], ["href", "javascript:void(0);", 1, "button1", "me-2"], [1, "icofont-chat", "pe-1"]],
        template: function SearchResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-search-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Find the right person for your Problem. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "All Worker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "View All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, SearchResultComponent_a_50_Template, 4, 7, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Frequency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Just Once ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Every Week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " Every two week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Once a month ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, SearchResultComponent_div_72_Template, 2, 1, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "section", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h3", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "How it Works");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h3", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "1. Tell us what your home needs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "From routine maintenance and repairs to dream home renovations, we can help with any project \u2014 big or small.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h3", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "2. We\u2019ll match you with personalized solutions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "See your price and book services in an instant. Or, request and compare quotes from highly rated pros near you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h3", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "3. Start to finish, we\u2019ve got you covered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "When you book and pay with Homefixpros, you\u2019re covered by our Happiness Guarantee. We\u2019ll cover your projects up to full purchase price, plus limited damage protection.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c3, ctx.zipcode));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categoryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.serviceList && ctx.serviceList.data);
          }
        },
        directives: [_includes_search_header_search_header_component__WEBPACK_IMPORTED_MODULE_3__["SearchHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [".progectBox[_ngcontent-%COMP%]   .h4h[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #22ACFA;\n    font-style: italic;\n    font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9nZWN0Qm94IC5oNGgge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzIyQUNGQTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SearchResultComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-search-result',
            templateUrl: './search-result.component.html',
            styleUrls: ['./search-result.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/search-result/search-result.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/search-result/search-result.module.ts ***!
      \*************************************************************/

    /*! exports provided: SearchResultModule */

    /***/
    function srcAppPagesSearchResultSearchResultModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultModule", function () {
        return SearchResultModule;
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


      var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-result-routing.module */
      "./src/app/pages/search-result/search-result-routing.module.ts");
      /* harmony import */


      var _search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-result.component */
      "./src/app/pages/search-result/search-result.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");

      var SearchResultModule = /*#__PURE__*/_createClass(function SearchResultModule() {
        _classCallCheck(this, SearchResultModule);
      });

      SearchResultModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SearchResultModule
      });
      SearchResultModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SearchResultModule_Factory(t) {
          return new (t || SearchResultModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchResultRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SearchResultModule, {
          declarations: [_search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchResultRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SearchResultModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchResultRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-search-result-search-result-module-es5.js.map