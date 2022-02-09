import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarpMultiSelectComponent } from './warp-multi-select.component';

describe('WarpMultiSelectComponent', () => {
  let component: WarpMultiSelectComponent;
  let fixture: ComponentFixture<WarpMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarpMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarpMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
