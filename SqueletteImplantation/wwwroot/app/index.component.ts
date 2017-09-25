import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from './utilisateur';
import { UtilisateurService } from './utilisateur.service';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';


@Component ({
    selector: 'my-index',
    templateUrl: 'app/html/index.component.html',
    styleUrls: [ 'app/css/index.component.css' ],
    providers: [UtilisateurService]
})

export class IndexComponent 
{ 
    
    constructor(private router: Router, private utilServ: UtilisateurService, private appcomponent: AppComponent) {
    }

    public Connexion(f: NgForm): void
    {
        console.log(f);
        let util: Utilisateur = new Utilisateur(null, null, null, f.value.motdepasse, f.value.utilisateur, null, null);
        console.log(util.UtilPWD);
        this.utilServ.postUtilisateur(util).subscribe(Reponse => this.ValidationConnexion(Reponse));
    }

    private ValidationConnexion(Valide: any)
    {
        console.log(Valide);
        if (Valide.status === 200)
        {
            if (Valide._body != 0)
            {
                this.appcomponent.SetType(false);
            }
            else
            {
                this.appcomponent.SetType(true);
            }
            this.router.navigateByUrl('/choix');
        }
    }
}
