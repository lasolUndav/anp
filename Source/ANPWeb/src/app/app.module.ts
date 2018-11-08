import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AnpListComponent } from './anp-list/anp-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AnpComponent } from './anp/anp.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl, MatFormFieldModule, MatPaginatorModule, MatInputModule } from '@angular/material';
import { PaginatorProvider } from './shared/PaginatorProvider';
import { DashCardComponent } from './dash-card/dash-card.component';
import { MatCardModule } from '@angular/material/card';
import { Ng2OdometerModule } from 'ng2-odometer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

var config = {
  apiKey: "AIzaSyAjoNbn9JeUPcoErpk35J9QAFz40vfno3c",
  authDomain: "apn-dev-95587.firebaseapp.com",
  databaseURL: "https://apn-dev-95587.firebaseio.com",
  projectId: "apn-dev-95587",
  storageBucket: "apn-dev-95587.appspot.com",
  messagingSenderId: "645309354612"
};


@NgModule({
  declarations: [
    AppComponent,
    AnpListComponent,
    AnpComponent,
    DashCardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    Ng2OdometerModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MatPaginatorIntl, useClass: PaginatorProvider }
  ]
})
export class AppModule { }
