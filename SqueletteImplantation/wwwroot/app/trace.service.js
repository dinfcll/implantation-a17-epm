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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise"); // Pour accéder à la méthode .toPromise()
var TraceService = (function () {
    function TraceService(http) {
        this.http = http;
        this.TracesURL = 'api/trace'; // URL de l'API
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' }); //Spécifie le type de données voulues
    }
    //Envoie une requête d'obtention des Tracés au "controller".
    TraceService.prototype.getTraces = function () {
        return this.http.get(this.TracesURL)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.GestionErreur);
    };
    //Permet d'envoyer une requête de suppression d'un certain Tracé au "controller".
    TraceService.prototype.deleteTrace = function (id) {
        var url = this.TracesURL + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.GestionErreur);
    };
    //Permet d'envoyer une requête HTTP d'ajout de Tracé.
    TraceService.prototype.addTrace = function (trace) {
        return this.http.post(this.TracesURL, JSON.stringify({ trace: trace }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.GestionErreur);
    };
    TraceService.prototype.GestionErreur = function (error) {
        console.error('Une erreur s\'est produite : ', error); // Plus facile à "debug"
        return Promise.reject(error.message || error);
    };
    return TraceService;
}());
TraceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], TraceService);
exports.TraceService = TraceService;
var _a;
//# sourceMappingURL=trace.service.js.map