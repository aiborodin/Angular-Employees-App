import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Web-App';
  changeDate = new Date();
  groups = [
    {
      number: 301,
      faculty: 'Computer Science',
      speciality: 'Computer Science'
    },
    {
      number: 308,
      faculty: 'Computer Science',
      speciality: 'Software Engineering'
    }
  ];
  onDataChange(event): void {
    this.changeDate = event;
  }
}
