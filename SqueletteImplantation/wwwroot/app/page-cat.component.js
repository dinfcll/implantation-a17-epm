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
            Inject the TraceService in the constructor and hold it in a private heroService field.
            Call the service to get traces inside the Angular ngOnInit() lifecycle hook.
        */
        this.m_TabTrace = [];
        this.m_TabCat = [];
        this.m_TabCrit = [];
    }
    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après la création dudit composant.
    PageCatComponent.prototype.ngOnInit = function () {
        /*this.critService.getCriteres().then(m_TabTrace => this.m_TabTrace); // Incertain !!
        this.catService.getCategories();
        this.traceService.getTraces(); // Je dois trouver une façon de récupérer le retour !*/
        //.then(heroes => this.heroes = heroes.slice(1, 5));
    };
    return PageCatComponent;
}());
PageCatComponent = __decorate([
    core_1.Component({
        selector: 'page-cat',
        templateUrl: 'app/html/page-cat.component.html',
        styleUrls: ['app/css/page-cat.component.css']
    })
    //À compléter
    ,
    __metadata("design:paramtypes", [trace_service_1.TraceService, categorie_service_1.CategorieService, critere_service_1.CritereService])
], PageCatComponent);
exports.PageCatComponent = PageCatComponent;
//# sourceMappingURL=page-cat.component.js.map