"use strict";
var router_1 = require("@angular/router");
var page_cat_component_1 = require("./page-cat.component");
var page_ajout_admin_component_1 = require("./page-ajout-admin.component");
var index_component_1 = require("./index.component");
var choix_component_1 = require("./choix.component");
var page_modif_profil_component_1 = require("./page-modif-profil.component");
var ajout_cat_crit_component_1 = require("./ajout-cat-crit.component");
var pagemdp_component_1 = require("./pagemdp.component");
var authentification_guard_1 = require("./authentification.guard");
var gestionutil_component_1 = require("./gestionutil.component");
exports.router = [
    { path: '', redirectTo: '/choix', pathMatch: 'full' },
    { path: 'MDP', component: pagemdp_component_1.mdpcomponent },
    { path: 'ModificationProfil', component: page_modif_profil_component_1.ModifProfilComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'GestionUtilisateur', component: gestionutil_component_1.GestionUtilComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'cardiologie', component: page_cat_component_1.PageCatComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'cardiologie/ajouttrace', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'cardiologie/ajoutsupp', component: ajout_cat_crit_component_1.AjoutSuppComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'neurologie', component: page_cat_component_1.PageCatComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'neurologie/ajouttrace', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'neurologie/ajoutsupp', component: ajout_cat_crit_component_1.AjoutSuppComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: '', redirectTo: '/choix', pathMatch: 'full' },
    { path: 'categorie', component: page_cat_component_1.PageCatComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'index', component: index_component_1.IndexComponent },
    { path: 'choix', component: choix_component_1.ChoixComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'ajout', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: '**', component: choix_component_1.ChoixComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app-routing.module.js.map