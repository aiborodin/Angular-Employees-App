import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsDataService {

  private groups = [
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
  private students = [
    {name: 'Ivanov Vasil', groupNumb: 301},
    {name: 'Dmitrenko Petro', groupNumb: 301},
    {name: 'Katerina Smirnova', groupNumb: 301},
    {name: 'Don Diablo', groupNumb: 308},
    {name: 'Mike Tyson', groupNumb: 308},
  ];

  constructor() { }

  getGroups(): Observable<any[]> {
    return of(this.groups);
  }
  addGroup(group: any): void {
    this.groups.push(group);
  }
  deleteGroup(index: number): void {
    this.groups.splice(index, 1);
  }

  getStudents(grpNumb: number): Observable<any[]> {
    return of(this.students.filter(s => s.groupNumb === grpNumb));
  }
}
