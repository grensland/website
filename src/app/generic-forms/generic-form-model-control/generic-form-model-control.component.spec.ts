import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormModelControlComponent } from './generic-form-model-control.component';

describe('GenericFormModelControlComponent', () => {
  let component: GenericFormModelControlComponent;
  let fixture: ComponentFixture<GenericFormModelControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormModelControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormModelControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
