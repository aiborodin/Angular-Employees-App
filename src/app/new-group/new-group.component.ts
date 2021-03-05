import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {

  @Output() group = new EventEmitter();
  showForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm): void {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.group.emit({
      number: fields.number.value,
      faculty: fields.faculty.value,
      speciality: fields.speciality.value,
      studentsQuantity: fields.studentsQuantity.value
    });
  }
}
