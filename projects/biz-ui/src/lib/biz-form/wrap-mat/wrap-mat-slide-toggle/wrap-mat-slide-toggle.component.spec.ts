import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapMatSlideToggleComponent } from './wrap-mat-slide-toggle.component';

describe('BizMatInputComponent', () => {
  let component: WrapMatSlideToggleComponent;
  let fixture: ComponentFixture<WrapMatSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapMatSlideToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapMatSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
