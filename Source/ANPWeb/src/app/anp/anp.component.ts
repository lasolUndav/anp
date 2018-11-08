import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anp',
  templateUrl: './anp.component.html',
  styleUrls: ['./anp.component.css']
})
export class AnpComponent implements OnInit {
  public dashCard = [
    { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 1221, title: 'ANPs', icon: 'local_grocery_store' },
    { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 1221, title: 'superficie total', icon: 'new_releases' },
    { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 1221, title: 'Flora', icon: 'assignments' },
    { colorDark: '#66BB6A', colorLight: '#81C784', number: 1221, title: 'Fauna', icon: 'account_balance' }
];
  constructor() { }

  ngOnInit() {
  }

}
