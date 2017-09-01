import { Component, OnInit} from '@angular/core';
import { Trace } from './trace';
import { TraceService } from './trace.service';




@Component({
  selector: 'page-cat',
  templateUrl: './html/page-cat.component.html',
  styleUrls: [ './css/page-cat.component.css' ]
})

export class PageCatComponent implements OnInit
{
/*  Define a traces array property.
    Inject the TraceService in the constructor and hold it in a private heroService field.
    Call the service to get traces inside the Angular ngOnInit() lifecycle hook.
*/
    traces:Trace[] = [];

    constructor(private traceService:TraceService){}

    //ngOnInit est une méthode du "Framework"" Angular qui est appelée après la création dudit composant.
    ngOnInit(): void 
    {
        this.TraceService.getTraces()
        //.then(heroes => this.heroes = heroes.slice(1, 5));
    }
}