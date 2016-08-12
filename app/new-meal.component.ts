import { Component, EventEmitter } from 'angular2/core'
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onAddNewMeal'],
  template:`
  <div class="container">
    <h3 id="anotherMeal"> Add Another Meal </h3>
  </div>

  <form class="form-inline">
    <div class="form-group">
    <input placeholder="Name of your Meal" type="text" class="form-control" #newName/>
    <input placeholder="Add Some Details" type="text" class="form-control" #newDetails/>
    <input placeholder="Enter Calories" type="text" class="form-control" #newCalories/>
    <button type="submit" class="btn btn-default" (click)="newMeal(newName, newDetails, newCalories)" add-button>Add this Meal!</button>
  </div>
  </form>
  `
})

export class NewMealComponent {
  public onAddNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onAddNewMeal= new EventEmitter();
  }
  newMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    this.onAddNewMeal.emit([userName.value, userDetails.value, userCalories.value]);
    userName.value="";
    userDetails.value="";
    userCalories.value="";
  }
}
