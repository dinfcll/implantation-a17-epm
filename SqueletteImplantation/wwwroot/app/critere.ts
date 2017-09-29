export class Critere
{
    constructor(public critId: number,public critNom: String, public catId: number){} 
}
export class CritDTO
{
    constructor(public critNom: String, public catId: number){}
}