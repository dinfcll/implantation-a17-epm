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
  templateUrl: './html/page-cat.component.html',  //Template de Étienne doit aller ici !
  styleUrls: [ './css/page-cat.component.css' ]
})

//À compléter
export class PageCatComponent implements OnInit
{
/*  Define a traces array property.
    Inject the TraceService in the constructor and hold it in a private heroService field.
    Call the service to get traces inside the Angular ngOnInit() lifecycle hook.
*/
    m_TabTrace: Trace[] = [];
    m_TabCat: Categorie[] = [];
    m_TabCrit: Critere[] = [];


    constructor(private traceService: TraceService, private catService: CategorieService, private critService: CritereService){}

    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après la création dudit composant.
    ngOnInit(): void 
    {
        this.critService.getCriteres();
        this.catService.getCategories();
        this.traceService.getTraces(); // Je dois trouver une façon de récupérer le retour !
        //.then(heroes => this.heroes = heroes.slice(1, 5));
    }
}