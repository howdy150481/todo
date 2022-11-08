import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() todo = {
    title: 'XX',
    done: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateTodo() {
    alert('asd');
  }
}
