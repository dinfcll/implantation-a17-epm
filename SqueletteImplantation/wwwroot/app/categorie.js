"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Categorie = /** @class */ (function () {
    function Categorie(catId, catNom, domId, domaine, criteres) {
        this.catId = catId;
        this.catNom = catNom;
        this.domId = domId;
        this.domaine = domaine;
        this.criteres = criteres;
    }
    return Categorie;
}());
exports.Categorie = Categorie;
var CategorieDTO = /** @class */ (function () {
    function CategorieDTO(NomCat, IdDom) {
        this.NomCat = NomCat;
        this.IdDom = IdDom;
    }
    return CategorieDTO;
}());
exports.CategorieDTO = CategorieDTO;
//# sourceMappingURL=categorie.js.map