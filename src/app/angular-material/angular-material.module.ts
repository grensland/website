import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule
  ]
})
export class AngularMaterialModule { }
