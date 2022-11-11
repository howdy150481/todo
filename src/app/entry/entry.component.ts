import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter();

  @Input() index: number = 0
  @Input() todo = {
    title: '',
    done: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(): void {
    this.deleteEvent.emit(this.index);
  }
}
