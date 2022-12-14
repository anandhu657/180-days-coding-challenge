import { Component } from '@angular/core';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent {

  data = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
  }

  onsubmit() {
    alert(JSON.stringify(this.data));
  }
}
