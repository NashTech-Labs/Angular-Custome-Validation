import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../angular-custom-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    email: [
      '',
      {
        validators: [Validators.email],
      },
    ],
    password: ['', [Validators.minLength(8) , createPasswordStrengthValidator()]],
  });


  formValue(): void {
    console.log(this.form.value);
  }
}
