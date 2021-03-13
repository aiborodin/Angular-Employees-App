import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentDataService {

  private departments = [
    {
      id: 1,
      name: 'Software Development',
      type: 'Local'
    },
    {
      id: 2,
      name: 'Sales',
      type: 'Mixed'
    },
    {
      id: 3,
      name: 'Finance',
      type: 'Remote'
    },
  ];

  constructor() { }

  getDepartments(): Observable<any[]> {
    return of(this.departments);
  }
  addDepartment(department: any): void {
    this.departments.push(department);
  }
  deleteDepartment(index: number): void {
    this.departments.splice(index, 1);
  }
}
