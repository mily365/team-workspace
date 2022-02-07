import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilContainerComponent } from './util-container.component';

describe('UtilContainerComponent', () => {
  let component: UtilContainerComponent;
  let fixture: ComponentFixture<UtilContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
