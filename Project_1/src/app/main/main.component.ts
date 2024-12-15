// main.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  username: string = 'User'; // This can be replaced with a dynamic username from a service

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    // Navigate to the selected route
    this.router.navigate([`/${route}`]);
  }

  logout(): void {
    // Redirect to the login page on logout
    this.router.navigate(['/']);
  }
}
