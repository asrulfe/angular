import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../_models/user';
import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loading = false;
  user: User;
  userFromApi: User;

  constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService
  ) {
      this.user = this.authenticationService.userValue;
  }

  ngOnInit() {
      this.loading = true;
      this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
          this.loading = false;
          this.userFromApi = user;
      });
  }
}
