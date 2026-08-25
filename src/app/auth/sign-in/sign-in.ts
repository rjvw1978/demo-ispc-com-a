import { Component, inject } from '@angular/core';
import {FormBuilder,  ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {

  private formBuilder = inject(FormBuilder);

  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  enviar()
  {
    if (this.signInForm.valid)
    {
      console.log(this.signInForm.value)
    }
    else{
      alert("No cumple con la validación")
    }
  }

  get Email()
  {
    return this.signInForm.get("email");
  }
  
  get Password()
  {
    return this.signInForm.get("password")
  }
}
