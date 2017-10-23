import { Component } from '@angular/core';
import { AppComponent } from './app.component';


@Component ({
    selector: 'mod-profil',
    templateUrl: 'app/html/page-modif-profil.html',
    styleUrls: [ 'app/css/page-modif-profil.css' ]
})


export class ModifProfilComponent
{
    constructor(private appcomponent: AppComponent){}


}