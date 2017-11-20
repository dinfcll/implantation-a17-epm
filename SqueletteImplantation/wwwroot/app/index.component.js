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
var Historique_service_1 = require("./Historique.service");
var IndexComponent = (function () {
    function IndexComponent(router, authServ, appcomponent, historiqueService) {
        this.router = router;
        this.authServ = authServ;
        this.appcomponent = appcomponent;
        this.historiqueService = historiqueService;
        this.appcomponent.UpdateAuthentificationPageIndex();
    }
    IndexComponent.prototype.Connexion = function (f) {
        var _this = this;
        this.authServ.login(f.value.utilisateur, f.value.motdepasse).subscribe(function (Reponse) {
            _this.authServ.ValidationConnexion(Reponse);
            if (_this.authServ.Connecte()) {
                _this.historiqueService.SetUsager();
                _this.historiqueService.ObtenirHistorique();
                _this.router.navigate(['choix']);
            }
            else {
                new jBox('Notice', {
                    content: 'Utilisateur ou mot de passe invalide',
                    color: 'red',
                    stack: false
                });
            }
        });
    };
    IndexComponent.prototype.MotDePasseOublie = function () {
        this.router.navigate(['MDP']);
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'my-index',
            templateUrl: 'app/html/index.component.html',
            styleUrls: ['app/css/index.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, authentification_service_1.AuthentificationService, app_component_1.AppComponent, Historique_service_1.HistoriqueService])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map