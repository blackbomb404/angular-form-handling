import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { passwordsMatchValidator } from '../validators/passwords-match.validator';

@Directive({
  selector: '[appPasswordsMatchValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordsMatchValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordsMatchValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return passwordsMatchValidator()(control);
  }
}
