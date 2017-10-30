"use strict";
var Critere = (function () {
    function Critere(critId, critNom, catId) {
        this.critId = critId;
        this.critNom = critNom;
        this.catId = catId;
    }
    return Critere;
}());
exports.Critere = Critere;
var CritereDTO = (function () {
    function CritereDTO(NomCrit, IdCat) {
        this.NomCrit = NomCrit;
        this.IdCat = IdCat;
    }
    return CritereDTO;
}());
exports.CritereDTO = CritereDTO;
//# sourceMappingURL=critere.js.map