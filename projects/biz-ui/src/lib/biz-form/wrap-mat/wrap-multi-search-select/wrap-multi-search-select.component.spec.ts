import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapMultiSearchSelectComponent } from './wrap-multi-search-select.component';

describe('WarpMultiSelectComponent', () => {
  let component: WrapMultiSearchSelectComponent;
  let fixture: ComponentFixture<WrapMultiSearchSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapMultiSearchSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapMultiSearchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
