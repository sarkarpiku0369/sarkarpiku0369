(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-estimator-estimator-module"], {
    /***/
    "./src/app/pages/estimator/estimator-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/estimator/estimator-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EstimatorRoutingModule */

    /***/
    function srcAppPagesEstimatorEstimatorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstimatorRoutingModule", function () {
        return EstimatorRoutingModule;
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


      var _estimator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./estimator.component */
      "./src/app/pages/estimator/estimator.component.ts");

      var routes = [{
        path: '',
        component: _estimator_component__WEBPACK_IMPORTED_MODULE_2__["EstimatorComponent"]
      }];

      var EstimatorRoutingModule = /*#__PURE__*/_createClass(function EstimatorRoutingModule() {
        _classCallCheck(this, EstimatorRoutingModule);
      });

      EstimatorRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: EstimatorRoutingModule
      });
      EstimatorRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function EstimatorRoutingModule_Factory(t) {
          return new (t || EstimatorRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](EstimatorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EstimatorRoutingModule, [{
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
    "./src/app/pages/estimator/estimator.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/estimator/estimator.component.ts ***!
      \********************************************************/

    /*! exports provided: EstimatorComponent */

    /***/
    function srcAppPagesEstimatorEstimatorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstimatorComponent", function () {
        return EstimatorComponent;
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

      var EstimatorComponent = /*#__PURE__*/function () {
        function EstimatorComponent() {
          _classCallCheck(this, EstimatorComponent);
        }

        _createClass(EstimatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EstimatorComponent;
      }();

      EstimatorComponent.??fac = function EstimatorComponent_Factory(t) {
        return new (t || EstimatorComponent)();
      };

      EstimatorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EstimatorComponent,
        selectors: [["app-estimator"]],
        decls: 176,
        vars: 0,
        consts: [[1, "account-page", "pt-120", "pb-120"], [1, "container"], [1, "fromarea"], [1, "row"], [1, "col-lg-6"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "First Name", 1, "form-control"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Last Name", 1, "form-control"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Email", 1, "form-control", "fild"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Phon Number ", 1, "form-control", "fild1"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "4000", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "2000", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "1000", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "4500", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "750", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "1,800", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "400", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "350", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "1500", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "0", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "2,000", 1, "form-control", "fild2"], [1, "border-bottom", "mt-3", "mb-3"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", ".50", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "43125.0000", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", ".10", 1, "form-control", "fild2"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "47437.500000", 1, "form-control", "fild2"], ["type", "submit", 1, "btn", "btn-primary"], [1, "bi", "bi-download"]],
        template: function EstimatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Kitchen Remodel Estimator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Client First Name*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Client Last Name*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Client Email*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Client Number*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Materials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Rough Building Materials*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Cabinets (Wholesale Price)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "New Electric Cooktop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Purchase 2 cm quartz countertop slabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Purchase Standard Kitchen Appliances");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Labor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Demo Old Kitchen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Misc Carpentry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Replace Kitchen Drywall (as necessary)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Standard Electrical Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Install new electric cooktop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Cabinet Assembly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Cabinet Delivery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Installation of All Kitchen Cabinets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Installation of all Appliances");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Upgrade Existing Electrical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Upgrade Existing Plumbing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Install New Tile Floor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Install Tile Backsplash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Fabricate and Install New Countertop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Paint Kitchen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Cleanup and Disposal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Project Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Additional Misc Costs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Contractor Markup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Labor and Materials Plus Markup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Sales Tax");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Estimated Total For Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, " Download PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "app-footer");
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VzdGltYXRvci9lc3RpbWF0b3IuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EstimatorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-estimator',
            templateUrl: './estimator.component.html',
            styleUrls: ['./estimator.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/estimator/estimator.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/estimator/estimator.module.ts ***!
      \*****************************************************/

    /*! exports provided: EstimatorModule */

    /***/
    function srcAppPagesEstimatorEstimatorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstimatorModule", function () {
        return EstimatorModule;
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


      var _estimator_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./estimator-routing.module */
      "./src/app/pages/estimator/estimator-routing.module.ts");
      /* harmony import */


      var _estimator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./estimator.component */
      "./src/app/pages/estimator/estimator.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");

      var EstimatorModule = /*#__PURE__*/_createClass(function EstimatorModule() {
        _classCallCheck(this, EstimatorModule);
      });

      EstimatorModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: EstimatorModule
      });
      EstimatorModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function EstimatorModule_Factory(t) {
          return new (t || EstimatorModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _estimator_routing_module__WEBPACK_IMPORTED_MODULE_2__["EstimatorRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](EstimatorModule, {
          declarations: [_estimator_component__WEBPACK_IMPORTED_MODULE_3__["EstimatorComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _estimator_routing_module__WEBPACK_IMPORTED_MODULE_2__["EstimatorRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EstimatorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_estimator_component__WEBPACK_IMPORTED_MODULE_3__["EstimatorComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _estimator_routing_module__WEBPACK_IMPORTED_MODULE_2__["EstimatorRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-estimator-estimator-module-es5.js.map