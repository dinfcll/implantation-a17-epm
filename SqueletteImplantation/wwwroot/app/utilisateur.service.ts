
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { Utilisateur } from './utilisateur';

@Injectable()
export class UtilisateurService {

    baseUrl: string = '';

    constructor(private http: Http) { }

    public reset(email: string) {
        this.baseUrl = "api/utilisateur/reset/";
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        
        return this.http.post(this.baseUrl + email, JSON.stringify({ email }), { headers });
    }


    public ModifierNomUtilisateur(NouveauNomUtilisateur : string)
    {
        //this.http.patch()
    }

    public ModifierEmail(NouveauEmail : string)
    {

    }

    public ModifierMotDePasse(NouveauMotDePasse : string)
    {

    }
}
