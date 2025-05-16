import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from './../../environments/environment.development';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';  

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = environment.baseUrl + '/recipes';

  constructor(private http: HttpClient) { }
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }
  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

}
