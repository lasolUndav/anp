import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndicatorComponent } from './indicator/indicator.component'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { AnpDetailsComponent } from './anp-details/anp-details.component';
import { AnpGrillaComponent } from './anp-grilla/anp-grilla.component';
import { AnpDetailComponent } from './anp-detail/anp-detail.component';
import { AnpCellComponent } from './anp-cell/anp-cell.component';



var config = {
  apiKey: "AIzaSyAjoNbn9JeUPcoErpk35J9QAFz40vfno3c",
  authDomain: "apn-dev-95587.firebaseapp.com",
  databaseURL: "https://apn-dev-95587.firebaseio.com",
  projectId: "apn-dev-95587",
  storageBucket: "apn-dev-95587.appspot.com",
  messagingSenderId: "645309354612"
};

const useBing = false;

@NgModule({
  declarations: [
    AppComponent,
    AnpListComponent,
    AnpComponent,
    IndicatorComponent,
    HeaderComponent,
    FooterComponent,
    AnpDetailsComponent,
    AnpGrillaComponent,
    AnpDetailComponent,
    AnpCellComponent,
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
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent],
  entryComponents:[AnpDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
