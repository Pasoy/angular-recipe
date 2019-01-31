import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(
      new Recipe(
        'Koe no Katachi',
        'Lawl yoo desc',
        'https://cdn.masterani.me/poster/1/1893neuYUyo0.jpg'
      )
    );
    this.recipes.push(
      new Recipe(
        'Fullmetal Alchemist: Brotherhood',
        'Lawl yoo desc2',
        'https://cdn.masterani.me/poster/1/226mhyBWAID.jpg'
      )
    );
    this.recipes.push(
      new Recipe(
        'Steins;Gate',
        'Lawl yoo desc3',
        'https://cdn.masterani.me/poster/1/231a16Y7xZO.jpg'
      )
    );
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
