import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component ({
    selector: 'my-index',
    templateUrl: 'app/html/index.component.html',
    styleUrls: [ 'app/css/index.component.css' ]
})

export class IndexComponent 
{ 
    constructor(private router: Router) { }

    Connexion(): void 
    {
        this.router.navigateByUrl('/choix');
        console.log("test");
    }
}
