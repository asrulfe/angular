import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {

  @Input()
  img: string;

  @Input()
  title: string;

  @Input()
  description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
