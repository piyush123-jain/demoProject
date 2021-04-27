import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS,
         ValidationErrors, Validator, ValidatorFn, Validators } from "@angular/forms";
import { socketConnectionService } from './socketConnection.service';

function validatePassword(): ValidatorFn {
return (control: AbstractControl) => {
   let isValid = false;

  if (control && control instanceof FormGroup) {
    let group = control as FormGroup;
    if (group.controls['password'] && group.controls['confirmPassword']) {
      isValid = group.controls['password'].value == group.controls['confirmPassword'].value;
    }

  }
  if (isValid) {
    return null;
  } else {
    return { 'passwordCheck': 'failed' }
  }
}
}
        


@Directive({
  selector: '[appCheckPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchPasswordDirective, multi: true }]
})

export class MustMatchPasswordDirective  implements Validator{
  private valFn;

  constructor(private connection:socketConnectionService) {
    this.valFn = validatePassword();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    var passwordMatchOrNot  = this.valFn(c);
this.connection.PasswordMatchOrNot(passwordMatchOrNot);
    return passwordMatchOrNot;
  }

}