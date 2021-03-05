import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WheelColourComponent } from './wheel-colour/wheel-colour.component';
import {SharedService} from '../app/Shared/shared.service'

@NgModule({
  declarations: [
    AppComponent,
    WheelColourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
