import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from './utilisateur';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthentificationService } from "./authentification.service";
import { UtilisateurService } from "./utilisateur.service";
import { Response } from '@angular/http';

declare var jBox :any;

@Component ({
    selector: 'mdp-oublie',
    templateUrl: 'app/html/pagemdp.component.html',
    styleUrls: [ 'app/css/pagemdp.component.css' ]
})

export class mdpcomponent
{ 
    private courriel: string;

    constructor(private router: Router, private utilisateurService: UtilisateurService){}

    public Cancel(): void
    {
        this.router.navigateByUrl('choix');
    }
    public ResetMDP() {        
        this.utilisateurService.reset(this.courriel).subscribe(res => {
            if(res){
                new jBox('notice',{
                    content: 'Le mot de passe a été réinitialisé.',
                    color: 'green',
                    autoclose: 2000
                });
            }
            else
            {
                new jBox('notice',{
                    content: 'Échec',
                    color: 'red',
                    autoclose: 2000
                });
                this.router.navigateByUrl('choix');
            }
        })
    }
}
