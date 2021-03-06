(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-project-details-project-details-module"], {
    /***/
    "./src/app/pages/project-details/project-details-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/project-details/project-details-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ProjectDetailsRoutingModule */

    /***/
    function srcAppPagesProjectDetailsProjectDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailsRoutingModule", function () {
        return ProjectDetailsRoutingModule;
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


      var _project_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project-details.component */
      "./src/app/pages/project-details/project-details.component.ts");

      var routes = [{
        path: '',
        component: _project_details_component__WEBPACK_IMPORTED_MODULE_2__["ProjectDetailsComponent"]
      }];

      var ProjectDetailsRoutingModule = /*#__PURE__*/_createClass(function ProjectDetailsRoutingModule() {
        _classCallCheck(this, ProjectDetailsRoutingModule);
      });

      ProjectDetailsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ProjectDetailsRoutingModule
      });
      ProjectDetailsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ProjectDetailsRoutingModule_Factory(t) {
          return new (t || ProjectDetailsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProjectDetailsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProjectDetailsRoutingModule, [{
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
    "./src/app/pages/project-details/project-details.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/project-details/project-details.component.ts ***!
      \********************************************************************/

    /*! exports provided: ProjectDetailsComponent */

    /***/
    function srcAppPagesProjectDetailsProjectDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function () {
        return ProjectDetailsComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/pages.service */
      "./src/app/service/pages.service.ts");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      function ProjectDetailsComponent_div_51_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var t_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](t_r6.name);
        }
      }

      function ProjectDetailsComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, ProjectDetailsComponent_div_51_span_1_Template, 2, 1, "span", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.serviceDetails.tag);
        }
      }

      function ProjectDetailsComponent_div_141_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "button", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var serviceFaq_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("id", "panelsStayOpen-headingOne_" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("data-bs-target", "#panelsStayOpen-collapseOne_" + i_r9)("aria-controls", "panelsStayOpen-collapseOne_" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", serviceFaq_r8.question, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("id", "panelsStayOpen-collapseOne_" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("aria-labelledby", "panelsStayOpen-headingOne_" + i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", serviceFaq_r8.answer, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);
        }
      }

      function ProjectDetailsComponent_div_141_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "FAQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, ProjectDetailsComponent_div_141_div_6_Template, 7, 7, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r1.serviceDetails.faq);
        }
      }

      function ProjectDetailsComponent_div_311_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Zip code is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ProjectDetailsComponent_div_311_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, ProjectDetailsComponent_div_311_div_1_Template, 2, 0, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r2.f.zip_code.errors.required);
        }
      }

      function ProjectDetailsComponent_div_316_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Amount is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ProjectDetailsComponent_div_316_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, ProjectDetailsComponent_div_316_div_1_Template, 2, 0, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.f.amount.errors.required);
        }
      }

      function ProjectDetailsComponent_div_321_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Scheduling is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ProjectDetailsComponent_div_321_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, ProjectDetailsComponent_div_321_div_1_Template, 2, 0, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r4.f.contract_estimate_end.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ProjectDetailsComponent = /*#__PURE__*/function () {
        function ProjectDetailsComponent(_location, route, router, toastr, formBuilder, pageService) {
          _classCallCheck(this, ProjectDetailsComponent);

          this._location = _location;
          this.route = route;
          this.router = router;
          this.toastr = toastr;
          this.formBuilder = formBuilder;
          this.pageService = pageService;
          this.submitted = false;
        }

        _createClass(ProjectDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.slug = this.route.snapshot.paramMap.get('slug');
            console.log(this.slug);

            if (this.slug) {
              this.getServiceDetails(this.slug).then(function () {
                _this.sliderLoad();
              });
            }

            this.contactForm = this.formBuilder.group({
              zip_code: [''],
              // frequency: ['', [Validators.required]],
              // title: ['', [Validators.required]],
              delivery_time_id: [''],
              amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              contract_estimate_end: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            this.searchForm = this.formBuilder.group({});
            this.token = localStorage.getItem("token");
          }
        }, {
          key: "f",
          get: function get() {
            return this.contactForm.controls;
          }
        }, {
          key: "back",
          value: function back() {
            this._location.back();
          }
        }, {
          key: "sendContract",
          value: function sendContract() {
            var _this2 = this;

            this.submitted = true;
            console.log("registrationSubmit", this.contactForm);

            if (!this.token || !this.serviceDetails) {
              this.router.navigate(['/login']);
            }

            if (this.contactForm.invalid) {
              return;
            } else {
              console.log("valid...");
              var formData = new FormData();
              formData.set('service_id', this.serviceDetails.id);
              formData.set('title', this.serviceDetails.title);
              formData.set('zip_code', this.contactForm.value.zip_code);
              formData.set('amount', this.contactForm.value.amount);
              formData.set('contract_estimate_end', this.contactForm.value.contract_estimate_end); // formData.set('delivery_time_id', '2');

              this.pageService.createJobRequest(this.token, formData).subscribe(function (res) {
                console.log(res);

                if (res.status) {
                  _this2.toastr.success(res.message ? res.message : '');

                  _this2.contactForm.reset();

                  _this2.submitted = false;

                  _this2.router.navigate(['/inbox']);
                } else {
                  _this2.toastr.success(res.message ? res.message : 'Server error! please try again later.');
                }
              }, function (err) {
                console.log(err);
              });
            }
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

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "getServiceDetails",
          value: function getServiceDetails(slug) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var formData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      formData = new FormData();
                      formData.set('slug', this.slug);
                      this.pageService.getServiceDetails(formData).subscribe(function (res) {
                        console.log(res);

                        if (res.status && res.response_data) {
                          _this3.serviceDetails = res.response_data;
                          _this3.image_path = res.image_path ? res.image_path : '';
                        }
                      }, function (err) {
                        console.log(err);
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "tDate",
          value: function tDate() {
            var UserDate = this.contactForm.value.contract_estimate_end;
            var ToDate = new Date();

            if (new Date(UserDate).getTime() <= ToDate.getTime()) {
              this.toastr.error("The Date must be Bigger or Equal to today date");
              this.contactForm.patchValue({
                "contract_estimate_end": ''
              });
              return false;
            }

            return true;
          }
        }]);

        return ProjectDetailsComponent;
      }();

      ProjectDetailsComponent.??fac = function ProjectDetailsComponent_Factory(t) {
        return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_6__["PagesService"]));
      };

      ProjectDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: ProjectDetailsComponent,
        selectors: [["app-project-details"]],
        decls: 380,
        vars: 21,
        consts: [[1, "progectBox", "pt-60"], [1, "container"], [1, "row", "mt--30"], [1, "col-xxl-7", "col-lg-6", "mt-30"], [1, "slider_sea_form", "mt-3", "destopfrom", 3, "formGroup"], [1, "slide_from_fileds"], [1, "slide_form_field_inner"], ["type", "search", "placeholder", "What's on your to-do list?"], [1, "slide_form_field_inner", "zip_c"], [1, "bi", "bi-geo-alt", "icofont-bubble-down"], ["type", "text", "placeholder", "Zip Code"], ["type", "submit", "value", "Search", 1, "search"], [1, "topBox"], ["href", "javascript:void(0);", 1, "pros", 3, "click"], [1, "icofont-rounded-left"], [1, "infolink", "border-bottom"], [1, "row"], [1, "col-xl-6"], ["href", "javascript:void(0);"], [1, "col-xl-6", "text-lg-end"], ["href", "javascript:void(0);", 1, "seeall"], [1, "authordBox", "flex-wrap"], [1, "thubm", "pt2"], ["onerror", "this.src='./assets/images/Group2094.png';", 1, "img-fluid", 3, "src"], [1, "right", "pt2"], [1, "me-4"], [1, "profileName"], [1, "profileReview"], [1, "icofont-star", "p-1"], ["class", "bage", 4, "ngIf"], [1, "project-thumb"], [1, "imgbox"], ["onerror", "this.src='assets/images/no-image.png';", "alt", "", 1, "img-fluid", 3, "src"], [1, "sliderbox"], [1, "row", "mt-3"], [1, "col-md-8"], [2, "color", "#000", "font-size", "18px"], [1, "col-md-4", "text-md-end"], ["href", "javascript:void(0);", 1, "see"], [1, "col-md-12"], ["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide", "mt-3"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "card", "border-0"], [1, "card-body", 2, "border", "1px solid whitesmoke", "border-radius", "20px"], [1, "col-md-2"], [1, "text-lg-end"], ["src", "./assets/images/profileCard.png", "alt", ""], [2, "font-size", "20px", "color", "#000"], [2, "font-size", "12px", "color", "#000"], [1, "icofont-location-pin", "pe-1"], [1, "icofont-star", "star"], [1, "carousel-item"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon", "text-danger"], [1, "visually-hidden"], ["data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "icofont-rounded-right"], [1, "row", "border-bottom"], [1, "aboutWorkers"], [3, "innerHTML"], ["class", "row border-bottom pb-lg-5 mt-5", 4, "ngIf"], ["id", "reviews", 1, "row", "pb-lg-4", "mt-5", "border-bottom"], [1, "review-box"], [1, "top-box"], [1, "one"], [1, "info"], [1, "left"], [1, "pe-2"], [1, "star"], [1, "icofont-star"], [1, "right"], ["selected", ""], [1, "review-list", "pt-2"], [1, "two", "bg"], [1, "two"], [1, "comment-item"], [1, "comment"], [1, "thumb"], ["src", "assets/images/innerpage/review-1.png", "alt", ""], [1, "content"], [1, "ps-1"], [1, "loc"], [1, "icofont-location-pin", "p1-2"], [1, "pt-1"], [1, "right", "d-xl-block", "d-none"], ["src", "assets/images/innerpage/thumb-1.png", "alt", ""], [1, "replay", "pt-3"], ["src", "assets/images/innerpage/review-3.png", "alt", ""], [1, "icofont-bag-alt", "p1-2"], ["src", "assets/images/innerpage/review-2.png", "alt", ""], [1, "right", "d-xl-flex", "align-items-center", "d-none"], [1, "thumb", "m-2"], [1, "comment-item", "pb-0", "border-bottom-0"], [1, "col-xxl-5", "col-lg-6", "mt-30"], [1, "rounded", "px-2", "px-md-4", "mx-md-3", "my-3", "my-md-0", "my-lg-0", "my-xl-0", "my-xxl-0", "position-sticky", "rightammountbox", 2, "border", "1px solid #DCDCDC"], [3, "formGroup"], [1, "mt-3", "text-center", "text-md-start", "text-lg-start", "text-xl-start", "text-xxl-start", 2, "color", "black"], [1, "d-flex", "align-items-center", "pt-1"], ["src", "./assets/images/profileGroup.png", "alt", "", "srcset", ""], ["href", "javascript:void(0);", 1, "ms-1", 2, "color", "#00A3FF"], [1, "mb-3", "mt-3"], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "text", "placeholder", "Enter zip code", "formControlName", "zip_code", "id", "exampleInputZip_code", "name", "zip_code", "aria-describedby", "emailHelp", 1, "form-control", "form-select-sm", "rounded-0", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "mb-3"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["type", "number", "placeholder", "Enter Amount", "formControlName", "amount", "id", "exampleInputamount", "name", "amount", "aria-describedby", "emailHelp", 1, "form-control", "form-select-sm", "rounded-0", 3, "ngClass"], ["type", "date", "placeholder", "Select date", "formControlName", "contract_estimate_end", "id", "exampleInputamount", "aria-describedby", "emailHelp", 1, "form-control", "form-select-sm", "rounded-0", 3, "ngClass", "change"], [1, "text-md-center", "mb-3"], [1, "button-group"], [1, "button1", 3, "click"], ["href", "#0", 1, "button2"], [1, "mt-2", "text-center"], ["src", "./assets/images/prof.png"], [1, "text-dark", "fw-bolder", "ps-1"], ["id", "previous_work", 1, "homefix_service_area", "pt-60", "pb-60"], [1, "section_title", "mb-3", "text-start"], [1, "col-xl-6", "text-xl-end"], ["href", "javascript:void(0);", 1, "alink", "mb-3"], [1, "row", "g-0"], [1, "service-slider"], ["href", "#0", 1, "homefix_service_single"], [1, "homefix_ser_single_inner"], [1, "service_single_thumb"], ["src", "assets/images/home/ser_1.png", "alt", ""], [1, "service_single_title"], ["src", "assets/images/home/ser_2.png", "alt", ""], [1, "bage"], [4, "ngFor", "ngForOf"], [1, "row", "border-bottom", "pb-lg-5", "mt-5"], [1, "faqbox"], ["id", "accordionPanelsStayOpenExample", 1, "accordion", "accordion-flush"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "accordion-button", "collapsed"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", 2, "text-align", "justify"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function ProjectDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ProjectDetailsComponent_Template_a_click_14_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "See pros");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "About ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "FAQs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Reviews ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Previous Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, " See all his services");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "4.9");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "(2 reviews)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](51, ProjectDetailsComponent_div_51_Template, 2, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](56, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "What people loved about this solution");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "See all reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](74, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Linuxdeo1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](79, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, " New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "So good!!!!!! I'm very satisfied with this.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](86, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](93, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Linuxdeo1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](98, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, " New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "So good!!!!!! I'm very satisfied with this.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](112, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Linuxdeo1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](117, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, " New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "So good!!!!!! I'm very satisfied with this.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](124, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "span", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](127, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](132, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "About Workers:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](140, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](141, ProjectDetailsComponent_div_141_Template, 7, 1, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "p", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149, " Customers rated this pro highly for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "work quality");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](154, "professionalism");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, ", and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "responsiveness");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "h5", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "2 Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](163, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](164, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](165, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](166, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](167, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "Sort By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "option", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, " Positive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, "Negative");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "3 Star");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "2 Star");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "ul", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](185, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](187, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](188, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, " 100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, " 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](195, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](196, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, " 0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, " 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](203, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](204, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, " 0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](209, " 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](211, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](212, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, " 0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, " 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](219, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](220, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, " 0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](227, "img", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "Delaw12");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "span", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](232, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](233, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](235, "i", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, " New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, " It was an excellent experience to work with this worker. Thank you so much for the final work and patience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](241, "img", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](246, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, "Musak Khan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "span", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](251, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](252, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](254, "i", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](255, " Plumber ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, " Thank you so much ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](262, "img", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](265, "Linuxdeo1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "span", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](267, "5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](268, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](270, "i", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](271, " New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](273, " It was an excellent experience to work with this worker. Thank you so much for the final work and patience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](276, "img", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](278, "img", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](283, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](284, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](286, "shadin21");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "span", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](288, "4.2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](289, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](291, "i", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, " New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, " It was an excellent experience to work with this worker. Thank you so much for the final work and patience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](297, "img", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "form", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "p", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](302, "contact for price");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "p", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](304, "img", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "a", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](306, "See how much your project will cost");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](307, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "label", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](309, "Zip Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](310, "input", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](311, ProjectDetailsComponent_div_311_Template, 2, 1, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](313, "label", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](314, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](315, "input", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](316, ProjectDetailsComponent_div_316_Template, 2, 1, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "label", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](319, "Scheduling");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "input", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function ProjectDetailsComponent_Template_input_change_320_listener() {
              return ctx.tDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](321, ProjectDetailsComponent_div_321_Template, 2, 1, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "div", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ProjectDetailsComponent_Template_button_click_324_listener() {
              return ctx.sendContract();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](325, " Availability");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "a", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](327, " Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](329, "img", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](330, "Responds in about ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](331, "span", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](332, " 1 hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "section", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](334, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](337, "h3", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](338, " Previous Work ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](340, "a", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](341, " See all work ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "div", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](343, "div", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "a", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](345, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](347, "img", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](349, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](350, "Home Pattycommercial plumbing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "a", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](353, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](354, "img", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](355, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](357, "Residential Plumbing Services ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](358, "a", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](361, "img", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, "Repairing Underground Pipe Leaks");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "a", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](366, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](368, "img", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](370, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](371, "Home Pattycommercial plumbing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](372, "a", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](373, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](375, "img", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](376, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](378, "Repairing Underground Pipe Leaks ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](379, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.searchForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx.image_path && ctx.serviceDetails && ctx.serviceDetails.user && ctx.serviceDetails.user.avatar ? ctx.image_path + (ctx.serviceDetails == null ? null : ctx.serviceDetails.user.avatar) : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.serviceDetails && ctx.serviceDetails.user && ctx.serviceDetails.user.name ? ctx.serviceDetails.user.name : "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.serviceDetails && ctx.serviceDetails.tag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.serviceDetails == null ? null : ctx.serviceDetails.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx.image_path && (ctx.serviceDetails == null ? null : ctx.serviceDetails.gallery[0]) ? ctx.image_path + (ctx.serviceDetails == null ? null : ctx.serviceDetails.gallery[0].file) : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", ctx.serviceDetails == null ? null : ctx.serviceDetails.body, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.serviceDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](159);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.contactForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](15, _c0, ctx.submitted && ctx.f.zip_code.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.submitted && ctx.f.zip_code.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](17, _c0, ctx.submitted && ctx.f.amount.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.submitted && ctx.f.amount.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](19, _c0, ctx.submitted && ctx.f.contract_estimate_end.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.submitted && ctx.f.contract_estimate_end.errors);
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".thubm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodWJtIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ProjectDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-project-details',
            templateUrl: './project-details.component.html',
            styleUrls: ['./project-details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_service_pages_service__WEBPACK_IMPORTED_MODULE_6__["PagesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/project-details/project-details.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/project-details/project-details.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProjectDetailsModule */

    /***/
    function srcAppPagesProjectDetailsProjectDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailsModule", function () {
        return ProjectDetailsModule;
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


      var _project_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project-details-routing.module */
      "./src/app/pages/project-details/project-details-routing.module.ts");
      /* harmony import */


      var _project_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./project-details.component */
      "./src/app/pages/project-details/project-details.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var ProjectDetailsModule = /*#__PURE__*/_createClass(function ProjectDetailsModule() {
        _classCallCheck(this, ProjectDetailsModule);
      });

      ProjectDetailsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ProjectDetailsModule
      });
      ProjectDetailsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ProjectDetailsModule_Factory(t) {
          return new (t || ProjectDetailsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _project_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectDetailsRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProjectDetailsModule, {
          declarations: [_project_details_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _project_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectDetailsRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProjectDetailsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_project_details_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _project_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectDetailsRoutingModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-project-details-project-details-module-es5.js.map