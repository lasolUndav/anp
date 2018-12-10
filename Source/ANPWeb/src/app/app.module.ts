import {Component, NgModule, VERSION} from '@angular/core'
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
import { GoogleChartsModule } from 'angular-google-charts';
import {  GraphicsComponent } from './graphics/graphics.component';
import { MapsComponent } from './maps/maps.component';
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef,   
  DocumentRef, MapServiceFactory, 
  BingMapAPILoaderConfig, BingMapAPILoader, 
  GoogleMapAPILoader,  GoogleMapAPILoaderConfig
} from 'angular-maps';

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
    GraphicsComponent,
    MapsComponent,
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
    GoogleChartsModule.forRoot(),
    BrowserModule,
    useBing ? MapModule.forRootBing() : MapModule.forRootGoogle()
  ],
  bootstrap: [AppComponent],
  providers: [
    { 
      provide: MapAPILoader, deps: [], useFactory: useBing ? BingMapServiceProviderFactory :  GoogleMapServiceProviderFactory
    }
  ]
  
})
export class AppModule { }

export function GoogleMapServiceProviderFactory(){
  const gc: GoogleMapAPILoaderConfig = new GoogleMapAPILoaderConfig();
  gc.apiKey = 'AIzaSyAjoNbn9JeUPcoErpk35J9QAFz40vfno3c';
    // replace with your google map key
    // the usage of this key outside this plunker is illegal. 
  gc.enableClustering = true;
  return new GoogleMapAPILoader(gc, new WindowRef(), new DocumentRef());
}

export function BingMapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey ="Ap0AObt84NcDaUThCeWOj52ZqUHv6k4TJhjLibR-DghC-semgoj-0uPbIi8r0E4j"; 
    // replace with your bing map key
    // the usage of this key outside this plunker is illegal. 
  bc.branch = "experimental"; 
    // to use the experimental bing brach. There are some bug fixes for
    // clustering in that branch you will need if you want to use 
    // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}

