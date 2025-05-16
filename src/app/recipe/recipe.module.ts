import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientModule } from '../ingredient/ingredient.module';
import { RecipeService } from './recipe.service';
import { RecipeRoutingModule } from './recipe-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RecipeListComponent, RecipeDetailComponent],
  imports: [CommonModule, IngredientModule, RecipeRoutingModule, HttpClientModule],
  exports: [RecipeListComponent],
})
export class RecipeModule {}
