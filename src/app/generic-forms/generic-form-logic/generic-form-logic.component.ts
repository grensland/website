import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-generic-form-logic',
  templateUrl: './generic-form-logic.component.html',
  styleUrls: ['./generic-form-logic.component.scss']
})
export class GenericFormLogicComponent implements OnInit {
  formDef: any;
  formVal: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  cancel = () => {
    console.log("Formfield cancelation");
  };

  submit = () => {
    console.log("Formfield submit");
  }

}
