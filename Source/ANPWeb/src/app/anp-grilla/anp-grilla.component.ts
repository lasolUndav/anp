import { Component, OnInit, } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

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
  
  constructor( db: AngularFireDatabase) {
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
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((filterValue: string)=>this.applyFilter(filterValue)));
  }
  
   
}
