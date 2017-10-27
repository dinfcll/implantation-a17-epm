import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { ModificationUtilisateurService } from './ModificationUtilisateur.service'


@Component ({
    selector: 'mod-profil',
    templateUrl: 'app/html/page-modif-profil.html',
    styleUrls: [ 'app/css/page-modif-profil.css' ],
    providers: [ModificationUtilisateurService]
})


export class ModifProfilComponent
{
    private m_NomUtilNouv: String;
    private m_NomUtilConf: String;
    private m_EmailNouv: String;
    private m_EmailConf: String;
    private m_MdpNouv: String;
    private m_MdpConf: String;
    
    constructor(private appcomponent: AppComponent, private modificationutilisateurservice: ModificationUtilisateurService){
        this.m_NomUtilNouv="";
        this.m_NomUtilConf="";
        this.m_EmailNouv="";
        this.m_EmailConf="";
        this.m_MdpNouv="";
        this.m_MdpConf="";
    }

    private ChangementNomUtilNouv(event : any)
    {
        var key = event.keyCode;

        if((key >= 65 && key <= 90) || key == 8)
        {
            document.getElementById("NomUtilNouv").style.borderColor = "red";
        }
        else
        {
            event.preventDefault();
        }

        

        /*const pattern = /[a-z\A-Z\0-9\ ]/;
        let inputChar = String.fromCharCode(event.charCode);

        if (!pattern.test(inputChar))
        {
            // invalid character, prevent input
            event.preventDefault();
        }
        else
        {
            if(this.m_NomUtilNouv.length < 3)
            {
                document.getElementById("NomUtilNouv").setAttribute("style", "border-color: red");
            }
            else
            {

                for(var Indice = this.m_NomUtilNouv.length - 1; Indice >= 0 && Touche ; Indice++)
                {

                }
            }
        }*/


    }







    private SauvegarderNomUtilisateur() : void
    {
        alert("passé");

    }
    
    private SauvegarderEmail() : void
    {
        
    }

    private SauvegarderMotDePasse() : void
    {
        
    }
}