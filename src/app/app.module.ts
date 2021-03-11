import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'groups', component: GroupListComponent},
  {path: 'students/:grpNumb', component: StudentListComponent},
  {path: '', redirectTo: 'groups', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent, GroupComponent, NewGroupComponent, GroupListComponent, StudentListComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
