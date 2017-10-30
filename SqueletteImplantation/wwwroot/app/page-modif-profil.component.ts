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
    private NomUtilNouv: string;
    private NomUtilConf: string;
    private EmailNouv: string;
    private EmailConf: string;
    private MdpNouv: string;
    private MdpConf: string;
    
    constructor(private appcomponent: AppComponent, private modificationutilisateurservice: ModificationUtilisateurService){
        this.NomUtilNouv="";
        this.NomUtilConf="";
        this.EmailNouv="";
        this.EmailConf="";
        this.MdpNouv="";
        this.MdpConf="";
    }

    ngOnInit()
    {
        document.getElementById("SauvegarderNomUtil").style.backgroundColor = "lightgray";
        document.getElementById("SauvegarderEmail").style.backgroundColor = "lightgray";
        document.getElementById("SauvegarderMdp").style.backgroundColor = "lightgray";
    }

    private RestrictionCharactere(event : any) : void
    {
        let Touche = event.keyCode;

        if(!(Touche >= 65 && Touche <= 90 || Touche === 8 || Touche === 95 || Touche === 127 || Touche === 64))
        {
            event.preventDefault();
        }
    }

    private ComparaisonChangementNomUtil() : void
    {
        let PartieAVerif;

        if(this.NomUtilConf.length <= this.NomUtilNouv.length)
        {
            PartieAVerif = this.NomUtilNouv.slice(0, this.NomUtilConf.length);

            if(PartieAVerif === this.NomUtilConf && this.NomUtilConf != "")
            {
                document.getElementById("NomUtilConf").style.borderColor = "green";
                

                if(this.NomUtilNouv === this.NomUtilConf)
                {
                    (<HTMLInputElement>document.getElementById("SauvegarderNomUtil")).disabled = false;
                    document.getElementById("SauvegarderNomUtil").style.backgroundColor = "";
                }

                return;
            }
        }

        (<HTMLInputElement>document.getElementById("SauvegarderNomUtil")).disabled = true;
        document.getElementById("SauvegarderNomUtil").style.backgroundColor = "lightgray";
        document.getElementById("NomUtilConf").style.borderColor = "red";
    }


    private ComparaisonChangementEmail() : void
    {
        let PartieAVerif;

        if(this.EmailConf.length <= this.EmailNouv.length)
        {
            PartieAVerif = this.EmailNouv.slice(0, this.EmailConf.length);

            if(PartieAVerif === this.EmailConf && this.EmailConf != "")
            {
                document.getElementById("EmailConf").style.borderColor = "green";
                

                if(this.NomUtilNouv === this.NomUtilConf)
                {
                    (<HTMLInputElement>document.getElementById("SauvegarderEmail")).disabled = false;
                    document.getElementById("SauvegarderEmail").style.backgroundColor = "";
                }

                return;
            }
        }

        (<HTMLInputElement>document.getElementById("SauvegarderEmail")).disabled = true;
        document.getElementById("SauvegarderEmail").style.backgroundColor = "lightgray";
        document.getElementById("EmailConf").style.borderColor = "red";
    }


    private ComparaisonChangementMdp() : void
    {
        let PartieAVerif;

        if(this.MdpConf.length <= this.MdpNouv.length)
        {
            PartieAVerif = this.MdpNouv.slice(0, this.MdpConf.length);

            if(PartieAVerif === this.MdpConf && this.MdpConf != "")
            {
                document.getElementById("MdpConf").style.borderColor = "green";
                

                if(this.MdpNouv === this.MdpConf)
                {
                    (<HTMLInputElement>document.getElementById("SauvegarderMdp")).disabled = false;
                    document.getElementById("SauvegarderMdp").style.backgroundColor = "";
                }

                return;
            }
        }

        (<HTMLInputElement>document.getElementById("SauvegarderMdp")).disabled = true;
        document.getElementById("SauvegarderMdp").style.backgroundColor = "lightgray";
        document.getElementById("MdpConf").style.borderColor = "red";
    }





    private SauvegarderNomUtilisateur() : void
    {
        this.modificationutilisateurservice.ModifierNomUtilisateur(this.NomUtilNouv);

    }
    
    private SauvegarderEmail() : void
    {
        
    }

    private SauvegarderMotDePasse() : void
    {
        
    }
}