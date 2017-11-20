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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise"); // Pour accéder à la méthode .toPromise()
var CategorieService = (function () {
    function CategorieService(http) {
        this.http = http;
        this.CategoriesURL = 'api/categorie'; // URL de l'API
        this.CatDomURL = 'api/CategorieDomaine/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' }); //Spécifie le type de données voulues
    }
    //Envoie une requête d'obtention des catégories au "controller".
    CategorieService.prototype.getCategories = function (id) {
        return this.http.get(this.CatDomURL + id);
    };
    //Permet d'envoyer une requête de suppression d'une certaine catégorie au "controller".
    CategorieService.prototype.deleteCategorie = function (id) {
        var url = "api/delcat/" + id;
        return this.http.delete(url);
    };
    //Permet d'envoyer une requête HTTP d'ajout d'une catégorie'.
    CategorieService.prototype.addCategorie = function (catdto) {
        return this.http.post("api/ajoutcat", catdto);
    };
    CategorieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CategorieService);
    return CategorieService;
}());
exports.CategorieService = CategorieService;
//# sourceMappingURL=categorie.service.js.map