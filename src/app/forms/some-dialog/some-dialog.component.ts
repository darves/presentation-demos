import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-some-dialog',
  templateUrl: './some-dialog.component.html',
  styleUrls: ['./some-dialog.component.scss']
})
export class SomeDialogComponent {
  title!: string;

  messages: string[] = [];

  constructor(private activeModal: NgbActiveModal) {
  }

  close() {
    this.activeModal.close({
      id: 1,
      name: 'Some name'
    } as SomeDialogResult);
  }
}

export interface SomeDialogResult {
  id: number;
  name: string;
}