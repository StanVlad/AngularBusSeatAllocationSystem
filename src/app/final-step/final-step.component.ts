import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.css']
})
export class FinalStepComponent implements OnInit {

  constructor() { }

  @Input() plecare: string;
  @Input() destinatie: string;

  ngOnInit() {
  }

  public buyTicket() {
    // cautarea in baza de date
  }

}
