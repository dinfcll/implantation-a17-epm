
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageCatComponent} from './page-cat.component';
import { AjoutAdminComponent} from './page-ajout-admin.component';
import { IndexComponent } from './index.component';
import { ChoixComponent } from './choix.component';

import { AuthentificationGuard } from './authentification.guard';



export const router: Routes = 
[
  { path: '', redirectTo: '/choix', pathMatch: 'full' }, 
  { path: 'categorie', component: PageCatComponent, canActivate: [AuthentificationGuard]},
  { path: 'index', component: IndexComponent },
  { path: 'choix', component: ChoixComponent, canActivate: [AuthentificationGuard]},
  { path: 'ajout', component: AjoutAdminComponent, canActivate: [AuthentificationGuard]},
  { path: '**', component: ChoixComponent}
];
 
export const routes: ModuleWithProviders = RouterModule.forRoot(router);


