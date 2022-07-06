import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptnameComponent } from './deptname/deptname.component';
import { FacultynameComponent } from './facultyname/facultyname.component';
import { StudentnameComponent } from './studentname/studentname.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptnameComponent,
    FacultynameComponent,
    StudentnameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
