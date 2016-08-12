import { Component } from 'angular2/core'
import { Meal } from './meal.model'

@Component({
  selector:'meal-display',
  inputs:['meal'],
  template:`
  <div class="container">
    <ul>
      <li id="mealList" > {{meal.name}} </li>
    </ul>
  </div>
  `
})

export class MealComponent{
 public meal: Meal;
}
