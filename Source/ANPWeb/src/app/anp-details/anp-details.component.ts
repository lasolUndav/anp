import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anp-details',
  templateUrl: './anp-details.component.html',
  styleUrls: ['./anp-details.component.css'],
})
export class AnpDetailsComponent implements OnInit {
  @Input('element')
  element: any;
  constructor() {
  }
  ngOnInit() {
  }

}
