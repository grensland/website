import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormModelGroupComponent } from './generic-form-model-group.component';

describe('GenericFormModelGroupComponent', () => {
  let component: GenericFormModelGroupComponent;
  let fixture: ComponentFixture<GenericFormModelGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormModelGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormModelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
