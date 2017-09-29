import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from './utilisateur';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthentificationService } from "./authentification.service";


@Component ({
    selector: 'my-index',
    templateUrl: 'app/html/index.component.html',
    styleUrls: [ 'app/css/index.component.css' ]
})

export class IndexComponent 
{ 

    constructor(private router: Router, private authServ: AuthentificationService, private appcomponent: AppComponent) {
        this.appcomponent.UpdateAuthentificationPageIndex();
    }

    public Connexion(f: NgForm): void
    {
        console.log(f);
        this.authServ.login(f.value.utilisateur, f.value.motdepasse).subscribe(Reponse => {
            this.authServ.ValidationConnexion(Reponse);       
            if(this.authServ.Connecte() && this.authServ.Admin())
            {
                this.router.navigate(['choix']);
            }     
            else
            {
                if(this.authServ.Connecte() && !this.authServ.Admin())
                {
                    this.router.navigate(['choix']);
                }
                else
                {
                    if (!this.authServ.Connecte())
                    {
                        alert("Nom d'utilisateur ou mot de passe invalide!");
                    }
                }                
            }
    });
    }

    
}
