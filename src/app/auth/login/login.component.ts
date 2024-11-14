import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';   

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:string = '';
  password:string = '';

  constructor( private localStorage:LocalStorageService, private router:Router) {}

  login(){

    const savedUser = this.localStorage.getItem('user');

    if(savedUser){
      const isEmailMatched = savedUser.email === this.email;
      const isPasswordMatched = savedUser.passowrd === this.password;

      if(isEmailMatched && isPasswordMatched){
        alert('Login Successful');
        this.router.navigate(['/dashboard'])
      }else {
        alert('Invalid email or password.');
      }
    } else {
      alert('User not registered. Please sign up first.');
    }
    
  }

}
