import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  onSignUp(){
    alert("this.com");
    console.log('Registering...', this.userName, this.email, this.password);

  }

}
