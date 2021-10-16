import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizAppFrameComponent } from './biz-app-frame.component';

describe('BizAppFrameComponent', () => {
  let component: BizAppFrameComponent;
  let fixture: ComponentFixture<BizAppFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizAppFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizAppFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
