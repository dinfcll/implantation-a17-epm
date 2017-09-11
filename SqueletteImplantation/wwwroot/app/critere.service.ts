import { Critere } from './critere';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise'; // Pour accéder à la méthode .toPromise()


@Injectable()
export class CritereService 
{
    private CriteresURL = 'api/critere';  // URL de l'API
    private headers = new Headers({ 'Content-Type': 'application/json' }); //Spécifie le type de données voulues

    constructor(private http: Http) { }

    //Envoie une requête d'obtention des critères au "controller".
    getCriteres(): Promise<Critere[]> 
    {
        return this.http.get(this.CriteresURL)
            .toPromise()
            .then(response => response.json().data as Critere[])
            .catch(this.GestionErreur);
    }

    //Permet d'envoyer une requête de suppression d'un certain critère au "controller".
    deleteCritere(id: number): Promise<void> 
    {
        const url = `${this.CriteresURL}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.GestionErreur);
    }

    //Permet d'envoyer une requête HTTP d'ajout d'un critère'.
    addCritere(trace: Critere): Promise<Critere>
    {
       return this.http.post(this.CriteresURL, JSON.stringify({trace: trace}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Critere)
      .catch(this.GestionErreur);
    }


    private GestionErreur(error: any): Promise<any> 
    {
       console.error('Une erreur s\'est produite : ', error); // Plus facile à "debug"
       return Promise.reject(error.message || error);
    }
}
