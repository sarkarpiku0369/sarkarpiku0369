(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-home-home-module */
          "pages-home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-signup-signup-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-signup-signup-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/signup/signup.module */
          "./src/app/pages/signup/signup.module.ts")).then(function (m) {
            return m.SignupModule;
          });
        }
      }, {
        path: 'blog',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-blog-blog-module */
          "pages-blog-blog-module").then(__webpack_require__.bind(null,
          /*! ./pages/blog/blog.module */
          "./src/app/pages/blog/blog.module.ts")).then(function (m) {
            return m.BlogModule;
          });
        }
      }, {
        path: 'blog-details/:slug',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-blog-details-blog-details-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-blog-details-blog-details-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/blog-details/blog-details.module */
          "./src/app/pages/blog-details/blog-details.module.ts")).then(function (m) {
            return m.BlogDetailsModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-forgot-password-forgot-password-module */
          "pages-forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./pages/forgot-password/forgot-password.module */
          "./src/app/pages/forgot-password/forgot-password.module.ts")).then(function (m) {
            return m.ForgotPasswordModule;
          });
        }
      }, {
        path: 'client-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-client-profile-client-profile-module */
          "pages-client-profile-client-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/client-profile/client-profile.module */
          "./src/app/pages/client-profile/client-profile.module.ts")).then(function (m) {
            return m.ClientProfileModule;
          });
        }
      }, {
        path: 'contract',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-contract-contract-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-contract-contract-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/contract/contract.module */
          "./src/app/pages/contract/contract.module.ts")).then(function (m) {
            return m.ContractModule;
          });
        }
      }, {
        path: 'contract/:slug',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-contract-contract-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-contract-contract-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/contract/contract.module */
          "./src/app/pages/contract/contract.module.ts")).then(function (m) {
            return m.ContractModule;
          });
        }
      }, {
        path: 'service',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-service-service-module */
          "pages-service-service-module").then(__webpack_require__.bind(null,
          /*! ./pages/service/service.module */
          "./src/app/pages/service/service.module.ts")).then(function (m) {
            return m.ServiceModule;
          });
        }
      }, {
        path: 'service/:slug',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-service-details-service-details-module */
          "pages-service-details-service-details-module").then(__webpack_require__.bind(null,
          /*! ./pages/service-details/service-details.module */
          "./src/app/pages/service-details/service-details.module.ts")).then(function (m) {
            return m.ServiceDetailsModule;
          });
        }
      }, {
        path: 'explore',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-service-service-module */
          "pages-service-service-module").then(__webpack_require__.bind(null,
          /*! ./pages/service/service.module */
          "./src/app/pages/service/service.module.ts")).then(function (m) {
            return m.ServiceModule;
          });
        }
      }, {
        path: 'user-profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-profile-user-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-user-profile-user-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-profile/user-profile.module */
          "./src/app/pages/user-profile/user-profile.module.ts")).then(function (m) {
            return m.UserProfileModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-notification-notification-module */
          "pages-notification-notification-module").then(__webpack_require__.bind(null,
          /*! ./pages/notification/notification.module */
          "./src/app/pages/notification/notification.module.ts")).then(function (m) {
            return m.NotificationModule;
          });
        }
      }, {
        path: 'opportunity',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-oppurtunity-oppurtunity-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-oppurtunity-oppurtunity-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/oppurtunity/oppurtunity.module */
          "./src/app/pages/oppurtunity/oppurtunity.module.ts")).then(function (m) {
            return m.OppurtunityModule;
          });
        }
      }, {
        path: 'opportunity-details/:slug',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-oppurtunity-details-oppurtunity-details-module */
          "pages-oppurtunity-details-oppurtunity-details-module").then(__webpack_require__.bind(null,
          /*! ./pages/oppurtunity-details/oppurtunity-details.module */
          "./src/app/pages/oppurtunity-details/oppurtunity-details.module.ts")).then(function (m) {
            return m.OppurtunityDetailsModule;
          });
        }
      }, {
        path: 'search-result',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-search-result-search-result-module */
          "pages-search-result-search-result-module").then(__webpack_require__.bind(null,
          /*! ./pages/search-result/search-result.module */
          "./src/app/pages/search-result/search-result.module.ts")).then(function (m) {
            return m.SearchResultModule;
          });
        }
      }, {
        path: 'verify-email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-verify-email-verify-email-module */
          "pages-verify-email-verify-email-module").then(__webpack_require__.bind(null,
          /*! ./pages/verify-email/verify-email.module */
          "./src/app/pages/verify-email/verify-email.module.ts")).then(function (m) {
            return m.VerifyEmailModule;
          });
        }
      }, {
        path: 'submit-proposal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-submit-proposal-submit-proposal-module */
          "pages-submit-proposal-submit-proposal-module").then(__webpack_require__.bind(null,
          /*! ./pages/submit-proposal/submit-proposal.module */
          "./src/app/pages/submit-proposal/submit-proposal.module.ts")).then(function (m) {
            return m.SubmitProposalModule;
          });
        }
      }, {
        path: 'send-proposals/:slug',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-submit-proposal-submit-proposal-module */
          "pages-submit-proposal-submit-proposal-module").then(__webpack_require__.bind(null,
          /*! ./pages/submit-proposal/submit-proposal.module */
          "./src/app/pages/submit-proposal/submit-proposal.module.ts")).then(function (m) {
            return m.SubmitProposalModule;
          });
        }
      }, {
        path: 'user-create-solution',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-create-solution-user-create-solution-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-user-create-solution-user-create-solution-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-create-solution/user-create-solution.module */
          "./src/app/pages/user-create-solution/user-create-solution.module.ts")).then(function (m) {
            return m.UserCreateSolutionModule;
          });
        }
      }, {
        path: 'job-post',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-job-post-page-job-post-page-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-job-post-page-job-post-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/job-post-page/job-post-page.module */
          "./src/app/pages/job-post-page/job-post-page.module.ts")).then(function (m) {
            return m.JobPostPageModule;
          });
        }
      }, {
        path: 'edit-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-edit-profile-edit-profile-module */
          "pages-edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/edit-profile/edit-profile.module */
          "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) {
            return m.EditProfileModule;
          });
        }
      }, {
        path: 'project-details/:slug',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-project-details-project-details-module */
          "pages-project-details-project-details-module").then(__webpack_require__.bind(null,
          /*! ./pages/project-details/project-details.module */
          "./src/app/pages/project-details/project-details.module.ts")).then(function (m) {
            return m.ProjectDetailsModule;
          });
        }
      }, {
        path: 'service-search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-service-search-service-search-module */
          "pages-service-search-service-search-module").then(__webpack_require__.bind(null,
          /*! ./pages/service-search/service-search.module */
          "./src/app/pages/service-search/service-search.module.ts")).then(function (m) {
            return m.ServiceSearchModule;
          });
        }
      }, {
        path: 'my-posts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-my-post-my-post-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-my-post-my-post-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/my-post/my-post.module */
          "./src/app/pages/my-post/my-post.module.ts")).then(function (m) {
            return m.MyPostModule;
          });
        }
      }, {
        path: 'my-post-details/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-my-post-details-my-post-details-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-my-post-details-my-post-details-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/my-post-details/my-post-details.module */
          "./src/app/pages/my-post-details/my-post-details.module.ts")).then(function (m) {
            return m.MyPostDetailsModule;
          });
        }
      }, {
        path: 'inbox',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-inbox-inbox-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-inbox-inbox-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/inbox/inbox.module */
          "./src/app/pages/inbox/inbox.module.ts")).then(function (m) {
            return m.InboxModule;
          });
        }
      }, {
        path: 'estimates',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-estimates-estimates-module */
          "pages-estimates-estimates-module").then(__webpack_require__.bind(null,
          /*! ./pages/estimates/estimates.module */
          "./src/app/pages/estimates/estimates.module.ts")).then(function (m) {
            return m.EstimatesModule;
          });
        }
      }, {
        path: 'estimates/:slug',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-estimates-estimates-module */
          "pages-estimates-estimates-module").then(__webpack_require__.bind(null,
          /*! ./pages/estimates/estimates.module */
          "./src/app/pages/estimates/estimates.module.ts")).then(function (m) {
            return m.EstimatesModule;
          });
        }
      }, {
        path: 'create-estimates',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-create-estimates-create-estimates-module */
          "pages-create-estimates-create-estimates-module").then(__webpack_require__.bind(null,
          /*! ./pages/create-estimates/create-estimates.module */
          "./src/app/pages/create-estimates/create-estimates.module.ts")).then(function (m) {
            return m.CreateEstimatesModule;
          });
        }
      }, {
        path: 'estimator',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-estimator-estimator-module */
          "pages-estimator-estimator-module").then(__webpack_require__.bind(null,
          /*! ./pages/estimator/estimator.module */
          "./src/app/pages/estimator/estimator.module.ts")).then(function (m) {
            return m.EstimatorModule;
          });
        }
      }, {
        path: 'project-status',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-project-status-project-status-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-project-status-project-status-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/project-status/project-status.module */
          "./src/app/pages/project-status/project-status.module.ts")).then(function (m) {
            return m.ProjectStatusModule;
          });
        }
      }, {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'homefix';
        }

        _createClass(AppComponent, [{
          key: "onActivate",
          value: function onActivate(event) {
            window.scroll(0, 0);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        consts: [[3, "activate"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "router-outlet", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("activate", function AppComponent_Template_router_outlet_activate_0_listener($event) {
              return ctx.onActivate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-slick-carousel */
      "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
      /* harmony import */


      var _includes_include_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./includes/include.module */
      "./src/app/includes/include.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
      /* harmony import */


      var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @kolkov/angular-editor */
      "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js"); // import { HeaderComponent } from './includes/header/header.component';
      // import { FooterComponent } from './includes/footer/footer.component';
      // import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), // NgMultiSelectDropDownModule.forRoot(),
        ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"], _includes_include_module__WEBPACK_IMPORTED_MODULE_7__["IncludeModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__["AngularEditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], // NgMultiSelectDropDownModule.forRoot(),
          ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"], _includes_include_module__WEBPACK_IMPORTED_MODULE_7__["IncludeModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__["AngularEditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), // NgMultiSelectDropDownModule.forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"], _includes_include_module__WEBPACK_IMPORTED_MODULE_7__["IncludeModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__["AngularEditorModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/includes/footer/footer.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/includes/footer/footer.component.ts ***!
      \*****************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppIncludesFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function FooterComponent_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "mailto:", ctx_r0.footerData == null ? null : ctx_r0.footerData.site_email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.footerData == null ? null : ctx_r0.footerData.site_email);
        }
      }

      function FooterComponent_p_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "tel:", ctx_r1.footerData == null ? null : ctx_r1.footerData.site_phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.footerData == null ? null : ctx_r1.footerData.site_phone);
        }
      }

      function FooterComponent_a_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_li_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var se_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](se_r18.page_name);
        }
      }

      function FooterComponent_li_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var se_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](se_r19.page_name);
        }
      }

      function FooterComponent_a_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_a_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function FooterComponent_li_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var se_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](se_r20.page_name);
        }
      }

      function FooterComponent_li_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var se_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](se_r21.page_name);
        }
      }

      var _c0 = function _c0() {
        return ["/"];
      };

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent(page) {
          _classCallCheck(this, FooterComponent);

          this.page = page;
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // $(function () {
            //   $("#toTop").scrollToTop(1000);
            // });
            /// api Call
            this.getFooter();
          }
        }, {
          key: "getFooter",
          value: function getFooter() {
            var _this = this;

            this.page.getFooter().subscribe(function (res) {
              console.log(res);

              if (res.status) {
                _this.footerData = res;
              }
            }, function (err) {
              console.log(err);
            });
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
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"]));
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 129,
        vars: 35,
        consts: [[1, "homefix_footer_top_area"], [1, "container"], [1, "row"], [1, "col-xxl-3", "col-xl-3", "col-lg-3", "col-md-6", "col-sm-6", "col-6"], [1, "homefix_footer_widget_area"], [1, "widget_homefixle_foot_logo"], [3, "routerLink"], ["onerror", "this.src='assets/images/logo.png';", "alt", "homefix logo", 3, "src"], [1, "widget_content"], [4, "ngIf"], [1, "social_icon"], ["href", "footerData?.facebook_link", 4, "ngIf"], ["href", "footerData?.instagram_link", 4, "ngIf"], ["href", "footerData?.twitter_link", 4, "ngIf"], ["href", "footerData?.site_linkedin_link", 4, "ngIf"], ["href", "footerData?.site_youtube_link", 4, "ngIf"], ["href", "footerData?.site_pinterest_link", 4, "ngIf"], [1, "col-xxl-3", "col-xl-3", "col-lg-4", "col-md-4", "col-sm-6"], [1, "widget_homefixle"], [4, "ngFor", "ngForOf"], [1, "foot_down_button_area"], [1, "foot_down_btn"], ["href", "#"], [1, "icofont-brand-apple"], [1, "down_text"], [1, "btn_text"], ["src", "assets/images/playstore.png", "alt", ""], [1, "homefix_footer_top_area", "mobliefooter"], ["id", "accordionExample", 1, "accordion"], [1, "col-xxl-3", "col-xl-3", "col-lg-3", "col-md-6", "col-sm-6"], [1, "homefix_footer_widget_area", "footerlogo"], ["onerror", "this.src='assets/images/logo.png';", "alt", "", 3, "src"], [3, "href"], ["target", "_blank", "href", "footerData?.facebook_link", 4, "ngIf"], ["target", "_blank", "href", "footerData?.instagram_link", 4, "ngIf"], ["target", "_blank", "href", "footerData?.twitter_link", 4, "ngIf"], ["target", "_blank", "href", "footerData?.site_linkedin_link", 4, "ngIf"], ["target", "_blank", "href", "footerData?.site_youtube_link", 4, "ngIf"], ["target", "_blank", "href", "footerData?.site_pinterest_link", 4, "ngIf"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header", "widget_homefixle"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button", "collapsed"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "accordion-body"], ["id", "headingTwo", 1, "accordion-header", "widget_homefixle"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingThree", 1, "accordion-header", "widget_homefixle"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "footer_copyright_area"], [1, "row", "footer_border"], [1, "col-xxl-12"], [1, "copyright_area"], [1, "scrollto"], ["href", "javascript:void(0);", "id", "toTop7", 3, "click"], [1, "icofont-rounded-up"], ["href", "footerData?.facebook_link"], [1, "icofont-facebook"], ["href", "footerData?.instagram_link"], [1, "icofont-instagram"], ["href", "footerData?.twitter_link"], [1, "icofont-twitter"], ["href", "footerData?.site_linkedin_link"], [1, "icofont-linkedin"], ["href", "footerData?.site_youtube_link"], [1, "icofont-youtube"], ["href", "footerData?.site_pinterest_link"], [1, "icofont-pinterest"], ["target", "_blank", "href", "footerData?.facebook_link"], ["target", "_blank", "href", "footerData?.instagram_link"], ["target", "_blank", "href", "footerData?.twitter_link"], ["target", "_blank", "href", "footerData?.site_linkedin_link"], ["target", "_blank", "href", "footerData?.site_youtube_link"], ["target", "_blank", "href", "footerData?.site_pinterest_link"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, FooterComponent_p_9_Template, 3, 2, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, FooterComponent_p_10_Template, 3, 2, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, FooterComponent_a_12_Template, 2, 0, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, FooterComponent_a_13_Template, 2, 0, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, FooterComponent_a_14_Template, 2, 0, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, FooterComponent_a_15_Template, 2, 0, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, FooterComponent_a_16_Template, 2, 0, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, FooterComponent_a_17_Template, 2, 0, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h2", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, FooterComponent_li_24_Template, 3, 1, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h2", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, FooterComponent_li_31_Template, 3, 1, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h2", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Download on the");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "App Store");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "GET IT ON ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Google Play");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "section", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, FooterComponent_a_68_Template, 2, 0, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, FooterComponent_a_69_Template, 2, 0, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, FooterComponent_a_70_Template, 2, 0, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, FooterComponent_a_71_Template, 2, 0, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, FooterComponent_a_72_Template, 2, 0, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, FooterComponent_a_73_Template, 2, 0, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h2", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](84, FooterComponent_li_84_Template, 3, 1, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h2", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](95, FooterComponent_li_95_Template, 3, 1, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h2", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Download on the");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "App Store");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "GET IT ON ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Google Play");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "section", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FooterComponent_Template_a_click_127_listener() {
              return ctx.scrollTop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](33, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.footerData == null ? null : ctx.footerData.site_footer_logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.site_email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.site_phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.facebook_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.instagram_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.twitter_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.site_linkedin_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.site_youtube_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.site_pinterest_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.footerData == null ? null : ctx.footerData.site_footer1_title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.footerData == null ? null : ctx.footerData.site_footer1_menu);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.footerData == null ? null : ctx.footerData.site_footer2_title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.footerData == null ? null : ctx.footerData.site_footer2_menu);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.footerData == null ? null : ctx.footerData.site_footer3_title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](34, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.footerData == null ? null : ctx.footerData.site_footer_logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "mailto:", ctx.footerData == null ? null : ctx.footerData.site_email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.footerData == null ? null : ctx.footerData.site_email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "tel:", ctx.footerData == null ? null : ctx.footerData.site_phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.footerData == null ? null : ctx.footerData.site_phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.facebook_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.instagram_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.twitter_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.site_linkedin_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.site_youtube_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.footerData == null ? null : ctx.footerData.site_pinterest_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.footerData == null ? null : ctx.footerData.site_footer1_title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.footerData == null ? null : ctx.footerData.site_footer1_menu);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.footerData == null ? null : ctx.footerData.site_footer2_title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.footerData == null ? null : ctx.footerData.site_footer2_menu);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.footerData == null ? null : ctx.footerData.site_footer3_title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.footerData == null ? null : ctx.footerData.site_copyright);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/includes/header/header.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/includes/header/header.component.ts ***!
      \*****************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppIncludesHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/user.service */
      "./src/app/service/user.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0() {
        return ["/search-result"];
      };

      var _c1 = function _c1(a0) {
        return {
          keyword: a0
        };
      };

      function HeaderComponent_div_9_ul_5_li_1_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var hs_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](4, _c1, hs_r10.page_title));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](hs_r10.page_title);
        }
      }

      function HeaderComponent_div_9_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, HeaderComponent_div_9_ul_5_li_1_li_9_Template, 3, 6, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var h_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/" + h_r8.slug);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](h_r8.page_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", h_r8.sub_menu);
        }
      }

      var _c2 = function _c2() {
        return ["/signup"];
      };

      function HeaderComponent_div_9_ul_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c2));
        }
      }

      var _c3 = function _c3() {
        return ["/login"];
      };

      function HeaderComponent_div_9_ul_5_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "log in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c3));
        }
      }

      function HeaderComponent_div_9_ul_5_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_div_9_ul_5_div_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

            return ctx_r11.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function HeaderComponent_div_9_ul_5_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Join us a pro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c2));
        }
      }

      function HeaderComponent_div_9_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, HeaderComponent_div_9_ul_5_li_1_Template, 10, 3, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, HeaderComponent_div_9_ul_5_div_2_Template, 3, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, HeaderComponent_div_9_ul_5_div_3_Template, 3, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, HeaderComponent_div_9_ul_5_div_4_Template, 3, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, HeaderComponent_div_9_ul_5_a_6_Template, 2, 2, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r2.headerData.site_header_menu);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r2.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r2.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r2.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r2.token);
        }
      }

      function HeaderComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "nav", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, HeaderComponent_div_9_ul_5_Template, 7, 5, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.headerData && ctx_r0.headerData.site_header_menu.length > 0);
        }
      }

      var _c4 = function _c4() {
        return ["/create-estimates"];
      };

      function HeaderComponent_div_10_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Create Estimates");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c4));
        }
      }

      var _c5 = function _c5() {
        return ["/opportunity"];
      };

      function HeaderComponent_div_10_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Opportunity");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c5));
        }
      }

      var _c6 = function _c6() {
        return ["/my-posts"];
      };

      function HeaderComponent_div_10_li_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Posted Jobs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c6));
        }
      }

      var _c7 = function _c7() {
        return ["/job-post"];
      };

      function HeaderComponent_div_10_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Post a Job");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c7));
        }
      }

      function HeaderComponent_div_10_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r17.headerData.user.name);
        }
      }

      var _c8 = function _c8() {
        return ["/inbox"];
      };

      var _c9 = function _c9() {
        return ["/user-profile"];
      };

      var _c10 = function _c10() {
        return ["/edit-profile"];
      };

      var _c11 = function _c11() {
        return ["/settings"];
      };

      function HeaderComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "nav", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, HeaderComponent_div_10_li_6_Template, 4, 2, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, HeaderComponent_div_10_li_7_Template, 4, 2, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, HeaderComponent_div_10_li_8_Template, 4, 2, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, HeaderComponent_div_10_li_9_Template, 4, 2, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, HeaderComponent_div_10_span_18_Template, 2, 1, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Setting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_div_10_Template_a_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r18.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " Log Out ");

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
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.role && ctx_r1.role == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.role && ctx_r1.role == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.role && ctx_r1.role == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.role && ctx_r1.role == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](10, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r1.headerData && ctx_r1.headerData.user && ctx_r1.headerData.user.avatar_url ? ctx_r1.headerData.user.avatar_url : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.headerData && ctx_r1.headerData.user && ctx_r1.headerData.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](11, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](12, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](13, _c11));
        }
      }

      var _c12 = function _c12() {
        return ["/"];
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(page, router, userService) {
          _classCallCheck(this, HeaderComponent);

          this.page = page;
          this.router = router;
          this.userService = userService;
          console.log("HeaderComponent");
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            console.log("ngOnInit HeaderComponent"); // console.log($);
            /// check user

            this.checkUser().then(function () {
              _this2.jsInit();
            }); /// api Call

            this.getHeader();
          }
        }, {
          key: "jsInit",
          value: function jsInit() {
            $("#sticker").sticky({
              topSpacing: 0,
              zIndex: 9999
            });
            $('#main_menu').slicknav(); // $(function () {
            //   $("#toTop").scrollToTop(1000);
            // });
            // responsive menu

            $('.bar').click(function () {
              $('.main_menu').slideToggle();
              return false;
            }); // menu arrow

            $(".main_menu ul").parent("li").children('a').append(' <i class="icofont-simple-down"></i>'); // responsive menu

            $(".main_menu ul li").click(function () {
              $(this).children("ul").slideToggle();
              return false;
            });
          }
        }, {
          key: "checkUser",
          value: function checkUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.fName = localStorage.getItem("fName");
                      this.lName = localStorage.getItem("lName");
                      this.token = localStorage.getItem("token");
                      this.role = localStorage.getItem("roleId");
                      this.userId = localStorage.getItem("userId");

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.userService.logOut();
            this.router.navigate(['/']);
            this.checkUser();
          }
        }, {
          key: "getHeader",
          value: function getHeader() {
            var _this3 = this;

            this.page.getHeader().subscribe(function (res) {
              console.log(res);

              if (res.status) {
                _this3.headerData = res;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 11,
        vars: 5,
        consts: [[1, "homefix_header_area"], [1, "homefix_header_inner"], ["id", "sticker", 1, "homefix_header_sti", 2, "height", "95.188px"], [1, "container", "resp_menu"], [1, "row"], [1, "col-xxl-3", "col-xl-3", "col-lg-3", "col-md-3"], [1, "homefix_header_logo"], [3, "routerLink"], ["onerror", "this.src='assets/images/logo.png';", "alt", "homefix Logo", 3, "src"], ["class", "menus col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12", 4, "ngIf"], ["class", "menus topmenu col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12", 4, "ngIf"], [1, "menus", "col-xxl-9", "col-xl-9", "col-lg-9", "col-md-9", "col-sm-12"], [1, "homefix_main_menu"], ["href", "javascript:void(0);", 1, "bar"], [1, "icofont-navigation-menu"], [1, "main_menu", "menu_items"], ["id", "main_menu", 4, "ngIf"], ["id", "main_menu"], [4, "ngFor", "ngForOf"], ["class", "d-md-inline-block mx-2 mx-md-4", 4, "ngIf"], [1, "homefix_menu_button"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "submenu", "megamenu"], [3, "routerLink", "queryParams"], [1, "d-md-inline-block", "mx-2", "mx-md-4"], ["routerLinkActive", "active", 2, "font-size", "18px", 3, "routerLink"], ["href", "javascript:void(0);", 2, "font-size", "18px", 3, "click"], ["routerLinkActive", "active", 3, "routerLink"], [1, "menus", "topmenu", "col-xxl-9", "col-xl-9", "col-lg-9", "col-md-9", "col-sm-12"], ["href", "#", 1, "bar"], ["class", "d-md-inline-block", 4, "ngIf"], [1, "d-md-inline-block"], ["href", "#", 2, "font-size", "18px", 3, "routerLink"], [1, "d-md-inline-block", "mx-24", "menuprofile"], ["href", "javascript:void(0);", 2, "font-size", "18px"], ["onerror", "this.src='./assets/images/Group2094.png'", "alt", "", 3, "src"], ["style", "font-size: 12px;margin-left: 5px;", 4, "ngIf"], [1, "icon"], [1, "icofont-rounded-down"], [1, "pdropdownbox"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "mlogout", 3, "click"], [1, "icofont-logout", "pe-1"], [2, "font-size", "18px", 3, "routerLink"], [2, "font-size", "12px", "margin-left", "5px"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, HeaderComponent_div_9_Template, 6, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, HeaderComponent_div_10_Template, 38, 14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](4, _c12));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx.headerData == null ? null : ctx.headerData.site_logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.token);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.token);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: [".pdropdownbox[_ngcontent-%COMP%] {\n    z-index: 999;\n}\n@media (max-width: 450px) {\n    .homefix_menu_button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin-top: 71px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jbHVkZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZHJvcGRvd25ib3gge1xuICAgIHotaW5kZXg6IDk5OTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5ob21lZml4X21lbnVfYnV0dG9uIGEge1xuICAgICAgICBtYXJnaW4tdG9wOiA3MXB4O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/includes/include.module.ts":
    /*!********************************************!*\
      !*** ./src/app/includes/include.module.ts ***!
      \********************************************/

    /*! exports provided: IncludeModule */

    /***/
    function srcAppIncludesIncludeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncludeModule", function () {
        return IncludeModule;
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


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _search_header_search_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-header/search-header.component */
      "./src/app/includes/search-header/search-header.component.ts");

      var PAGES_COMPONENTS = [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _search_header_search_header_component__WEBPACK_IMPORTED_MODULE_6__["SearchHeaderComponent"]];

      var IncludeModule = /*#__PURE__*/_createClass(function IncludeModule() {
        _classCallCheck(this, IncludeModule);
      });

      IncludeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: IncludeModule
      });
      IncludeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function IncludeModule_Factory(t) {
          return new (t || IncludeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](IncludeModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _search_header_search_header_component__WEBPACK_IMPORTED_MODULE_6__["SearchHeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _search_header_search_header_component__WEBPACK_IMPORTED_MODULE_6__["SearchHeaderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IncludeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: [PAGES_COMPONENTS],
            exports: [PAGES_COMPONENTS],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/includes/search-header/search-header.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/includes/search-header/search-header.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SearchHeaderComponent */

    /***/
    function srcAppIncludesSearchHeaderSearchHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchHeaderComponent", function () {
        return SearchHeaderComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/user.service */
      "./src/app/service/user.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0() {
        return ["/service-search"];
      };

      var _c1 = function _c1(a0) {
        return {
          category: a0
        };
      };

      function SearchHeaderComponent_div_18_ul_5_li_1_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var hs_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](4, _c1, hs_r10.page_title));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](hs_r10.page_title);
        }
      }

      function SearchHeaderComponent_div_18_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, SearchHeaderComponent_div_18_ul_5_li_1_li_9_Template, 3, 6, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var h_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", "/" + h_r8.slug);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](h_r8.page_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", h_r8.sub_menu);
        }
      }

      var _c2 = function _c2() {
        return ["/signup"];
      };

      function SearchHeaderComponent_div_18_ul_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c2));
        }
      }

      var _c3 = function _c3() {
        return ["/login"];
      };

      function SearchHeaderComponent_div_18_ul_5_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "log in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c3));
        }
      }

      function SearchHeaderComponent_div_18_ul_5_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SearchHeaderComponent_div_18_ul_5_div_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

            return ctx_r11.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SearchHeaderComponent_div_18_ul_5_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Join us a pro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c2));
        }
      }

      function SearchHeaderComponent_div_18_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, SearchHeaderComponent_div_18_ul_5_li_1_Template, 10, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, SearchHeaderComponent_div_18_ul_5_div_2_Template, 3, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, SearchHeaderComponent_div_18_ul_5_div_3_Template, 3, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, SearchHeaderComponent_div_18_ul_5_div_4_Template, 3, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, SearchHeaderComponent_div_18_ul_5_a_6_Template, 2, 2, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r2.headerData.site_header_menu);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r2.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r2.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r2.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r2.token);
        }
      }

      function SearchHeaderComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "nav", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, SearchHeaderComponent_div_18_ul_5_Template, 7, 5, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.headerData && ctx_r0.headerData.site_header_menu.length > 0);
        }
      }

      var _c4 = function _c4() {
        return ["/opportunity"];
      };

      function SearchHeaderComponent_div_19_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Opportunity");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c4));
        }
      }

      var _c5 = function _c5() {
        return ["/my-posts"];
      };

      function SearchHeaderComponent_div_19_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "My Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c5));
        }
      }

      var _c6 = function _c6() {
        return ["/job-post"];
      };

      function SearchHeaderComponent_div_19_li_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Post a Job");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c6));
        }
      }

      var _c7 = function _c7() {
        return ["/inbox"];
      };

      var _c8 = function _c8() {
        return ["/user-profile"];
      };

      var _c9 = function _c9() {
        return ["/edit-profile"];
      };

      var _c10 = function _c10() {
        return ["/settings"];
      };

      function SearchHeaderComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "nav", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, SearchHeaderComponent_div_19_li_6_Template, 4, 2, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, SearchHeaderComponent_div_19_li_7_Template, 4, 2, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, SearchHeaderComponent_div_19_li_8_Template, 4, 2, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Setting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SearchHeaderComponent_div_19_Template_a_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r16.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, " Log Out ");

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
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.role && ctx_r1.role == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.role && ctx_r1.role == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.role && ctx_r1.role == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](8, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r1.headerData && ctx_r1.headerData.user && ctx_r1.headerData.user.avatar_url ? ctx_r1.headerData.user.avatar_url : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](9, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](10, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](11, _c10));
        }
      }

      var _c11 = function _c11() {
        return ["/"];
      };

      var SearchHeaderComponent = /*#__PURE__*/function () {
        function SearchHeaderComponent(page, router, route, userService) {
          var _this4 = this;

          _classCallCheck(this, SearchHeaderComponent);

          this.page = page;
          this.router = router;
          this.route = route;
          this.userService = userService;
          this.zipcode = '';
          this.category = '';
          console.log("HeaderComponent");
          this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this4.category = params.keyword;
            console.log(_this4.category);
          });
        }

        _createClass(SearchHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            /// check user
            this.checkUser().then(function () {
              _this5.jsInit();
            }); /// api Call

            this.getHeader();
          }
        }, {
          key: "jsInit",
          value: function jsInit() {
            $("#sticker").sticky({
              topSpacing: 0,
              zIndex: 9999
            });
            $('#main_menu').slicknav(); // $(function () {
            //   $("#toTop").scrollToTop(1000);
            // });
            // responsive menu

            $('.bar').click(function () {
              $('.main_menu').slideToggle();
              return false;
            }); // menu arrow

            $(".main_menu ul").parent("li").children('a').append(' <i class="icofont-simple-down"></i>'); // responsive menu

            $(".main_menu ul li").click(function () {
              $(this).children("ul").slideToggle();
              return false;
            });
          }
        }, {
          key: "checkUser",
          value: function checkUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.fName = localStorage.getItem("fName");
                      this.lName = localStorage.getItem("lName");
                      this.token = localStorage.getItem("token");
                      this.role = localStorage.getItem("roleId");
                      this.userId = localStorage.getItem("userId");

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.userService.logOut();
            this.router.navigate(['/']);
            this.checkUser();
          }
        }, {
          key: "getHeader",
          value: function getHeader() {
            var _this6 = this;

            this.page.getHeader().subscribe(function (res) {
              console.log(res);

              if (res.status) {
                _this6.headerData = res;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "search",
          value: function search() {
            console.log($('#search-keyword').val());

            if ($('#search-keyword').val()) {
              var keyword = $('#search-keyword').val();
              var zipcode = $('#search-zipcode').val();
              this.router.navigate(['/search-result'], {
                queryParams: {
                  keyword: keyword,
                  zipcode: zipcode
                }
              });
            }
          }
        }]);

        return SearchHeaderComponent;
      }();

      SearchHeaderComponent.??fac = function SearchHeaderComponent_Factory(t) {
        return new (t || SearchHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      SearchHeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: SearchHeaderComponent,
        selectors: [["app-search-header"]],
        decls: 20,
        vars: 7,
        consts: [[1, "homefix_header_area"], [1, "homefix_header_inner"], ["id", "sticker", 1, "homefix_header_sti", 2, "height", "95.188px"], [1, "container", "resp_menu"], [1, "row"], [1, "col-xxl-2", "col-xl-2", "col-lg-2", "col-md-2"], [1, "homefix_header_logo"], [3, "routerLink"], ["onerror", "this.src='assets/images/logo.png';", "alt", "homefix Logo", 3, "src"], [1, "col-xxl-5", "col-xl-5", "col-lg-5", "col-md-5", "mt-3"], ["action", "#0", 1, "slider_sea_form", "mb-2"], [1, "slide_from_fileds"], [1, "slide_form_field_inner"], ["type", "search", "placeholder", "What's on your to-do list?", "id", "search-keyword", 3, "value"], [1, "slide_form_field_inner", "zip_c"], [1, "bi", "bi-geo-alt", "icofont-bubble-down"], ["type", "text", "placeholder", "Zip Code", "id", "search-zipcode", 3, "value"], ["type", "submit", "value", "Search", 1, "search", 3, "click"], ["class", "menus col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12", 4, "ngIf"], ["class", "menus topmenu col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12", 4, "ngIf"], [1, "menus", "col-xxl-5", "col-xl-5", "col-lg-5", "col-md-5", "col-sm-12"], [1, "homefix_main_menu"], ["href", "javascript:void(0);", 1, "bar"], [1, "icofont-navigation-menu"], [1, "main_menu", "menu_items"], ["id", "main_menu", 4, "ngIf"], ["id", "main_menu"], [4, "ngFor", "ngForOf"], ["class", "d-md-inline-block mx-2 mx-md-4", 4, "ngIf"], [1, "homefix_menu_button"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "submenu", "megamenu"], [3, "routerLink", "queryParams"], [1, "d-md-inline-block", "mx-2", "mx-md-4"], ["routerLinkActive", "active", 2, "font-size", "18px", 3, "routerLink"], ["href", "javascript:void(0);", 2, "font-size", "18px", 3, "click"], ["routerLinkActive", "active", 3, "routerLink"], [1, "menus", "topmenu", "col-xxl-5", "col-xl-5", "col-lg-5", "col-md-5", "col-sm-12"], ["href", "#", 1, "bar"], ["class", "d-md-inline-block", 4, "ngIf"], [1, "d-md-inline-block"], ["href", "#", 2, "font-size", "18px", 3, "routerLink"], [1, "d-md-inline-block", "mx-24", "menuprofile"], ["href", "javascript:void(0);", 2, "font-size", "18px"], ["onerror", "this.src='./assets/images/Group2094.png'", "alt", "", 3, "src"], [1, "icon"], [1, "icofont-rounded-down"], [1, "pdropdownbox"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "mlogout", 3, "click"], [1, "icofont-logout", "pe-1"], [2, "font-size", "18px", 3, "routerLink"]],
        template: function SearchHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SearchHeaderComponent_Template_input_click_17_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, SearchHeaderComponent_div_18_Template, 6, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, SearchHeaderComponent_div_19_Template, 36, 12, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](6, _c11));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx.headerData == null ? null : ctx.headerData.site_logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.category && ctx.category != "all" ? ctx.category : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.zipcode);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.token);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.token);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: [".slider_sea_form[_ngcontent-%COMP%]{\n    border-radius: 6px;\n    box-shadow: 0 0 30px #0000001c;\n}\n.slider_sea_form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    font-size: 12px;\n}\n.main_menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\n    font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jbHVkZXMvc2VhcmNoLWhlYWRlci9zZWFyY2gtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaW5jbHVkZXMvc2VhcmNoLWhlYWRlci9zZWFyY2gtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyX3NlYV9mb3Jte1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMzBweCAjMDAwMDAwMWM7XG59XG4uc2xpZGVyX3NlYV9mb3JtIGlucHV0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX21lbnUgPiB1bCA+IGxpID4gYXtcbiAgICBmb250LXNpemU6IDEzcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](SearchHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-search-header',
            templateUrl: './search-header.component.html',
            styleUrls: ['./search-header.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/service/pages.service.ts":
    /*!******************************************!*\
      !*** ./src/app/service/pages.service.ts ***!
      \******************************************/

    /*! exports provided: PagesService */

    /***/
    function srcAppServicePagesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesService", function () {
        return PagesService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        })
      };

      var PagesService = /*#__PURE__*/function () {
        // public homePageData: any;
        // public headerData: any;
        function PagesService(http) {
          _classCallCheck(this, PagesService);

          this.http = http;
          this.apiurl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        } // http://creativeonlinezone.com/project/homefix/api/get-header


        _createClass(PagesService, [{
          key: "getHeader",
          value: function getHeader() {
            var user_id = localStorage.getItem("userId");

            if (user_id) {
              var formData = new FormData();
              formData.append('user_id', user_id);
              return this.http.post(this.apiurl + '/api/get-header', formData);
            } else {
              return this.http.post(this.apiurl + '/api/get-header', JSON.stringify({}));
            }
          } // http://creativeonlinezone.com/project/homefix/api/get-footer

        }, {
          key: "getFooter",
          value: function getFooter() {
            return this.http.post(this.apiurl + '/api/get-footer', JSON.stringify({}));
          } // http://creativeonlinezone.com/project/homefix/api/get-page
          // http://creativeonlinezone.com/project/homefix/api/get-page?slug=blog

        }, {
          key: "getPage",
          value: function getPage(slug) {
            var formData = new FormData();
            formData.append('slug', slug);
            return this.http.post(this.apiurl + '/api/get-page', formData);
          } // http://creativeonlinezone.com/project/homefix/api/get-register

        }, {
          key: "getRegister",
          value: function getRegister() {
            return this.http.post(this.apiurl + '/api/get-register', JSON.stringify({}));
          } // http://creativeonlinezone.com/project/homefix/api/register
          // fname = First name 
          // lname = Last name  - Optional
          // email = unique Email 
          // password = password 
          // password_confirmation = password confirmation 
          // phone_number = phone number - Optional
          // country_id = country ID - Optional
          // city = city name - Optional
          // zip_code = zip code - Optional

        }, {
          key: "register",
          value: function register(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this.http.post(this.apiurl + '/api/register', formData);
          } // http://creativeonlinezone.com/project/homefix/api/login
          // email = Email
          // password = Password

        }, {
          key: "login",
          value: function login(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this.http.post(this.apiurl + '/api/login', formData);
          } // http://creativeonlinezone.com/project/homefix/api/forgot-password
          // email = Email
          // password = Password

        }, {
          key: "forgotPassword",
          value: function forgotPassword(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this.http.post(this.apiurl + '/api/forgot-password', formData);
          } // http://creativeonlinezone.com/project/homefix/api/get-blog-details

        }, {
          key: "getBlogDetails",
          value: function getBlogDetails(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this.http.post(this.apiurl + '/api/get-blog-details', formData);
          } // http://creativeonlinezone.com/project/homefix/api/get-services

        }, {
          key: "getServices",
          value: function getServices(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this.http.post(this.apiurl + '/api/get-services', formData);
          } // http://creativeonlinezone.com/project/homefix/api/get-service-category-details

        }, {
          key: "getServiceCategoryDetails",
          value: function getServiceCategoryDetails(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this.http.post(this.apiurl + '/api/get-service-category-details', formData);
          } // http://creativeonlinezone.com/project/homefix/api/get-service-category

        }, {
          key: "getServiceCategory",
          value: function getServiceCategory(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this.http.post(this.apiurl + '/api/get-service-category', formData);
          } // http://creativeonlinezone.com/project/homefix/api/get-service-details

        }, {
          key: "getServiceDetails",
          value: function getServiceDetails(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this.http.post(this.apiurl + '/api/get-service-details', formData);
          } // http://creativeonlinezone.com/project/homefix/api/my-job-details

        }, {
          key: "myJobDetails",
          value: function myJobDetails(token, data) {
            var formData = new FormData();
            formData.append('data', data);
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/my-job-details", formData, {
              headers: httpHeaders
            });
          } // http://creativeonlinezone.com/project/homefix/api/get-job-details

        }, {
          key: "getJobDetails",
          value: function getJobDetails(token, data) {
            var formData = new FormData();
            formData.append('data', data);
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/get-job-details", formData, {
              headers: httpHeaders
            });
          } // http://creativeonlinezone.com/project/homefix/api/add-proposal

        }, {
          key: "addProposalPage",
          value: function addProposalPage(token, data) {
            var formData = new FormData();
            formData.append('data', data);
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/add-proposal", formData, {
              headers: httpHeaders
            });
          } // http://creativeonlinezone.com/project/homefix/api/update-proposal
          //   "id =Proposal ID - required -  if you want add then send me 0 - Zero - required integer
          // job_id=Job ID - required
          // service_id=Service ID - required
          // amount=Job Price - required
          // delivery_time_id= Delivery Time ID - required
          // body= Description - Optional
          // file = Image - Optional"

        }, {
          key: "addUpdateProposal",
          value: function addUpdateProposal(token, data) {
            var formData = new FormData();
            formData.append('data', data);
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/update-proposal", formData, {
              headers: httpHeaders
            });
          } // http://creativeonlinezone.com/project/homefix/api/create-job-request

        }, {
          key: "createJobRequest",
          value: function createJobRequest(token, data) {
            var formData = new FormData();
            formData.append('data', data);
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/create-job-request", formData, {
              headers: httpHeaders
            });
          }
        }]);

        return PagesService;
      }();

      PagesService.??fac = function PagesService_Factory(t) {
        return new (t || PagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      PagesService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: PagesService,
        factory: PagesService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PagesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/service/user.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/user.service.ts ***!
      \*****************************************/

    /*! exports provided: UserService */

    /***/
    function srcAppServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var UserService = /*#__PURE__*/function () {
        function UserService(_http) {
          _classCallCheck(this, UserService);

          this._http = _http;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('userClick') || '{}'));
          this.userClick = this.userSubject.asObservable();
        }

        _createClass(UserService, [{
          key: "userRegister",
          value: function userRegister(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "register", formData, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }));
          } // http://creativeonlinezone.com/project/homefix/api/login
          // email = Email
          // password = Password

        }, {
          key: "userLogin",
          value: function userLogin(data) {
            var formData = new FormData();
            formData.append('data', data);
            return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/api/login", formData, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "storeUserData",
          value: function storeUserData(data) {
            localStorage.setItem('userClick', data);
            this.userSubject.next(data);
          }
        }, {
          key: "logOut",
          value: function logOut() {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("roleId");
            localStorage.removeItem("userName");
            localStorage.removeItem('userClick');
            this.userSubject.next(null);
          } // http://creativeonlinezone.com/project/homefix/api/get-profile

        }, {
          key: "getProfile",
          value: function getProfile(token) {
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
            return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/api/get-profile", JSON.stringify({}), {
              headers: httpHeaders
            }); // return this._http.post(environment.API + "/api/get-profile", userId);
            // return this._http
            // .post(environment.API + "/api/get-profile", data, {})
            // .pipe(map((response: any) => {
            //   return response;
            // }));
          } // http://creativeonlinezone.com/project/homefix/api/update-password
          // old_password = password - required
          // password = New password - required
          // password_confirmation = password confirmation - required"

        }, {
          key: "changePassword",
          value: function changePassword(token, data) {
            var formData = new FormData();
            formData.append('data', data);
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
            return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/api/update-password", formData, {
              headers: httpHeaders
            });
          } // http://creativeonlinezone.com/project/homefix/api/update-avatar

        }, {
          key: "profileImageUpdate",
          value: function profileImageUpdate(token, data) {
            var formData = new FormData();
            formData.append('data', data);
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
            return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/api/update-avatar", formData, {
              headers: httpHeaders
            });
          } // http://creativeonlinezone.com/project/homefix/api/update-profile
          // avatar = Profile Image (Optional)
          // fname (required)
          // lname (Optional)
          // email  (required)
          // phone_number  (Optional)
          // country_id = country ID - Optional
          // city = city name - Optional
          // zip_code = zip code - Optional
          // description = Description - Optional
          // facebook_url = Facebook URL - Optional
          // instagram_url =instagram URL - Optional
          // twitter_url = twitter URL - Optional
          // linkedin_url = linkedin URL - Optional
          // skill_id[] = Array of Skill ID

        }, {
          key: "updateProfile",
          value: function updateProfile(token, data) {
            var formData = new FormData();
            formData.append('data', data);
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
            return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/api/update-profile", formData, {
              headers: httpHeaders
            });
          }
        }]);

        return UserService;
      }();

      UserService.??fac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: UserService,
        factory: UserService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        API: 'http://creativeonlinezone.com/project/homefix' // API: 'https://admin.homefixpros.com'

      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /var/www/html/homefix-full/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map