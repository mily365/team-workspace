import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapChiplistInputComponent } from './wrap-chiplist-input.component';

describe('WrapChiplistInputComponent', () => {
  let component: WrapChiplistInputComponent;
  let fixture: ComponentFixture<WrapChiplistInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapChiplistInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapChiplistInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
