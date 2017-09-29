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
var CritereService = (function () {
    function CritereService(http) {
        this.http = http;
        this.CriteresURL = 'api/criterecat/'; // URL de l'API
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' }); //Spécifie le type de données voulues
    }
    //Envoie une requête d'obtention des critères au "controller".
    CritereService.prototype.getCriteres = function (id) {
        return this.http.get(this.CriteresURL + id);
    };
    //Permet d'envoyer une requête de suppression d'un certain critère au "controller".
    CritereService.prototype.deleteCritere = function (id) {
        var url = "api/delcrite/" + id;
        return this.http.delete(url);
    };
    //Permet d'envoyer une requête HTTP d'ajout d'un critère'.
    CritereService.prototype.addCritere = function (CritDto) {
        return this.http.post("api/ajoutcrite", JSON.stringify({ CritDto: critere_1.CritDTO }));
    };
    CritereService.prototype.GestionErreur = function (error) {
        console.error('Une erreur s\'est produite : ', error); // Plus facile à "debug"
        return Promise.reject(error.message || error);
    };
    return CritereService;
}());
CritereService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CritereService);
exports.CritereService = CritereService;
//# sourceMappingURL=critere.service.js.map