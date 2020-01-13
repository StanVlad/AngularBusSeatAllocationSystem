import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private mainService: MainService, private router: Router) { }

  title = 'Test';
  user = {
    firstName: '',
    lastName: '',
    email: '',
    alias: '',
    passwords: {
      password: '',
      confirm_password: ''
    }
  };
  users = [];

  ngOnInit() {}

  register() {
    const user = JSON.parse(JSON.stringify(this.user));
    this.users.push(user);
    this.registerReq(user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      alias: '',
      passwords: {
        password: '',
        confirm_password: ''
      }
    };
  }

  registerReq(user) {
      this.mainService.register(user).subscribe(response => {
      console.log(response);
      this.router.navigate(['/register']);
     });
  }
}
