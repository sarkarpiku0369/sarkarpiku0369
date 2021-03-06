(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-post-details-my-post-details-module"], {
    /***/
    "./src/app/pages/my-post-details/my-post-details-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/my-post-details/my-post-details-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MyPostDetailsRoutingModule */

    /***/
    function srcAppPagesMyPostDetailsMyPostDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPostDetailsRoutingModule", function () {
        return MyPostDetailsRoutingModule;
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


      var _my_post_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-post-details.component */
      "./src/app/pages/my-post-details/my-post-details.component.ts");

      var routes = [{
        path: '',
        component: _my_post_details_component__WEBPACK_IMPORTED_MODULE_2__["MyPostDetailsComponent"]
      }];

      var MyPostDetailsRoutingModule = /*#__PURE__*/_createClass(function MyPostDetailsRoutingModule() {
        _classCallCheck(this, MyPostDetailsRoutingModule);
      });

      MyPostDetailsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: MyPostDetailsRoutingModule
      });
      MyPostDetailsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function MyPostDetailsRoutingModule_Factory(t) {
          return new (t || MyPostDetailsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MyPostDetailsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MyPostDetailsRoutingModule, [{
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
    "./src/app/pages/my-post-details/my-post-details.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/my-post-details/my-post-details.component.ts ***!
      \********************************************************************/

    /*! exports provided: MyPostDetailsComponent */

    /***/
    function srcAppPagesMyPostDetailsMyPostDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPostDetailsComponent", function () {
        return MyPostDetailsComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/api.service */
      "./src/app/service/api.service.ts");
      /* harmony import */


      var src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/pages.service */
      "./src/app/service/pages.service.ts");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      function MyPostDetailsComponent_div_4_div_19_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var jobproposal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Amount: $", jobproposal_r2.amount, "");
        }
      }

      function MyPostDetailsComponent_div_4_div_19_p_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var jobproposal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", jobproposal_r2.delivery_time.name, " delivery ");
        }
      }

      function MyPostDetailsComponent_div_4_div_19_p_16_span_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var pp_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](pp_r9);
        }
      }

      function MyPostDetailsComponent_div_4_div_19_p_16_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MyPostDetailsComponent_div_4_div_19_p_16_span_2_span_1_Template, 2, 1, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r10 = ctx.index;

          var jobproposal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", jobproposal_r2.status == i_r10);
        }
      }

      function MyPostDetailsComponent_div_4_div_19_p_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MyPostDetailsComponent_div_4_div_19_p_16_span_2_Template, 2, 1, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.responseData.proposal_status_array);
        }
      }

      function MyPostDetailsComponent_div_4_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MyPostDetailsComponent_div_4_div_19_p_6_Template, 2, 1, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MyPostDetailsComponent_div_4_div_19_p_7_Template, 2, 1, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MyPostDetailsComponent_div_4_div_19_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var jobproposal_r2 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r14.acceptMessage(jobproposal_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Message ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, MyPostDetailsComponent_div_4_div_19_p_16_Template, 3, 1, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var jobproposal_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", jobproposal_r2.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", jobproposal_r2.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", jobproposal_r2.delivery_time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", jobproposal_r2.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.responseData && ctx_r1.responseData.proposal_status_array);
        }
      }

      function MyPostDetailsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "3 hours ago. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Project photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Proposals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, MyPostDetailsComponent_div_4_div_19_Template, 18, 5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.jobDetails.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.jobDetails.category.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r0.jobDetails.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r0.image_path + ctx_r0.jobDetails.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.jobDetails.jobproposals);
        }
      }

      var MyPostDetailsComponent = /*#__PURE__*/function () {
        function MyPostDetailsComponent(_location, route, router, apiService, pageService) {
          _classCallCheck(this, MyPostDetailsComponent);

          this._location = _location;
          this.route = route;
          this.router = router;
          this.apiService = apiService;
          this.pageService = pageService;
        }

        _createClass(MyPostDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            console.log(this.id);

            if (this.id) {
              this.getjobDetails(this.id);
            }

            this.token = localStorage.getItem("token");
          }
        }, {
          key: "getjobDetails",
          value: function getjobDetails(id) {
            var _this = this;

            var token = localStorage.getItem("token");
            var formData = new FormData();
            formData.set('id', id);
            this.pageService.myJobDetails(token, formData).subscribe(function (res) {
              console.log(res);

              if (res.status && res.response_data) {
                _this.responseData = res;
                _this.jobDetails = res.response_data;
                _this.job_status_array = res.job_status_array ? res.job_status_array : [];
                _this.proposal_status_array = res.proposal_status_array ? res.proposal_status_array : [];
                _this.image_path = res.image_path ? res.image_path : '';
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "acceptMessage",
          value: function acceptMessage(jobproposal) {
            var _this2 = this;

            console.log(jobproposal);
            var formData = new FormData();
            formData.set('code', jobproposal.code);
            this.apiService.messages(this.token, formData).subscribe(function (res) {
              console.log(res);

              if (res) {
                _this2.router.navigate(['/inbox']);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return MyPostDetailsComponent;
      }();

      MyPostDetailsComponent.??fac = function MyPostDetailsComponent_Factory(t) {
        return new (t || MyPostDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_4__["PagesService"]));
      };

      MyPostDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MyPostDetailsComponent,
        selectors: [["app-my-post-details"]],
        decls: 6,
        vars: 1,
        consts: [[1, "oppurtunity", "pt-60", "pb-60"], [1, "container"], [1, "row", "mt--30"], ["class", "col-lg-12 mt-30", 4, "ngIf"], [1, "col-lg-12", "mt-30"], [1, "left-box"], [1, "fs-2"], ["href", "javascript:void(0);", 1, "text-decoration-none", 2, "color", "#00A3FF", "font-size", "14px"], [3, "innerHTML"], [1, "mt-3"], [1, "fs-4"], ["id", "image-gallery"], [1, "row", "g-3", "mt-1"], [1, "col-lg-3", "col-md-4", "col-6"], ["alt", "Image", 1, "img-fluid", "rounded-1", 3, "src"], [1, "mt-5"], ["class", "card rounded-0 my-3", 4, "ngFor", "ngForOf"], [1, "card", "rounded-0", "my-3"], [1, "card-header", "bg-white"], [1, "row"], [1, "col-md-8", "pt-2"], ["class", "text2", 4, "ngIf"], [4, "ngIf"], [1, "col-md-4", "pt-2"], [1, "text-md-end"], ["type", "button", 1, "btn", "btn-sm", "text-white", 2, "background-color", "#00A3FF", 3, "click"], [1, "card-body"], ["id", "section"], [1, "article"], ["style", "color: #00a3ff;", 4, "ngIf"], [1, "infobox"], [1, "text2"], [2, "color", "#00a3ff"], [4, "ngFor", "ngForOf"]],
        template: function MyPostDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MyPostDetailsComponent_div_4_Template, 20, 5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.jobDetails);
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXBvc3QtZGV0YWlscy9teS1wb3N0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MyPostDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-my-post-details',
            templateUrl: './my-post-details.component.html',
            styleUrls: ['./my-post-details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_4__["PagesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/my-post-details/my-post-details.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/my-post-details/my-post-details.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MyPostDetailsModule */

    /***/
    function srcAppPagesMyPostDetailsMyPostDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPostDetailsModule", function () {
        return MyPostDetailsModule;
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


      var _my_post_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-post-details-routing.module */
      "./src/app/pages/my-post-details/my-post-details-routing.module.ts");
      /* harmony import */


      var _my_post_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-post-details.component */
      "./src/app/pages/my-post-details/my-post-details.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");

      var MyPostDetailsModule = /*#__PURE__*/_createClass(function MyPostDetailsModule() {
        _classCallCheck(this, MyPostDetailsModule);
      });

      MyPostDetailsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: MyPostDetailsModule
      });
      MyPostDetailsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function MyPostDetailsModule_Factory(t) {
          return new (t || MyPostDetailsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _my_post_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyPostDetailsRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MyPostDetailsModule, {
          declarations: [_my_post_details_component__WEBPACK_IMPORTED_MODULE_3__["MyPostDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _my_post_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyPostDetailsRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MyPostDetailsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_my_post_details_component__WEBPACK_IMPORTED_MODULE_3__["MyPostDetailsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _my_post_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyPostDetailsRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-my-post-details-my-post-details-module-es5.js.map