import { Utilisateur } from './utilisateur';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UtilisateurService 
{
    private UtilisateurURL = 'api/UtilisateurListe/';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

     postUtilisateur(param: any)
    {
        return this.http.post(this.UtilisateurURL,param);
    }
}