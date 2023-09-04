import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { MessageDialogComponent } from './dialog/message-dialog/message-dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    MessageDialogComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class CoreModule { }
