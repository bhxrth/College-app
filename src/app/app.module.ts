import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptnameComponent } from './deptname/deptname.component';
import { FacultynameComponent } from './facultyname/facultyname.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptnameComponent,
    FacultynameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
