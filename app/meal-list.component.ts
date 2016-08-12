import { Component } from 'angular2/core'
import { Meal } from './meal.model'
import { MealComponent } from './meal.component';
import { EditMealComponent} from './edit-meal.component';

@Component ({
  selector:'meal-list',
  inputs: [],
  directives:[],
  pipes:[],
  template:`
  <meal-display
  (click)="itemWasClicked(currentMeal)"
  [meal]="currentMeal"
  ></meal-display>
  `
})

export class MealListComponent {
  public mealList = Meal[];

  itemWasClicked(clickedMeal:Meal): void {
    this.selectedMeal = clickedMeal;
  }
}
