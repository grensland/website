import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormFieldsComponent } from './generic-form-fields.component';

describe('GenericFormFieldsComponent', () => {
  let component: GenericFormFieldsComponent;
  let fixture: ComponentFixture<GenericFormFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
