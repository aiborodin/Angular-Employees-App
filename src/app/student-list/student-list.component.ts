import { Component, OnInit } from '@angular/core';
import {GroupsDataService} from '../services/groups-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: any[];

  constructor(private groupService: GroupsDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getStudents(params.grpNumb));
  }

  private getStudents(grpNumb: string): void {
    const n = +grpNumb;
    this.groupService.getStudents(n).subscribe(students => this.students = students);
  }
}
