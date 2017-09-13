import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component ({
    selector: 'my-choix',
    templateUrl: 'app/html/choix.component.html',
    styleUrls: [ 'app/css/choix.component.css' ]
})

export class ChoixComponent 
{ 
    constructor(private router: Router) { }

    /*Connexion(): void 
    {
        this.router.navigateByUrl('/categorie');
        console.log("test");
    }*/
}