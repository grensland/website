import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { GenericFormFieldsComponent } from './generic-form-fields/generic-form-fields.component';
import { GenericFormLogicComponent } from './generic-form-logic/generic-form-logic.component';
import { GenericFormModelComponent } from './generic-form-model/generic-form-model.component';
import { GenericFormModelGroupComponent } from './generic-form-model-group/generic-form-model-group.component';
import { GenericFormModelArrayComponent } from './generic-form-model-array/generic-form-model-array.component';
import { GenericFormModelControlComponent } from './generic-form-model-control/generic-form-model-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  declarations: [
    GenericFormFieldsComponent,
    GenericFormLogicComponent,
    GenericFormModelComponent,
    GenericFormModelGroupComponent,
    GenericFormModelArrayComponent,
    GenericFormModelControlComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    GenericFormFieldsComponent,
    GenericFormLogicComponent,
    GenericFormModelComponent
  ]
})
export class GenericFormsModule { }
