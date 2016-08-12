import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name:"calorie",
  pure: false
})

export class CheckCaloriePipe implements PipeTransform {
  transform (input: Meal[], info) {
    var caloriesToCheck = info[0];
    var calorieResult: Meal[] = [];
    if (caloriesToCheck === "high-cal food"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          calorieResult.push(input[i]);
        }
      }
    } else if (caloriesToCheck === "low-cal food"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          calorieResult.push(input[i]);
        }
      }
    } else {
      return input;
    }
  }
}
