import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @Input() newTodo = '';

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

  deleteItem(id: number) {
    this.todos.splice(id, 1);
  }

  showAddDialog() {
    alert('moooh');
  }

  addItem() {
    this.todos.push({
      title: this.newTodo,
      done: false
    });
    this.newTodo = '';
  }
}
