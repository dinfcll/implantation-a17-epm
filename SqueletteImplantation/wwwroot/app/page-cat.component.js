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
var tracedto_1 = require("./tracedto");
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
        this.m_EnvoieTrace = null;
    }
    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après le constructeur dudit composant.
    PageCatComponent.prototype.ngOnInit = function () {
        //Remplit les objets des données de la BD
        var _this = this;
        this.catService.getCategories(1).subscribe(function (cat) { return _this.AffichageCat(cat); });
        this.critService.getCriteres(1).subscribe(function (crit) { return _this.AffichageCrit(crit); });
    };
    PageCatComponent.prototype.AffichageCat = function (param) {
        this.m_TabCat = param.json();
        console.log(this.m_TabCat);
    };
    PageCatComponent.prototype.AffichageCrit = function (param) {
        this.m_TabCrit = param.json();
        console.log(this.m_TabCrit);
    };
    PageCatComponent.prototype.AffichageTrace = function (param) {
        this.m_TabTrace = param.json();
        console.log(this.m_TabTrace);
    };
    PageCatComponent.prototype.OnClickListeDeroulanteCritere = function () {
        document.getElementById("ListeCritere").classList.toggle("showCritere");
    };
    PageCatComponent.prototype.OnClickListeDeroulanteCategorie = function () {
        document.getElementById("ListeCategorie").classList.toggle("showCategorie");
    };
    //Action lors de la sélection d'une catégorie
    PageCatComponent.prototype.OnClickCategorie = function (id) {
        var _this = this;
        this.critService.getCriteres(id).subscribe(function (crit) { return _this.AffichageCrit(crit); });
    };
    //Action lors de la sélection d'un critère
    PageCatComponent.prototype.OnClickCritere = function (crit) {
        this.m_TabRecherche.push(crit);
        console.log(this.m_TabRecherche);
    };
    //Action lors du clic sur supprimer
    PageCatComponent.prototype.OnClickSupprimer = function (crit) {
        this.m_TabRecherche.splice(this.m_TabRecherche.indexOf(crit), 1);
        console.log(this.m_TabRecherche);
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
    /**********AJOUT ET SUPPRESSION DE TRACÉS*********************/
    PageCatComponent.prototype.onClickDeleteTrace = function (id) {
        var _this = this;
        if (confirm("Voulez-vous vraiment supprimer définitivement le tracé #" + id + "?")) {
            this.traceService.deleteTrace(id).subscribe(function (reponse) { return _this.AffichageRepDel(reponse); });
        }
        else {
            console.log("ABORT");
        }
    };
    PageCatComponent.prototype.onClickAddTrace = function () {
        var _this = this;
        if (this.m_EnvoieTrace != null) {
            this.traceService.addTrace(this.m_EnvoieTrace).subscribe(function (reponse) { return _this.AffichageRepAdd(reponse); });
        }
    };
    PageCatComponent.prototype.AffichageRepDel = function (param) {
        console.log(param);
    };
    PageCatComponent.prototype.AffichageRepAdd = function (param) {
        console.log(param);
    };
    PageCatComponent.prototype.getCritIDS = function () {
        var j = 0;
        var TabID = [];
        while (j < this.m_TabCrit.length) {
            TabID[j] = this.m_TabCrit[j].critId;
            j++;
        }
        return TabID;
    };
    PageCatComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.m_EnvoieTrace = new tracedto_1.TraceDTO(file, this.getCritIDS(), file.name);
            /*let formData:FormData = new FormData();
            formData.append('uploadFile', file, file.name);  // Formulaire qui va contenir mon fichier*/
            /*let headers = new Headers();
            headers.append('Accept', 'application/json');*/
        }
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
    __metadata("design:paramtypes", [trace_service_1.TraceService, categorie_service_1.CategorieService, critere_service_1.CritereService])
], PageCatComponent);
exports.PageCatComponent = PageCatComponent;
//# sourceMappingURL=page-cat.component.js.map