import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizTableComponent } from './biz-table.component';

describe('SimpleTableComponent', () => {
  let component: BizTableComponent<any>;
  let fixture: ComponentFixture<BizTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
