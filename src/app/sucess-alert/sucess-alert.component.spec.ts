import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessAlertComponent } from './sucess-alert.component';

describe('SucessAlertComponent', () => {
  let component: SucessAlertComponent;
  let fixture: ComponentFixture<SucessAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
