import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

const routes: Routes = 
[
  {path: "", component: RecipeListComponent},
  {path: "ingredients", loadChildren: () => import('./ingredient/ingredient.module').then(m => m.IngredientModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
