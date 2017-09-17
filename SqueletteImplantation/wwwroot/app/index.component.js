"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var IndexComponent = (function () {
    function IndexComponent(router) {
        this.router = router;
    }
    IndexComponent.prototype.Connexion = function () {
        this.router.navigateByUrl('/choix');
        console.log("test");
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: 'my-index',
        templateUrl: 'app/html/index.component.html',
        styleUrls: ['app/css/index.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map