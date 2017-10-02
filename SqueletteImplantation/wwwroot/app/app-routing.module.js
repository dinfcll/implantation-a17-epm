"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var page_cat_component_1 = require("./page-cat.component");
var page_ajout_admin_component_1 = require("./page-ajout-admin.component");
var index_component_1 = require("./index.component");
var choix_component_1 = require("./choix.component");
var authentification_guard_1 = require("./authentification.guard");
exports.router = [
    { path: '', redirectTo: '/choix', pathMatch: 'full' },
    { path: 'cardiologie', component: page_cat_component_1.PageCatComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'cardiologie/ajouttrace', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'cardiologie/ajoutcritere', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'cardiologie/ajoutcategorie', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'neurologie', component: page_cat_component_1.PageCatComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'neurologie/ajouttrace', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'neurologie/ajoutcritere', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'neurologie/ajoutcategorie', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: '', redirectTo: '/choix', pathMatch: 'full' },
    { path: 'categorie', component: page_cat_component_1.PageCatComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: 'index', component: index_component_1.IndexComponent },
    { path: 'choix', component: choix_component_1.ChoixComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: '**', component: index_component_1.IndexComponent },
    { path: 'ajout', component: page_ajout_admin_component_1.AjoutAdminComponent, canActivate: [authentification_guard_1.AuthentificationGuard] },
    { path: '**', component: choix_component_1.ChoixComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app-routing.module.js.map