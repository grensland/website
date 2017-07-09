import {Component, OnInit, Input} from '@angular/core';
import {FormControlModel} from "../models/form-control-model";

@Component({
  selector: 'app-generic-form-model-control',
  templateUrl: './generic-form-model-control.component.html',
  styleUrls: ['./generic-form-model-control.component.scss']
})
export class GenericFormModelControlComponent implements OnInit {
  @Input() formControlModel: FormControlModel;

  constructor() { }

  ngOnInit() {
  }

}
