import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'bus-reservations-v1';

  public toRegister() {
    this.router.navigate(['register']);
  }

  public toSignIn() {
    this.router.navigate(['sign-in']);
  }

  public findRoutes() {
    this.router.navigate(['routes']);
  }

  public aboutUs() {
    this.router.navigate(['about']);
  }
}
