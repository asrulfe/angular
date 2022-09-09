import { Component } from '@angular/core';
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

    coreCourses = courses[0];
    rxjsCourses = courses[1];
    ngrxCourses = courses[2];
  

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