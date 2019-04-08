import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anp-cell',
  templateUrl: './anp-cell.component.html',
  styleUrls: ['./anp-cell.component.css']
})
export class AnpCellComponent implements OnInit {

  @Input('elementCell')
  element: any;

  constructor() { 
  };
  
  ngOnInit() {
  }
}
