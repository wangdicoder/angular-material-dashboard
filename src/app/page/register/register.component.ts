import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router) { }

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

  onRegister() {
    this.auth.onRegister(this.formRegister.value)
      .then(res => {
        swal("Success", "You register success!", "success")
        this.route.navigate(['/login']);
      }).catch(err => {
        swal("Oh noes!", err.message, "error");
      })
  }

}
