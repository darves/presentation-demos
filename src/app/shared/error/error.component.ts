import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

export enum Errors {
  Required = 'required',
  Maxlength = 'maxlength',
  Minlength = 'minlength',
  Pattern = 'pattern',
  Min = 'min',
  Max = 'max',
  FdtError = 'superNotAllowed'
};

@Component({
  selector: 'error-component',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  // providers: [DestroyHook]
})
export class ErrorComponent {
  private readonly ngDestroy$ = new Subject();
  @Input() control!: AbstractControl | AbstractControlDirective;

  errorMsgList!: string[];

  private defaultMessages: Record<Errors, (text: any) => string> = {
    [Errors.Required]: (params: any) => `This field is required`,
    [Errors.Maxlength]: (params: any) => `Maximum ${params.requiredLength} characters are allowed`,
    [Errors.Minlength]: (params: any) => `Minimum ${params.requiredLength} characters are required`,
    [Errors.Pattern]: (params: any) => `Invalid format`,
    [Errors.Min]: (params: any) => `Minimum amount should be ₹ ${params.min}`,
    [Errors.Max]: (params: any) => `Maximum amount should be ₹ ${params.max}`,
    [Errors.FdtError]: (params: any) => `Super not allowed`,
  };

  constructor() {}

  ngOnInit() {
    this.control.valueChanges?.pipe(
      takeUntil(this.ngDestroy$)
    )
    .subscribe(() => {
      this.errorMsgList = this.getErrorMessages();
    })
  }

  private getErrorMessages() {
    let result: string[] = [];
    if (!this.control) return result;
        if (this.control.errors) {
            Object.keys(this.control.errors).map( (error) => {
                const errorKey: Errors = error as Errors;
                this.control.touched || this.control.dirty ?
                result.push(this.defaultMessages[errorKey]((this.control.errors as any)[errorKey])) : '';
            });
            return result;
        }
        else {
            return result;
        }
  }
}
