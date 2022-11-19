import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CngxSseUtilityModule } from 'cngx-sse-utility';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CngxSseUtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
