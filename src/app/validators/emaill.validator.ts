import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const EMAIL_REGEX = /^[\w.-]+@[\w-]+(\.[\w-]+){1,2}$/i;
    const valid = EMAIL_REGEX.test(control.value);
    return valid ? null : { invalidEmail: true };
  }
}
