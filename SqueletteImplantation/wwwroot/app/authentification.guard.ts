import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthentificationService } from './authentification.service';

@Injectable()
export class AuthentificationGuard implements CanActivate {

    /*constructor(
        private authentificationService: AuthentificationService,
        private router: Router) {}*/

    estConnecte = false;
    estAdmin = false;

    canActivate() {

        /*if(this.authentificationService.estConnecte) {
            return true;
        }

        this.router.navigate(['index']);*/
        console.log('AuthenGuard');
        return true;
    }
}
