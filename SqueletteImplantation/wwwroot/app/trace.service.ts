import { Trace } from './trace';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise'; // Pour accéder à la méthode .toPromise()

@Injectable()
export class TraceService 
{
    private TracesURL = 'api/trace';  // URL de l'API
    private headers = new Headers({ 'Content-Type': 'application/json' }); //Spécifie le type de données

    constructor(private http: Http) { }

    //À COMMENTER !
    getTraces(): Promise<Trace[]> 
    {
        return this.http.get(this.TracesURL)
            .toPromise()
            .then(response => response.json().data as Trace[])
            .catch(this.GestionErreur);
    }

    deleteTrace(id: number): Promise<void> 
    {
        /*const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);*/
    }


    private GestionErreur(error: any): Promise<any> 
    {
       console.error('Une erreur est arrivée : ', error); // Plus facile à "debug"
       return Promise.reject(error.message || error);
    }




}

