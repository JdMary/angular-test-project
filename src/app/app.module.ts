import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MariemjradComponent } from './mariemjrad/mariemjrad.component';
import { ResidencesComponent } from './residences/residences.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './core/shared/header/header.component';
import { FooterComponent } from './core/shared/footer/footer.component';
import { HomeComponent } from './core/shared/home/home.component';
import { NotfoundComponent } from './core/shared/notfound/notfound.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddAppartmentComponent } from './core/add-appartment/add-appartment.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
//au dessus ce sont les appels des classesou se trouve les imports (dir node modules)

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MariemjradComponent,
    ResidencesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    ResidenceDetailsComponent,
    AddAppartmentComponent
  ],
  //liste de packages used in this module by component d'import explicite
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
