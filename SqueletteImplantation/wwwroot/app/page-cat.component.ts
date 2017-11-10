import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

//Importation des classes
import { Trace } from './trace';
import { Categorie } from './categorie';
import { Critere } from './critere';
import { TraceDTO } from './tracedto';
import {HistoriqueDTO} from './Historique';

//Importation des services 
import { TraceService } from './trace.service';
import { CategorieService } from './categorie.service';
import { CritereService } from './critere.service';
import { AuthentificationService } from "./authentification.service";
import { HistoriqueService } from "./Historique.service";


declare var jBox:any;


@Component({
  selector: 'page-cat',
  templateUrl: 'app/html/page-cat.component.html',  //Template de Étienne doit aller ici !
  styleUrls: [ 'app/css/page-cat.component.css' ],
  providers: [TraceService,CritereService,CategorieService]
})

//À compléter
export class PageCatComponent implements OnInit
{
/*  Define a traces array property.
    Inject the TraceService in the constructor and hold it in a private TraceService field.
    Call the service to get traces inside the Angular ngOnInit() lifecycle hook.
*/
    m_TabTrace: Trace[];
    m_TabCat: Categorie[];
    m_TabCrit: Critere[];
    m_TabRecherche: Critere[] = [];
    m_EnvoieTrace: TraceDTO = null;
    NomCateg: String;
    NomCrit: String;
    infostelechargement: HistoriqueDTO;


    constructor(private traceService: TraceService, private catService: CategorieService, private critService: CritereService, 
    private router:Router,private authentificationService: AuthentificationService, private historiqueService: HistoriqueService)
    {
        this.NomCateg = "Catégories";
        this.NomCrit = "Critères"
    }

    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après le constructeur dudit composant.
    ngOnInit(): void 
    {
        //Remplit les objets avec les données de la BD
        if(this.router.url.toString() == '/neurologie')
        {
        this.catService.getCategories(2).subscribe(cat => this.AffichageCat(cat));
        }
       else
       {
        this.catService.getCategories(1).subscribe(cat => this.AffichageCat(cat));
       }

    }


    private AffichageCat(param: any) 
    {
        this.m_TabCat = (param.json() as Categorie[]);

        if(this.m_TabCat.length < 8)
        {
            document.getElementsByClassName("ListeCategorie")[0].setAttribute("size", this.m_TabCat.length.toString());  
        }
        else
        {
            document.getElementsByClassName("ListeCategorie")[0].setAttribute("size", "8");            
        }
          
    }

    private AffichageCrit(param: any) {
        this.m_TabCrit = (param.json() as Critere[]);

        if(this.m_TabCrit.length < 8)
        {
            document.getElementsByClassName("ListeCritere")[0].setAttribute("size", this.m_TabCrit.length.toString());
        }
        else
        {
            document.getElementsByClassName("ListeCritere")[0].setAttribute("size", "8");
        }

    }

    private AffichageTrace(param: any) 
    {
        this.m_TabTrace = (param.json() as Trace[]);
        this.UploadJBOX(); 
    }

    OnClickListeDeroulanteCritere()
    {
	    document.getElementsByClassName("ListeCritere")[0].classList.toggle("ShowElement");
    }
	
    OnClickListeDeroulanteCategorie()
    {
	    document.getElementsByClassName("ListeCategorie")[0].classList.toggle("ShowElement");
    }
    
    //Action lors de la sélection d'une catégorie
    OnClickCategorie(categ: Categorie)
    {
         this.NomCateg = categ.catNom;
         this.NomCrit = "Critères";
         this.critService.getCriteres(categ.catId).subscribe(crit => this.AffichageCrit(crit));
    } 

    //Action lors de la sélection d'un critère
    OnClickCritere(crit: Critere)
    {
        this.NomCrit = crit.critNom;
        this.m_TabRecherche.push(crit);
    }

    //Action lors du clic sur supprimer
    OnClickSupprimer(crit: Critere)
    {
        this.m_TabRecherche.splice(this.m_TabRecherche.indexOf(crit),1);
      
    }
    
    
    //Action lors de l'appui sur le bouton recherche
    OnClickRechercher()
    {
        let RequeteId: string;
        
        RequeteId = "?"

        for (let crit of this.m_TabRecherche)
        {
            RequeteId += "Id=" + crit.critId + "&";
        }
        RequeteId = RequeteId.substr(0,RequeteId.length - 1);

        this.traceService.getTraces(RequeteId).subscribe(trac => this.AffichageTrace(trac));
      
    }

    onClickTelecharger(id: number)
    {       
        this.infostelechargement=new HistoriqueDTO(id,this.historiqueService.IdUsager);
        
        console.log(this.infostelechargement);

        this.historiqueService.addRechercheRecente(this.infostelechargement).subscribe(Reponse=> this.historiqueService.ObtenirHistorique());
        

    }


    UploadJBOX()
    {
       
        for (var i = 0; i < this.m_TabTrace.length; i++) 
        { 
            new jBox('Image');
        } 
    }
    /************************************************************** */
    ValidationUtil() : boolean
    {
        return this.authentificationService.Admin()
    }

    /**********AJOUT ET SUPPRESSION DE TRACÉS*********************/
    public onClickDeleteTrace(id: number)
    {
        if(confirm("Voulez-vous vraiment supprimer définitivement le tracé #" + id  + "?"))
         {
            this.traceService.deleteTrace(id).subscribe(reponse => 
                {
                    this.AffichageRepDel(reponse);
                    this.OnClickRechercher();
                });
            
         }
         else
         {
             console.log("ABORT");
         }

    }

    public onClickAddTrace()
    {
        if(this.router.url.toString() == '/neurologie')
        {
            this.router.navigateByUrl('/neurologie/ajouttrace');
        }
        else
        {
             this.router.navigateByUrl('/cardiologie/ajouttrace');
        }
    }

    private AffichageRepDel(param: any) // Si le param est une string !
    {
        console.log(param);
    }

}