import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent implements OnInit {
  @Output() addItemEvent = new EventEmitter();
  @Output() closeDialogEvent = new EventEmitter();

  @Input() newTodo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.addItemEvent.emit(this.newTodo);
    this.newTodo = '';
  }

  closeDialog(): void {
    this.closeDialogEvent.emit();
  }
}
