import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';

declare var jBox: any;

@Component ({
    selector: 'gestion-util',
    templateUrl: 'app/html/gestionutil.component.html',
    styleUrls: [ 'app/css/gestionutil.component.css' ]
})

export class GestionUtilComponent 
{
    Affiche: boolean = false;

    public InfoCreationUtil(): boolean
    {
        return this.Affiche;
    }
    public AfficheAjoutUtilisateur(): void
    {
        
        if (this.Affiche === false)
        {
            this.Affiche = true;
        }
        else
        {
            this.Affiche = false;
        }
    }
    public AjoutUtilisateur(f: NgForm): void
    {
        console.log(f.value);
        var droitutil: number;
        if(f.value.admin === true)
        {
            droitutil = 0;
        }
        else
        {
            droitutil = 1;
        }
    }
}