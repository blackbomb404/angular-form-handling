import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordsMatchValidator() : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const passwordControl = control.get('registerPassword');
    const confirmPasswordControl = control.get('registerConfirmPassword');

    const valid = passwordControl?.value === confirmPasswordControl?.value;
    return valid ? null : { passwordsMismatch: true };
  }
}
