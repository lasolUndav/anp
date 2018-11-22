import { Component, ViewChild, OnInit} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {  MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-anp-list',
  templateUrl: './anp-list.component.html',
  styleUrls: ['./anp-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none', opacity:'0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.2, 0.0, 0.2, 1)')),
    ])
  ]
})
export class AnpListComponent implements OnInit{
  columnsToDisplay = ['Nombre', 'Localidad', 'Municipio','Ciudad', 'Infraestructura','Horario'];
  expandedElement: any;
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(db: AngularFireDatabase) {
    this.dataSource = new MatTableDataSource([]);
    db.list('AreasNaturalesProtegidas').valueChanges().subscribe(results=>{
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
