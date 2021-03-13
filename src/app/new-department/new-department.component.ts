import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DepartmentDataService} from '../services/department-data.service';

@Component({
  selector: 'app-new-department',
  templateUrl: './new-department.component.html',
  styleUrls: ['./new-department.component.scss']
})
export class NewDepartmentComponent implements OnInit {

  showForm = false;

  constructor(private departmentService: DepartmentDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm): void {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.departmentService.addDepartment({
      id: fields.id.value,
      name: fields.name.value,
      type: fields.type.value
    });
  }
}
