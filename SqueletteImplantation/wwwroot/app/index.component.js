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
var utilisateur_1 = require("./utilisateur");
var utilisateur_service_1 = require("./utilisateur.service");
var app_component_1 = require("./app.component");
var IndexComponent = (function () {
    function IndexComponent(router, utilServ, appcomponent) {
        this.router = router;
        this.utilServ = utilServ;
        this.appcomponent = appcomponent;
    }
    IndexComponent.prototype.Connexion = function (f) {
        var _this = this;
        console.log(f);
        var util = new utilisateur_1.Utilisateur(null, null, null, f.value.motdepasse, f.value.utilisateur, null, null);
        console.log(util.UtilPWD);
        this.utilServ.postUtilisateur(util).subscribe(function (Reponse) { return _this.ValidationConnexion(Reponse); });
    };
    IndexComponent.prototype.ValidationConnexion = function (Valide) {
        console.log(Valide);
        if (Valide.status === 200) {
            if (Valide._body != 0) {
                this.appcomponent.SetType(false);
            }
            else {
                this.appcomponent.SetType(true);
            }
            this.router.navigateByUrl('/choix');
        }
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: 'my-index',
        templateUrl: 'app/html/index.component.html',
        styleUrls: ['app/css/index.component.css'],
        providers: [utilisateur_service_1.UtilisateurService]
    }),
    __metadata("design:paramtypes", [router_1.Router, utilisateur_service_1.UtilisateurService, app_component_1.AppComponent])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map