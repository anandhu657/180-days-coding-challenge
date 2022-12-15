import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-thirdform',
  templateUrl: './thirdform.component.html',
  styleUrls: ['./thirdform.component.css']
})
export class ThirdformComponent {

  get alternativeEmails() {
    return this.registration.get('alternativeEmails') as FormArray;
  }

  addAlternativeEmail() {
    this.alternativeEmails.push(this.fb.control(''));
    console.log(this.fb.control(''));

  }

  constructor(private fb: FormBuilder) { }

  registration = this.fb.group({
    email: [''],
    alternativeEmails: this.fb.array([])
  })

  onsubmit(values: any) {
    console.log(values.value);
  }
}
