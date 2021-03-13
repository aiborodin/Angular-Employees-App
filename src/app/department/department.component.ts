import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {DepartmentDataService} from '../services/department-data.service';
import {EmployeeDataService} from '../services/employee-data.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  @Input() department;
  @Input() depIndex;
  showInfo = false;
  employeesQuantity;

  constructor(private departmentService: DepartmentDataService, private employeeService: EmployeeDataService) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees(this.department.id).subscribe(
      employees => this.employeesQuantity = employees.length
    );
  }

  delDepartment(): void {
    this.departmentService.deleteDepartment(this.depIndex);
  }
}
