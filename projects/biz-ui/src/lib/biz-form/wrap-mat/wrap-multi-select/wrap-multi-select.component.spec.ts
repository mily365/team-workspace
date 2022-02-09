import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapMultiSelectComponent } from './wrap-multi-select.component';

describe('WarpMultiSelectComponent', () => {
  let component: WrapMultiSelectComponent;
  let fixture: ComponentFixture<WrapMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
