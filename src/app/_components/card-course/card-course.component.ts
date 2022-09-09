import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { courseI } from './card-course.model';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {

  @Input()
  course: courseI;
  
  @Output('courseSelected')
  courseEmmiter = new EventEmitter<courseI>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log("card component clicked...");
    this.courseEmmiter.emit(this.course);
  }

}
