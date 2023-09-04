import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToFormGroup } from '../../core/utils';
import { ExampleFormModel } from '../models/example-form.model';
import { OperatingSystem } from '../models/operating-system.enum';
import { FdtDialogService } from '../../core/dialog/fdt-dialog.service';
import { SomeDialogComponent, SomeDialogResult } from '../some-dialog/some-dialog.component';
import { superValidator } from '../../core/super.validator';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.scss']
})
export class FormsExampleComponent {
  exampleForm: FormGroup<ToFormGroup<ExampleFormModel>>;
  operatingSystems = Object.values(OperatingSystem);

  constructor(private formBuilder: FormBuilder, private fdtDialogService: FdtDialogService) { 
    this.exampleForm = this.formBuilder.nonNullable.group({
      name: new FormControl('', {
        nonNullable: true, 
        validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
      }),
      email: new FormControl<string | null>(null, {
        validators: [Validators.email, Validators.required]
      }),
      age: new FormControl(0, {
        nonNullable: true, 
        validators: [Validators.required, Validators.min(18)]
      }), 
      operatingSystem: new FormControl<OperatingSystem | null>(null, {
        validators: Validators.required
      }),
      // #region newProperty
      newProperty: new FormControl<string>('ss', {
        nonNullable: true,
      }),
      newProperty2: ['', Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]
      // #endregion
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.exampleForm.invalid) {
      this.exampleForm.setValue(this.exampleForm.getRawValue())
      this.exampleForm.markAllAsTouched();
      this.fdtDialogService.confirm("Please fill all the required fields")
        .subscribe((result) => {  
          if (result) {
            this.fdtDialogService.message({message: "Tnx you for trying again", title: "Success"})
          } else {
            this.fdtDialogService.message({message: "Sad you give up", title: ":("})
          }
        });
      return;
    } else {
      this.fdtDialogService.open<SomeDialogComponent, SomeDialogResult>(SomeDialogComponent, {
        title: 'Supercooltitle',
        messages: ['Message 1', 'Message 2', 'Message 3'],
      }).subscribe((res) => {
        console.log(res.id, res.name);
      });

      type OnlyTitle = Pick<SomeDialogComponent, 'title'>
      let a: OnlyTitle = {
        title: 'Supercooltitle',
        // messages: ['Super']
      }
    }

    console.info("Form Valid!")
  }
}
