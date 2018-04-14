import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MysliderComponent } from './myslider/myslider.component';
import { MyboxComponent } from './mybox/mybox.component';



@NgModule({
  declarations: [
    AppComponent,
    MysliderComponent,
    MyboxComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
