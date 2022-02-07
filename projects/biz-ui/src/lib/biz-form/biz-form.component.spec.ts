import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizFormComponent } from './biz-form.component';

describe('BizFormComponent', () => {
  let component: BizFormComponent;
  let fixture: ComponentFixture<BizFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
