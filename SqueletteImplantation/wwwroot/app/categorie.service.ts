import { Categorie } from './categorie';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise'; // Pour accéder à la méthode .toPromise()


@Injectable()
export class CategorieService 
{
    private CategoriesURL = 'api/categorie';  // URL de l'API
    private headers = new Headers({ 'Content-Type': 'application/json' }); //Spécifie le type de données voulues

    constructor(private http: Http) { }

    //Envoie une requête d'obtention des catégories au "controller".
    getCategories(): Promise<Categorie[]> 
    {
        return this.http.get(this.CategoriesURL)
            .toPromise()
            .then(response => response.json().data as Categorie[])
            .catch(this.GestionErreur);
    }

    //Permet d'envoyer une requête de suppression d'une certaine catégorie au "controller".
    deleteCategorie(id: number): Promise<void> 
    {
        const url = `${this.CategoriesURL}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.GestionErreur);
    }

    //Permet d'envoyer une requête HTTP d'ajout d'une catégorie'.
    addCategorie(trace: Categorie): Promise<Categorie>
    {
       return this.http.post(this.CategoriesURL, JSON.stringify({trace: trace}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Categorie)
      .catch(this.GestionErreur);
    }


    private GestionErreur(error: any): Promise<any> 
    {
       console.error('Une erreur s\'est produite : ', error); // Plus facile à "debug"
       return Promise.reject(error.message || error);
    }
}

