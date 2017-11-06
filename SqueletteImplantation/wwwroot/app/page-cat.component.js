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
//Importation des services 
var trace_service_1 = require("./trace.service");
var categorie_service_1 = require("./categorie.service");
var critere_service_1 = require("./critere.service");
var authentification_service_1 = require("./authentification.service");
var PageCatComponent = (function () {
    function PageCatComponent(traceService, catService, critService, router, authentificationService) {
        this.traceService = traceService;
        this.catService = catService;
        this.critService = critService;
        this.router = router;
        this.authentificationService = authentificationService;
        this.m_TabRecherche = [];
        this.m_EnvoieTrace = null;
        this.NomCateg = "Catégories";
        this.NomCrit = "Critères";
    }
    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après le constructeur dudit composant.
    PageCatComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Remplit les objets avec les données de la BD
        if (this.router.url.toString() == '/neurologie') {
            this.catService.getCategories(2).subscribe(function (cat) { return _this.AffichageCat(cat); });
        }
        else {
            this.catService.getCategories(1).subscribe(function (cat) { return _this.AffichageCat(cat); });
        }
    };
    PageCatComponent.prototype.AffichageCat = function (param) {
        this.m_TabCat = param.json();
        if (this.m_TabCat.length < 8) {
            document.getElementsByClassName("ListeCategorie")[0].setAttribute("size", this.m_TabCat.length.toString());
        }
        else {
            document.getElementsByClassName("ListeCategorie")[0].setAttribute("size", "8");
        }
    };
    PageCatComponent.prototype.AffichageCrit = function (param) {
        this.m_TabCrit = param.json();
        if (this.m_TabCrit.length < 8) {
            document.getElementsByClassName("ListeCritere")[0].setAttribute("size", this.m_TabCrit.length.toString());
        }
        else {
            document.getElementsByClassName("ListeCritere")[0].setAttribute("size", "8");
        }
    };
    PageCatComponent.prototype.AffichageTrace = function (param) {
        this.m_TabTrace = param.json();
        this.UploadJBOX();
    };
    PageCatComponent.prototype.OnClickListeDeroulanteCritere = function () {
        document.getElementsByClassName("ListeCritere")[0].classList.toggle("ShowElement");
    };
    PageCatComponent.prototype.OnClickListeDeroulanteCategorie = function () {
        document.getElementsByClassName("ListeCategorie")[0].classList.toggle("ShowElement");
    };
    //Action lors de la sélection d'une catégorie
    PageCatComponent.prototype.OnClickCategorie = function (categ) {
        var _this = this;
        this.NomCateg = categ.catNom;
        this.NomCrit = "Critères";
        this.critService.getCriteres(categ.catId).subscribe(function (crit) { return _this.AffichageCrit(crit); });
    };
    //Action lors de la sélection d'un critère
    PageCatComponent.prototype.OnClickCritere = function (crit) {
        this.NomCrit = crit.critNom;
        this.m_TabRecherche.push(crit);
    };
    //Action lors du clic sur supprimer
    PageCatComponent.prototype.OnClickSupprimer = function (crit) {
        this.m_TabRecherche.splice(this.m_TabRecherche.indexOf(crit), 1);
    };
    PageCatComponent.prototype.onClickImg = function () {
        window.open("https://drive.google.com/uc?id=0By19gDkyFUzVYzAzMUhjXzUtSFU");
    };
    PageCatComponent.prototype.ValidationPage = function () {
        var CheminLong = this.router.url.toString();
        var Page;
        Page = CheminLong.split('/', 2);
        console.log(Page);
        if (Page[1] == 'neurologie') {
            console.log("false == neurologie");
            return false;
        }
        return true;
    };
    //Action lors de l'appui sur le bouton recherche
    PageCatComponent.prototype.OnClickRechercher = function () {
        var _this = this;
        var RequeteId;
        RequeteId = "?";
        for (var _i = 0, _a = this.m_TabRecherche; _i < _a.length; _i++) {
            var crit = _a[_i];
            RequeteId += "Id=" + crit.critId + "&";
        }
        RequeteId = RequeteId.substr(0, RequeteId.length - 1);
        this.traceService.getTraces(RequeteId).subscribe(function (trac) { return _this.AffichageTrace(trac); });
    };
    PageCatComponent.prototype.UploadJBOX = function () {
        for (var i = 0; i < this.m_TabTrace.length; i++) {
            new jBox('Image');
        }
    };
    /************************************************************** */
    PageCatComponent.prototype.ValidationUtil = function () {
        return this.authentificationService.Admin();
    };
    /**********AJOUT ET SUPPRESSION DE TRACÉS*********************/
    PageCatComponent.prototype.onClickDeleteTrace = function (id) {
        var _this = this;
        if (confirm("Voulez-vous vraiment supprimer définitivement le tracé #" + id + "?")) {
            this.traceService.deleteTrace(id).subscribe(function (reponse) {
                _this.AffichageRepDel(reponse);
                _this.OnClickRechercher();
            });
        }
        else {
            console.log("ABORT");
        }
    };
    PageCatComponent.prototype.onClickAddTrace = function () {
        if (this.router.url.toString() == '/neurologie') {
            this.router.navigateByUrl('/neurologie/ajouttrace');
        }
        else {
            this.router.navigateByUrl('/cardiologie/ajouttrace');
        }
    };
    PageCatComponent.prototype.AffichageRepDel = function (param) {
        console.log(param);
    };
    return PageCatComponent;
}());
PageCatComponent = __decorate([
    core_1.Component({
        selector: 'page-cat',
        templateUrl: 'app/html/page-cat.component.html',
        styleUrls: ['app/css/page-cat.component.css'],
        providers: [trace_service_1.TraceService, critere_service_1.CritereService, categorie_service_1.CategorieService]
    })
    //À compléter
    ,
    __metadata("design:paramtypes", [trace_service_1.TraceService, categorie_service_1.CategorieService, critere_service_1.CritereService, router_1.Router, authentification_service_1.AuthentificationService])
], PageCatComponent);
exports.PageCatComponent = PageCatComponent;
//# sourceMappingURL=page-cat.component.js.map