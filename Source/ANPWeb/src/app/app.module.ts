import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AnpComponent } from './anp/anp.component';
import { AnpDetailComponent } from './anp-detail/anp-detail.component';
import { AnpGrillaComponent } from './anp-grilla/anp-grilla.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

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
    AnpComponent,
    HeaderComponent,
    FooterComponent,
    AnpGrillaComponent,
    AnpDetailComponent,
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
    FlexLayoutModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  entryComponents:[AnpDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClientModule]
})
export class AppModule { }
