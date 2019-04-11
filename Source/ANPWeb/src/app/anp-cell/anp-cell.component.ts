import { Component, OnInit, Input, Inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-anp-cell',
  templateUrl: './anp-cell.component.html',
  styleUrls: ['./anp-cell.component.css']
})
export class AnpCellComponent implements OnInit {

  @Input('element')
  element: any;

  constructor() { 
  };
  
  ngOnInit() {
  }
}
