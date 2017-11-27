import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { UtilisateurService } from './utilisateur.service';
import { AuthentificationService } from "./authentification.service";
import { Router } from '@angular/router';

declare var jBox: any;

@Component ({
    selector: 'mod-profil',
    templateUrl: 'app/html/page-modif-profil.html',
    styleUrls: [ 'app/css/page-modif-profil.css' ],
    providers: [UtilisateurService]
})


export class ModifProfilComponent
{
    private NomUtilNouv: string;
    private NomUtilConf: string;
    private EmailNouv: string;
    private EmailConf: string;
    private MdpNouv: string;
    private MdpConf: string;
    
    constructor(private appcomponent: AppComponent, private utilisateurservice: UtilisateurService, private authentificationservice: AuthentificationService, private router:Router){
        this.NomUtilNouv = "";
        this.NomUtilConf = "";
        this.EmailNouv = "";
        this.EmailConf = "";
        this.MdpNouv = "";
        this.MdpConf = "";
        this.authentificationservice.InitDomaine();
    }

    private ngOnInit()
    {
        document.getElementById("SauvegarderNomUtil").style.backgroundColor = "lightgray";
        document.getElementById("SauvegarderEmail").style.backgroundColor = "lightgray";
        document.getElementById("SauvegarderMdp").style.backgroundColor = "lightgray";
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
                else
                {
                    (<HTMLInputElement>document.getElementById("SauvegarderNomUtil")).disabled = true;
                    document.getElementById("SauvegarderNomUtil").style.backgroundColor = "lightgray";
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
                else
                {
                    (<HTMLInputElement>document.getElementById("SauvegarderEmail")).disabled = true;
                    document.getElementById("SauvegarderEmail").style.backgroundColor = "lightgray";
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
                else
                {
                    (<HTMLInputElement>document.getElementById("SauvegarderMdp")).disabled = true;
                    document.getElementById("SauvegarderMdp").style.backgroundColor = "lightgray";
                }

                return;
            }
        }

        (<HTMLInputElement>document.getElementById("SauvegarderMdp")).disabled = true;
        document.getElementById("SauvegarderMdp").style.backgroundColor = "lightgray";
        document.getElementById("MdpConf").style.borderColor = "red";
    }

    public ValidationPage() : boolean
    {
        let CheminLong: string = this.router.url.toString();
        let Page: string[];
       
        
        if(CheminLong == "/ModificationProfilUtilisateurs")
        {
            return false;
        }

   
        return true;
    }

    private SauvegarderNomUtilisateur()
    {
        this.utilisateurservice.ModifierNomUtilisateur(this.NomUtilNouv, this.ValidationPage()).subscribe(Resultat => {

            if(Resultat.ok == true)
            {
                if(Resultat.text() == "Fait")
                {
                    new jBox( 'Notice', {
                        content: 'Changement effectué',
                        color: 'green',
                        stack: false
                    });
                }
                else
                {
                    new jBox('Notice', {
                        content: Resultat.text(),
                        color: 'red',
                        stack: false
                    });
                }
            }
            else
            {
                new jBox('Notice', {
                    content: 'Erreur de connexion avec le serveur',
                    color: 'red',
                    stack: false
                });
            }
        });
    }
    
    private SauvegarderEmail() : void
    {
        this.utilisateurservice.ModifierEmail(this.EmailNouv,this.ValidationPage()).subscribe(Resultat => {

            if(Resultat.ok == true)
            {
                if(Resultat.text() == "Fait")
                {
                    new jBox( 'Notice', {
                        content: 'Changement effectué',
                        color: 'green',
                        stack: false
                    });
                }
                else
                {
                    new jBox('Notice', {
                        content: Resultat.text(),
                        color: 'red',
                        stack: false
                    });
                }
            }
            else
            {
                new jBox('Notice', {
                    content: 'Erreur de connexion avec le serveur',
                    color: 'red',
                    stack: false
                });
            }
        });
    }

    private SauvegarderMotDePasse() : void
    {
        this.utilisateurservice.ModifierMotDePasse(this.MdpNouv,this.ValidationPage()).subscribe(Resultat =>{

            if(Resultat.ok == true)
            {
                if(Resultat.text() == "Fait")
                {
                    new jBox( 'Notice', {
                        content: 'Changement effectué',
                        color: 'green',
                        stack: false
                    });
                }
                else
                {
                    new jBox('Notice', {
                        content: Resultat.text(),
                        color: 'red',
                        stack: false
                    });
                }
            }
            else
            {
                new jBox('Notice', {
                    content: 'Erreur de connexion avec le serveur',
                    color: 'red',
                    stack: false
                });
            }
        });
    }
}
