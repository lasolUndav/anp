import { Component, OnInit, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-anp-detail',
  templateUrl: './anp-detail.component.html',
  styleUrls: ['./anp-detail.component.css']
})
export class AnpDetailComponent implements OnInit {

  @Input('element')
  element: any;
  
  constructor(public thisDialogRef: MatDialogRef<AnpDetailComponent>) {
    
  }

  ngOnInit() {
  }
  closeData(){
    this.thisDialogRef.close('Close');
  }

}
