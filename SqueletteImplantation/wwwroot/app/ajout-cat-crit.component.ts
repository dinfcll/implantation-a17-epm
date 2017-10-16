/*
À faire :
S'entendre sur ce que le controller et le service vont faire
Modifier l'interface en fonction
Faire un ajout qui marche
*/


import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Http } from '@angular/http';
import {AppComponent} from './app.component';

//Importation des services
import { CategorieService } from './categorie.service';
import { CritereService } from './critere.service';

//Importation des composants
import { Categorie, CatDTO } from './categorie';
import { Critere, CritDTO } from './critere';

@Component ({
    selector: 'my-ajoutsupp',
    templateUrl: 'app/html/ajout-cat-crit.component.html',
    styleUrls: [ 'app/css/ajout-cat-crit.component.css'],
    providers: [CritereService,CategorieService, AppComponent]
})

export class AjoutSuppComponent
{ 
    m_TabCat: Categorie[];
    m_TabCrit: Critere[];
    m_CatID: number;
    m_CritID: number;
    NomCateg: String;
    NomCrit: String;
    ListeCrit: String;
    NomAjoutCat: String;
    NomAjoutCrit: String;

    constructor(private catService: CategorieService, private critService: CritereService, private http:Http, private router:Router, private AppComp:AppComponent)
    {
        this.NomCateg = "Catégories";
        this.NomCrit = "Critères"
    }

    ngOnInit(): void 
    {
        if(this.router.url.toString() == "/neurologie/ajoutsupp" )
        {
           this.catService.getCategories(2).subscribe(cat => this.AffichageCat(cat));
        
        }


        if(this.router.url.toString() == "/cardiologie/ajoutsupp")
        {
            this.catService.getCategories(1).subscribe(cat => this.AffichageCat(cat));
        
            //Pas de besoin de charger les critères, car par défaut la catégorie est "catégorie"
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
        this.ListeCrit = "";

        for(var i = 0; i < this.m_TabCrit.length; i++)
        {
            this.ListeCrit += "\n\r" + this.m_TabCrit[i].critNom + ", " ;
        }
        

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
        if(confirm("Voulez-vous vraiment supprimer définitivement la catégorie suivante : " + this.NomCateg  + " ? \n\rLa suppression de cette catégorie entrainera la suppression des critère(s) suivant(s) : " + this.ListeCrit))
            {
               
               //Effacement des critères associés à ladite catégorie
               for(var i = 0; i < this.m_TabCrit.length; i++) 
               {
                     this.critService.deleteCritere(this.m_TabCrit[i].critId).subscribe(reponse => this.AffichageRepDel(reponse));
               }

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

     OnClickAjoutCategorie()
     {
        let Categ = new CatDTO(this.NomAjoutCat,this.AppComp.TypeDom);
        console.log(this.NomAjoutCat);  //Pas certain que ça va me donner le contenu du txtBox
        this.catService.addCategorie(Categ).subscribe(reponse => this.AffichageRepAjout(reponse));
       // window.location.reload();
     }

     OnClickAjoutCritere()
     {
         let Crit = new CritDTO(this.NomAjoutCrit,this.m_CatID);
         console.log(this.NomAjoutCrit);  //Pas certain que ça va me donner le contenu du txtBox
         this.critService.addCritere(Crit).subscribe(reponse => this.AffichageRepAjout(reponse));
     }

     private AffichageRepDel(param: any) 
     {
         console.log(param);
     }

     private AffichageRepAjout(param: any)
     {
         console.log(param);
     }
}