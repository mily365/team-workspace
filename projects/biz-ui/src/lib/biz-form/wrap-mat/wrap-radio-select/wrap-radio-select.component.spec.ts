import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapRadioSelectComponent } from './wrap-radio-select.component';

describe('WrapRadioSelectComponent', () => {
  let component: WrapRadioSelectComponent;
  let fixture: ComponentFixture<WrapRadioSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapRadioSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapRadioSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
