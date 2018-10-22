import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnpListComponent } from './anp-list/anp-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AnpComponent } from './anp/anp.component';

@NgModule({
  declarations: [
    AppComponent,
    AnpListComponent,
    AnpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
