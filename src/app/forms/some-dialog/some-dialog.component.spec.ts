import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeDialogComponent } from './some-dialog.component';

describe('SomeDialogComponent', () => {
  let component: SomeDialogComponent;
  let fixture: ComponentFixture<SomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
