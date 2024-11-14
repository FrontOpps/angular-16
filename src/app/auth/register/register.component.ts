import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';

  constructor(private localStroageService: LocalStorageService) {}

  onSignUp(){
    const userData = {
      userName: this.userName,
      email: this.email,
      password: this.password
    }
    this.localStroageService.setItem('user', userData);

    console.log('user data', userData);

    this.userName = '';
    this.email = '';
    this.password = '';

    const savedData = this.localStroageService.getItem('user');
    console.log('saved data', savedData);

  }

}
