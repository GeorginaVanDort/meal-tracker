import { Component } from 'angular2/core'
import { Meal } from './meal.model'
import { MealComponent } from './meal.component';
import { EditMealComponent} from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';



@Component ({
  selector:'meal-list',
  inputs: [mealList],
  directives:[MealComponent, EditMealComponent, NewMealComponent],
  pipes:[],
  outputs:[onMealClick],
  template:`
  <meal-display
  (click)="itemWasClicked(currentMeal)"
  [meal]="currentMeal">
  </meal-display>
  `
})

export class MealListComponent {
  public mealList = Meal[];
  public onMealClick = EventEmitter<Meal>;
  public selectedMeal = Meal;

  constructor(){
    this.onMealClick = new EventEmitter();
  }
  itemWasClicked(clickedMeal:Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealClick.emit(clickedMeal);
  }
  createMeal([mealName, mealDetails, mealCalories]): void {
    this.mealList.push(
      new Meal(mealName, mealDetails, mealCalories)
    );
  }

}
