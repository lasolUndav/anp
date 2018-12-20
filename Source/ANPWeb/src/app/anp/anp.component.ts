import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-anp',
  templateUrl: './anp.component.html',
  styleUrls: ['./anp.component.css']
})
export class AnpComponent implements OnInit {
  cantSuperficie: number = 0;
  public dashCard = [
    { colorDark: '#AE8967', colorLight: '#C8AB90', number: 0, title: 'Áreas relevadas', icon: 'assignments' },
    { colorDark: '#D69150', colorLight: '#D79B64', number: 0, title: 'Superficie total [m2]', icon: 'assignments' },
    { colorDark: '#76A754', colorLight: '#9AC37E', number: 0, title: 'Flora', icon: 'assignments' },
    { colorDark: '#66BB6A', colorLight: '#81C784', number: 0, title: 'Fauna', icon: 'assignments' }
];

  constructor(base: AngularFireDatabase) {
    base.list('AreasNaturalesProtegidas').valueChanges().subscribe(results=>{
      this.actualizarIndicadores(results);
    });
   }

  ngOnInit() {
  }

  actualizarIndicadores(areas){
    this.dashCard[0].number = areas.length;
    areas.forEach(element => {
      this.cantSuperficie = this.cantSuperficie + element["Superficie"];
    });
    this.dashCard[1].number = this.cantSuperficie;
  }
  
}
