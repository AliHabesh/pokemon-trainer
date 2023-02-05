import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private readonly loginService: LoginService) {}

  public loginSubmit(loginForm: NgForm): void {
    const pattern = /^[a-zA-Z]+$/;
    const { username } = loginForm.value;
    const isValid = pattern.test(username);
    console.log(username);
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
          //if defined
        } else {
          //If not defined
        }
      },
      error: () => {},
    });
  }
}
