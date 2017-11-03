import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Utilisateur } from './utilisateur';

@Injectable()
export class ModificationUtilisateurService
{
    constructor(http : Http){}

    public ModifierNomUtilisateur(NomUtilisateur : string)
    {
        
    }
}