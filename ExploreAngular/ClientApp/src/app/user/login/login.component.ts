import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from '../employees/Shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router, private messageService: MessageService) { }



  msg: string;
  

  OnSubmit(userName, password) {
    console.log(userName)
    console.log(password)

    if ((userName.trim() == "" && password.trim() == "")) {
      this.msg = "Please enter the username or Password"
      console.warn(this.msg);
    }
   else if ((userName.trim() == "vishal" && password.trim() == "123")) {
      this.router.navigate(['/home'])
      console.warn('Welcome to application');
    }
    else if ((userName.trim() == "admin" && password.trim() == "123")) {
      this.router.navigate(['/Employee'])
      console.warn('Welcome to application');
    }
    else {
      this.msg = "Invalid username or password"
      console.warn('Invalid username or password');
    }

    //this.userService.userAuthentication(userName, password).subscribe((data: any) => {
    //  localStorage.setItem('userToken', data.access_token);
    ////if (userName == 'vishal' && password == '123') {
    //  this.router.navigate(['/home']);
    ////}
    //},
    //  (err: HttpErrorResponse) => {
    //    this.isLoginError = true;
    //  });
    //}

  }
}
