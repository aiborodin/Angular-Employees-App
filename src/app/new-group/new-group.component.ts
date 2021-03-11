import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GroupsDataService} from '../services/groups-data.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {

  showForm = false;

  constructor(private groupService: GroupsDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm): void {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.groupService.addGroup({
      number: fields.number.value,
      faculty: fields.faculty.value,
      speciality: fields.speciality.value,
      studentsQuantity: fields.studentsQuantity.value
    });
  }
}
