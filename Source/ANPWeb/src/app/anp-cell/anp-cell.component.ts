import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AnpDetailComponent } from '../anp-detail/anp-detail.component';

@Component({
  selector: 'app-anp-cell',
  templateUrl: './anp-cell.component.html',
  styleUrls: ['./anp-cell.component.css']
})
export class AnpCellComponent implements OnInit {

  constructor(public dialog: MatDialog) {  
  }

  ngOnInit() {
  }

  openData() {
    let openDialog = this.dialog.open(AnpDetailComponent, {
      width: '800px'
    });

    openDialog.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado')
    });
  }

}
