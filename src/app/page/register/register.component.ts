import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.formRegister = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

}
