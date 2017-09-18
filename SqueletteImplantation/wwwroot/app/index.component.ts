import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from './utilisateur';
import { UtilisateurService } from './utilisateur.service';
import { NgForm } from '@angular/forms';


@Component ({
    selector: 'my-index',
    templateUrl: 'app/html/index.component.html',
    styleUrls: [ 'app/css/index.component.css' ],
    providers: [UtilisateurService]
})

export class IndexComponent 
{ 
    constructor(private router: Router, private utilServ: UtilisateurService) { }

    public Connexion(f: NgForm): void 
    {
        console.log(f);
        /*let util: Utilisateur = new Utilisateur(null, null, f.value.motdepasse ,f.value.utilisateur, null, null);
        console.log(util.UtilPWD);

       this.utilServ.postUtilisateur(util).subscribe(reponse => this.ValidationConnexion(reponse));*/
    }

    private ValidationConnexion(param: any) 
    {
        this.router.navigateByUrl("/choix");
    }
}
