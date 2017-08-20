import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-generic-form-fields',
  templateUrl: './generic-form-fields.component.html',
  styleUrls: ['./generic-form-fields.component.scss']
})
export class GenericFormFieldsComponent implements OnInit {
  @Input() formDef: any;
  @Input() formVal: any;
  @Input() submitFunc: Function;
  @Input() cancelFunc: Function;

  constructor() { }

  ngOnInit() {
  }

}
