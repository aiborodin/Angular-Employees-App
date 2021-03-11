import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {GroupsDataService} from '../services/groups-data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group;
  @Input() grpIndex;
  showInfo = false;

  constructor(private groupService: GroupsDataService) {
  }

  ngOnInit(): void {
  }

  delGroup(): void {
    this.groupService.deleteGroup(this.grpIndex);
  }
}
