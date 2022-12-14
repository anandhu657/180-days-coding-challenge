import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = "anandhu";
  public wish = ""
  public counter = 0;
  goodMorning() {
    this.wish = "good morning";
  }

  goodAfternoon() {
    this.wish = "good afternoon";
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
