import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post('http://localhost:8080/login', loginData);
  }

  signup(signupData: any) {
    return this.http.post('http://localhost:8080/register', signupData);
  }
}
