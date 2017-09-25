import { Component, OnInit} from '@angular/core';

//Importation des classes
import { Trace } from './trace';
import { Categorie } from './categorie';
import { Critere } from './critere';
import { TraceDTO } from './tracedto';

//Importation des services 
import { TraceService } from './trace.service';
import { CategorieService } from './categorie.service';
import { CritereService } from './critere.service';




@Component({
  selector: 'page-ajout',
  templateUrl: 'app/html/page-ajout-admin.component.html',  
  styleUrls: [ 'app/css/page-ajout-admin.component.css' ],
  providers: [TraceService,CritereService,CategorieService]
})

//À compléter
export class AjoutAdminComponent implements OnInit
{

    m_TabTrace: Trace[];
    m_TabCat: Categorie[];
    m_TabCrit: Critere[];
    m_TabRecherche: Critere[] = [];
    m_TabCritID: number[] = [];
    m_EnvoieTrace: TraceDTO = null;

    constructor(private traceService: TraceService, private catService: CategorieService, private critService: CritereService){}

    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après le constructeur dudit composant.
    ngOnInit(): void 
    {
        //Remplit les objets des données de la BD

        this.catService.getCategories(1).subscribe(cat => this.AffichageCat(cat));
        
        this.critService.getCriteres(1).subscribe(crit => this.AffichageCrit(crit));
    }

    private AffichageCat(param: any) {
        this.m_TabCat = (param.json() as Categorie[]);
        console.log(this.m_TabCat);
    }

    private AffichageCrit(param: any) {
        this.m_TabCrit = (param.json() as Critere[]);
        console.log(this.m_TabCrit);
    }

    private AffichageTrace(param: any) {
        this.m_TabTrace = (param.json() as Trace[]);
        console.log(this.m_TabTrace);
    }

    OnClickListeDeroulanteCritere()
    {
	    document.getElementById("ListeCritere").classList.toggle("showCritere");
    }
	
    OnClickListeDeroulanteCategorie()
    {
	    document.getElementById("ListeCategorie").classList.toggle("showCategorie");
    }
    
    //Action lors de la sélection d'une catégorie
    OnClickCategorie(id: number)
    {
        this.critService.getCriteres(id).subscribe(crit => this.AffichageCrit(crit));
        
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
        if(this.m_EnvoieTrace != null)
        {
            this.traceService.addTrace(this.m_EnvoieTrace).subscribe(reponse => this.AffichageRepAdd(reponse));
        }
        
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
        let file: File = fileList[0];

        this.m_EnvoieTrace = new TraceDTO(file,this.m_TabCritID, file.name);
    }
}

   


}