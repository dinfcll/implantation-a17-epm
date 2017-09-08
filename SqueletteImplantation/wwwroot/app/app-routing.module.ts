import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCatComponent} from './page-cat.component';



export const routes: Routes = 
[
  { path: '', redirectTo: '/', pathMatch: 'full' },  // Incertain
  { path: 'categorie', component: PageCatComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule 
{

}
