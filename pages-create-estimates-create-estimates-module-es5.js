(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-estimates-create-estimates-module"], {
    /***/
    "./src/app/pages/create-estimates/create-estimates-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/create-estimates/create-estimates-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: CreateEstimatesRoutingModule */

    /***/
    function srcAppPagesCreateEstimatesCreateEstimatesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateEstimatesRoutingModule", function () {
        return CreateEstimatesRoutingModule;
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


      var _create_estimates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-estimates.component */
      "./src/app/pages/create-estimates/create-estimates.component.ts");

      var routes = [{
        path: '',
        component: _create_estimates_component__WEBPACK_IMPORTED_MODULE_2__["CreateEstimatesComponent"]
      }];

      var CreateEstimatesRoutingModule = /*#__PURE__*/_createClass(function CreateEstimatesRoutingModule() {
        _classCallCheck(this, CreateEstimatesRoutingModule);
      });

      CreateEstimatesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CreateEstimatesRoutingModule
      });
      CreateEstimatesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function CreateEstimatesRoutingModule_Factory(t) {
          return new (t || CreateEstimatesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CreateEstimatesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CreateEstimatesRoutingModule, [{
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
    "./src/app/pages/create-estimates/create-estimates.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/create-estimates/create-estimates.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CreateEstimatesComponent */

    /***/
    function srcAppPagesCreateEstimatesCreateEstimatesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateEstimatesComponent", function () {
        return CreateEstimatesComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      var _c0 = function _c0() {
        return ["/estimator"];
      };

      var CreateEstimatesComponent = /*#__PURE__*/function () {
        function CreateEstimatesComponent() {
          _classCallCheck(this, CreateEstimatesComponent);
        }

        _createClass(CreateEstimatesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CreateEstimatesComponent;
      }();

      CreateEstimatesComponent.??fac = function CreateEstimatesComponent_Factory(t) {
        return new (t || CreateEstimatesComponent)();
      };

      CreateEstimatesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CreateEstimatesComponent,
        selectors: [["app-create-estimates"]],
        decls: 58,
        vars: 2,
        consts: [[1, "account-page", "pt-60", "pb-60"], [1, "container"], [1, "estimates"], [3, "routerLink"]],
        template: function CreateEstimatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Kitchen Remodel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Cabinetmaking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Drywall");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Framing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Finish Carpentry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Flooring Installation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Electrical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Elevator mechanic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Fence Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Glazier (glass specialist)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "HVAC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Insulation Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Ironworker ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Landscaping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Masonry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Painting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Concrete Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Pipefitting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Plaster Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Plumbing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Sheet Metal Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Custom Woodwork");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Steelwork");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Tile Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Waterproofing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Welding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1lc3RpbWF0ZXMvY3JlYXRlLWVzdGltYXRlcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CreateEstimatesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-estimates',
            templateUrl: './create-estimates.component.html',
            styleUrls: ['./create-estimates.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/create-estimates/create-estimates.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/create-estimates/create-estimates.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CreateEstimatesModule */

    /***/
    function srcAppPagesCreateEstimatesCreateEstimatesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateEstimatesModule", function () {
        return CreateEstimatesModule;
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


      var _create_estimates_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-estimates-routing.module */
      "./src/app/pages/create-estimates/create-estimates-routing.module.ts");
      /* harmony import */


      var _create_estimates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-estimates.component */
      "./src/app/pages/create-estimates/create-estimates.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");

      var CreateEstimatesModule = /*#__PURE__*/_createClass(function CreateEstimatesModule() {
        _classCallCheck(this, CreateEstimatesModule);
      });

      CreateEstimatesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CreateEstimatesModule
      });
      CreateEstimatesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function CreateEstimatesModule_Factory(t) {
          return new (t || CreateEstimatesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _create_estimates_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateEstimatesRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CreateEstimatesModule, {
          declarations: [_create_estimates_component__WEBPACK_IMPORTED_MODULE_3__["CreateEstimatesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _create_estimates_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateEstimatesRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CreateEstimatesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_create_estimates_component__WEBPACK_IMPORTED_MODULE_3__["CreateEstimatesComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _create_estimates_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateEstimatesRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-create-estimates-create-estimates-module-es5.js.map