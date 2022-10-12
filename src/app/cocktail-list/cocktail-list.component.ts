import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../Services/cocktailService';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktailList: Cocktail[] = []

  constructor(public cocktailService:CocktailService) { }

  ngOnInit(): void {
    this.cocktailList = this.cocktailService.getCocktails()
  }
}
