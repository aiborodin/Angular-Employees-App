import { Component, OnInit } from '@angular/core';
import {DepartmentDataService} from '../services/department-data.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments: object[];

  constructor(private departmentService: DepartmentDataService ) {
    departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

  ngOnInit(): void {
  }

}
