import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: [onAddNewMeal],
  template:`
  <h3> Add Another Meal </h3>
  <input placeholder="Name of your Meal" #newName>
  <input placeholder="Add Some Details" #newDetails>
  <input placeholder="Enter Approx Number of calories" #newCalories>
  <button (click)="newMeal(newName, newDetails, newCalories)">Add this Meal!</button>
  `
})

export class NewMealComponent {
  public onAddNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onAddNewMeal= new EventEmitter();
  }
  newMeal(addName: HTMLInputElement, addDetails: HTMLInputElement, addCalories: HTMLInputElement){
    addName.value="";
    addDetails.value="";
    addCalories.value="";
  }
}
