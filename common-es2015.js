(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





class ApiService {
    constructor(http) {
        this.http = http;
    }
    // http://creativeonlinezone.com/project/homefix/api/update-service
    // id = Service ID - required -  if you want add then send me 0 - Zero - required integer
    // title =Service Title - required
    // category_id = Category ID
    // tag_id[] = Array of  Tag ID
    // status =1 for active - 0 for Inactive - Default value 0
    // body = Content
    // image = Image - required - jpeg,png,jpg,gif,svg - max size 2mb
    // image2 = Image - required - jpeg,png,jpg,gif,svg - max size 2mb
    // question[] = Array of FAQ question 
    // answer[] = Array of  FAQ Answer
    // galleryimage[]  = Array of gallery images"
    addUpdateService(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/update-service", formData, {
            headers: httpHeaders
        });
    }
    // http://creativeonlinezone.com/project/homefix/api/get-service
    getService(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/get-service", formData, {
            headers: httpHeaders
        });
    }
    // http://creativeonlinezone.com/project/homefix/api/service-list
    serviceList(token) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/service-list", JSON.stringify({}), {
            headers: httpHeaders
        });
    }
    // http://creativeonlinezone.com/project/homefix/api/add-job
    addJobDetails(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/add-job", formData, {
            headers: httpHeaders
        });
    }
    // "id = Job ID - required -  if you want add then send me 0 - Zero - required integer
    // title =Job Title - required
    // category_id = Category ID
    // delivery_time_id = Delivery Time ID
    // status =1 for active - 0 for Inactive - Default value 0
    // body = Content
    // galleryimage[]  = Array of gallery images"
    // http://creativeonlinezone.com/project/homefix/api/update-job
    addUpdateJob(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/update-job", formData, {
            headers: httpHeaders
        });
    }
    // http://creativeonlinezone.com/project/homefix/api/my-job
    myJob(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/my-job", formData, {
            headers: httpHeaders
        });
    }
    // http://creativeonlinezone.com/project/homefix/api/get-job
    getAllJobs(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/get-job", formData, {
            headers: httpHeaders
        });
    }
    // code = Proposal code for start chat connection - Optional
    // http://creativeonlinezone.com/project/homefix/api/messages
    messages(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/messages", formData, {
            headers: httpHeaders
        });
    }
    // fetch_id = User ID
    // connectionid = Connection ID
    // http://creativeonlinezone.com/project/homefix/api/fetch-messages
    fetchMessages(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/fetch-messages", formData, {
            headers: httpHeaders
        });
    }
    //   "fetch_id = User ID
    // connectionid = Connection ID
    // // scroll_offset = first time Return variable=> ""offet"" from fetch-messages End point then Return variable=> ""offet"" from prepend-message End point"
    // http://creativeonlinezone.com/project/homefix/api/prepend-message
    prependMessage(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/prepend-message", formData, {
            headers: httpHeaders
        });
    }
    // "receiver_id=User ID
    // connection_id= Connection ID
    // message_type = Video message=>2, Image=>4, Any other File upload => 5, Normal text => 3 , '6'=>'Send Contract', '7'=>'Accept Contract', '8'=>'Withdraw Contract', '9'=>'Completed Contract'
    // message=Message Text
    // file_name = Upload video/image/another file"
    // http://creativeonlinezone.com/project/homefix/api/post-message
    postMessage(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/post-message", formData, {
            headers: httpHeaders
        });
    }
    // id = Comment ID for update comment - If you want to update comment then user_id is required in create comment time & also update time
    // user_id = User ID
    // blog_id=Blog ID - Required
    // name=Full name - Required
    // email=Email - Required
    // body=Message - Required
    // parent_id= Comment ID for reply - Optional
    // http://creativeonlinezone.com/project/homefix/api/post-comment
    postComment(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/post-comment", formData, {
            headers: httpHeaders
        });
    }
    // http://creativeonlinezone.com/project/homefix/api/my-proposal
    myProposal(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/my-proposal", formData, {
            headers: httpHeaders
        });
    }
    // http://creativeonlinezone.com/project/homefix/api/update-rating?job_id=1&rating=4.5&review=Good
    addReview(token, data) {
        const formData = new FormData();
        formData.append('data', data);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/update-rating", formData, {
            headers: httpHeaders
        });
    }
    // http://creativeonlinezone.com/project/homefix/api/get-state?country_id=233
    getStates(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + "/api/get-state?country_id=" + id);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map