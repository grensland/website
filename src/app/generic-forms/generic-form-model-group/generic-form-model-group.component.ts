import {Component, OnInit, Input} from '@angular/core';
import {FormCollectionModel} from "../models/form-collection-model";

@Component({
  selector: 'app-generic-form-model-group',
  templateUrl: './generic-form-model-group.component.html',
  styleUrls: ['./generic-form-model-group.component.scss']
})
export class GenericFormModelGroupComponent implements OnInit {
  @Input() formCollectionModel: FormCollectionModel;

  constructor() { }

  ngOnInit() {
  }

}
