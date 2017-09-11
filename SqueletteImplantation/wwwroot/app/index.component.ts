import { Component } from '@angular/core';

@Component ({
    selector: 'my-index',
    templateUrl: 'app/html/index.component.html',
    styleUrls: [ 'app/css/index.component.css' ]
})

export class IndexComponent { 
    Connexion(): void {
        console.log("test");
    }
}
