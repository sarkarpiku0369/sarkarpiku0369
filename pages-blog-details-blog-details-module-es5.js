(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-blog-details-blog-details-module"], {
    /***/
    "./src/app/pages/blog-details/blog-details-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/blog-details/blog-details-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: BlogDetailsRoutingModule */

    /***/
    function srcAppPagesBlogDetailsBlogDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogDetailsRoutingModule", function () {
        return BlogDetailsRoutingModule;
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


      var _blog_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blog-details.component */
      "./src/app/pages/blog-details/blog-details.component.ts");

      var routes = [{
        path: '',
        component: _blog_details_component__WEBPACK_IMPORTED_MODULE_2__["BlogDetailsComponent"]
      }];

      var BlogDetailsRoutingModule = /*#__PURE__*/_createClass(function BlogDetailsRoutingModule() {
        _classCallCheck(this, BlogDetailsRoutingModule);
      });

      BlogDetailsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: BlogDetailsRoutingModule
      });
      BlogDetailsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function BlogDetailsRoutingModule_Factory(t) {
          return new (t || BlogDetailsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BlogDetailsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogDetailsRoutingModule, [{
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
    "./src/app/pages/blog-details/blog-details.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/blog-details/blog-details.component.ts ***!
      \**************************************************************/

    /*! exports provided: BlogDetailsComponent */

    /***/
    function srcAppPagesBlogDetailsBlogDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogDetailsComponent", function () {
        return BlogDetailsComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/api.service */
      "./src/app/service/api.service.ts");
      /* harmony import */


      var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/user.service */
      "./src/app/service/user.service.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/pages.service */
      "./src/app/service/pages.service.ts");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      var _c0 = function _c0(a1) {
        return ["/blog-details", a1];
      };

      function BlogDetailsComponent_div_8_a_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " PREVIOUS POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, ctx_r4.responseData.previous_blog));
        }
      }

      function BlogDetailsComponent_div_8_a_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "NEXT POST ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, ctx_r5.responseData.next_blog));
        }
      }

      function BlogDetailsComponent_div_8_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "3 COMMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h4", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var recent_b_r10 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c0, recent_b_r10.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r6.image_path ? ctx_r6.image_path + (recent_b_r10 == null ? null : recent_b_r10.image2) : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](16, _c0, recent_b_r10.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](7, 7, recent_b_r10.created_at, "MMM d, h:mm:ss a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](18, _c0, recent_b_r10.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](20, _c0, recent_b_r10.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recent_b_r10.page_name.length > 30 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](13, 10, recent_b_r10.page_name, 0, 30) + "..." : recent_b_r10.page_name);
        }
      }

      function BlogDetailsComponent_div_8_li_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", c_r11 == null ? null : c_r11.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](c_r11 == null ? null : c_r11.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](8, 4, c_r11 == null ? null : c_r11.created_at, "mediumDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](c_r11 == null ? null : c_r11.body);
        }
      }

      function BlogDetailsComponent_div_8_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BlogDetailsComponent_div_8_div_54_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r12.postComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "SEND A COMMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["/login"];
      };

      function BlogDetailsComponent_div_8_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Login First");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c1));
        }
      }

      var _c2 = function _c2() {
        return ["/blog"];
      };

      function BlogDetailsComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "15 COMMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h2", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, BlogDetailsComponent_div_8_a_17_Template, 3, 3, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, BlogDetailsComponent_div_8_a_19_Template, 3, 3, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Homefix Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "AUTHOR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Vestibulum vestibulum purus ante, nec facilisis augue ultricies lorem ipsuac el ac lacinia tristique, nulla nisl tempus erat agittis finelit ut lorem feugiat ultrices.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "VIEW ALL POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h2", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Resent Post ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, BlogDetailsComponent_div_8_div_37_Template, 14, 22, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "ol", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, BlogDetailsComponent_div_8_li_43_Template, 11, 7, "li", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h2", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Leave Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "form", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "textarea", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, BlogDetailsComponent_div_8_div_54_Template, 3, 0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, BlogDetailsComponent_div_8_div_55_Template, 3, 2, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r0.image_path ? ctx_r0.image_path + (ctx_r0.blogDetails == null ? null : ctx_r0.blogDetails.image2) : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](8, 13, ctx_r0.blogDetails.created_at, "mediumDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.blogDetails.page_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r0.blogDetails.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.responseData == null ? null : ctx_r0.responseData.previous_blog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.responseData == null ? null : ctx_r0.responseData.next_blog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](16, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.recent_blogs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(", ctx_r0.blogDetails == null ? null : ctx_r0.blogDetails.comment.length, ") Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.blogDetails.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.postCommentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.token);
        }
      }

      function BlogDetailsComponent_li_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", c_r14.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(", c_r14.blog.length, ")");
        }
      }

      function BlogDetailsComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "3 COMMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "By Homefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var recent_b_r15 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c0, recent_b_r15.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r2.image_path ? ctx_r2.image_path + (recent_b_r15 == null ? null : recent_b_r15.image2) : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, recent_b_r15.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](6, 6, recent_b_r15.created_at, "MMM d, h:mm:ss a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, recent_b_r15.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, recent_b_r15.slug));
        }
      }

      function BlogDetailsComponent_div_27_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var t_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r17.name);
        }
      }

      function BlogDetailsComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, BlogDetailsComponent_div_27_a_4_Template, 2, 1, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.blogDetails.tag);
        }
      }

      var BlogDetailsComponent = /*#__PURE__*/function () {
        function BlogDetailsComponent(_location, route, apiService, userService, formBuilder, toastr, pageService) {
          _classCallCheck(this, BlogDetailsComponent);

          this._location = _location;
          this.route = route;
          this.apiService = apiService;
          this.userService = userService;
          this.formBuilder = formBuilder;
          this.toastr = toastr;
          this.pageService = pageService;
          this.categoryList = [];
          this.recent_blogs = [];
          this.token = '';
        }

        _createClass(BlogDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // this.slug = this.route.snapshot.paramMap.get('slug');
            // console.log(this.slug);
            // if (this.slug) {
            //   this.getBlogDetails(this.slug);
            // }
            this.postCommentForm = this.formBuilder.group({
              comment_text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            this.route.params.subscribe(function (parameter) {
              console.log(parameter);

              if (parameter.slug) {
                _this.slug = parameter.slug;

                if (_this.slug) {
                  _this.getBlogDetails(_this.slug);
                }
              } // this.parameterValue = parameter.parameter
              // this._router.navigate(['first/4'])
              // this.parameterValue = parameter.parameter

            });
            this.getProfile();
          }
        }, {
          key: "scrollTop",
          value: function scrollTop() {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }, {
          key: "back",
          value: function back() {
            this._location.back();
          }
        }, {
          key: "getBlogDetails",
          value: function getBlogDetails(slug) {
            var _this2 = this;

            var formData = new FormData();
            formData.set('slug', this.slug);
            this.pageService.getBlogDetails(formData).subscribe(function (res) {
              console.log(res);

              if (res.status && res.response_data) {
                _this2.scrollTop();

                _this2.responseData = res;
                _this2.categoryList = res.category ? res.category : [];
                _this2.blogDetails = res.response_data;
                _this2.image_path = res.image_path ? res.image_path : '';
                _this2.recent_blogs = res.recent_blogs ? res.recent_blogs : [];
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this3 = this;

            this.token = localStorage.getItem("token");

            if (this.token) {
              this.userService.getProfile(this.token).subscribe(function (res) {
                console.log(res);

                if (res.status) {
                  _this3.profileData = res.response_data;
                }
              }, function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "postComment",
          value: function postComment() {
            var _this4 = this;

            if (this.postCommentForm.invalid) {
              return;
            } else {
              this.token = localStorage.getItem("token");
              var formData = new FormData();
              formData.set("user_id", this.profileData.id);
              formData.set("blog_id", this.blogDetails.id);
              formData.set("name", this.profileData.name);
              formData.set("email", this.profileData.email);
              formData.set("body", this.postCommentForm.value.comment_text);
              this.apiService.postComment(this.token, formData).subscribe(function (res) {
                console.log(res);

                if (res && res.status) {
                  _this4.getBlogDetails2();

                  _this4.toastr.success(res.message ? res.message : 'Comment post successfully.');

                  _this4.postCommentForm.reset();
                }
              }, function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "getBlogDetails2",
          value: function getBlogDetails2() {
            var _this5 = this;

            var formData = new FormData();
            formData.set('slug', this.slug);
            this.pageService.getBlogDetails(formData).subscribe(function (res) {
              console.log(res);

              if (res.status && res.response_data) {
                _this5.responseData = res;
                _this5.categoryList = res.category ? res.category : [];
                _this5.blogDetails = res.response_data;
                _this5.image_path = res.image_path ? res.image_path : '';
                _this5.recent_blogs = res.recent_blogs ? res.recent_blogs : [];
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getDetails",
          value: function getDetails(slug) {
            var _this6 = this;

            var formData = new FormData();
            formData.set('slug', slug);
            this.pageService.getBlogDetails(formData).subscribe(function (res) {
              console.log(res);

              if (res.status && res.response_data) {
                _this6.scrollTop();

                _this6.responseData = res;
                _this6.categoryList = res.category ? res.category : [];
                _this6.blogDetails = res.response_data;
                _this6.image_path = res.image_path ? res.image_path : '';
                _this6.recent_blogs = res.recent_blogs ? res.recent_blogs : [];
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return BlogDetailsComponent;
      }();

      BlogDetailsComponent.??fac = function BlogDetailsComponent_Factory(t) {
        return new (t || BlogDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"]));
      };

      BlogDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BlogDetailsComponent,
        selectors: [["app-blog-details"]],
        decls: 29,
        vars: 4,
        consts: [[1, "single-blog-area", "pt-120", "pb-60"], [1, "container"], [1, "site-bredcrumb"], ["href", "javascript:void(0);", 3, "click"], ["src", "assets/images/blog-details/left.png", "alt", ""], [1, "row", "mt--30", "justify-content-center"], ["class", "col-lg-8 mt-30", 4, "ngIf"], [1, "col-lg-4", "col-md-8", "mt-30"], [1, "sidear"], [1, "widget", "search-widget"], [1, "search-field-wrap"], ["type", "text", "placeholder", "Search here", 1, "search-field"], [1, "search-btn"], [1, "icofont-search-1"], [1, "widget"], [1, "widget-title"], [1, "category-list"], [4, "ngFor", "ngForOf"], [1, "side-recent-post-wrap"], ["class", "side-recent-post", 4, "ngFor", "ngForOf"], ["class", "widget mb-0", 4, "ngIf"], [1, "col-lg-8", "mt-30"], [1, "single-blog-content"], [1, "blog-thumb"], ["onerror", "this.src='assets/images/no-image.png';", "alt", "", 3, "src"], [1, "blog-meta", "d-flex", "justify-content-between"], [1, "blog-meta-left"], ["href", "javascript:void(0);"], [1, "blog-desc-wrap"], [1, "blog-title"], [1, "blog-desc", 3, "innerHTML"], [1, "blog-navigation"], [1, "blog-nav-content", "mt-30"], [3, "routerLink", 4, "ngIf"], [1, "blog-author-area"], [1, "blog-author-thumb"], ["src", "assets/images/blog-details/blog-author.jpg", "alt", ""], [1, "blog-author-info"], [3, "routerLink"], [1, "blog-recent-post-area"], [1, "recent-title", "m-0"], [1, "recent-post-wrap"], [1, "row"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [1, "single-blog-comment-area"], [1, "single-blog-comment-list-wrap"], [1, "commet-list"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "comment-form-wrap"], [1, "commet-form-title"], [1, "comment-field-wrap"], [3, "formGroup"], [1, "col-12"], [1, "comment-field"], ["placeholder", "Message", "rows", "3", "formControlName", "comment_text", 1, "comment-textarea-field"], ["class", "comment-submit-area", 4, "ngIf"], ["src", "assets/images/blog-details/right.png", "alt", ""], [1, "col-sm-6"], [1, "recent-post-content"], [1, "recent-post-thumb", "d-block", 3, "routerLink"], [1, "recent-meta"], [1, "recent-post-link", 3, "routerLink"], [1, "recent-post-title"], [1, "d-flex"], [1, "catuhor-thumb"], [1, "comment-content"], [1, "cdate"], [1, "comment-submit-area"], [1, "comment-submit", 3, "click"], [1, "comment-submit", 3, "routerLink"], ["src", "assets/images/blog-details/arrow-right.png", "alt", ""], [1, "side-recent-post"], [1, "sr-author", 3, "routerLink"], [1, "widget", "mb-0"], [1, "sidebar-tags"], ["href", "#", 4, "ngFor", "ngForOf"], ["href", "#"]],
        template: function BlogDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BlogDetailsComponent_Template_a_click_4_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, BlogDetailsComponent_div_8_Template, 56, 17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, BlogDetailsComponent_li_21_Template, 7, 2, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Resent Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, BlogDetailsComponent_div_26_Template, 12, 17, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, BlogDetailsComponent_div_27_Template, 5, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.blogDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categoryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.recent_blogs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.blogDetails && ctx.blogDetails.tag);
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2ctZGV0YWlscy9ibG9nLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blog-details',
            templateUrl: './blog-details.component.html',
            styleUrls: ['./blog-details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
          }, {
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/blog-details/blog-details.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/blog-details/blog-details.module.ts ***!
      \***********************************************************/

    /*! exports provided: BlogDetailsModule */

    /***/
    function srcAppPagesBlogDetailsBlogDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogDetailsModule", function () {
        return BlogDetailsModule;
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


      var _blog_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blog-details-routing.module */
      "./src/app/pages/blog-details/blog-details-routing.module.ts");
      /* harmony import */


      var _blog_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blog-details.component */
      "./src/app/pages/blog-details/blog-details.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var BlogDetailsModule = /*#__PURE__*/_createClass(function BlogDetailsModule() {
        _classCallCheck(this, BlogDetailsModule);
      });

      BlogDetailsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: BlogDetailsModule
      });
      BlogDetailsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function BlogDetailsModule_Factory(t) {
          return new (t || BlogDetailsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _blog_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogDetailsRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BlogDetailsModule, {
          declarations: [_blog_details_component__WEBPACK_IMPORTED_MODULE_3__["BlogDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _blog_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogDetailsRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogDetailsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_blog_details_component__WEBPACK_IMPORTED_MODULE_3__["BlogDetailsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _blog_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogDetailsRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-blog-details-blog-details-module-es5.js.map