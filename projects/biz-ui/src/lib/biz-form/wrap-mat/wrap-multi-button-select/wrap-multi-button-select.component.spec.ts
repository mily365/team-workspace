import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapMultiButtonSelectComponent } from './wrap-multi-button-select.component';

describe('WarpMultiSelectComponent', () => {
  let component: WrapMultiButtonSelectComponent;
  let fixture: ComponentFixture<WrapMultiButtonSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapMultiButtonSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapMultiButtonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
