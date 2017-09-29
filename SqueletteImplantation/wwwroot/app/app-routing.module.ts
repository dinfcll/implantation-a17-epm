
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageCatComponent} from './page-cat.component';
import { AjoutAdminComponent} from './page-ajout-admin.component';
import { IndexComponent } from './index.component';
import {ChoixComponent} from './choix.component';



export const router: Routes = 
[
  { path: '', redirectTo: '/index', pathMatch: 'full' }, 
  { path: 'cardiologie', component: PageCatComponent},
  { path: 'cardiologie/ajouttrace', component: AjoutAdminComponent},
  { path: 'cardiologie/ajoutcritere', component: AjoutAdminComponent},
  { path: 'cardiologie/ajoutcategorie', component: AjoutAdminComponent},
  { path: 'neurologie', component: PageCatComponent},
  { path: 'neurologie/ajouttrace', component: AjoutAdminComponent},
  { path: 'neurologie/ajoutcritere', component: AjoutAdminComponent},
  { path: 'neurologie/ajoutcategorie', component: AjoutAdminComponent},
  { path: 'index', component: IndexComponent },
  { path: 'choix', component: ChoixComponent},
  { path: '**', component: IndexComponent}
];
 
export const routes: ModuleWithProviders = RouterModule.forRoot(router);


