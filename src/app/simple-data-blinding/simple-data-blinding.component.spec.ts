import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDataBlindingComponent } from './simple-data-blinding.component';

describe('SimpleDataBlindingComponent', () => {
  let component: SimpleDataBlindingComponent;
  let fixture: ComponentFixture<SimpleDataBlindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDataBlindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDataBlindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
