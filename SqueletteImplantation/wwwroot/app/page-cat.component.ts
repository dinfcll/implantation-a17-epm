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
    m_TabTrace: Trace[] = [];
    m_TabCat: Categorie[];
    m_TabCrit: Critere[] = [];


    constructor(private traceService: TraceService, private catService: CategorieService, private critService: CritereService){}

    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après le constructeur dudit composant.
    ngOnInit(): void 
    {
        //Remplit les objets des données de la BD

        this.catService.getCategories(1).subscribe(cat => this.Affichage(cat));
        

        this.critService.getCriteres(1).subscribe(crit => console.log(crit.json() as Critere[]));

        //this.critService.getCriteres(1).then(retourFonction => {this.m_TabCrit = retourFonction}).then(x => console.log(JSON.stringify(this.m_TabCrit)));      
        this.traceService.getTraces().then(retourFonction => this.m_TabTrace = retourFonction); 
    }

    private Affichage(param: any) {
        this.m_TabCat = (param.json() as Categorie[]);

        console.log(this.m_TabCat);
    }

    OnClickListeDeroulanteCategorie()
    {
	    document.getElementById("ListeCategorie").classList.toggle("showCategorie");
    }


}