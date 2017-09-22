import { Utilisateur } from './utilisateur';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UtilisateurService
{
    private UtilisateurURL = 'api/utilisateur/login';

    constructor(private http: Http) { }

    postUtilisateur(util: Utilisateur)
    {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.UtilisateurURL, JSON.stringify({ "UtilPWD": util.UtilPWD, "UtilUserName": util.UtilUserName }), { headers });
    }
} 