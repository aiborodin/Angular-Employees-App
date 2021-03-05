import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groups = [
    {
      number: 301,
      faculty: 'Computer Science',
      speciality: 'Computer Science',
      studentsQuantity: 20
    },
    {
      number: 308,
      faculty: 'Computer Science',
      speciality: 'Software Engineering',
      studentsQuantity: 25
    }
  ];

  addGroup(group: any): void {
    this.groups.push(group);
  }

  deleteGroup(index: number): void {
    this.groups.splice(index, 1);
  }
}
