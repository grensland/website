import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormLogicComponent } from './generic-form-logic.component';

describe('GenericFormLogicComponent', () => {
  let component: GenericFormLogicComponent;
  let fixture: ComponentFixture<GenericFormLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
