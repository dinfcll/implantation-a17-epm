import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Utilisateur } from './utilisateur';

@Injectable()
export class ModificationUtilisateurService
{
    constructor(private http : Http){}

    public ModifierNomUtilisateur(NouveauNomUtilisateur : string)
    {
        //this.http.patch()
    }

    public ModifierEmail(NouveauEmail : string)
    {

    }

    public ModifierMotDePasse(NouveauMotDePasse : string)
    {

    }
}