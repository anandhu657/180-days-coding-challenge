import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-secondform',
  templateUrl: './secondform.component.html',
  styleUrls: ['./secondform.component.css']
})
export class SecondformComponent {

  constructor(private fb: FormBuilder) { }

  submit = false;
  regiestrationForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]]
  })

  get f() {
    return this.regiestrationForm.controls;
  }

  onsubmit() {
    this.submit = true;
    console.log("clicked");
    console.log(this.f);
  }
}
