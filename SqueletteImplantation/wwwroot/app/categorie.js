"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Categorie = (function () {
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
var CatDTO = (function () {
    function CatDTO(NomCat, IdDom) {
        this.NomCat = NomCat;
        this.IdDom = IdDom;
    }
    return CatDTO;
}());
exports.CatDTO = CatDTO;
//# sourceMappingURL=categorie.js.map