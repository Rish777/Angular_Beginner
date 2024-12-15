import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

    constructor(private router: Router) {}
  
    onLogin() {
      // Example logic for successful login
      const isLoginSuccessful = true;
  
      if (isLoginSuccessful) {
        this.router.navigate(['/main']); // Navigate to the main page
      } else {
        alert('Login failed. Please try again.');
      }
    }
  }