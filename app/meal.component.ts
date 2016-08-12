import { Component } from 'angular2/core'
import { Meal } from './meal.model'

@Component({
  selector:'meal-display',
  inputs:['meal'],
  template:`
  <div class="container" id="mealList">
    <ul>
      <li><h4> {{meal.name}} </h4></li>
    </ul>
  </div>
  `
})

export class MealComponent{
 public meal: Meal;
}
