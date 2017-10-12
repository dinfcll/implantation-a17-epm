/*
À faire :
S'entendre sur ce que le controller et le service vont faire
Modifier l'interface en fonction
Faire un ajout qui marche

*/


import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Http } from '@angular/http';

//Importation des services
import { CategorieService } from './categorie.service';
import { CritereService } from './critere.service';

//Importation des composants
import { Categorie } from './categorie';
import { Critere } from './critere';

@Component ({
    selector: 'my-ajoutsupp',
    templateUrl: 'app/html/ajout-cat-crit.component.html',
    styleUrls: [ 'app/css/ajout-cat-crit.component.css'],
    providers: [CritereService,CategorieService]
})

export class AjoutSuppComponent
{ 
    m_TabCat: Categorie[];
    m_TabCrit: Critere[];
    m_CatID: number;
    m_CritID: number;
    NomCateg: String;
    NomCrit: String;

    constructor(private catService: CategorieService, private critService: CritereService, private http:Http, private router:Router)
    {
        this.NomCateg = "Catégories";
        this.NomCrit = "Critères"
    }

    ngOnInit(): void 
    {
        if(this.router.url.toString() == "/neurologie/ajoutsupp" )
        {
           this.catService.getCategories(2).subscribe(cat => this.AffichageCat(cat));
        
            this.critService.getCriteres(2).subscribe(crit => this.AffichageCrit(crit));
        }


        if(this.router.url.toString() == "/cardiologie/ajoutsupp")
        {
            this.catService.getCategories(1).subscribe(cat => this.AffichageCat(cat));
        
            this.critService.getCriteres(1).subscribe(crit => this.AffichageCrit(crit));
        }
    }

    private AffichageCat(param: any) 
    {
        this.m_TabCat = (param.json() as Categorie[]);

        if(this.m_TabCat.length < 8)
        {
            document.getElementsByClassName("ListeCategorie")[0].setAttribute("size", this.m_TabCat.length.toString());  
        }
        else
        {
            document.getElementsByClassName("ListeCategorie")[0].setAttribute("size", "8");            
        }
    }

    private AffichageCrit(param: any)
     {
        this.m_TabCrit = (param.json() as Critere[]);
      

        if(this.m_TabCrit.length < 8)
        {
            document.getElementsByClassName("ListeCritere")[0].setAttribute("size", this.m_TabCrit.length.toString());
        }
        else
        {
            document.getElementsByClassName("ListeCritere")[0].setAttribute("size", "8");
        }
    }

    OnClickListeDeroulanteCritere()
    {
	    document.getElementsByClassName("ListeCritere")[0].classList.toggle("ShowElement");
    }
	
    OnClickListeDeroulanteCategorie()
    {
	    document.getElementsByClassName("ListeCategorie")[0].classList.toggle("ShowElement");
    }

     //Action lors de la sélection d'une catégorie
     OnClickCategorie(categ: Categorie)
     {
         this.NomCateg = categ.catNom;
         this.m_CatID = categ.catId;
         this.NomCrit = "Critères";
         this.critService.getCriteres(categ.catId).subscribe(crit => this.AffichageCrit(crit));
     } 
 
     //Action lors de la sélection d'un critère
     OnClickCritere(crit: Critere)
     {
         this.NomCrit = crit.critNom;
         this.m_CritID = crit.critId;
     }

     OnClickSupprimerCateg()
     {
        if(confirm("Voulez-vous vraiment supprimer définitivement la catégorie suivante :" + this.NomCateg  + " ?"))
            {
               this.catService.deleteCategorie(this.m_CatID).subscribe(reponse => this.AffichageRepDel(reponse));
               window.location.reload();
            }

     }

     OnClickSupprimerCrit()
     {
        if(confirm("Voulez-vous vraiment supprimer définitivement le critère suivant :" + this.NomCrit  + " ?"))
            {
               this.critService.deleteCritere(this.m_CritID).subscribe(reponse => this.AffichageRepDel(reponse));
               window.location.reload();
            }
     }

     private AffichageRepDel(param: any) 
     {
         console.log(param);
     }
}