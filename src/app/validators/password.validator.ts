import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator() : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    // const hasLowerCaseLetters = /[a-z]/;
    // const hasUpperCaseLetters = /[A-Z]/;
    // const hasNumbers = /[0-9]/;
    // const hasSpecialChars = /[@#$%&]/;
    const rules = [/[a-z]/, /[A-Z]/, /[0-9]/, /[@#$%&]/];
    const valid = rules.every(rule => rule.test(control.value));
    return valid ? null : {
      invalidPassword:
      { message: 'A password deve conter letras minúsculas, maiúsculas, números e algum dos seguintes símbolos: @, #, $, %, &' }
    };
  }
}
