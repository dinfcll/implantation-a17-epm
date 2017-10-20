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
  private IDIntervaleActivite : number;
  private IDVerification : number;
  private TempsDeVerifierActivite : boolean = false;

  constructor (
    private router: Router,
    private authentificationService: AuthentificationService){
  }
  public UpdateAuthentificationPageIndex(): void
  {
    localStorage.removeItem('ConnectedUser');
    this.authentificationService.logout();
  }
  public UpdateAuthentification(): void
  {    
    this.authentificationService.Connecte();
    this.authentificationService.Admin();
    this.authentificationService.Domaine();
  }

  public ChoixDomaine(): void
  {
    this.authentificationService.DomaineChange();
  }

  Deconnexion(){
    this.authentificationService.logout();
    this.router.navigateByUrl('index');
  }


  Reroutage(type:Number) : void
  {
    console.log(type);
    if(type === 0 && this.router.url.toString() == '/neurologie') //tu sais déjà qu'il est admin
    {
      this.router.navigateByUrl('neurologie/ajouttrace');
    }
    else
      if(type === 0 && this.router.url.toString() == '/cardiologie')
      {
        this.router.navigateByUrl('cardiologie/ajouttrace');
      }
      else
      if(type === 2)
      {
        this.router.navigateByUrl('choix');
      }

  }

  DetectionActivite() : void
  { 

    if(this.authentificationService.Connecte() === true)
    {
      if(this.IDIntervaleActivite != null)
      {
        window.clearTimeout(this.IDIntervaleActivite);
      }

      this.IDIntervaleActivite = window.setTimeout(() => this.Deconnexion(), 20000);//Bon temps = 300000
    }
  }

  VerificationActivite() : void
  {
    if(this.authentificationService.Connecte() === true)
    {
      if(this.IDVerification == null)
      {
        this.IDVerification = window.setInterval(() => this.VerificationActivite(), 3000);
      }
      else
      {
        this.TempsDeVerifierActivite = true;
      }
    }
    else
    {
      if(this.IDVerification != null)
      {
        window.clearInterval(this.IDVerification);
      }
    }
  }

  
  MouvementSouris(event: MouseEvent) : void
  {
    if(this.TempsDeVerifierActivite == true)
    {
      this.TempsDeVerifierActivite = false;
      this.DetectionActivite();
    }
  }
}
