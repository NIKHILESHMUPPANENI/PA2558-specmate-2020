"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = require("../../util/Type");
var TestStep_1 = require("../../model/TestStep");
var specmate_data_service_1 = require("../../services/data/specmate-data.service");
var core_1 = require("@angular/core");
var test_case_component_base_1 = require("./test-case-component-base");
var TestCaseParameterMapping = (function (_super) {
    __extends(TestCaseParameterMapping, _super);
    function TestCaseParameterMapping(dataService) {
        return _super.call(this, dataService) || this;
    }
    Object.defineProperty(TestCaseParameterMapping.prototype, "inputParameters", {
        get: function () {
            var _this = this;
            return this._inputParameters.filter(function (param) { return _this.assignmentMap[param.url] && _this.assignmentMap[param.url].condition && _this.assignmentMap[param.url].condition !== ""; });
        },
        /** Input Parameters of the test specfication that should be shown*/
        set: function (params) {
            this._inputParameters = params;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestCaseParameterMapping.prototype, "outputParameters", {
        get: function () {
            var _this = this;
            return this._outputParameters.filter(function (param) { return _this.assignmentMap[param.url] && _this.assignmentMap[param.url].condition && _this.assignmentMap[param.url].condition !== ""; });
        },
        /** Output Parameters of the test specfication that should be shown*/
        set: function (params) {
            this._outputParameters = params;
        },
        enumerable: true,
        configurable: true
    });
    TestCaseParameterMapping.prototype.referencingTestSteps = function (testParameter) {
        if (!this.testProcedureContents) {
            return [];
        }
        return this.testProcedureContents
            .filter(function (element) { return Type_1.Type.is(element, TestStep_1.TestStep); })
            .filter(function (testStep) { return testStep.referencedTestParameters.findIndex(function (proxy) { return proxy.url === testParameter.url; }) >= 0; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TestCaseParameterMapping.prototype, "testProcedureContents", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TestCaseParameterMapping.prototype, "inputParameters", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TestCaseParameterMapping.prototype, "outputParameters", null);
    TestCaseParameterMapping = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'test-case-parameter-mapping',
            templateUrl: 'test-case-parameter-mapping.component.html'
        }),
        __metadata("design:paramtypes", [specmate_data_service_1.SpecmateDataService])
    ], TestCaseParameterMapping);
    return TestCaseParameterMapping;
}(test_case_component_base_1.TestCaseComponentBase));
exports.TestCaseParameterMapping = TestCaseParameterMapping;
//# sourceMappingURL=test-case-parameter-mapping.component.js.map