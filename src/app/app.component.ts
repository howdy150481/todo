import {Component, Input} from '@angular/core';
import {AddTodoDialogComponent} from "./add-todo-dialog/add-todo-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public dialog: MatDialog) {}

  @Input() newTodo: string = '';

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

  deleteItem(id: number): void {
    this.todos.splice(id, 1);
  }

  showAddDialog(): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent);

    dialogRef.componentInstance.addItemEvent.subscribe((newTodo: string) => {
      this.todos.push({
        title: newTodo,
        done: false
      });
      dialogRef.close();
    });

    dialogRef.componentInstance.closeDialogEvent.subscribe((): void => {
      dialogRef.close();
    });
  }
}
