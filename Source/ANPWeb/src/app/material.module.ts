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
   MatDialogRef,
   MAT_DIALOG_DATA,
  } from '@angular/material';
  
import { PaginatorProvider } from './shared/PaginatorProvider';


@NgModule({
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
    MatDialogModule,
    MatButtonModule,
  
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: PaginatorProvider }
    , { provide: MatDialogRef, useValue: {} } , { provide: MAT_DIALOG_DATA, useValue: [] } 
  ],
  declarations: []
})
export class MaterialModule { }
