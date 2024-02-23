import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginobj: any = {
    "EmailId": "",
    "password": ""
  };

  signupobj: any = {
    "username": "",
    "password": ""
  };

  constructor(private loginService: LoginServiceService, private signupService: LoginServiceService, private router: Router) { }

  onLogin() {
    this.loginService.login(this.loginobj).subscribe((res: any) => {
      if (res.result) {
        alert('Login successful');
        localStorage.setItem('loginToken', res.data.token);
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res.message);
      }
    });
  }

  onSignup() {
    this.signupService.signup(this.signupobj).subscribe((res: any) => {
      if (res.result) {
        alert('Signup successful');
        this.router.navigateByUrl('/login');
      } else {
        alert(res.message);
      }
    });
  }

}
