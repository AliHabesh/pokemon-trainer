import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private readonly router: Router,
    private user: UserService,
    private profileService: ProfileService
  ) {}

  toCatalouge() {
    this.router.navigateByUrl('/pokemon-catalouge');
  }

  toTrainer() {
    this.router.navigateByUrl('/trainer');
  }
}
