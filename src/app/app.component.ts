import { Component } from '@angular/core';

@Component({
  //this selector which is app-root is defining the component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  name = "bonjour";
  f()
  {
    alert("hello mary = this is data binding proprety --> Ineterpolation");
  }
}
