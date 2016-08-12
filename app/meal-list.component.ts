import { Component, EventEmitter } from 'angular2/core'
import { Meal } from './meal.model'
import { MealComponent } from './meal.component';
import { EditMealComponent} from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { CheckCaloriePipe } from './check-calories.pipe';



@Component ({
  selector:'meal-list',
  inputs: ['mealList'],
  directives:[MealComponent, EditMealComponent, NewMealComponent],
  pipes:[CheckCaloriePipe],
  outputs:['onMealClick'],
  template:`
  <select (change)="onChange($event.target.value)" class="form-control">
    <option value="all"  selected="selected" >Show All Meals</option>
    <option value="high-cal-food">Show High Calorie Food</option>
    <option value="low-cal-food">Show Low Calorie Food</option>
  </select>
  <meal-display
  *ngFor="#currentMeal of mealList | calorie:selectedCalories"
  (click)="itemWasClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal"
  [meal]="currentMeal">
  </meal-display>
  <div class="container"><p id="note">*Click a meal to see and edit details</p></div>
  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
  <new-meal (onAddNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealClick: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalories: string = "";
  constructor(){
    this.onMealClick = new EventEmitter();
  }

  itemWasClicked(clickedMeal:Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealClick.emit(clickedMeal);
  }

  onChange(optionFromDropDownMenu) {
    this.selectedCalories = optionFromDropDownMenu;
    console.log(this.selectedCalories);
  }

  createMeal([mealName, mealDetails, mealCalories]): void {
    this.mealList.push(
      new Meal(mealName, mealDetails, mealCalories)
    );
  }
}
