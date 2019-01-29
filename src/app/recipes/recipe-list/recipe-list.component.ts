import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(new Recipe('Testy', 'Lawl yoo desc', 'https://cdn.masterani.me/poster/1/1893neuYUyo0.jpg'));
  }

  ngOnInit() {
  }

}
