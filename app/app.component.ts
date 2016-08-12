import { Component } from 'angular2/core';



@Component({
  selector: 'my-app',
  directives: [],
  template: `
    <div class="container">
    <h1 (click)="onClickMe()"> Green Eggs and Ham </h1>
    {{message}}
    `
})

export class AppComponent {
  message = ''

onClickMe(){
  this.message = 'Sam I am!';
  }
}
