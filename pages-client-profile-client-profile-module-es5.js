(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-client-profile-client-profile-module"], {
    /***/
    "./src/app/pages/client-profile/client-profile-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/client-profile/client-profile-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ClientProfileRoutingModule */

    /***/
    function srcAppPagesClientProfileClientProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientProfileRoutingModule", function () {
        return ClientProfileRoutingModule;
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


      var _client_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./client-profile.component */
      "./src/app/pages/client-profile/client-profile.component.ts");

      var routes = [{
        path: '',
        component: _client_profile_component__WEBPACK_IMPORTED_MODULE_2__["ClientProfileComponent"]
      }];

      var ClientProfileRoutingModule = /*#__PURE__*/_createClass(function ClientProfileRoutingModule() {
        _classCallCheck(this, ClientProfileRoutingModule);
      });

      ClientProfileRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ClientProfileRoutingModule
      });
      ClientProfileRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ClientProfileRoutingModule_Factory(t) {
          return new (t || ClientProfileRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ClientProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientProfileRoutingModule, [{
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
    "./src/app/pages/client-profile/client-profile.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/client-profile/client-profile.component.ts ***!
      \******************************************************************/

    /*! exports provided: ClientProfileComponent */

    /***/
    function srcAppPagesClientProfileClientProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientProfileComponent", function () {
        return ClientProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      var ClientProfileComponent = /*#__PURE__*/function () {
        function ClientProfileComponent() {
          _classCallCheck(this, ClientProfileComponent);
        }

        _createClass(ClientProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ClientProfileComponent;
      }();

      ClientProfileComponent.??fac = function ClientProfileComponent_Factory(t) {
        return new (t || ClientProfileComponent)();
      };

      ClientProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ClientProfileComponent,
        selectors: [["app-client-profile"]],
        decls: 315,
        vars: 0,
        consts: [[1, "profile-holder", "pt-60", "pb-60"], [1, "container"], [1, "row", "mt--30"], [1, "col-lg-5", "mt-30"], [1, "profile-box"], [1, "badge"], [1, "aurthorBox"], [1, "thumb"], ["src", "assets/images/profile.png", "alt", ""], [1, "rev"], [1, "icofont-star"], ["href", "#", 1, "available", "mt-1"], [1, "icofont-wallet", "pe-1"], [1, "button-group"], ["href", "#0", 1, "button1"], ["href", "#0", 1, "button2"], [1, "address"], [1, "icofont-location-pin", "pe-1"], [1, "icofont-bag-alt", "pe-1"], [1, "infobox"], [1, "tag"], ["href", "#0"], [1, "col-lg-7", "mt-30"], [1, "profile-tab-box"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-contact-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-contact", "type", "button", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link"], [1, "icofont-rounded-double-right", "ms-2"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-xl-6"], [1, "proj_single_items", "mt-30"], [1, "proj_single_inner"], [1, "proj_single_thumb"], ["src", "assets/images/home/proj_1.png", "alt", ""], [1, "proj_single_content"], [1, "proj_single_cont_inner"], [1, "proj_client_thumb"], ["src", "assets/images/home/proj_client_img.png", "alt", ""], ["href", "#0", 1, "proj_client_name"], [1, "client_name"], [1, "proj_ratting"], [1, "proj_raing_per"], [1, "proj_ver_star"], [1, "icofont-ui-rating"], [1, "proj_reviews"], [1, "proj_single_item_title"], [1, "proj_single_item_tilte"], [1, "group-btn"], ["href", "contactprice"], [1, "icofont-chat", "pe-2"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "review-box"], [1, "top-box"], [1, "one"], ["href", "#"], [1, "info"], [1, "left"], [1, "pe-2"], [1, "star"], [1, "right"], ["selected", ""], [1, "review-list", "pt-2"], [1, "two", "bg"], [1, "two"], [1, "comment-item"], [1, "comment"], ["src", "assets/images/innerpage/review-1.png", "alt", ""], [1, "content"], [1, "ps-1"], [1, "loc"], [1, "icofont-location-pin", "p1-2"], [1, "pt-1"], [1, "right", "d-xl-block", "d-none"], ["src", "assets/images/innerpage/thumb-1.png", "alt", ""], [1, "replay", "pt-3"], ["src", "assets/images/innerpage/review-3.png", "alt", ""], [1, "icofont-bag-alt", "p1-2"], ["src", "assets/images/innerpage/review-2.png", "alt", ""], [1, "right", "d-xl-flex", "align-items-center", "d-none"], [1, "thumb", "m-2"], [1, "comment-item", "pb-0", "border-bottom-0"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"], [1, "col-6", "mt-30"], ["href", "#0", 1, "bigthumb"], ["src", "assets/images/innerpage/photo-1.png", "alt", ""], ["src", "assets/images/innerpage/photo-2.png", "alt", ""], ["src", "assets/images/innerpage/photo-3.png", "alt", ""], ["src", "assets/images/innerpage/photo-4.png", "alt", ""], [1, "col-12", "text-center"], ["href", "#0", 1, "button1", "viewall2", "mt-30"]],
        template: function ClientProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Top worker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Musak Khan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " 4.5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " (2 reviews)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Available now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Availability ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Message ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " From: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Los Angeles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Work: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Plumber");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " About Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Plumbers install and repair pipes that supply water and gas to, as well as carry waste away from, homes and businesses. They also install plumbing fixtures such as bathtubs, sinks, and toilets, and appliances, including dishwashers and washing machines. Experienced plumbers train apprentices and supervise helpers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Leak Repair ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Sewer Repair ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Toilet Repair ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Sewer Repair ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Toilet Repair ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Available for");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Previous Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h4", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Bijoy Roy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "top worker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "4.1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "( 11 reviews)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "h3", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "You will get solution for plumbing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "View Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " Contact for price ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h4", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Bijoy Roy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "top worker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "4.1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "span", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "( 11 reviews)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "h3", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "You will get solution for plumbing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "View Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, " Contact for price ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "p", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, " Customers rated this pro highly for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "work quality");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "professionalism");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, ", and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "responsiveness");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "2 Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Sort By");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "option", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, " Positive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Negative");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "3 Star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "2 Star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "ul", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "span", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " 100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, " 0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, " 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](203, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " 0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](211, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, " 0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, " 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](218, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](219, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, " 0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](226, "img", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Delaw12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](232, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](234, "i", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, " New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, " It was an excellent experience to work with this worker. Thank you so much for the final work and patience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](240, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](245, "img", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "Musak Khan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](251, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](253, "i", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, " Plumber ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "p", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, " Thank you so much ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](261, "img", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "Linuxdeo1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](267, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](269, "i", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, " New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "p", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, " It was an excellent experience to work with this worker. Thank you so much for the final work and patience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](282, "img", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "shadin21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "4.2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](288, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](290, "i", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, " New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "p", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, " It was an excellent experience to work with this worker. Thank you so much for the final work and patience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](296, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](301, "img", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](307, "img", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](310, "img", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "a", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "View all");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](314, "app-footer");
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1wcm9maWxlL2NsaWVudC1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-profile',
            templateUrl: './client-profile.component.html',
            styleUrls: ['./client-profile.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/client-profile/client-profile.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/client-profile/client-profile.module.ts ***!
      \***************************************************************/

    /*! exports provided: ClientProfileModule */

    /***/
    function srcAppPagesClientProfileClientProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientProfileModule", function () {
        return ClientProfileModule;
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


      var _client_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./client-profile-routing.module */
      "./src/app/pages/client-profile/client-profile-routing.module.ts");
      /* harmony import */


      var _client_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./client-profile.component */
      "./src/app/pages/client-profile/client-profile.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");

      var ClientProfileModule = /*#__PURE__*/_createClass(function ClientProfileModule() {
        _classCallCheck(this, ClientProfileModule);
      });

      ClientProfileModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ClientProfileModule
      });
      ClientProfileModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ClientProfileModule_Factory(t) {
          return new (t || ClientProfileModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _client_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientProfileRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ClientProfileModule, {
          declarations: [_client_profile_component__WEBPACK_IMPORTED_MODULE_3__["ClientProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _client_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientProfileRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientProfileModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_client_profile_component__WEBPACK_IMPORTED_MODULE_3__["ClientProfileComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _client_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientProfileRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-client-profile-client-profile-module-es5.js.map