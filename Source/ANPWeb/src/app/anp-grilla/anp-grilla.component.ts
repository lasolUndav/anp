import { Component, OnInit, } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-anp-grilla',
  templateUrl: './anp-grilla.component.html',
  styleUrls: ['./anp-grilla.component.css']
})
// Hay que injectar un element
//@Injectable()
export class AnpGrillaComponent implements OnInit {
  columnsToDisplay = ['Nombre'];
  dataSource: any[];

  constructor( db: AngularFireDatabase) {
    db.list('AreasNaturalesProtegidas').valueChanges().subscribe(results=>{
      this.dataSource = (results);
    });
  };
  
  ngOnInit() {
   
  }
  
   
}
