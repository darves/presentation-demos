import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Errors } from '../shared/error/error.component';

export function superValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbiddenValue = 'super';
    const forbidden = control.value === forbiddenValue;

    return forbidden ? { [Errors.FdtError]: true } : null;
  };
}