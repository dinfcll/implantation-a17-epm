"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
//Components
var app_component_1 = require("./app.component");
var index_component_1 = require("./index.component");
var page_cat_component_1 = require("./page-cat.component");
var choix_component_1 = require("./choix.component");
var page_ajout_admin_component_1 = require("./page-ajout-admin.component");
var authentification_guard_1 = require("./authentification.guard");
var authentification_service_1 = require("./authentification.service");
var ajout_cat_crit_component_1 = require("./ajout-cat-crit.component");
var pagemdp_component_1 = require("./pagemdp.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.routes, http_1.HttpModule, forms_1.FormsModule],
            declarations: [index_component_1.IndexComponent, page_cat_component_1.PageCatComponent, app_component_1.AppComponent, choix_component_1.ChoixComponent, page_ajout_admin_component_1.AjoutAdminComponent, pagemdp_component_1.mdpcomponent, ajout_cat_crit_component_1.AjoutSuppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [authentification_guard_1.AuthentificationGuard, authentification_service_1.AuthentificationService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map