import { Component, OnInit } from '@angular/core';
import { courses } from './data';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {

  coreCourses = courses[0];
  rxjsCourses = courses[1];
  ngrxCourses = courses[2];
  
  constructor() { }

  ngOnInit(): void {
  }

}
