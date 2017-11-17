
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
        let headers = new Headers();
        let URL = "api/utilisateur/modifiernom/";
        let CurrentUser = JSON.parse(localStorage.getItem("ConnectedUser"));

        headers.append('Content-type', 'application/json');

        return this.http.patch(URL, JSON.stringify({"UtilId": CurrentUser.IdUtil, "UtilUserName": NouveauNomUtilisateur}), { headers });
    }

    public ModifierEmail(NouveauEmail : string)
    {

    }

    public ModifierMotDePasse(NouveauMotDePasse : string)
    {

    }

    public getUtils()
    {
        let URL = "api/utilisateur/liste/";
        return this.http.get(URL);
    }

    public CreationUtil(nouveauutilisateur: Utilisateur)
    {
        this.baseUrl = "api/utilisateur/creationutilisateur";
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        
        console.log(nouveauutilisateur);
        return this.http.post(this.baseUrl, nouveauutilisateur);
    }
}
