import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeDataService} from '../services/employee-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() employee;
  @Input() index;
  @Output() deleteEvent = new EventEmitter();
  showInfo = false;

  constructor() {
  }

  ngOnInit(): void {
  }
  onDelete(): void {
    this.deleteEvent.emit(this.index);
  }
}
