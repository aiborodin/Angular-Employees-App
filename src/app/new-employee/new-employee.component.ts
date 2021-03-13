import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeDataService} from '../services/employee-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  showForm = false;
  public depId: number;
  @Output() addEvent = new EventEmitter();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(myForm): void {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.addEvent.emit({
      id: fields.id.value,
      name: fields.name.value,
      age: fields.age.value,
      depId: +this.route.snapshot.paramMap.get('depId')
    });
  }
}
