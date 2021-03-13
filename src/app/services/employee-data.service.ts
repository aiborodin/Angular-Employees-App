import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private employees = [
    {id: 1, name: 'Vasil Ivanov ', age: 22, depId: 1},
    {id: 2, name: 'Petro Dmitrenko ', age: 43,  depId: 1},
    {id: 3, name: 'Katerina Smirnova', age: 21,  depId: 1},
    {id: 4, name: 'Don Diablo', age: 66,  depId: 2},
    {id: 5, name: 'Mike Tyson', age: 33,  depId: 2},
    {id: 6, name: 'John Butter', age: 28,  depId: 3},
    {id: 7, name: 'Lidia Maxwell', age: 34,  depId: 3},
  ];
  constructor() { }
  getEmployees(depId: number): Observable<any[]> {
    return of(this.employees.filter(e => e.depId === depId));
  }
  addEmployee(employee: any): void {
    this.employees.push(employee);
  }
  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}
