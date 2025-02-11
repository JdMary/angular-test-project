import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/shared/home/home.component";
import {ResidencesComponent} from "./residences/residences.component";
import {NotfoundComponent} from "./core/shared/notfound/notfound.component";
import {ResidenceDetailsComponent} from "./residence-details/residence-details.component";

const routes: Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path: "home",component:HomeComponent},
  {path: "residences",component:ResidencesComponent},
  {path: "details/:id",component:ResidenceDetailsComponent},
  {path: "**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
