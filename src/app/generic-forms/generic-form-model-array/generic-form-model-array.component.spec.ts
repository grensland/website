import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormModelArrayComponent } from './generic-form-model-array.component';

describe('GenericFormModelArrayComponent', () => {
  let component: GenericFormModelArrayComponent;
  let fixture: ComponentFixture<GenericFormModelArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormModelArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormModelArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
