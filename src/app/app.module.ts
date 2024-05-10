import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicModalWithContentModule } from './dynamic-modal-with-content/dynamic-modal-with-content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DynamicModalWithContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
