import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapMatInputComponent } from './wrap-mat-input.component';

describe('BizMatInputComponent', () => {
  let component: WrapMatInputComponent;
  let fixture: ComponentFixture<WrapMatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapMatInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapMatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
