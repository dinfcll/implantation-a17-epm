import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {
    estConnecte = false;
    estAdmin = false;

    login(user: string, motdepasse: string) {
        console.log(user + " / " + motdepasse);
        this.estConnecte = true;

        return new Promise(function(resolve, reject){
            resolve(true);
        })
    }

    logout() {
        this.estConnecte = false;
        this.estAdmin = false;

        return new Promise(function(resolve,reject){
            resolve(false);
        })
    }
}
