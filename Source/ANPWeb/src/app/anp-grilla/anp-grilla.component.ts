import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-anp-grilla',
  templateUrl: './anp-grilla.component.html',
  styleUrls: ['./anp-grilla.component.css']
})
export class AnpGrillaComponent implements OnInit {
  columnsToDisplay = ['Nombre'];
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
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }
   
}
