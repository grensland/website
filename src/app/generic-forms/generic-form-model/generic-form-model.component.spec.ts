import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormModelComponent } from './generic-form-model.component';

describe('GenericFormModelComponent', () => {
  let component: GenericFormModelComponent;
  let fixture: ComponentFixture<GenericFormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
