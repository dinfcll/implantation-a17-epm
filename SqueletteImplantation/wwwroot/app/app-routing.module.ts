
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageCatComponent} from './page-cat.component';
import { AjoutAdminComponent} from './page-ajout-admin.component';
import { IndexComponent } from './index.component';
import {ChoixComponent} from './choix.component';



export const router: Routes = 
[
  { path: '', redirectTo: '/index', pathMatch: 'full' }, 
  { path: 'categorie', component: PageCatComponent},
  { path: 'index', component: IndexComponent },
  { path: 'choix', component: ChoixComponent},
  { path: 'ajout', component: AjoutAdminComponent},
  { path: '**', component: IndexComponent}
];
 
export const routes: ModuleWithProviders = RouterModule.forRoot(router);


