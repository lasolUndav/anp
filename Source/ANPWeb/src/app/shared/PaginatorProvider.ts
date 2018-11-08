import { MatPaginatorIntl } from '@angular/material';

export class PaginatorProvider extends MatPaginatorIntl{
  constructor(){
    super();
    this.nextPageLabel = 'Página siguiente';
    this.previousPageLabel = 'Página anterior';
    this.itemsPerPageLabel = 'items por página';
  }
  getRangeLabel = (page: number, pageSize: number, length: number) => {
    return ((page * pageSize) + 1) + ' - ' + ((page * pageSize) + pageSize) + ' de ' + length;
    }
}