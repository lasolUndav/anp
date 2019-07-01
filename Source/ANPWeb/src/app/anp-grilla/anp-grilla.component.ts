import { Component, OnInit, } from '@angular/core';
import { catchError, debounceTime, map } from 'rxjs/operators';

import { AngularFireDatabase } from '@angular/fire/database';
import { AnpDetailComponent } from '../anp-detail/anp-detail.component';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anp-grilla',
  templateUrl: './anp-grilla.component.html',
  styleUrls: ['./anp-grilla.component.css']
})
export class AnpGrillaComponent implements OnInit {
  columnsToDisplay = ['Nombre'];
  dataSource: any[];
  anpFiltrados: any[];
  search= new FormControl('');
  numberColumnsToDisplay: number;


  constructor(public dialog: MatDialog, db: AngularFireDatabase, private httpClient: HttpClient) {
    db.list('AreasNaturalesProtegidas').valueChanges().subscribe(results=>{
      this.dataSource = (results);
      this.anpFiltrados = (results);
    });
  };

  applyFilter(filterValue: string) {
    this.anpFiltrados = this.dataSource.filter(anp => this.filterAnp(anp,filterValue));
  }

  filterAnp(anp, filterValue: string){
    filterValue = filterValue.toLowerCase().trim();
    var valueToFilter = anp.Nombre.toLowerCase();
    return valueToFilter.indexOf(filterValue)>=0;
  }

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((filterValue: string)=>this.applyFilter(filterValue));
    this.numberColumnsToDisplay = (window.innerWidth <= 400) ? 1 : 3;
  }

  onResize(event) {
    this.numberColumnsToDisplay = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  selectAnp(anp){
    const dialogRef = this.dialog.open(AnpDetailComponent, {
      width: this.numberColumnsToDisplay === 1 ?  '250px' : '350px',
      data: anp
    });
  }

  getUrlAttrValueFor(anp){
    return `url(assets/imagenes/previews/${anp.Id}.jpg)`;
  }
}
