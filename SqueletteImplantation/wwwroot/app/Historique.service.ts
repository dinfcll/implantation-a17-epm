import { Historique,HistoriqueDTO } from './Historique';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise'; 
import { Trace } from './trace';

@Injectable()
export class HistoriqueService 
{
    public tabHistoriqueTrace: Trace[];
    private HistoriqueURL = 'api/DerniersTelechargements/';
    private AjoutHistoriqueURL='api/AjoutRechercheRecente'; 
    private headers = new Headers({ 'Content-Type': 'application/json' }); 

    constructor(private http: Http) { }

    getHistorique(id: number) 
    {
        return this.http.get(this.HistoriqueURL + id);
    }

    addRechercheRecente(Historiquedto: HistoriqueDTO)
    {
       return this.http.post(this.AjoutHistoriqueURL, Historiquedto);
    }

    ObtenirHistorique(id:number)
    {
        this.getHistorique(id).subscribe(liste => this.AfficherHistorique(liste));
    }

    private AfficherHistorique(param:any)
    {
        this.tabHistoriqueTrace = (param.json() as Trace[]);
        console.log(this.tabHistoriqueTrace);
    } 
}

