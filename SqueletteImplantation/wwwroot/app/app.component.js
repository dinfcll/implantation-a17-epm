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
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.authentificationService.Connecte();
        this.authentificationService.Admin();
        this.authentificationService.Domaine();
    };
    AppComponent.prototype.ChoixDomaine = function () {
        this.authentificationService.DomaineChange();
    };
    AppComponent.prototype.Deconnexion = function () {
        localStorage.removeItem('ConnectedUser');
        this.authentificationService.logout();
        this.router.navigateByUrl('index');
    };
    AppComponent.prototype.Reroutage = function (type) {
        if (type === 0 && this.DetectionPage() == 'neurologie') {
            this.router.navigateByUrl('neurologie/ajouttrace');
        }
        else if (type === 0 && this.DetectionPage() === 'cardiologie') {
            this.router.navigateByUrl('cardiologie/ajouttrace');
        }
        else if (type === 1 && this.DetectionPage() == 'neurologie') {
            this.router.navigateByUrl('neurologie/ajoutsupp');
        }
        else if (type === 1 && this.DetectionPage() == 'cardiologie') {
            this.router.navigateByUrl('cardiologie/ajoutsupp');
        }
        else if (type === 2) {
            this.router.navigateByUrl('choix');
        }
    };
    AppComponent.prototype.DetectionPage = function () {
        var CheminLong = this.router.url.toString();
        var Page;
        Page = CheminLong.split('/', 2);
        return Page[1];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app/html/app.component.html',
            styleUrls: ['app/css/app.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            authentification_service_1.AuthentificationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map