"use strict";
var router_1 = require("@angular/router");
var page_cat_component_1 = require("./page-cat.component");
var page_ajout_admin_component_1 = require("./page-ajout-admin.component");
var index_component_1 = require("./index.component");
var choix_component_1 = require("./choix.component");
var authentification_guard_1 = require("./authentification.guard");
exports.router = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'cardiologie', component: page_cat_component_1.PageCatComponent },
    { path: 'cardiologie/ajouttrace', component: page_ajout_admin_component_1.AjoutAdminComponent },
    { path: 'cardiologie/ajoutcritere', component: page_ajout_admin_component_1.AjoutAdminComponent },
    { path: 'cardiologie/ajoutcategorie', component: page_ajout_admin_component_1.AjoutAdminComponent },
    { path: 'neurologie', component: page_cat_component_1.PageCatComponent },
    { path: 'neurologie/ajouttrace', component: page_ajout_admin_component_1.AjoutAdminComponent },
    { path: 'neurologie/ajoutcritere', component: page_ajout_admin_component_1.AjoutAdminComponent },
    { path: 'neurologie/ajoutcategorie', component: page_ajout_admin_component_1.AjoutAdminComponent },
    { path: 'index', component: index_component_1.IndexComponent },
    { path: 'choix', component: choix_component_1.ChoixComponent },
    { path: '**', component: index_component_1.IndexComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app-routing.module.js.map