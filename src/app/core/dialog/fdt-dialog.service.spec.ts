import { TestBed } from '@angular/core/testing';

import { FdtDialogService } from './fdt-dialog.service';

describe('FdtDialogService', () => {
  let service: FdtDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdtDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
