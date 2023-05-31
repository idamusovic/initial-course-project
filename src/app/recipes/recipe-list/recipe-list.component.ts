import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe','Test description','https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg'),
    new Recipe('Another test recipe','Test description','https://realfood.tesco.com/media/images/1400x919-Mexican-inspired-rice-bowls-c12b621c-44c8-4592-8e35-7bb845b8afad-0-1400x919.jpg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
