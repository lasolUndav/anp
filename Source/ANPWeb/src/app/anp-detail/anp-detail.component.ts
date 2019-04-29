import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-anp-detail',
  templateUrl: './anp-detail.component.html',
  styleUrls: ['./anp-detail.component.css']
})
export class AnpDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AnpDetailComponent>, @Inject(MAT_DIALOG_DATA) public data) {

  }

  ngOnInit() {
  }

  closeData() {
    this.dialogRef.close('Close');
  }

}
