(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"], {
    /***/
    "./src/app/_helpers/custom-validator.ts":
    /*!**********************************************!*\
      !*** ./src/app/_helpers/custom-validator.ts ***!
      \**********************************************/

    /*! exports provided: CustomValidatos */

    /***/
    function srcApp_helpersCustomValidatorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomValidatos", function () {
        return CustomValidatos;
      });

      var CustomValidatos = /*#__PURE__*/function () {
        function CustomValidatos() {
          _classCallCheck(this, CustomValidatos);
        }

        _createClass(CustomValidatos, null, [{
          key: "patternValidator",
          value: function patternValidator(regex, error) {
            return function (control) {
              if (!control.value) {
                // if control is empty return no error
                return null;
              } // test the value of the control against the regexp supplied


              var valid = regex.test(control.value); // if true, return no error (no error), else return error passed in the second parameter

              return valid ? null : error;
            };
          }
        }]);

        return CustomValidatos;
      }();
      /***/

    },

    /***/
    "./src/app/_helpers/must-match.validator.ts":
    /*!**************************************************!*\
      !*** ./src/app/_helpers/must-match.validator.ts ***!
      \**************************************************/

    /*! exports provided: MustMatch */

    /***/
    function srcApp_helpersMustMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
        return MustMatch;
      });

      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
          }

          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "./src/app/pages/notification/notification-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/notification/notification-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: NotificationRoutingModule */

    /***/
    function srcAppPagesNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function () {
        return NotificationRoutingModule;
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


      var _notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notification.component */
      "./src/app/pages/notification/notification.component.ts");

      var routes = [{
        path: '',
        component: _notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]
      }];

      var NotificationRoutingModule = /*#__PURE__*/_createClass(function NotificationRoutingModule() {
        _classCallCheck(this, NotificationRoutingModule);
      });

      NotificationRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: NotificationRoutingModule
      });
      NotificationRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function NotificationRoutingModule_Factory(t) {
          return new (t || NotificationRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NotificationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotificationRoutingModule, [{
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
    "./src/app/pages/notification/notification.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/notification/notification.component.ts ***!
      \**************************************************************/

    /*! exports provided: NotificationComponent */

    /***/
    function srcAppPagesNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
        return NotificationComponent;
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


      var src_app_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_helpers/must-match.validator */
      "./src/app/_helpers/must-match.validator.ts");
      /* harmony import */


      var src_app_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_helpers/custom-validator */
      "./src/app/_helpers/custom-validator.ts");
      /* harmony import */


      var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/user.service */
      "./src/app/service/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      function NotificationComponent_div_29_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "First name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NotificationComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NotificationComponent_div_29_div_1_Template, 2, 0, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.g.fname.errors.required);
        }
      }

      function NotificationComponent_div_35_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Last name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NotificationComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NotificationComponent_div_35_div_1_Template, 2, 0, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.g.lname.errors.required);
        }
      }

      function NotificationComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter old password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NotificationComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter new password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NotificationComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter your password for confirmation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NotificationComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Password and Confirm Password must be match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var NotificationComponent = /*#__PURE__*/function () {
        function NotificationComponent(userService, router, toastr, formBuilder) {
          _classCallCheck(this, NotificationComponent);

          this.userService = userService;
          this.router = router;
          this.toastr = toastr;
          this.formBuilder = formBuilder;
          this.changePassSubmitted = false;
          this.profileSubmitted = false;
        }

        _createClass(NotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.profileSecOne = this.formBuilder.group({
              fname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              lname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            this.changePassForm = this.formBuilder.group({
              old_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidatos"].patternValidator(/\d/, {
                hasNumber: true
              }), src_app_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidatos"].patternValidator(/[A-Z]/, {
                hasCapitalCase: true
              }), src_app_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidatos"].patternValidator(/[a-z]/, {
                hasSmallCase: true
              }), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])],
              password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
            }, {
              validator: [Object(src_app_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__["MustMatch"])('password', 'password_confirmation')]
            });
            this.getProfile();
          }
        }, {
          key: "f",
          get: function get() {
            return this.changePassForm.controls;
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this = this;

            var token = localStorage.getItem("token"); // const user = { user_id: this.userId };

            this.userService.getProfile(token).subscribe(function (res) {
              console.log(res);

              if (res.status) {
                _this.profileData = res.response_data;

                if (_this.profileData) {
                  _this.profileSecOne.patchValue(_this.profileData);
                }
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "g",
          get: function get() {
            return this.profileSecOne.controls;
          }
        }, {
          key: "saveProfile",
          value: function saveProfile() {
            var _this2 = this;

            this.profileSubmitted = true; // this.loginResponseError = null;

            console.log("loginSubmit", this.profileSecOne);

            if (this.profileSecOne.invalid) {
              return;
            } else {
              var token = localStorage.getItem("token");
              console.log("valid...");
              var formData = new FormData();
              formData.set('fname', this.profileSecOne.value.fname);
              formData.set('lname', this.profileSecOne.value.lname);
              formData.set('email', this.profileData.email);
              formData.set('country_id', this.profileData.country_id); // formData.set('city', this.profileData.city);

              this.userService.updateProfile(token, formData).subscribe(function (res) {
                console.log(res);

                if (res.status) {
                  _this2.toastr.success(res.message);
                } else if (res.message) {
                  _this2.toastr.error(res.message);
                } else {
                  _this2.toastr.error("Server error!! please try again later.");
                }
              }, function (err) {
                console.log(err);

                _this2.toastr.error(err.error.message);
              });
            }
          }
        }, {
          key: "changePasswordSubmit",
          value: function changePasswordSubmit() {
            var _this3 = this;

            this.changePassSubmitted = true;
            console.log("changePassForm", this.changePassForm);

            if (this.changePassForm.invalid) {
              return;
            } else {
              console.log("valid...");
              var token = localStorage.getItem("token");
              var formData = new FormData();
              formData.set('old_password', this.changePassForm.value.old_password);
              formData.set('password', this.changePassForm.value.password);
              formData.set('password_confirmation', this.changePassForm.value.password_confirmation);
              this.userService.changePassword(token, formData).subscribe(function (res) {
                console.log(res);

                if (res.status) {
                  _this3.toastr.success(res.message);

                  _this3.changePassSubmitted = false;

                  _this3.changePassForm.reset();
                } else if (res.message) {
                  _this3.toastr.error(res.message);
                } else {
                  _this3.toastr.error("Server error!! please try again later.");
                }
              }, function (err) {
                console.log(err);

                _this3.toastr.error(err.error.message);
              });
            }
          }
        }]);

        return NotificationComponent;
      }();

      NotificationComponent.??fac = function NotificationComponent_Factory(t) {
        return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      NotificationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NotificationComponent,
        selectors: [["app-notification"]],
        decls: 163,
        vars: 30,
        consts: [[1, "account-page", "pt-120", "pb-120"], [1, "container"], [1, "row", "mt--30"], [1, "col-lg-4"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mt-30"], ["role", "presentation", 1, "nav-item"], ["id", "pills-account-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-account", "type", "button", "role", "tab", "aria-controls", "pills-account", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-password-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-password", "type", "button", "role", "tab", "aria-controls", "pills-password", "aria-selected", "false", 1, "nav-link"], ["id", "pills-notification-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-notification", "type", "button", "role", "tab", "aria-controls", "pills-notification", "aria-selected", "false", 1, "nav-link"], ["id", "pills-delete-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-delete", "type", "button", "role", "tab", "aria-controls", "pills-delete", "aria-selected", "false", 1, "nav-link"], [1, "col-xl-6", "col-lg-8", "mt-30"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-account", "role", "tabpanel", "aria-labelledby", "pills-account-tab", 1, "tab-pane", "fade", "show", "active"], [1, "account-input-box"], [3, "formGroup"], [1, "row"], [1, "col-lg-6"], [1, "form-group", "position-relative"], [1, "icon"], [1, "icofont-user-alt-7"], ["type", "text", "placeholder", "First Name", "formControlName", "fname", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Last name", "formControlName", "lname", 1, "form-control", 3, "ngClass"], [1, "col-lg-12"], [1, "icofont-envelope"], ["type", "email", "readonly", "readonly", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "co-12"], [1, "button-group", "d-md-flex", "justify-content-md-end"], [1, "button1", 3, "click"], ["id", "pills-password", "role", "tabpanel", "aria-labelledby", "pills-password-tab", 1, "tab-pane", "fade"], [3, "formGroup", "ngSubmit"], [1, "col-12"], [1, "icofont-ui-password"], ["type", "password", "formControlName", "old_password", "placeholder", "Old Password", 1, "form-control"], ["class", "error-disp", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "New password", 1, "form-control"], ["type", "password", "formControlName", "password_confirmation", "placeholder", "Confirm new password ", 1, "form-control"], [1, "password-info", "mt-30"], [1, "col", 3, "ngClass"], ["aria-hidden", "true"], [1, "col", "mb-3", 3, "ngClass"], [1, "button1", "pass"], ["id", "pills-notification", "role", "tabpanel", "aria-labelledby", "pills-notification-tab", 1, "tab-pane", "fade"], [1, "col-md-12"], [1, "list-group", "notificationBox"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-start"], [1, "ms-2", "me-auto"], [1, ""], [1, "mb-3"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", "mt-5", "mt-md-5"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input"], [1, "btn", "btn-outline-warning"], ["id", "pills-delete", "role", "tabpanel", "aria-labelledby", "pills-delete-tab", 1, "tab-pane", "fade"], [1, "delet-account-box"], ["href", "#0"], [1, "form-floating"], ["placeholder", "Leave a comment here", "id", "floatingTextarea2", 1, "form-control", 2, "height", "100px"], ["for", "floatingTextarea2"], [1, "mb-2", "mt-2", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], [1, "button1"], [1, "button2"], [1, "invalid-feedback"], [4, "ngIf"], [1, "error-disp"], [1, "text-danger", "danger-custom"], [1, "text-danger", "danger-custom", "signin-email"]],
        template: function NotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Account information ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Notification ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Delete Account ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "form", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, NotificationComponent_div_29_Template, 2, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, NotificationComponent_div_35_Template, 2, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationComponent_Template_button_click_43_listener() {
              return ctx.saveProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "form", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NotificationComponent_Template_form_ngSubmit_47_listener() {
              return ctx.changePasswordSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, NotificationComponent_div_54_Template, 3, 0, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, NotificationComponent_div_60_Template, 3, 0, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, NotificationComponent_div_66_Template, 3, 0, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, NotificationComponent_div_67_Template, 3, 0, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Your password must:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " be at least 8 characters! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " contain at least 1 number! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " contain at least 1 in Capital Case! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " contain at least 1 Letter in Small Case! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Save your password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "ol", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Get push notifications when:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " Cras justo odio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " Project reminders and updates ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " You\u2019ve got upcoming projects or there are other updates about your projects. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " Promotions and tips ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " There are coupons, promotions, surveys, and project ideas you might like. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, " Account support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " We have updates about your account, projects, and security/privacy matters. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Unsubscribe all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Delete account:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Are you sure you want to deactivate your account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "When you deactivate your account, you will lose access to all of your projects, profile information, and any reviews you've written or received on Homefixpros.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "If you are receiving too many emails from us, then you can ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " change your notification settings. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " We'd hate to see you go. If there's anything we can do to help, please visit our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Help Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "textarea", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Reason for deactivating your account(optional)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "I confirm I want to delete this account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Cancel");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.profileSecOne);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](26, _c0, ctx.profileSubmitted && ctx.g.fname.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.profileSubmitted && ctx.g.fname.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](28, _c0, ctx.profileSubmitted && ctx.g.lname.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.profileSubmitted && ctx.g.lname.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.changePassForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.f.old_password.errors == null ? null : ctx.f.old_password.errors.required) && ctx.changePassSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.f.password.errors == null ? null : ctx.f.password.errors.required) && ctx.changePassSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.f.password_confirmation.errors == null ? null : ctx.f.password_confirmation.errors.required) && ctx.changePassSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.password_confirmation.errors && ctx.f.password_confirmation.errors.mustMatch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.changePassForm.controls["password"].hasError("required") || ctx.changePassForm.controls["password"].hasError("minlength") ? "text-danger" : "text-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("icofont-", ctx.changePassForm.controls["password"].hasError("required") || ctx.changePassForm.controls["password"].hasError("minlength") ? "close-circled" : "check-circled", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.changePassForm.controls["password"].hasError("required") || ctx.changePassForm.controls["password"].hasError("hasNumber") ? "text-danger" : "text-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("icofont-", ctx.changePassForm.controls["password"].hasError("required") || ctx.changePassForm.controls["password"].hasError("hasNumber") ? "close-circled" : "check-circled", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.changePassForm.controls["password"].hasError("required") || ctx.changePassForm.controls["password"].hasError("hasCapitalCase") ? "text-danger" : "text-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("icofont-", ctx.changePassForm.controls["password"].hasError("required") || ctx.changePassForm.controls["password"].hasError("hasCapitalCase") ? "close-circled" : "check-circled", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.changePassForm.controls["password"].hasError("required") || ctx.changePassForm.controls["password"].hasError("hasSmallCase") ? "text-danger" : "text-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("icofont-", ctx.changePassForm.controls["password"].hasError("required") || ctx.changePassForm.controls["password"].hasError("hasSmallCase") ? "close-circled" : "check-circled", "");
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
        styles: [".nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    border-radius: 0 !important;\n    border: 1px solid #DEDEDE !important;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n    color: #00a3ff !important;\n    font-weight: 600;\n    border-left: 4px solid #00a3ff !important;\n    background-color: white !important;\n}\n\n.list-group-item.active[_ngcontent-%COMP%] {\n    border-color: #DEDEDE !important;\n}\n\n@media only screen and (max-width: 600px) {\n\n    .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n        color: #282828 !important;\n        background-color: rgb(255, 255, 255) !important; \n    }\n\n    .nav-link.active[_ngcontent-%COMP%], button.nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n        background-color: none !important;\n    }\n\n    .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        background: 0 0;\n        border: 0;\n        border-radius: 0 !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHlDQUF5QztJQUN6QyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUk7O1FBRUkseUJBQXlCO1FBQ3pCLCtDQUErQztJQUNuRDs7SUFFQTs7UUFFSSxpQ0FBaUM7SUFDckM7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULDJCQUEyQjtJQUMvQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1waWxscyAubmF2LWxpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcbi5uYXYtcGlsbHMgLnNob3c+Lm5hdi1saW5rIHtcbiAgICBjb2xvcjogIzAwYTNmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDBhM2ZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogI0RFREVERSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXG4gICAgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmsge1xuICAgICAgICBjb2xvcjogIzI4MjgyOCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDsgXG4gICAgfVxuXG4gICAgLm5hdi1saW5rLmFjdGl2ZSxcbiAgICBidXR0b24ubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubmF2LXBpbGxzIC5uYXYtbGluayB7XG4gICAgICAgIGJhY2tncm91bmQ6IDAgMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notification',
            templateUrl: './notification.component.html',
            styleUrls: ['./notification.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/notification/notification.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/notification/notification.module.ts ***!
      \***********************************************************/

    /*! exports provided: NotificationModule */

    /***/
    function srcAppPagesNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationModule", function () {
        return NotificationModule;
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


      var _notification_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notification-routing.module */
      "./src/app/pages/notification/notification-routing.module.ts");
      /* harmony import */


      var _notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notification.component */
      "./src/app/pages/notification/notification.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var NotificationModule = /*#__PURE__*/_createClass(function NotificationModule() {
        _classCallCheck(this, NotificationModule);
      });

      NotificationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: NotificationModule
      });
      NotificationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function NotificationModule_Factory(t) {
          return new (t || NotificationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NotificationModule, {
          declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotificationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-notification-notification-module-es5.js.map