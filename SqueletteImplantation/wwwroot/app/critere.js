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
var CritDTO = (function () {
    function CritDTO(critNom, catId) {
        this.critNom = critNom;
        this.catId = catId;
    }
    return CritDTO;
}());
exports.CritDTO = CritDTO;
//# sourceMappingURL=critere.js.map