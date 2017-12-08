import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router';

//Importation des classes
import { Trace } from './trace';
import { Categorie } from './categorie';
import { Critere } from './critere';
import { TraceDTO } from './tracedto';

//Importation des services 
import { TraceService } from './trace.service';
import { CategorieService } from './categorie.service';
import { CritereService } from './critere.service';

declare var jBox:any;


@Component({
  selector: 'page-ajout',
  templateUrl: 'app/html/page-ajout-admin.component.html',  
  styleUrls: [ 'app/css/page-ajout-admin.component.css' ],
  providers: [TraceService,CritereService,CategorieService]
})

//À compléter
export class AjoutAdminComponent implements OnInit
{
    Message: string;
    m_TabTrace: Trace[];
    m_TabCat: Categorie[];
    m_TabCrit: Critere[];
    m_TabRecherche: Critere[] = [];
    m_TabCritID: number[] = [];
    m_EnvoieTrace: TraceDTO = null;
    m_File:File;
    m_Form: FormData = null;

    constructor(private traceService: TraceService, private catService: CategorieService, private critService: CritereService, private http:Http, private router:Router)
    {
        this.Message = "Insérer le tracé ...";
    }

    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après le constructeur dudit composant.
    ngOnInit(): void 
    {
        //Remplit les objets des données de la BD
        console.log(this.router.url.toString());
        if(this.router.url.toString() == "/neurologie/ajouttrace")
        {
           this.catService.getCategories(2).subscribe(cat => this.AffichageCat(cat));
        
            this.critService.getCriteres(2).subscribe(crit => this.AffichageCrit(crit));
        }


        if(this.router.url.toString() == "/cardiologie/ajouttrace")
        {
            this.catService.getCategories(1).subscribe(cat => this.AffichageCat(cat));
        
            this.critService.getCriteres(1).subscribe(crit => this.AffichageCrit(crit));
        }
    }

    private AffichageCat(param: any) 
    {
        this.m_TabCat = (param.json() as Categorie[]);

        if(this.m_TabCat.length < 8)
        {
            if(this.m_TabCat.length > 1)
            {
                document.getElementsByClassName("ListeCategorie")[0].setAttribute("size", this.m_TabCat.length.toString()); 
            }
            else
            {
                document.getElementsByClassName("ListeCategorie")[0].setAttribute("size", "2");
            }
             
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
            if(this.m_TabCrit.length > 1)
            {
              document.getElementsByClassName("ListeCritere")[0].setAttribute("size", this.m_TabCrit.length.toString());
            }
            else
            {
                 document.getElementsByClassName("ListeCritere")[0].setAttribute("size", "2");
            }
        
        }
        else
        {
            document.getElementsByClassName("ListeCritere")[0].setAttribute("size", "8");
        }

    }

    private AffichageTrace(param: any) {
        this.m_TabTrace = (param.json() as Trace[]);
        console.log(this.m_TabTrace);
    }

    OnClickListeDeroulanteCritere()
    {
	    document.getElementsByClassName("ListeCritere")[0].classList.toggle("ShowElement");
    }
	
    
    
    //Action lors de la sélection d'une catégorie
    OnClickCategorie(categ: Categorie)
    {
        for(var i=0; i<this.m_TabCat.length;i++)
        {
            document.getElementById(this.m_TabCat[i].catId.toString()).style.background = "rgba(125, 141, 163, 0.71)";
        }
      
    
         document.getElementById(categ.catId.toString()).style.background="rgba(43, 47, 61, 0.71)";

         var offsTop = document.getElementById(categ.catId.toString()).offsetTop;
         document.getElementById("ListeCrit").style.top = offsTop +"px";

         var offsLargeur = document.getElementById("EspaceCritereChoisi").offsetWidth;
         document.getElementById("ListeCrit").style.maxWidth = offsLargeur + "px";

         var offsDroite = document.getElementById("ChoixCategorie").offsetWidth;
         document.getElementById("ListeCrit").style.left = offsDroite - 5 + "px";

         
         this.critService.getCriteres(categ.catId).subscribe(crit => this.AffichageCrit(crit));
        
    } 

    //Action lors de la sélection d'un critère
    OnClickCritere(crit: Critere)
    {
        this.m_TabRecherche.push(crit);
        this.m_TabCritID.push(crit.critId);
        console.log(this.m_TabRecherche);
    }

    //Action lors du clic sur supprimer
    OnClickSupprimer(crit: Critere)
    {
        this.m_TabRecherche.splice(this.m_TabRecherche.indexOf(crit),1);
        this.m_TabCritID.splice(this.m_TabCritID.indexOf(crit.critId),1);
        
        
        console.log(this.m_TabRecherche);
    }
    
   

    /**********AJOUT ET SUPPRESSION DE TRACÉS*********************/


    public onClickAddTrace()
    {
        
            this.http.post('api/ajoutfichier' , this.m_Form).subscribe(reponse => this.FichierValide(reponse));
        
    }

  
    private AffichageRepAdd(param: any) // Si le param est une string !
    {
        console.log(param);
    }

   

public fileChange(event:any) 
{
    let fileList: FileList = event.target.files;
    
    if(fileList.length > 0) 
    {
        this.m_File = fileList[0];
        this.m_Form = new FormData();
        this.m_Form.append('traces', this.m_File);
        this.Message = this.m_File.name;
    }
}

public FichierValide(retour :any) 
{
    if(retour.status === 200)
    {
        if(retour._body != null)
        {
            console.log("Fichier envoyé avec succès !");
            this.m_EnvoieTrace = new TraceDTO(this.m_TabCritID,this.m_File.name, retour._body);
            this.traceService.addTrace(this.m_EnvoieTrace).subscribe(reponse => this.AffichageRepAdd(reponse));
            
            new jBox('Notice', {
                content: 'Fichier envoyé avec succès',
                color: 'green',
                offset:{y: 50},
                stack: true
            });

        }
    }
}
   


}