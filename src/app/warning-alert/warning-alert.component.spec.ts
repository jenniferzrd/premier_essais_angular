import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningALertComponent } from './warning-alert.component';

describe('WarningALertComponent', () => {
  let component: WarningALertComponent;
  let fixture: ComponentFixture<WarningALertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningALertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningALertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
