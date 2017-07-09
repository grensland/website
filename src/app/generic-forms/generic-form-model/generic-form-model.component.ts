import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-generic-form-model',
  templateUrl: './generic-form-model.component.html',
  styleUrls: ['./generic-form-model.component.scss']
})
export class GenericFormModelComponent implements OnInit {

  @Input() formDef: any;
  @Input() formVal: any;
  @Input() submitFunc: Function;
  @Input() cancelFunc: Function;

  constructor() { }

  ngOnInit() {
  }

}
