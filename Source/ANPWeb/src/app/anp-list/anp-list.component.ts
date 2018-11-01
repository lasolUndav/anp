import { Component, ViewChild, OnInit} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-anp-list',
  templateUrl: './anp-list.component.html',
  styleUrls: ['./anp-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class AnpListComponent implements OnInit {
  areas : Observable<any[]>;
  columnsToDisplay = ['Nombre', 'Ecorregion'];
  expandedElement: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(db: AngularFireDatabase) {
    this.areas = db.list('AreasNaturalesProtegidas').valueChanges();     
  }

  ngOnInit() {
    /*this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;*/
  }

  /*applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }*/
}