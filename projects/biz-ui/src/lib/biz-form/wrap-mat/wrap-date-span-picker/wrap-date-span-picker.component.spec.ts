import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapDateSpanPickerComponent } from './wrap-date-span-picker.component';

describe('WrapDateSpanPickerComponent', () => {
  let component: WrapDateSpanPickerComponent;
  let fixture: ComponentFixture<WrapDateSpanPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapDateSpanPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapDateSpanPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
