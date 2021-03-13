import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeDataService} from '../services/employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: any[];

  constructor(private employeeService: EmployeeDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getEmployees(params.depId));
  }

  private getEmployees(depId: string): void {
    this.employeeService.getEmployees(+depId).subscribe(employees => this.employees = employees);
  }

  deleteEmployee(index: number): void {
    this.employeeService.deleteEmployee(this.employees[index].id);
    this.employees.splice(index, 1);
  }

  addEmployee(employee: object): void {
    this.employeeService.addEmployee(employee);
    this.employees.push(employee);
  }
}
