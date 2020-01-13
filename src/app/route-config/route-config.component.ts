import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-route-config',
  templateUrl: './route-config.component.html',
  styleUrls: ['./route-config.component.css']
})
export class RouteConfigComponent implements OnInit {

  constructor(private router: Router) { }

  city1 = new FormControl('');
  city2 = new FormControl('');

  ngOnInit() {
  }

}
