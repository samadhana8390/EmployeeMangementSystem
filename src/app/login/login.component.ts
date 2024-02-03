import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginobj: any ={
  "EmailId":"",
  "password":""
};
constructor(private http: HttpClient,private router : Router){}
onLogin(){
  debugger;
  this.http.post('',this.loginobj).subscribe((res:any)=>{
    if(res.result){
      alert('login successfull')
      localStorage.setItem('loginToken',res.data.token)
      this.router.navigateByUrl('/dashboard');
    }
    else{
      alert(res.message);
    }

  })
}

}
