import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users = [
    { name: "A", age: 29 },
    { name: "B", age: 34 },
    { name: "C", age: 32 },
    { name: "D", age: 43 },
    { name: "E", age: 33 }
  ]
}
