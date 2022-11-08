import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todos = [
    { 
      title: 'Abwaschen',
      done: false
    },
    {
      title: 'Gassi gehen',
      done: true
    },
    {
      title: 'Einkaufen',
      done: false
    }
  ]
}
