import {Component, Input} from '@angular/core';
import {AddTodoDialogComponent} from "./add-todo-dialog/add-todo-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public dialog: MatDialog, private http: HttpClient) {}

  @Input() newTodo: string = '';
  todos: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get('http://localhost:3000/todos').subscribe(result => {
      this.todos = Object.values(result);
    });
  }

  deleteItem(id: number): void {
    this.http.delete('http://localhost:3000/todos/' + id).subscribe(result => {
      this.todos = Object.values(result);
    });
  }

  updateDone(todo: any): void {
    this.http.put('http://localhost:3000/todos', { id: todo.id, done: todo.done }).subscribe(result => {
      console.log(result);
    });
  }

  showAddDialog(): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent);

    dialogRef.componentInstance.addItemEvent.subscribe((newTodo: string) => {
      this.http.post('http://localhost:3000/todos', { title: newTodo }).subscribe(result => {
        this.todos = Object.values(result);
      });
      dialogRef.close();
    });

    dialogRef.componentInstance.closeDialogEvent.subscribe((): void => {
      dialogRef.close();
    });
  }
}
