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
//Importation des services 
var trace_service_1 = require("./trace.service");
var categorie_service_1 = require("./categorie.service");
var critere_service_1 = require("./critere.service");
var PageCatComponent = (function () {
    function PageCatComponent(traceService, catService, critService) {
        this.traceService = traceService;
        this.catService = catService;
        this.critService = critService;
        this.m_TabRecherche = [];
    }
    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après le constructeur dudit composant.
    PageCatComponent.prototype.ngOnInit = function () {
        //Remplit les objets des données de la BD
        var _this = this;
        this.catService.getCategories(1).subscribe(function (cat) { return _this.AffichageCat(cat); });
        this.critService.getCriteres(1).subscribe(function (crit) { return _this.AffichageCrit(crit); });
        this.traceService.getTraces().then(function (retourFonction) { return _this.m_TabTrace = retourFonction; });
    };
    PageCatComponent.prototype.AffichageCat = function (param) {
        this.m_TabCat = param.json();
        console.log(this.m_TabCat);
    };
    PageCatComponent.prototype.AffichageCrit = function (param) {
        this.m_TabCrit = param.json();
        console.log(this.m_TabCrit);
    };
    PageCatComponent.prototype.OnClickListeDeroulanteCritere = function () {
        document.getElementById("ListeCritere").classList.toggle("showCritere");
    };
    PageCatComponent.prototype.OnClickListeDeroulanteCategorie = function () {
        document.getElementById("ListeCategorie").classList.toggle("showCategorie");
    };
    PageCatComponent.prototype.OnClickCategorie = function (id) {
        var _this = this;
        this.critService.getCriteres(id).subscribe(function (crit) { return _this.AffichageCrit(crit); });
    };
    PageCatComponent.prototype.OnClickCritere = function (id) {
        this.m_TabRecherche.push(id);
        console.log(this.m_TabRecherche);
    };
    return PageCatComponent;
}());
PageCatComponent = __decorate([
    core_1.Component({
        selector: 'page-cat',
        templateUrl: 'app/html/page-cat.component.html',
        styleUrls: ['app/css/page-cat.component.css'],
        providers: [trace_service_1.TraceService, critere_service_1.CritereService, categorie_service_1.CategorieService]
    }),
    __metadata("design:paramtypes", [trace_service_1.TraceService, categorie_service_1.CategorieService, critere_service_1.CritereService])
], PageCatComponent);
exports.PageCatComponent = PageCatComponent;
//# sourceMappingURL=page-cat.component.js.map