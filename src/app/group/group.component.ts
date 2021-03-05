import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group;
  @Input() grpIndex;
  @Output() removeGroup = new EventEmitter();
  showInfo = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  delGroup(): void {
    this.removeGroup.emit(this.grpIndex);
  }
}
