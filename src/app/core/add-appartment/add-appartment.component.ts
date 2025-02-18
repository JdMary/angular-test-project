import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {
  myForm!: FormGroup;
  constructor() {
  }
  ngOnInit(){// initialiser les proprietes du composant et  ne remplace pas le contructor
    this.myForm=new FormGroup({
      appartmentNb: new FormControl("",[Validators.required,Validators.pattern("[0-9]*")]),
      floorNb : new FormControl("",[Validators.required,Validators.pattern("[0-9]*")])
    })
  }
  //getter to return formControl formNb
  getFloor(){
    return this.myForm.get('floorNb');
  }
  add(){
    console.log(this.myForm.value);
  }
}
