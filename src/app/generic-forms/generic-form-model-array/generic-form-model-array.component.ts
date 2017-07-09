import {Component, OnInit, Input} from '@angular/core';
import {FormCollectionModel} from "../models/form-collection-model";

@Component({
  selector: 'app-generic-form-model-array',
  templateUrl: './generic-form-model-array.component.html',
  styleUrls: ['./generic-form-model-array.component.scss']
})
export class GenericFormModelArrayComponent implements OnInit {
  @Input() formCollectionModel: FormCollectionModel;


  constructor() { }

  ngOnInit() {
  }

}
