import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { emailValidator } from '../../validators/emaill.validator';
import { passwordValidator } from '../../validators/password.validator';
import { passwordsMatchValidator } from '../../validators/passwords-match.validator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit, OnDestroy {
  @ViewChild('loginFormDirective') loginFormDirective!: NgForm;
  @ViewChild('registerFormDirective') registerFormDirective!: NgForm;
  mode: 'login' | 'register' = 'login';
  login = this.fb.group({
    email: ['', [Validators.required]],
    password:  ['', [Validators.required]]
  })
  register = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator()]],
    registerPassword: ['', [Validators.required, passwordValidator()]],
    registerConfirmPassword: ['', [Validators.required]]
  }, { validators: [passwordsMatchValidator()] })
  subscription!: Subscription;

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      // alert(url.toString());
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get firstNameControl() {
    return this.register.get('firstName') as FormControl;
  }
  get lastNameControl() {
    return this.register.get('lastName') as FormControl;
  }
  get emailControl() {
    return this.register.get('email') as FormControl;
  }
  get passwordControl() {
    return this.register.get('registerPassword') as FormControl;
  }
  get confirmPasswordControl() {
    return this.register.get('registerConfirmPassword') as FormControl;
  }

  toggleMode(){
    // (this.mode === 'login' ? this.login : this.register).reset();
    (this.mode === 'login' ? this.loginFormDirective : this.registerFormDirective).resetForm();
    this.mode = this.mode === 'login' ? 'register' : 'login';
  }

  onSubmit(){
    const currentForm = this.mode === 'login' ? this.loginFormDirective : this.registerFormDirective;
    if(currentForm.invalid){
      this.snackBar.open('Preencha todos os campos', 'OK');
      return;
    }
    alert(JSON.stringify(currentForm.value));
    currentForm.resetForm();
  }
}
