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
    styleUrls: [ 'app/css/ajout-cat-crit.component.css' ],
    providers: [CritereService,CategorieService]
})

export class AjoutSuppComponent
{ 
    m_TabCat: Categorie[];
    m_TabCrit: Critere[];

    constructor(private catService: CategorieService, private critService: CritereService, private http:Http, private router:Router){}

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
}