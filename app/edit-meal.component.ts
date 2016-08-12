import { Component } from 'angular2/core';
import { Meal } from './meal.model'

@Component({
  selector:'edit-meal',
  inputs:['meal'],
  template:`
  <div class=form-group id="editMeal">
    <div class="form-control-group">
      <label for="input">Meal Name</label>
      <input [(ngModel)]="meal.name" type="text" class="form-control"/>
    </div>

    <div class="form-control-group">
      <label for="input">Meal Details</label>
      <input [(ngModel)]="meal.details" type="text" class="form-control" aria-describedby="basic-addon2"/>
    </div>

    <div class="form-control-group">
      <label for="input">Calories</label>
    <input [(ngModel)]="meal.calories" type="text" class="form-control"/>
    </div>
    <div class="container"><p id="note2">*Click a textbox to edit</p></div>
  </div>
  `
})

export class EditMealComponent{
  public meal: Meal;
}
