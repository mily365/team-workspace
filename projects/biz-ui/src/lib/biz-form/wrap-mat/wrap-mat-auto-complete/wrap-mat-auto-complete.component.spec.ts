import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapMatAutoCompleteComponent } from './wrap-mat-auto-complete.component';

describe('WrapMatAutoCompleteComponent', () => {
  let component: WrapMatAutoCompleteComponent;
  let fixture: ComponentFixture<WrapMatAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapMatAutoCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapMatAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
