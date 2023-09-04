import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-example-routing.module';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { SomeDialogComponent } from './some-dialog/some-dialog.component';


@NgModule({
  declarations: [
    FormsExampleComponent,
    SomeDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class FormsExampleModule { }
