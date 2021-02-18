import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponyModule } from './compony/compony.module';
import { MyservesService } from './myserves.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponyModule
  ],
  providers: [MyservesService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    
    console.log("hi this is a module .....")
  }
}
