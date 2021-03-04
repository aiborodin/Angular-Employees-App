import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group;
  @Output() dataChange = new EventEmitter();
  showInfo = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(): void {
    this.dataChange.emit(new Date());
  }

  isOld(): boolean {
    return (+this.group.number.toString()[0]) > 2;
  }
}

// ngOnInit(): void {
//   this.currImage = this.images[this.currentImgIndex];
//   setInterval(() => {
//     this.changeCurrImage(true);
//   }, 10000);
//
//   setTimeout(() => {
//     this.faculty = '';
//     this.speciality = '';
//   }, 2000);
// }

// studentsQuantity = 22;
// students = [
//   'Ivanov Vasil',
//   'Smyrnova Mariya',
//   'Maksimov Ivan'
// ];
// starosta = {
//   name: 'Ivanov Vasil',
//   age: 20,
//   address: 'Mykolaiv, Ukraine'
// };
//
// images = [
//   'https://www.assignnmentinneed.com/wp-content/uploads/2020/10/group-happy-young-students-university_85574-4531.jpg',
//   'https://cdn.ila-france.com/wp-content/uploads/2015/02/our-students.jpg',
//   'https://jooinn.com/images/students-7.jpg'
// ];
// currentImgIndex = 0;
// currImage: string;

// changeCurrImage(forward: boolean): void {
//   if (forward) {
//     this.currentImgIndex++;
//   } else {
//     this.currentImgIndex--;
//   }
//   if (this.currentImgIndex === this.images.length) {
//     this.currentImgIndex = 0;
//   }
//   if (this.currentImgIndex < 0) {
//     this.currentImgIndex = this.images.length - 1;
//   }
//   this.currImage = this.images[this.currentImgIndex];
