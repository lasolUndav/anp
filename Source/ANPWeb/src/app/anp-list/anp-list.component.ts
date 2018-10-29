import { Component} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anp-list',
  templateUrl: './anp-list.component.html',
  styleUrls: ['./anp-list.component.css']
})
export class AnpListComponent{
  areas : Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.areas = db.list('AreasNaturalesProtegidas').valueChanges();     
  }
}
