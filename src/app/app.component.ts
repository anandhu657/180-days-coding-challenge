import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = "anandhu";
  public data = {
    name: "anandhu",
    age: 21,
    domain: "MEAN STACK"
  }
}
