import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app/html/app.component.html', //template de base va ici
  styleUrls: ['app/css/app.component.css']
})

export class AppComponent 
{
  constructor (private router: Router){
  }  
  TypeUser: boolean;
  public SetType(Type: boolean){
    this.TypeUser = Type;
  }
  
  Deconnexion(){
    this.SetType(false);
    this.router.navigateByUrl('');
  }

  Reroutage(type:Number) : void
  {
    console.log(type);
    if(type === 0)
    {
       this.router.navigateByUrl('ajout');
    }
    else
      if(type === 1)
      {
        //  this.router.navigateByUrl('ajout');
      }
      else
      {
        this.router.navigateByUrl('choix');
      }
  }
}
