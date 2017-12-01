import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Utilisateur } from "./utilisateur";
import { UtilisateurService } from "./utilisateur.service";
import { AuthentificationService } from "./authentification.service";
import { Router } from '@angular/router';

declare var jBox: any;

@Component ({
    selector: 'gestion-util',
    templateUrl: 'app/html/gestionutil.component.html',
    styleUrls: [ 'app/css/gestionutil.component.css' ]
})

export class GestionUtilComponent 
{
    Affiche: boolean = true;
    m_TabUtil: Utilisateur[];
    

    constructor(private http: Http, private utilisateurService: UtilisateurService, private router: Router, private authentificationservice: AuthentificationService) 
    { 
        this.utilisateurService.getUtils().subscribe(retour => this.AfficheUtils(retour));
    }

    public InfoCreationUtil(): boolean
    {
        return this.Affiche;
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

    public AfficheUtils(param: any)
    {
        this.m_TabUtil = (param.json() as Utilisateur[]);
    }

    public onClickDeleteUtil(id: number)
    {
        if(confirm("Voulez-vous vraiment supprimer définitivement l'utilisateur' #" + id  + "?"))
         {
            this.utilisateurService.deleteUtil(id).subscribe(reponse => 
                {
                    this.utilisateurService.getUtils().subscribe(retour => this.AfficheUtils(retour));
                });
            
         }
         

    }

    public onClickModifUtil(utilId:number)
    {
        localStorage.setItem('ModifUser', JSON.stringify(utilId));
        this.router.navigateByUrl('ModificationProfilUtilisateurs');
    }

}