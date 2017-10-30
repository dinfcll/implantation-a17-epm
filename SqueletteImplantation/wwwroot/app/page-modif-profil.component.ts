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

    ngOnInit()
    {
        document.getElementById("btnSauvegarderNomUtil").style.backgroundColor = "lightgray";
    }

    private RestrictionCharactere(event : any)
    {
        let Touche = event.keyCode;

        if(!(Touche >= 65 && Touche <= 90 || Touche === 8 || Touche === 95 || Touche === 127 || Touche === 64))
        {
            event.preventDefault();
        }
    }

    private ComparaisonChangement()
    {
        let PartieVerif;

        if(this.m_NomUtilConf.length <= this.m_NomUtilNouv.length)
        {
            PartieVerif = this.m_NomUtilNouv.slice(0, this.m_NomUtilConf.length);

            if(PartieVerif === this.m_NomUtilConf && this.m_NomUtilConf != "")
            {
                document.getElementById("NomUtilConf").style.borderColor = "green";
                

                if(this.m_NomUtilNouv === this.m_NomUtilConf)
                {
                    (<HTMLInputElement>document.getElementById("btnSauvegarderNomUtil")).disabled = false;
                    document.getElementById("btnSauvegarderNomUtil").style.backgroundColor = "";
                }
            }
            else
            {
                (<HTMLInputElement>document.getElementById("btnSauvegarderNomUtil")).disabled = true;
                document.getElementById("btnSauvegarderNomUtil").style.backgroundColor = "lightgray";
                document.getElementById("NomUtilConf").style.borderColor = "red";
            }
        }
        else
        {
            (<HTMLInputElement>document.getElementById("btnSauvegarderNomUtil")).disabled = true;
            document.getElementById("btnSauvegarderNomUtil").style.backgroundColor = "lightgray";
            document.getElementById("NomUtilConf").style.borderColor = "red";
        }
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