"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var page_cat_component_1 = require("./page-cat.component");
var index_component_1 = require("./index.component");
var choix_component_1 = require("./choix.component");
exports.router = [
    { path: '', redirectTo: '/categorie', pathMatch: 'full' },
    { path: 'categorie', component: page_cat_component_1.PageCatComponent },
    { path: 'index', component: index_component_1.IndexComponent },
    { path: 'choix', component: choix_component_1.ChoixComponent },
    { path: '**', component: index_component_1.IndexComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app-routing.module.js.map