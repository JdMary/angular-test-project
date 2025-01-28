import { Component } from '@angular/core';

@Component({
  //this selector which is app-root is defining the component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  name = "bonj";
  f()
  {
    alert("hello mary");
  }
}
