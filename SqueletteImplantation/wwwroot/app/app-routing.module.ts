
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageCatComponent} from './page-cat.component';
import { AjoutAdminComponent} from './page-ajout-admin.component';
import { IndexComponent } from './index.component';
import { ChoixComponent } from './choix.component';
import { AjoutSuppComponent } from "./ajout-cat-crit.component";

import { AuthentificationGuard } from './authentification.guard';



export const router: Routes = 
[
  { path: '', redirectTo: '/choix', pathMatch: 'full' },
  { path: 'ajoutsupp', component: AjoutSuppComponent, canActivate: [AuthentificationGuard]},
  { path: 'cardiologie', component: PageCatComponent, canActivate: [AuthentificationGuard]},
  { path: 'cardiologie/ajouttrace', component: AjoutAdminComponent, canActivate: [AuthentificationGuard]},
  { path: 'cardiologie/ajoutcritere', component: AjoutAdminComponent, canActivate: [AuthentificationGuard]},
  { path: 'cardiologie/ajoutcategorie', component: AjoutAdminComponent, canActivate: [AuthentificationGuard]},
  { path: 'neurologie', component: PageCatComponent, canActivate: [AuthentificationGuard]},
  { path: 'neurologie/ajouttrace', component: AjoutAdminComponent, canActivate: [AuthentificationGuard]},
  { path: 'neurologie/ajoutcritere', component: AjoutAdminComponent, canActivate: [AuthentificationGuard]},
  { path: 'neurologie/ajoutcategorie', component: AjoutAdminComponent, canActivate: [AuthentificationGuard]},
  { path: '', redirectTo: '/choix', pathMatch: 'full' }, 
  { path: 'categorie', component: PageCatComponent, canActivate: [AuthentificationGuard]},
  { path: 'index', component: IndexComponent },
  { path: 'choix', component: ChoixComponent, canActivate: [AuthentificationGuard]},
  { path: '**', component: IndexComponent},
  { path: 'ajout', component: AjoutAdminComponent, canActivate: [AuthentificationGuard]},
  { path: '**', component: ChoixComponent}

];
 
export const routes: ModuleWithProviders = RouterModule.forRoot(router);


