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
    { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 0, title: 'ANPs', icon: 'local_grocery_store' },
    { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 0, title: 'superficie total', icon: 'new_releases' },
    { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 0, title: 'Flora', icon: 'assignments' },
    { colorDark: '#66BB6A', colorLight: '#81C784', number: 0, title: 'Fauna', icon: 'account_balance' }
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
