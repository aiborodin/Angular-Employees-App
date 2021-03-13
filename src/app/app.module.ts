import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { NewDepartmentComponent } from './new-department/new-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {RouterModule, Routes} from '@angular/router';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees/:depId', component: EmployeeListComponent},
  {path: '', redirectTo: 'departments', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent, NewDepartmentComponent, DepartmentListComponent,
    EmployeeListComponent, NewEmployeeComponent, EmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
