import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MariemjradComponent } from './mariemjrad/mariemjrad.component';
import { ResidencesComponent } from './residences/residences.component';
import {FormsModule} from "@angular/forms";
//au dessus ce sont les appels des classesou se trouve les imports (dir node modules)

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MariemjradComponent,
    ResidencesComponent
  ],
  //liste d'import explicite
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
