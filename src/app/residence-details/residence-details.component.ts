import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResidenceService} from "../services/residence.service";

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  id:string='';
  //inject a service instantiated with ac variable
  constructor(private ar:ActivatedRoute,private rs:ResidenceService) {
    console.log("i am the constructor in residence details");
  }
  ngOnInit():void{
    this.ar.paramMap.subscribe(res=>this.id=res.get('id') ?? '');
    this.rs.getResidenceById(this.id).subscribe(res=>this.rs);

  }



}
