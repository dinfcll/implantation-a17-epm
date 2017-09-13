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
//Importation des services 
var trace_service_1 = require("./trace.service");
var categorie_service_1 = require("./categorie.service");
var critere_service_1 = require("./critere.service");
var PageCatComponent = (function () {
    function PageCatComponent(traceService, catService, critService) {
        this.traceService = traceService;
        this.catService = catService;
        this.critService = critService;
        /*  Define a traces array property.
            Inject the TraceService in the constructor and hold it in a private TraceService field.
            Call the service to get traces inside the Angular ngOnInit() lifecycle hook.
        */
        this.m_TabTrace = [];
        this.m_TabCrit = [];
    }
    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après le constructeur dudit composant.
    PageCatComponent.prototype.ngOnInit = function () {
        //Remplit les objets des données de la BD
        var _this = this;
        this.catService.getCategories(1).subscribe(function (cat) { return _this.Affichage(cat); });
        this.critService.getCriteres(1).subscribe(function (crit) { return console.log(crit.json()); });
        //this.critService.getCriteres(1).then(retourFonction => {this.m_TabCrit = retourFonction}).then(x => console.log(JSON.stringify(this.m_TabCrit)));      
        this.traceService.getTraces().then(function (retourFonction) { return _this.m_TabTrace = retourFonction; });
    };
    PageCatComponent.prototype.Affichage = function (param) {
        this.m_TabCat = param.json();
        console.log(this.m_TabCat);
    };
    PageCatComponent.prototype.OnClickListeDeroulanteCategorie = function () {
        document.getElementById("ListeCategorie").classList.toggle("showCategorie");
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