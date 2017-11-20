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
var app_component_1 = require("./app.component");
var authentification_service_1 = require("./authentification.service");
var ChoixComponent = (function () {
    function ChoixComponent(router, appcomponent, authentificationservice) {
        this.router = router;
        this.appcomponent = appcomponent;
        this.authentificationservice = authentificationservice;
        this.appcomponent.UpdateAuthentification();
    }
    ChoixComponent.prototype.ngOnInit = function () {
        this.authentificationservice.InitDomaine();
        this.appcomponent.VerificationActivite();
    };
    ChoixComponent.prototype.NeuroClick = function () {
        this.authentificationservice.DomaineChange();
        this.router.navigateByUrl('/neurologie');
    };
    ChoixComponent.prototype.CardioClick = function () {
        this.authentificationservice.DomaineChange();
        this.router.navigateByUrl('/cardiologie');
    };
    return ChoixComponent;
}());
ChoixComponent = __decorate([
    core_1.Component({
        selector: 'my-choix',
        templateUrl: 'app/html/choix.component.html',
        styleUrls: ['app/css/choix.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, app_component_1.AppComponent, authentification_service_1.AuthentificationService])
], ChoixComponent);
exports.ChoixComponent = ChoixComponent;
//# sourceMappingURL=choix.component.js.map