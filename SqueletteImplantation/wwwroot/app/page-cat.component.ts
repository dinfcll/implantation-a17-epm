import { Component, OnInit} from '@angular/core';

//Importation des classes
import { Trace } from './trace';
import { Categorie } from './categorie';
import { Critere } from './critere';

//Importation des services 
import { TraceService } from './trace.service';
import { CategorieService } from './categorie.service';
import { CritereService } from './critere.service';




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
        console.log(this.m_TabRecherche);
    }

    //Action lors du clic sur supprimer
    OnClickSupprimer(crit: Critere)
    {
        this.m_TabRecherche.splice(this.m_TabRecherche.indexOf(crit),1);
        console.log(this.m_TabRecherche);
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

        this.traceService.getTraces(RequeteId).subscribe(trac => this.AffichageTrace(trac))
    }


}