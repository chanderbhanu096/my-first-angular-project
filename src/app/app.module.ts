import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapCommonComponent } from './map-common/map-common.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent,
    MapCommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiY2hhbmRlcmJoYW51OTYiLCJhIjoiY2xoYzdrNmdmMDR6NDNlbWgycWJlOHFlbCJ9.tkoS9Wc0h8YqHDgKdJXXHQ'  })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
