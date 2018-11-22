import { NgModule } from '@angular/core';
import { Ng2OdometerModule } from 'ng2-odometer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
   MatTableModule,
   MatPaginatorIntl, 
   MatFormFieldModule, 
   MatPaginatorModule, 
   MatInputModule,
   MatCardModule,
   MatIconModule,
   MatSortModule, 
   MatGridListModule,
   MatExpansionModule,
  } from '@angular/material';
  
import { PaginatorProvider } from './shared/PaginatorProvider';



@NgModule({
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatCardModule,
    MatIconModule,
    MatSortModule,
    Ng2OdometerModule,
    FlexLayoutModule,
    MatGridListModule,
    MatExpansionModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: PaginatorProvider }
  ]
})
export class MaterialModule { }
