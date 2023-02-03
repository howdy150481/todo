import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Todo} from "../types/Todo";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  @Output() deleteEvent = new EventEmitter();
  @Output() updateDoneEvent = new EventEmitter();

  @Input() todo: Todo = {
    id: 0,
    title: '',
    done: false
  }

  updateDone(): void {
    this.updateDoneEvent.emit(this.todo);
  }

  deleteTodo(): void {
    this.deleteEvent.emit(this.todo.id);
  }
}
