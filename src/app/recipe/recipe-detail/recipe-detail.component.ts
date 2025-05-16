import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any;

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}
  getRecipe(id: number) {
    this.recipeService.getRecipe(id).subscribe((data) => {
      this.recipe = data;
    });
  } 
  onSelect(recipe: any) {
    this.recipe = recipe;
  }
}
