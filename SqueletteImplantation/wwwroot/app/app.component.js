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
var authentification_service_1 = require("./authentification.service");
var AppComponent = (function () {
    function AppComponent(router, authentificationService) {
        this.router = router;
        this.authentificationService = authentificationService;
    }
    AppComponent.prototype.UpdateAuthentificationPageIndex = function () {
        localStorage.removeItem('ConnectedUser');
        this.authentificationService.logout();
    };
    AppComponent.prototype.UpdateAuthentification = function () {
        this.Connecte = this.authentificationService.Connecte();
        this.Admin = this.authentificationService.Admin();
    };
    AppComponent.prototype.Deconnexion = function () {
        localStorage.removeItem('ConnectedUser');
        this.authentificationService.logout();
        this.router.navigateByUrl('index');
    };
    AppComponent.prototype.Reroutage = function (type) {
        console.log(type);
        if (type === 0) {
            this.router.navigateByUrl('ajout');
        }
        else if (type === 1) {
            //  this.router.navigateByUrl('ajout');
        }
        else {
            this.router.navigateByUrl('choix');
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'app/html/app.component.html',
        styleUrls: ['app/css/app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentification_service_1.AuthentificationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map