import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Utilisateur } from "./utilisateur";
import { UtilisateurService } from "./utilisateur.service";

declare var jBox: any;

@Component ({
    selector: 'gestion-util',
    templateUrl: 'app/html/gestionutil.component.html',
    styleUrls: [ 'app/css/gestionutil.component.css' ]
})

export class GestionUtilComponent 
{
    Affiche: boolean = false;

    constructor(private http: Http, private utilisateurService: UtilisateurService) { }

    public InfoCreationUtil(): boolean
    {
        return this.Affiche;
    }
    public AfficheAjoutUtilisateur(): void
    {
        
        if (this.Affiche === false)
        {
            this.Affiche = true;
        }
        else
        {
            this.Affiche = false;
        }
    }
    public AjoutUtilisateur(f: NgForm): void
    {
        console.log(f.value);
        var Util: Utilisateur = new Utilisateur(null, f.value.prenom as string, f.value.nom as string, null, f.value.utilisateur as string, f.value.courriel as string, null);
        
        var droitutil: number; 
        if(f.value.admin === true)
        {
            Util.utiltype = 0;
        }
        else
        {
            Util.utiltype = 1;
        }
        this.utilisateurService.CreationUtil(Util).subscribe(Reponse => {
            console.log("XYZ" + Reponse)
        });
    }
}