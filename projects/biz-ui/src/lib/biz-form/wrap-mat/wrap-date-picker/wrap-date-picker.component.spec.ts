import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapDatePickerComponent } from './wrap-date-picker.component';

describe('WrapDatePickerComponent', () => {
  let component: WrapDatePickerComponent;
  let fixture: ComponentFixture<WrapDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
