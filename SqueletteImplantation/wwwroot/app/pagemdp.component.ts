import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from './utilisateur';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthentificationService } from "./authentification.service";

@Component ({
    selector: 'mdp-oublie',
    templateUrl: 'app/html/pagemdp.component.html',
    styleUrls: [ 'app/css/pagemdp.component.css' ]
})

export class mdpcomponent
{ 
    constructor(private router: Router){}

    public Cancel(c: NgForm): void
    {
        console.log("12Test");
        this.router.navigateByUrl('choix');
    }   
}
