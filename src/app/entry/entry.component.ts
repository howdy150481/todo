import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter();

  @Input() index = 0

  @Input() todo = {
    title: '',
    done: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo() {
    this.deleteEvent.emit(this.index);
  }
}
