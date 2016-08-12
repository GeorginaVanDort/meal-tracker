import { Component } from 'angular2/core';
import { Meal } from './meal.model'

@Component({
  selector:'edit-meal',
  inputs:['meal'],
  template:`
  <h3> Edit Your Meal Details </h3>
  <div>
    <input [(ngModel)]="meal.name"/>
    <input [(ngModel)]="meal.details"/>
    <input [(ngModel)]="meal.calories"/>
  </div>
  `
})

export class EditMealComponent{
  public meal: Meal;
}
