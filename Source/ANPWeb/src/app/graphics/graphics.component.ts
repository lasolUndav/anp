import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  chart = {
    title: 'Test Chart',
    type: 'BarChart',
    data: [
      ['Pampa', 26],
      ['Delta e Islas del Paraná', 8],
      ['Pampa y Delta e Islas del Paraná', 12],
    ],
    columnNames: ['Element', 'Density'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
