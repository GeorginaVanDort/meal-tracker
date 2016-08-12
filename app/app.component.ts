import { Component, EventEmitter } from 'angular2/core'
import { Meal } from './meal.model'
import { MealListComponent} from './meal-list.component';


@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
    <h1>Meal and Calorie Tracker.</h1>
    <meal-list [mealList]="meals"
    (onMealClick)="editMeal($event)"></meal-list>
    </div>
    `
})



export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Green Salad", "Boring!", 300),
      new Meal("Oatmeal", "Extra coconut makes it delicious!", 1500),
      new Meal("Pizza", "Extra anchovies", 800),
    ];
  }
editMeal(clickedMeal:Meal): void {
  console.log(clickedMeal)
  }
}
