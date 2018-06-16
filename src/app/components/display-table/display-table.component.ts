import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroModel } from '../../models/hero-model';

@Component({
  selector: 'gang-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {
  @Input() data: any[];
  @Input() header: String[];
  @Input() displayType: String;

  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEditClick(id) {
    this.editEvent.emit(id);
  }

  onDeleteClick(id) {
    this.deleteEvent.emit(id);
  }
}
