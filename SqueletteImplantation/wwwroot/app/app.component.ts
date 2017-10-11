import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from "./authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app/html/app.component.html', //template de base va ici
  styleUrls: ['app/css/app.component.css']
})

export class AppComponent {

  constructor(
    private router: Router,
    private authentificationService: AuthentificationService) {
  }
  public UpdateAuthentificationPageIndex(): void {
    localStorage.removeItem('ConnectedUser');
    this.authentificationService.logout();
  }
  public UpdateAuthentification(): void {
    this.authentificationService.Connecte();
    this.authentificationService.Admin();
    this.authentificationService.Domaine();
  }

  public ChoixDomaine(): void {
    this.authentificationService.DomaineChange();
  }

  Deconnexion() {
    localStorage.removeItem('ConnectedUser');
    this.authentificationService.logout();
    this.router.navigateByUrl('index');
  }


  Reroutage(type: Number): void {
    
    if (type === 0 && this.DetectionPage() == 'neurologie') //tu sais déjà qu'il est admin
    {
      this.router.navigateByUrl('neurologie/ajouttrace');
    }
    else
      if (type === 0 && this.DetectionPage() === 'cardiologie') {
        this.router.navigateByUrl('cardiologie/ajouttrace');
      }
      else
        if (type === 1 && this.DetectionPage() == 'neurologie') {
          this.router.navigateByUrl('neurologie/ajoutsupp');
        }
        else
          if (type === 1 && this.DetectionPage() == 'cardiologie') {
            this.router.navigateByUrl('cardiologie/ajoutsupp');
          }
          else
            if (type === 2) {
              this.router.navigateByUrl('choix');
            }

  }

  DetectionPage(): string // Pour savoir si on est dans la catégorie cardio ou neuro
  {
    let CheminLong: string = this.router.url.toString();
    let Page: string[];

    Page = CheminLong.split('/', 2);

    return Page[1];
  }
}
