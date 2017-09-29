import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AuthentificationService {
    private estConnecte : boolean;
    private estAdmin: boolean;
    private UtilisateurURL = 'api/utilisateur/login';

    constructor(private http: Http){
        if(localStorage.getItem("ConnectedUser"))
        {
            let currentUser = JSON.parse(localStorage.getItem("ConnectedUser"));
            this.estConnecte = currentUser.connect;
            this.estAdmin = currentUser.type;
        }
        else
        {
            this.estAdmin = false;
            this.estConnecte = false;
        }
    }

    login(user: string, motdepasse: string) {
        console.log(user + " / " + motdepasse);        
        let headers = new Headers();

        headers.append('Content-type', 'application/json');
        return this.http.post(this.UtilisateurURL, JSON.stringify({ "UtilPWD": motdepasse, "UtilUserName": user }), { headers });        
    }

    public ValidationConnexion(Valide: any): void
    {
        console.log(Valide);
        if (Valide.status === 200)
        {
            this.estConnecte = true;

            if (Valide._body != 0)
            {
                this.estAdmin = false;
            }
            else
            {
                this.estAdmin = true;
            }
        }
        else
        {
            this.estConnecte = false;
            this.estAdmin = false;
        }
        localStorage.setItem('ConnectedUser', JSON.stringify({ type: this.estAdmin, connect: this.estConnecte }));
    }

    public logout(): void {
        localStorage.removeItem('ConnectedUser');
        this.estConnecte = false;
        this.estAdmin = false;
    }
    Connecte()
    {
        return this.estConnecte;
    }
    Admin()
    {
        return this.estAdmin;
    }
}
