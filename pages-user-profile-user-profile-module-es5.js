(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-profile-user-profile-module"], {
    /***/
    "./src/app/pages/user-profile/user-profile-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/user-profile/user-profile-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: UserProfileRoutingModule */

    /***/
    function srcAppPagesUserProfileUserProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function () {
        return UserProfileRoutingModule;
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


      var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-profile.component */
      "./src/app/pages/user-profile/user-profile.component.ts");

      var routes = [{
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]
      }];

      var UserProfileRoutingModule = /*#__PURE__*/_createClass(function UserProfileRoutingModule() {
        _classCallCheck(this, UserProfileRoutingModule);
      });

      UserProfileRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: UserProfileRoutingModule
      });
      UserProfileRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function UserProfileRoutingModule_Factory(t) {
          return new (t || UserProfileRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserProfileRoutingModule, [{
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
    "./src/app/pages/user-profile/user-profile.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
      \**************************************************************/

    /*! exports provided: UserProfileComponent */

    /***/
    function srcAppPagesUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
        return UserProfileComponent;
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


      var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/user.service */
      "./src/app/service/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/api.service */
      "./src/app/service/api.service.ts");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      function UserProfileComponent_div_5_button_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserProfileComponent_div_5_button_30_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r12.findPros();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Find Pros");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserProfileComponent_div_5_button_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Availability");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserProfileComponent_div_5_button_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserProfileComponent_div_5_button_32_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r14.getEstimate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Get Estimate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserProfileComponent_div_5_button_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserProfileComponent_div_5_button_33_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r16.message();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserProfileComponent_div_5_p_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r18 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", (ctx_r8.profileData == null ? null : ctx_r8.profileData.country_id) != c_r18.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](c_r18.name);
        }
      }

      function UserProfileComponent_div_5_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "p", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, " Work: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r9.profileData == null ? null : ctx_r9.profileData.occupation);
        }
      }

      function UserProfileComponent_div_5_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h6", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", ctx_r10.profileData == null ? null : ctx_r10.profileData.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);
        }
      }

      function UserProfileComponent_div_5_div_45_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var s_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", s_r20.name, " ");
        }
      }

      function UserProfileComponent_div_5_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h6", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Skill");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, UserProfileComponent_div_5_div_45_span_5_Template, 2, 1, "span", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r11.profileData.skill);
        }
      }

      function UserProfileComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "New alerts");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "4.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "(2 reviews)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, " Availbale Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](30, UserProfileComponent_div_5_button_30_Template, 2, 0, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](31, UserProfileComponent_div_5_button_31_Template, 2, 0, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, UserProfileComponent_div_5_button_32_Template, 2, 0, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, UserProfileComponent_div_5_button_33_Template, 2, 0, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "p", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "img", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, " From: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, UserProfileComponent_div_5_p_42_Template, 2, 2, "p", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](43, UserProfileComponent_div_5_div_43_Template, 8, 1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, UserProfileComponent_div_5_div_44_Template, 5, 1, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](45, UserProfileComponent_div_5_div_45_Template, 6, 1, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r0.profileData && ctx_r0.profileData.avatar_url ? ctx_r0.profileData.avatar_url : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r0.profileData == null ? null : ctx_r0.profileData.fname, " ", ctx_r0.profileData == null ? null : ctx_r0.profileData.lname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.roleId && ctx_r0.roleId == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.roleId && ctx_r0.roleId == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.roleId && ctx_r0.roleId == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.roleId && ctx_r0.roleId == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.roleId && ctx_r0.roleId == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.profileData && ctx_r0.profileData.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.profileData && ctx_r0.profileData.skill && ctx_r0.profileData.skill.length > 0);
        }
      }

      function UserProfileComponent_h2_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("Welcome, ", ctx_r1.profileData == null ? null : ctx_r1.profileData.fname, " ", ctx_r1.profileData == null ? null : ctx_r1.profileData.lname, "");
        }
      }

      function UserProfileComponent_ul_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ul", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "li", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Availbale for");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "li", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "li", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Previous Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserProfileComponent_div_11_div_1_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r25 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", (ctx_r24.profileData == null ? null : ctx_r24.profileData.country_id) != c_r25.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](c_r25.name);
        }
      }

      function UserProfileComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "img", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "a", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "h4", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, UserProfileComponent_div_11_div_1_span_12_Template, 2, 2, "span", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "span", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "4.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "span", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "i", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "span", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "( 11 reviews)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "a", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "h3", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](24, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var service_r23 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", service_r23.gallery && service_r23.gallery[0] && service_r23.gallery[0].file ? ctx_r21.serviceListData.image_path + service_r23.gallery[0].file : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r21.profileData && ctx_r21.profileData.avatar_url ? ctx_r21.profileData.avatar_url : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r21.profileData == null ? null : ctx_r21.profileData.fname, " ", ctx_r21.profileData == null ? null : ctx_r21.profileData.lname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r21.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", service_r23.title.length > 36 ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](24, 6, service_r23.title, 0, 36) + "..." : service_r23.title, " ");
        }
      }

      var _c0 = function _c0() {
        return ["/user-create-solution"];
      };

      function UserProfileComponent_div_11_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "p", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Create a Solution");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c0));
        }
      }

      function UserProfileComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, UserProfileComponent_div_11_div_1_Template, 25, 10, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, UserProfileComponent_div_11_div_2_Template, 7, 2, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r3.serviceListData.response_data);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.serviceListData && ctx_r3.serviceListData.no_of_service_allow_to_add > 0);
        }
      }

      var UserProfileComponent = /*#__PURE__*/function () {
        function UserProfileComponent(userService, router, apiService) {
          _classCallCheck(this, UserProfileComponent);

          this.userService = userService;
          this.router = router;
          this.apiService = apiService;
          this.countries = [];
          this.serviceListData = [];
        }

        _createClass(UserProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.roleId = localStorage.getItem("roleId");
            this.getProfile().then(function () {
              _this.getServiceList();
            });
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var token;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      token = localStorage.getItem("token"); // const user = { user_id: this.userId };

                      this.userService.getProfile(token).subscribe(function (res) {
                        console.log(res);

                        if (res.status) {
                          _this2.countries = res.countries; // this.image_path  = res.image_path;

                          _this2.profileData = res.response_data; // this.skills = res.skills;
                          // this.selectedSkills = res.response_data.skill;
                          // if(this.profileData && this.countries){
                          //   this.profileSecOne.patchValue(this.profileData);
                          // }
                        }
                      }, function (err) {
                        console.log(err);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getServiceList",
          value: function getServiceList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var token;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      token = localStorage.getItem("token"); // const user = { user_id: this.userId };

                      this.apiService.serviceList(token).subscribe(function (res) {
                        console.log(res);

                        if (res.status) {
                          _this3.serviceListData = res;
                        }
                      }, function (err) {
                        console.log(err);
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "message",
          value: function message() {
            this.router.navigate(['/inbox']);
          }
        }, {
          key: "findPros",
          value: function findPros() {
            this.router.navigate(['/search-result'], {
              queryParams: {
                keyword: 'all',
                zipcode: ''
              }
            });
          }
        }, {
          key: "getEstimate",
          value: function getEstimate() {
            this.router.navigate(['/']);
          }
        }]);

        return UserProfileComponent;
      }();

      UserProfileComponent.??fac = function UserProfileComponent_Factory(t) {
        return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
      };

      UserProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: UserProfileComponent,
        selectors: [["app-user-profile"]],
        decls: 206,
        vars: 4,
        consts: [[1, "container", "my-4"], [1, "row"], [1, "col-xxl-4", "col-xl-4", "col-lg-12", "col-md-12", "mobile_profile_detail"], ["class", "rounded-3 px-3 px-md-4 mx-md-3 my-3 my-md-0 my-lg-0 my-xl-0 my-xxl-0 position-sticky top-0", "style", "border: 1px solid #DCDCDC;", 4, "ngIf"], [1, "col-xxl-8", "col-xl-8", "col-lg-12", "col-md-12", "col-12"], [4, "ngIf"], ["class", "nav nav-pills pb-2 mb-2", "id", "pills-tab", "role", "tablist", "style", "flex-wrap: nowrap;border-bottom: 1px solid #DCDCDC;", 4, "ngIf"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], ["class", "row justify-content-center1", 4, "ngIf"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "row", "pb-lg-4", "border-bottom"], [1, "col-md-12"], [2, "font-size", "13px"], [2, "color", "#00A3FF"], [1, "row", "order-1"], [1, "col-md-8", "col-7"], [1, "fw-light", "text-dark", 2, "font-size", "18px"], [1, "text-warning", "ms-3"], ["src", "./assets/images/star.png"], [1, "col-md-4", "col-5", "pt-3"], [2, "font-size", "smaller"], ["aria-label", ".form-select-sm example", 1, "border-0"], ["selected", ""], ["value", "1"], ["value", "2"], [1, "row", "order-2"], [1, "col-md-8"], [1, "mx-0", "px-0"], [2, "font-size", "14px"], ["src", "./assets/images/star3.png", "alt", "", "srcset", "", 1, "img", "img-fluid"], [1, "py-1", "bg-warning", "d-inline-block", 2, "width", "80%", "border-radius", "10px"], [1, "py-1", "bg-light", "d-inline-block", 2, "width", "80%", "border-radius", "10px"], [1, "col-md-4"], [1, "row", "py-3", "pb-lg-4", "border-bottom"], [1, "col-md-6", "col-6"], [1, ""], ["src", "./assets/images/commentimg.png", "alt", ""], [2, "line-height", "18px"], [1, "me-3", 2, "font-size", "20px"], ["src", "./assets/images/star.png", "alt", "", "srcset", ""], [2, "font-size", "12px"], [1, "text-end"], ["src", "./assets/images/commentHouse.png", "alt", "", 1, "img-fluid"], [1, "col-md-12", "col-12", "ms-5", "mt-3"], [1, "col-md-2"], [1, "text-lg-end"], ["src", "./assets/images/Ellipse12.png", "alt", ""], [1, "col-md-10"], ["src", "./assets/images/commentHouse.png", "alt", "", 1, "img-fluid", "my-3", "my-md-0", "mx-md-3"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"], [1, "col-md-6", "col-6", "my-3", "my-lg-0"], [1, "text-center"], ["src", "./assets/images/Rectangle128.png ", "width", "356", "alt", "", 1, "img-fluid"], [1, "text-center", "text-md-start"], ["src", "./assets/images/Rectangle129.png", "width", "356", "alt", "", 1, "img-fluid"], [1, "row", "my-lg-3"], ["src", "./assets/images/Rectangle130.png ", "width", "356", "alt", "", 1, "img-fluid"], ["src", "./assets/images/Rectangle131.png", "width", "356", "alt", "", 1, "img-fluid"], [1, "text-center", "mt-5"], [1, "btn", "btn-outline-primary", "rounded-0"], [1, "rounded-3", "px-3", "px-md-4", "mx-md-3", "my-3", "my-md-0", "my-lg-0", "my-xl-0", "my-xxl-0", "position-sticky", "top-0", 2, "border", "1px solid #DCDCDC"], [1, "mt-3", "text-center", "text-md-end", "text-lg-end", "text-xl-end", "text-xxl-end"], [1, "row", "mobile_profile", "text-center", "border-bottom", "my-3"], [1, "position-relative"], ["onerror", "this.src='./assets/images/Group2094.png'", 1, "img-fluid", 3, "src"], [1, "position-absolute", "bottom-0", "start-1", "translate-middle", "p-2", "border", "border-light", "rounded-circle", "profileDetailImg", 2, "background-color", "#00DD85"], [1, "visually-hidden"], [1, "px-3", "pt-3"], [1, "profileName"], [1, "profileReview"], [1, "px-md-3"], [1, "px-3", "badge", "rounded-pill", 2, "border", "1px solid #00A3FF", "color", "#00A3FF"], ["src", "./assets/images/Group2043.png", "alt", ""], [1, "col-md-12", "px-md-0"], [1, "text-md-center", "my-3"], [1, "d-grid", "d-md-block", "gap-3"], ["class", "btn btn-md-lg rounded-0", "type", "button", "style", "padding: 0.375rem 2.1rem; background-color: #00A3FF; color: white;margin-right: 10px;border-radius: 3px !important;", 3, "click", 4, "ngIf"], ["class", "btn btn-md-lg rounded-0", "type", "button", "style", "padding: 0.375rem 2.1rem; background-color: #00A3FF; color: white;margin-right: 10px;border-radius: 3px !important;", 4, "ngIf"], ["class", "btn btn-outline-dark btn-md-lg rounded-0", "type", "button", "style", "padding: 0.375rem 2.1rem;border-color: #bebcbc;border-radius: 3px !important;", 3, "click", 4, "ngIf"], [1, "row", "pb-1", "border-bottom"], [1, "text-muted"], ["src", "./assets/images/Group1927.png", "alt", ""], ["class", "text-end text-muted", 3, "hidden", 4, "ngFor", "ngForOf"], ["class", "row pb-2", 4, "ngIf"], ["class", "row pb-1 border-bottom mb-2", 4, "ngIf"], ["class", "row mb-3", 4, "ngIf"], ["type", "button", 1, "btn", "btn-md-lg", "rounded-0", 2, "padding", "0.375rem 2.1rem", "background-color", "#00A3FF", "color", "white", "margin-right", "10px", "border-radius", "3px !important", 3, "click"], ["type", "button", 1, "btn", "btn-md-lg", "rounded-0", 2, "padding", "0.375rem 2.1rem", "background-color", "#00A3FF", "color", "white", "margin-right", "10px", "border-radius", "3px !important"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-md-lg", "rounded-0", 2, "padding", "0.375rem 2.1rem", "border-color", "#bebcbc", "border-radius", "3px !important", 3, "click"], [1, "text-end", "text-muted", 3, "hidden"], [1, "row", "pb-2"], ["src", "./assets/images/Group1931.png", "alt", ""], [1, "text-end", "text-muted"], [1, "row", "pb-1", "border-bottom", "mb-2"], [1, "text-center", "fw-light", "text-md-start"], [2, "text-align", "justify", 3, "innerHTML"], [1, "row", "mb-3"], [1, "mt-3"], ["class", "px-3 py-2 badge rounded-pill", "style", "background: rgba(140, 140, 140, 0.07);color: #535353; ", 4, "ngFor", "ngForOf"], [1, "px-3", "py-2", "badge", "rounded-pill", 2, "background", "rgba(140, 140, 140, 0.07)", "color", "#535353"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "pb-2", "mb-2", 2, "flex-wrap", "nowrap", "border-bottom", "1px solid #DCDCDC"], ["role", "presentation", 1, "nav-item", 2, "cursor", "pointer"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active", "text-secondary", "pt-3", "px-2", "px-md-3", "px-lg-3", "px-xl-3", "px-xxl-3", "pb-1"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link", "text-secondary", "pt-3", "px-2", "px-md-3", "px-lg-3", "px-xl-3", "px-xxl-3", "pb-1"], ["id", "pills-contact-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-contact", "type", "button", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link", "text-secondary", "pt-3", "px-2", "px-md-3", "px-lg-3", "px-xl-3", "px-xxl-3", "pb-1"], [1, "row", "justify-content-center1"], ["class", "col-xxl-6 col-xl-6 col-lg-6 col-md-6", 4, "ngFor", "ngForOf"], ["class", "col-md-6", 4, "ngIf"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-6"], [1, "proj_single_items", "mt-30"], [1, "proj_single_inner"], ["routerLink", "/blog-details", 1, "proj_single_thumb", "d-block"], ["onerror", "this.src='assets/images/no-image.png';", "alt", "", 3, "src"], [1, "proj_single_content"], [1, "proj_single_cont_inner"], [1, "proj_client_thumb"], ["onerror", "this.src='./assets/images/Group2094.png'", "alt", "", 3, "src"], ["href", "javascript:void(0);", 1, "proj_client_name"], [1, "client_name"], [3, "hidden", 4, "ngFor", "ngForOf"], [1, "proj_ratting"], [1, "proj_raing_per"], [1, "proj_ver_star"], [1, "icofont-ui-rating"], [1, "proj_reviews"], [1, "proj_single_item_title"], ["routerLink", "/blog-details"], [1, "proj_single_item_tilte"], [3, "hidden"], [1, "col-md-6"], [3, "routerLink"], [1, "rounded-2", "shadow-sm", 2, "height", "350px", "border", "1px #c7c7c7"], [1, "align-middle", "text-center", "create-solu", "m-5", 2, "padding-top", "110px"], ["src", "./assets/images/Subtract.png", "alt", ""], [1, "text-dark"]],
        template: function UserProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, UserProfileComponent_div_5_Template, 46, 11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, UserProfileComponent_h2_7_Template, 2, 2, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, UserProfileComponent_ul_8_Template, 10, 0, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, UserProfileComponent_div_11_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Customers rated this pro highly for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "work quality, professionalism, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "responsiveness");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "2 Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Sort By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Positive");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Negative");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](53, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](54, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, " 100% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, " 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](58, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, " 0% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, " 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](63, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](64, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, " 0% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, " 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](68, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](69, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, " 0% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, " 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](73, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](74, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, " 0% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](76, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](85, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "Linuxdeo1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](91, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](92, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "New York");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](95, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "So good!!!!!! I'm very satisfied with this.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](100, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "Musak Khan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](110, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Plumber");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](113, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Thank You so much");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](123, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "Linuxdeo1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](129, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](130, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "New York");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](133, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "So good!!!!!! I'm very satisfied with this.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](138, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](139, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](147, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "Linuxdeo1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](153, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](154, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, "New York");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](157, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "So good!!!!!! I'm very satisfied with this.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](162, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](170, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "Linuxdeo1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](176, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](177, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "New York");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](180, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "So good!!!!!! I'm very satisfied with this.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](185, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](191, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](194, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](198, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](201, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, "View all");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](205, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.profileData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.roleId && ctx.roleId == 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.roleId && ctx.roleId == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.serviceListData);
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]],
        styles: [".position-relative[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]{\n    width: 100px;\n    border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbi1yZWxhdGl2ZSAuaW1nLWZsdWlke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](UserProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/user-profile/user-profile.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
      \***********************************************************/

    /*! exports provided: UserProfileModule */

    /***/
    function srcAppPagesUserProfileUserProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileModule", function () {
        return UserProfileModule;
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


      var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-profile-routing.module */
      "./src/app/pages/user-profile/user-profile-routing.module.ts");
      /* harmony import */


      var _user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-profile.component */
      "./src/app/pages/user-profile/user-profile.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");

      var UserProfileModule = /*#__PURE__*/_createClass(function UserProfileModule() {
        _classCallCheck(this, UserProfileModule);
      });

      UserProfileModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: UserProfileModule
      });
      UserProfileModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function UserProfileModule_Factory(t) {
          return new (t || UserProfileModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfileRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserProfileModule, {
          declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfileRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserProfileModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfileRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-user-profile-user-profile-module-es5.js.map