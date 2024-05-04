import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from '../../directives/email-validator.directive';
import { PasswordsMatchValidatorDirective } from '../../directives/passwords-match-validator.directive';
import { PasswordValidatorDirective } from '../../directives/password-validator.directive';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    EmailValidatorDirective,
    PasswordValidatorDirective,
    PasswordsMatchValidatorDirective
  ],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  @ViewChild('registerForm') registerForm!: NgForm;
  mode: 'login' | 'register' = 'login';
  login = {
    email: '',
    password: ''
  }
  register = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor(private snackBar: MatSnackBar){ }

  toggleMode(){
    (this.mode === 'login' ? this.loginForm : this.registerForm).resetForm();
    this.mode = this.mode === 'login' ? 'register' : 'login';
  }

  onSubmit(){
    const currentForm = this.mode === 'login' ? this.loginForm : this.registerForm;
    if(currentForm.invalid){
      this.snackBar.open('Preencha todos os campos', 'OK');
      return;
    }
    alert(JSON.stringify(currentForm.value));
    currentForm.resetForm();
  }
}
