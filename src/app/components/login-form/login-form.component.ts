import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() login: EventEmitter<void> = new EventEmitter();

  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
  ) {}

  //For the login form, this handles the data that will be recieved from the login page (username)
  public loginSubmit(loginForm: NgForm): void {
    const pattern = /^[a-zA-Z]+$/;
    const { username } = loginForm.value;
    const isValid = pattern.test(username);
    if (username === '') {
      alert('You must input characters, empty field is invalid!');
      return;
    }
    if (!isValid) {
      alert(
        'The input value can not contain any other characters besides letters!'
      );
      return;
    }

    this.loginService.login(username).subscribe({
      next: (user: User | undefined) => {
        if (user) {
          this.userService.user = user;
          this.login.emit();
        } else {
          console.log('undefined user');
        }
      },
      error: () => {},
    });
  }
}
