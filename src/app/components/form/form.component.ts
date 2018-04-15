import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormsModule,
  AbstractControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personalData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalData = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        Validators.email
      ],
      number: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string) {
    console.log('you submitted value', value);
  }
}
