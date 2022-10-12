import { Injectable } from "@angular/core";
import { Cocktail } from "../models/cocktail.model";

@Injectable({
    providedIn: 'root'
})

export class CocktailService {

    cocktailList:Cocktail[] = 
    [
    new Cocktail("Jus d'orange", 10.99, "image jus d'orange"), 
    new Cocktail("Vodka Banane", 15.99, "Vodka Banane"), 
    new Cocktail("Red Bull Abricot", 35.99, "Red Bull Abricot")
    ]


    constructor() {}

    public getCocktails() {
        return this.cocktailList
    }


}