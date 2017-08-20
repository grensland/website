import {FormItemModel} from "./form-item-model";

export interface FormControlModel extends FormItemModel {
  controlType: string;
  value?: string;
}
