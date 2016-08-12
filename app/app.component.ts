import { Component } from 'angular2/core';
import { Meal } from './meal.model'
import { MealListComponent} from './meal-list.component';


@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
    <h1>Meal and Calorie Tracker.</h1>
    <meal-list [meal-list]="meals"
    (onMealClick)="editMeal($event)"></meal-list>
    </div>
    `
})



export class AppComponent {
  public meals = Meal[];
  constructor(){
    this.meals = [];
  }
editMeal(clickedMeal:Meal): void {
  console.log(clickedMeal)
}
  }
