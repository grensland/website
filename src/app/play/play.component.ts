import { Component, OnInit } from '@angular/core';
import {GenericFormLogicComponent} from "../generic-forms/generic-form-logic/generic-form-logic.component";
import {Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent extends GenericFormLogicComponent {
  formDef: any = [
    {
      id: 'licenseplate',
      type: 'FormControl',
      controlType: 'text',
      required: true,
      label: 'Licenseplate',
      error: null
    }, {
      id: 'vin',
      type: 'FormControl',
      controlType: 'text',
      required: true,
      label: 'Chassis number (VIN)',
      error: null
    }, {
      id: 'group',
      type: 'FormGroup',
      children: [
        {
          id: 'vin-child',
          type: 'FormControl',
          controlType: 'text',
          required: true,
          label: 'Chassis number (VIN) CHILD',
          error: null
        }
      ]
    }];

  formVal = this.formBuilder.group({
    licenseplate: [null, Validators.required],
    vin: [null, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
  }



}
