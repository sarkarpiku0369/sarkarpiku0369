(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-create-solution-user-create-solution-module"], {
    /***/
    "./src/app/pages/user-create-solution/user-create-solution-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/user-create-solution/user-create-solution-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: UserCreateSolutionRoutingModule */

    /***/
    function srcAppPagesUserCreateSolutionUserCreateSolutionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCreateSolutionRoutingModule", function () {
        return UserCreateSolutionRoutingModule;
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


      var _user_create_solution_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-create-solution.component */
      "./src/app/pages/user-create-solution/user-create-solution.component.ts");

      var routes = [{
        path: '',
        component: _user_create_solution_component__WEBPACK_IMPORTED_MODULE_2__["UserCreateSolutionComponent"]
      }];

      var UserCreateSolutionRoutingModule = /*#__PURE__*/_createClass(function UserCreateSolutionRoutingModule() {
        _classCallCheck(this, UserCreateSolutionRoutingModule);
      });

      UserCreateSolutionRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: UserCreateSolutionRoutingModule
      });
      UserCreateSolutionRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function UserCreateSolutionRoutingModule_Factory(t) {
          return new (t || UserCreateSolutionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserCreateSolutionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserCreateSolutionRoutingModule, [{
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
    "./src/app/pages/user-create-solution/user-create-solution.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/user-create-solution/user-create-solution.component.ts ***!
      \******************************************************************************/

    /*! exports provided: UserCreateSolutionComponent */

    /***/
    function srcAppPagesUserCreateSolutionUserCreateSolutionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCreateSolutionComponent", function () {
        return UserCreateSolutionComponent;
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


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/api.service */
      "./src/app/service/api.service.ts");
      /* harmony import */


      var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../includes/header/header.component */
      "./src/app/includes/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
      /* harmony import */


      var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @kolkov/angular-editor */
      "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../includes/footer/footer.component */
      "./src/app/includes/footer/footer.component.ts");

      function UserCreateSolutionComponent_div_36_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Title is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateSolutionComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserCreateSolutionComponent_div_36_div_1_Template, 2, 0, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.f.title.errors.required);
        }
      }

      function UserCreateSolutionComponent_option_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var c_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", c_r8.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", c_r8.name, " ");
        }
      }

      function UserCreateSolutionComponent_div_45_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Select a category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateSolutionComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserCreateSolutionComponent_div_45_div_1_Template, 2, 0, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.f.category_id.errors.required);
        }
      }

      function UserCreateSolutionComponent_div_91_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var a_r13 = ctx.$implicit;
          var jj_r14 = ctx.index;

          var ii_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ii_r11 != jj_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", a_r13, "");
        }
      }

      function UserCreateSolutionComponent_div_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, UserCreateSolutionComponent_div_91_div_5_Template, 2, 2, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var q_r10 = ctx.$implicit;
          var ii_r11 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("id", "flush-headingOne" + ii_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-bs-target", "#flush-collapseOne" + ii_r11)("aria-controls", "#flush-collapseOne" + ii_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", q_r10, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("id", "flush-collapseOne" + ii_r11)("aria-labelledby", "flush-headingOne" + ii_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.answer);
        }
      }

      function UserCreateSolutionComponent_div_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var url_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", url_r16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function UserCreateSolutionComponent_div_169_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Question is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateSolutionComponent_div_169_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserCreateSolutionComponent_div_169_div_1_Template, 2, 0, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.fq.question.errors.required);
        }
      }

      function UserCreateSolutionComponent_div_174_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Answer is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateSolutionComponent_div_174_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserCreateSolutionComponent_div_174_div_1_Template, 2, 0, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.fq.answer.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1() {
        return ["/user-profile"];
      };

      var UserCreateSolutionComponent = /*#__PURE__*/function () {
        function UserCreateSolutionComponent(toastr, apiService, formBuilder) {
          _classCallCheck(this, UserCreateSolutionComponent);

          this.toastr = toastr;
          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.current = 1;
          this.submitted = false;
          this.imageLoaded = false;
          this.tags = [];
          this.selectedTags = []; // var steps = $("fieldset").length;

          this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [{
              "class": 'arial',
              name: 'Arial'
            }, {
              "class": 'times-new-roman',
              name: 'Times New Roman'
            }, {
              "class": 'calibri',
              name: 'Calibri'
            }, {
              "class": 'comic-sans-ms',
              name: 'Comic Sans MS'
            }],
            customClasses: [{
              name: 'quote',
              "class": 'quote'
            }, {
              name: 'redText',
              "class": 'redText'
            }, {
              name: 'titleText',
              "class": 'titleText',
              tag: 'h1'
            }],
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
          };
          this.images = [];
          this.galleryimages = [];
          this.categories = [];
          this.submittedFaq = false;
          this.question = [];
          this.answer = [];
        }

        _createClass(UserCreateSolutionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var self = this;
            $(".next-step").click(function () {
              self.currentGfgStep = $(this).parent();
              self.nextGfgStep = $(this).parent().next();
              $("#progressbar li").eq($("fieldset").index(self.nextGfgStep)).addClass("active");
              self.nextGfgStep.show();
              self.currentGfgStep.animate({
                opacity: 0
              }, {
                step: function step(now) {
                  self.opacity = 1 - now;
                  self.currentGfgStep.css({
                    'display': 'none',
                    'position': 'relative'
                  });
                  self.nextGfgStep.css({
                    'opacity': self.opacity
                  });
                },
                duration: 500
              }); // self.setProgressBar(++self.current);
            });
            $(".previous-step").click(function () {
              self.currentGfgStep = $(this).parent();
              self.previousGfgStep = $(this).parent().prev();
              $("#progressbar li").eq($("fieldset").index(self.currentGfgStep)).removeClass("active");
              self.previousGfgStep.show();
              self.currentGfgStep.animate({
                opacity: 0
              }, {
                step: function step(now) {
                  self.opacity = 1 - now;
                  self.currentGfgStep.css({
                    'display': 'none',
                    'position': 'relative'
                  });
                  self.previousGfgStep.css({
                    'opacity': self.opacity
                  });
                },
                duration: 500
              }); // self.setProgressBar(--self.current);
            });
            this.overViewForm = this.formBuilder.group({
              title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              category_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              selectedTags: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]] // tag_id: ['', [Validators.required]]

            });
            this.descForm = this.formBuilder.group({
              body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            this.imgForm = this.formBuilder.group({
              file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              fileSource: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]] // faq: ['', [Validators.required]],

            });
            this.faqForm = this.formBuilder.group({
              question: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              answer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            this.getServices();
          }
        }, {
          key: "onFileChange",
          value: function onFileChange(event) {
            var _this = this;

            if (event.target.files && event.target.files[0]) {
              var filesAmount = event.target.files.length;

              for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                this.galleryimages.push(event.target.files[i]);

                reader.onload = function (event) {
                  // console.log(event.target.result);
                  _this.images.push(event.target.result);

                  _this.imgForm.patchValue({
                    fileSource: _this.images
                  });
                };

                reader.readAsDataURL(event.target.files[i]);
              }
            }
          }
        }, {
          key: "getServices",
          value: function getServices() {
            var _this2 = this;

            var token = localStorage.getItem("token");
            this.apiService.getService(token, {}).subscribe(function (res) {
              console.log(res);

              if (res.status) {
                _this2.serviceData = res;
                _this2.tags = res.tags;
                console.log(_this2.tags);
                _this2.categories = res.categories;
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
        }, {
          key: "f",
          get: function get() {
            return this.overViewForm.controls;
          }
        }, {
          key: "g",
          get: function get() {
            return this.descForm.controls;
          }
        }, {
          key: "addService",
          value: function addService() {
            var _this3 = this;

            this.submitted = true;
            console.log("addService", this.overViewForm);
            console.log("selectedTags", this.overViewForm.value.selectedTags);

            if (this.overViewForm.invalid) {
              return;
            } else {
              console.log("valid...");
              var token = localStorage.getItem("token");
              var formData = new FormData();

              for (var k = 0; k < this.galleryimages.length; k++) {
                formData.append('galleryimage[]', this.galleryimages[k]);
              }

              for (var i = 0; i < this.question.length; i++) {
                formData.append('question[]', this.question[i]);
              }

              for (var j = 0; j < this.answer.length; j++) {
                formData.append('answer[]', this.answer[j]);
              } // let tags: any = [];


              for (var _i = 0; _i < this.overViewForm.value.selectedTags.length; _i++) {
                // skills.push(this.selectedSkills[i].id);
                formData.append('tag_id[]', this.overViewForm.value.selectedTags[_i].id);
              }

              formData.set('id', '0');
              formData.set('title', this.overViewForm.value.title);
              formData.set('category_id', this.overViewForm.value.category_id); // formData.set('delivery_time_id', this.createServiceForm.value.delivery_time_id);

              formData.set('status', '1');
              formData.set('body', this.descForm.value.body); // if (this.imageLoaded) {
              //   formData.set('image', this.image);
              // }

              this.apiService.addUpdateService(token, formData).subscribe(function (res) {
                console.log(res);

                if (res.status) {
                  _this3.toastr.success(res.message); // this.submitted = false;
                  // this.imageLoaded = false;


                  document.getElementById("next-step").click(); // this.jobPostForm.reset();
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
        }, {
          key: "fq",
          get: function get() {
            return this.faqForm.controls;
          }
        }, {
          key: "faqAdd",
          value: function faqAdd() {
            this.submittedFaq = true;
            console.log("addService", this.faqForm);

            if (this.faqForm.invalid) {
              return;
            } else {
              console.log("valid...");
              this.question.push(this.faqForm.value.question);
              this.answer.push(this.faqForm.value.answer);
              this.submittedFaq = false;
              this.faqForm.reset();
              document.getElementById("closeModalButton").click();
            }
          }
        }]);

        return UserCreateSolutionComponent;
      }();

      UserCreateSolutionComponent.??fac = function UserCreateSolutionComponent_Factory(t) {
        return new (t || UserCreateSolutionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      UserCreateSolutionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserCreateSolutionComponent,
        selectors: [["app-user-create-solution"]],
        decls: 181,
        vars: 31,
        consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "text-center", "p-0", "mt-3", "mb-2"], [1, "px-0", "pt-4", "pb-0", "mt-3", "mb-3"], ["id", "form", 1, "mobile_profile_detail"], ["id", "progressbar", 1, "m-0", "p-0"], ["id", "step1", 1, "active", "align-items-center"], [1, "img", "d-none", "d-md-inline-block", "float-md-end"], [1, "bi", "bi-chevron-right"], ["id", "step2"], ["id", "step3"], ["id", "step4"], [1, "row"], [1, "col-md-8"], [1, "card", "px-3", "pt-3", "pb-5"], [3, "formGroup"], [1, "mb-3", "row"], ["for", "staticTitle", 1, "col-sm-2", "col-form-label", "text-start", "text-md-end"], [1, "col-sm-10"], ["type", "text", "formControlName", "title", "id", "staticTitle", "value", "", "placeholder", "Enter project title", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "inputPassword", 1, "col-sm-2", "col-form-label", "text-start", "text-md-end"], ["formControlName", "category_id", "aria-label", ".form-select-sm example", 1, "form-select", "form-select-sm", 3, "ngClass"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["bindLabel", "name", "placeholder", "Select Tags", "appendTo", "body", "formControlName", "selectedTags", 3, "items", "multiple"], [1, "col-md-4"], [1, "card", "p-3"], ["src", "./assets/images/Rectangle200.png", "alt", "", "srcset", ""], [1, "position-relative"], [1, "wrapper"], [1, "video-main"], [1, "promo-video"], [1, "waves-block"], [1, "waves", "wave-1"], [1, "waves", "wave-2"], [1, "waves", "wave-3"], ["href", "https://www.youtube.com/watch?v=BqI0Q7e4kbk", "data-lity", "", 1, "video", "video-popup", "mfp-iframe"], [1, "bi", "bi-play", 2, "font-size", "50px"], ["type", "button", "name", "next-step", "value", "Save and Continue", 1, "next-step", "btn", "btn-sm", "btn-primary", "mx-auto", "d-block", "float-md-start", 3, "disabled"], [1, "row", "p-3", "p-md-0"], [1, "text-start", "pb-3", "fw-bold", "border-bottom", 2, "font-size", "20px"], [1, "pt-3", "pb-5", "border-bottom", "mb-2", "text-start"], [1, "text-start"], ["id", "editor1", "formControlName", "body", 3, "config"], [1, "row", "border-bottom"], [1, "col-md-8", "col-8"], [1, "text-start", "fw-bold", 2, "font-size", "20px"], [1, "col-md-4", "col-4"], [1, "text-end"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", 2, "color", "#00A3FF"], [1, ""], ["id", "accordionFlushExample", 1, "accordion", "accordion-flush"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], ["type", "button", "name", "next-step", "value", "Save and Continue", 1, "next-step", "btn", "btn-sm", "btn-primary", "mx-auto", "d-block", "float-md-start", "mt-3", 3, "disabled"], [1, "pt-3", "pb-5", "border-bottom", "mb-2"], [1, "col-md-6", "mb-2"], [1, "rounded-2", "bg-light", 2, "height", "350px", "border", "2px dashed #00A3FF", "padding-top", "120px"], [1, "align-middle", "text-center", "create-solu", "upload-btn-wrapper"], ["src", "./assets/images/iconuploadicon.png", "alt", ""], [1, "text-dark"], ["type", "file", "formControlName", "file", "name", "", "id", "file", "multiple", "", 3, "change"], ["class", "col-md-6 mb-2", 4, "ngFor", "ngForOf"], ["type", "hidden", "name", "next-step", "id", "next-step", "value", "Publish", 1, "next-step", "btn", "btn-sm", "btn-primary", "mx-auto", "d-block", "float-md-start"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "mx-auto", "d-block", "float-md-start", 3, "disabled", "click"], [1, "finish"], [1, "text-dark", "text-center"], ["src", "./assets/images/Group2089.png"], [3, "routerLink"], ["type", "button", "value", "Go to your Profile", 1, "btn", "btn-sm", "btn-primary", "mx-auto", "d-block"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "form-floating", "mb-3"], ["type", "email", "id", "floatingInput", "placeholder", "name@example.com", "formControlName", "question", 1, "form-control", "rounded-0", 3, "ngClass"], ["for", "floatingInput"], [1, "form-floating"], ["placeholder", "Leave a comment here", "id", "floatingTextarea2", "formControlName", "answer", 1, "form-control", "rounded-0", 2, "height", "100px", 3, "ngClass"], ["for", "floatingTextarea2"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", "id", "closeModalButton", 1, "btn", "btn-sm", "rounded-0", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-sm", "btn-outline-primary", "rounded-0"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "accordion-button", "collapsed"], ["data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["class", "accordion-body", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "accordion-body", 3, "hidden"], [1, "rounded-2", "bg-light", 2, "height", "350px", "overflow", "hidden", "border", "2px dashed #00A3FF"], [3, "src"]],
        template: function UserCreateSolutionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Description & FAQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Gallery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Publish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Project Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, UserCreateSolutionComponent_div_36_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Select category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, UserCreateSolutionComponent_option_44_Template, 2, 2, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, UserCreateSolutionComponent_div_45_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Tag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "ng-select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "How it works");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Briefly Describe your project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "angular-editor", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " Frequently Asked Question");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " +Add FAQ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Add Question and Answer for your Buyers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](91, UserCreateSolutionComponent_div_91_Template, 6, 7, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "How it works");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " Add gallery image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "p", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Uplaod Project Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "input", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserCreateSolutionComponent_Template_input_change_123_listener($event) {
              return ctx.onFileChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](124, UserCreateSolutionComponent_div_124_Template, 4, 1, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "How it works");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "input", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCreateSolutionComponent_Template_button_click_142_listener() {
              return ctx.addService();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Publish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "img", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Congratulation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Your project has been published. Clients will be able to find you through your project.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "input", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "h6", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " Add FAQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "button", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "form", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UserCreateSolutionComponent_Template_form_ngSubmit_163_listener() {
              return ctx.faqAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "input", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "label", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Question");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](169, UserCreateSolutionComponent_div_169_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "textarea", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Answer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](174, UserCreateSolutionComponent_div_174_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Submit");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.overViewForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](22, _c0, ctx.submitted && ctx.f.title.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.title.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](24, _c0, ctx.submitted && ctx.f.category_id.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.category_id.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("items", ctx.tags)("multiple", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.overViewForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.descForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("config", ctx.editorConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.question);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.descForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.imgForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.imgForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](26, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.faqForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c0, ctx.submittedFaq && ctx.fq.question.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submittedFaq && ctx.fq.question.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, ctx.submittedFaq && ctx.fq.answer.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submittedFaq && ctx.fq.answer.errors);
          }
        },
        directives: [_includes_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectComponent"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItY3JlYXRlLXNvbHV0aW9uL3VzZXItY3JlYXRlLXNvbHV0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserCreateSolutionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-create-solution',
            templateUrl: './user-create-solution.component.html',
            styleUrls: ['./user-create-solution.component.css']
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }, {
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/user-create-solution/user-create-solution.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/user-create-solution/user-create-solution.module.ts ***!
      \***************************************************************************/

    /*! exports provided: UserCreateSolutionModule */

    /***/
    function srcAppPagesUserCreateSolutionUserCreateSolutionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCreateSolutionModule", function () {
        return UserCreateSolutionModule;
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


      var _user_create_solution_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-create-solution-routing.module */
      "./src/app/pages/user-create-solution/user-create-solution-routing.module.ts");
      /* harmony import */


      var _user_create_solution_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-create-solution.component */
      "./src/app/pages/user-create-solution/user-create-solution.component.ts");
      /* harmony import */


      var src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/includes/include.module */
      "./src/app/includes/include.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
      /* harmony import */


      var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @kolkov/angular-editor */
      "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");

      var UserCreateSolutionModule = /*#__PURE__*/_createClass(function UserCreateSolutionModule() {
        _classCallCheck(this, UserCreateSolutionModule);
      });

      UserCreateSolutionModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: UserCreateSolutionModule
      });
      UserCreateSolutionModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function UserCreateSolutionModule_Factory(t) {
          return new (t || UserCreateSolutionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _user_create_solution_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserCreateSolutionRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserCreateSolutionModule, {
          declarations: [_user_create_solution_component__WEBPACK_IMPORTED_MODULE_3__["UserCreateSolutionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _user_create_solution_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserCreateSolutionRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserCreateSolutionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_create_solution_component__WEBPACK_IMPORTED_MODULE_3__["UserCreateSolutionComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _user_create_solution_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserCreateSolutionRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], src_app_includes_include_module__WEBPACK_IMPORTED_MODULE_4__["IncludeModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-user-create-solution-user-create-solution-module-es5.js.map