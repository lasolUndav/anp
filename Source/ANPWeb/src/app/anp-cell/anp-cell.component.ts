import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AnpDetailComponent } from '../anp-detail/anp-detail.component';
import { InterfaceElementAnp } from '../interfaceElementAnp'



@Component({
  selector: 'app-anp-cell',
  templateUrl: './anp-cell.component.html',
  styleUrls: ['./anp-cell.component.css']
})
export class AnpCellComponent implements OnInit {

  @Input('elementCell')
  element: any;

  detalles: any;

  constructor(public dialog: MatDialog) { 
  this.detalles = this.element;
  };
  
  ngOnInit() {
  }

  openData(element: any) {
    let openDialog = this.dialog.open(AnpDetailComponent, {
      width: '800px'
    });
    openDialog.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado')
    });
  }
}
