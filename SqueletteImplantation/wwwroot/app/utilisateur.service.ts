
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class UtilisateurService {

    baseUrl: string = '';

    constructor(private http: Http) { }

    reset(email: string) {
        this.baseUrl = 'api/utilisateur/reset';
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        
        return this.http.post(this.baseUrl, JSON.stringify({ email }), { headers });
    }


}
