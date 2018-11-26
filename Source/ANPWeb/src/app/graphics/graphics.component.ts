import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  chartEcorregion = {
    title: 'Ecorregiones',
    type: 'ColumnChart',
    data: [
      ['Pampa',26],
      ['Delta e Islas del Paraná',8],
      ['Pampa y Delta e Islas del Paraná' , 12],
    ],
    columnNames: ['Ecorregión', 'Cantidad de areas por ecorregión'],
    options: {
      colors: ['#e0440e', '#e6693e'],
      is3D: true,
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      }
    }
  };
  chartCategoriaInternacional = {
    title: 'Categoría Iternacional',
    type: 'ColumnChart',
    data: [
      ['Reserva de Biosfera', 2],
      ['AICA', 2],
      ['Sitio RAMSAR y AICA', 2],
      ['No posee', 40],
    ],
    columnNames: ['Categoria Internacional', 'Cantidad'],
    options: {
      colors: ['#e0440e', '#e6693e', '#ec8f6e'],
      is3D: true,
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      }
    }
  };
  chartPoseeAdmin = {
    title: 'Administraciones',
    type: 'ColumnChart',
    data: [
      ['Nacional', 1],
      ['Provincial', 10],
      ['Municipal', 22],
      ['Privada', 6],
      ['Mixta', 7],
    ],
    columnNames: ['Administración', 'Superficie'],
    options: {
      colors: ['#e0440e', '#e6693e', '#ec8f6e'],
      is3D: true,
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
