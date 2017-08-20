import {FormItemType} from "./form-item-type";

export interface FormItemModel {
  id: string;
  type: FormItemType;
  label?: string;
}
