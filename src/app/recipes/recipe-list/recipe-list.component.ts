import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(new Recipe('Testy', 'Lawl yoo desc', 'https://cdn.masterani.me/poster/1/1893neuYUyo0.jpg'));
    this.recipes.push(new Recipe('Testy2', 'Lawl yoo desc2', 'https://cdn.masterani.me/poster/1/226mhyBWAID.jpg'));
    this.recipes.push(new Recipe('Testy3', 'Lawl yoo desc3', 'https://cdn.masterani.me/poster/1/231a16Y7xZO.jpg'));
  }

  ngOnInit() {
  }

}
