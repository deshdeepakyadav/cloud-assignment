import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string ='';
  password: string ='';
  error: boolean = false;
  errorMsg: string ='';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if ((this.email === '') && (this.password === '')){
      this.error = true;
      this.errorMsg = "Please enter user name and password."
    }
    else if ((this.email === '') && (this.password !== '')){
      this.error = true;
      this.errorMsg = "Please enter user name."
    }
    else if ((this.email !== '') && (this.password === '')){
      this.error = true;
      this.errorMsg = "Please enter password."
    }
    else if ((this.email !== 'desh') || (this.password !== 'desh')){
      this.error = true;
      this.errorMsg = "Login failed due to incorrect username and password."
    }
    else if ((this.email.toLowerCase() === 'desh') && (this.password.toLowerCase() === 'desh')){
    sessionStorage.setItem('userID', this.email);
    sessionStorage.setItem('isUserLogged', 'true');
    this.router.navigate(['./dashboard']);
    }
  }
}
