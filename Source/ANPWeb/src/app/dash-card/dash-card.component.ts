import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.scss']
})
export class DashCardComponent implements OnInit {
  @Input()dashData: any;
  constructor() { }

  ngOnInit() {
  }

}
