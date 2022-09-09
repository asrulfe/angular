import { Component } from '@angular/core';
import { courseI } from './_components/card-course/card-course.model';
import { courses } from './_components/card-course/data';
import { Role } from './_models/role';
import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    user: User;
    title = 'Welcome to the App';

    coreCourses: courseI = courses[0];

    onCourseSelected(course: courseI) {
        console.log('onCourseSelected', course);
    }
  

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
    }
}