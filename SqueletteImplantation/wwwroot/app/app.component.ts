import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from "./authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app/html/app.component.html', //template de base va ici
  styleUrls: ['app/css/app.component.css']
})

export class AppComponent 
{
  public Admin: boolean;
  public Connecte: boolean;
  
  constructor (
    private router: Router,
    private authentificationService: AuthentificationService){
      this.Admin = this.authentificationService.Admin();
      this.Connecte = this.authentificationService.Connecte();
  }
  
  Deconnexion(){
    this.router.navigateByUrl('');
  }
}
