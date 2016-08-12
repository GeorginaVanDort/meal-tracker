import { Component, EventEmitter } from 'angular2/core'
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onAddNewMeal'],
  template:`
  <h3> Add Another Meal </h3>
  <input placeholder="Name of your Meal" #newName/>
  <input placeholder="Add Some Details" #newDetails/>
  <input placeholder="Enter Approx Number of calories" #newCalories/>
  <button (click)="newMeal(newName, newDetails, newCalories)" add-button>Add this Meal!</button>
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
