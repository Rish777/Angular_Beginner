import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email === 'admin@example.com' && this.password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid email or password.');
    }
  }
}
