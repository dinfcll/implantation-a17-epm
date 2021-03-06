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
var Historique_1 = require("./Historique");
//Importation des services 
var trace_service_1 = require("./trace.service");
var categorie_service_1 = require("./categorie.service");
var critere_service_1 = require("./critere.service");
var authentification_service_1 = require("./authentification.service");
var Historique_service_1 = require("./Historique.service");
var PageCatComponent = /** @class */ (function () {
    function PageCatComponent(traceService, catService, critService, router, authentificationService, historiqueService) {
        this.traceService = traceService;
        this.catService = catService;
        this.critService = critService;
        this.router = router;
        this.authentificationService = authentificationService;
        this.historiqueService = historiqueService;
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
            this.catService.getCategories(2).subscribe(function (cat) { return _this.m_TabCat = cat.json(); });
        }
        else {
            this.catService.getCategories(1).subscribe(function (cat) { return _this.m_TabCat = cat.json(); });
        }
    };
    PageCatComponent.prototype.AffichageTrace = function (param) {
        this.m_TabTrace = param.json();
    };
    PageCatComponent.prototype.OnClickListeDeroulanteCritere = function (param) {
        console.log(document.getElementById("ListeCritere").style.display);
        if (document.getElementById("ListeCritere").style.display === "" || document.getElementById("ListeCritere").style.display === "none" || param !== this.CategorieSelectionne) {
            document.getElementById("ListeCritere").style.display = "inline-block";
            this.CategorieSelectionne = param;
        }
        else {
            document.getElementById("ListeCritere").style.display = "none";
        }
    };
    //Action lors de la sélection d'une catégorie
    PageCatComponent.prototype.OnClickCategorie = function (categ) {
        /*for(var i=0; i<this.m_TabCat.length;i++)
        {
            document.getElementById(this.m_TabCat[i].catId.toString()).style.backgroundColor = "rgba(125, 141, 163, 0.71)";
        }*/
        var _this = this;
        var CategorieRemettreCouleur = document.evaluate('//*[text()="' + categ.catNom + '"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
        var ElementHtml = CategorieRemettreCouleur.parentElement.children;
        ElementHtml[0].style.backgroundColor = "rgba(125, 141, 163, 0.71)";
        document.getElementById(categ.catId.toString()).style.backgroundColor = "rgba(43, 47, 61, 0.71)";
        var offsTop = document.getElementById(categ.catId.toString()).offsetTop;
        document.getElementById("ListeCritere").style.top = offsTop + "px";
        var offsLargeur = document.getElementById("EspaceCritereChoisi").offsetWidth;
        document.getElementById("ListeCritere").style.maxWidth = offsLargeur + "px";
        var offsDroite = document.getElementById("ChoixCategorie").offsetWidth;
        document.getElementById("ListeCritere").style.left = offsDroite - 5 + "px";
        this.NomCateg = categ.catNom;
        this.NomCrit = "Critères";
        this.critService.getCriteres(categ.catId).subscribe(function (crit) { return _this.m_TabCrit = crit.json(); });
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
    PageCatComponent.prototype.onClickImg = function (url) {
        window.open(url);
    };
    PageCatComponent.prototype.ValidationPage = function () {
        var CheminLong = this.router.url.toString();
        var Page;
        Page = CheminLong.split('/', 2);
        if (Page[1] == 'neurologie') {
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
    PageCatComponent.prototype.onClickTelecharger = function (id) {
        var _this = this;
        this.infostelechargement = new Historique_1.HistoriqueDTO(id, this.historiqueService.IdUsager);
        console.log(this.infostelechargement);
        this.historiqueService.addRechercheRecente(this.infostelechargement).subscribe(function (Reponse) { return _this.historiqueService.ObtenirHistorique(); });
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
    PageCatComponent = __decorate([
        core_1.Component({
            selector: 'page-cat',
            templateUrl: 'app/html/page-cat.component.html',
            styleUrls: ['app/css/page-cat.component.css'],
            providers: [trace_service_1.TraceService, critere_service_1.CritereService, categorie_service_1.CategorieService]
        })
        //À compléter
        ,
        __metadata("design:paramtypes", [trace_service_1.TraceService, categorie_service_1.CategorieService, critere_service_1.CritereService,
            router_1.Router, authentification_service_1.AuthentificationService, Historique_service_1.HistoriqueService])
    ], PageCatComponent);
    return PageCatComponent;
}());
exports.PageCatComponent = PageCatComponent;
//# sourceMappingURL=page-cat.component.js.map