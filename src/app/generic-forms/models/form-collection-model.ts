import {FormItemModel} from "./form-item-model";

export interface FormCollectionModel extends FormItemModel {
  children?: FormItemModel[];
}
