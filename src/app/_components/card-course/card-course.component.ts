import { Component, Input, OnInit } from '@angular/core';
import { courseI } from './card-course.model';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {

  @Input()
  course: courseI;

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log("card component clicked...");
  }

}
