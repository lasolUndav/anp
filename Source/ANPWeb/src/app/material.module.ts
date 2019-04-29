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
   MatDialogModule,
   MatButtonModule,
  } from '@angular/material';

@NgModule({
  imports:[
      MatIconModule,
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSortModule,
    Ng2OdometerModule,
    FlexLayoutModule,
    MatGridListModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    { provide: MatPaginatorIntl }
  ],
  declarations: []
})
export class MaterialModule { }
