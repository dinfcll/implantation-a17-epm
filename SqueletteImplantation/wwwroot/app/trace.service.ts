import { Trace } from './trace';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise'; // Pour accéder à la méthode .toPromise()


@Injectable()
export class TraceService 
{
    private TracesURL = 'api/trace';  // URL de l'API
    private headers = new Headers({ 'Content-Type': 'application/json' }); //Spécifie le type de données voulues

    constructor(private http: Http) { }

    //Envoie une requête d'obtention des Tracés au "controller".
    getTraces(): Promise<Trace[]> 
    {
        return this.http.get(this.TracesURL)
            .toPromise()
            .then(response => response.json().data as Trace[])
            .catch(this.GestionErreur);
    }

    //Permet d'envoyer une requête de suppression d'un certain Tracé au "controller".
    deleteTrace(id: number): Promise<void> 
    {
        const url = `${this.TracesURL}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.GestionErreur);
    }

    //Permet d'envoyer une requête HTTP d'ajout de Tracé.
    addTrace(trace: Trace): Promise<Trace>
    {
       return this.http.post(this.TracesURL, JSON.stringify({trace: trace}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Trace)
      .catch(this.GestionErreur);
    }


    private GestionErreur(error: any): Promise<any> 
    {
       console.error('Une erreur s\'est produite : ', error); // Plus facile à "debug"
       return Promise.reject(error.message || error);
    }
}

