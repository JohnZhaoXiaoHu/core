import { translate } from './../utils/utils';
import { BaseResourceModel } from '../base/models/base-resource.model';

export class ContentType extends BaseResourceModel {
  static titles: any = {
    id: translate('Id'),
    name: translate('Name'),
    title: translate('Title'),
  };
  static fields: any = ['id', 'name', 'title'];

  id: number;
  name: string;
  title: string;
  static meta(): any {
    const meta: any = ContentType;
    return meta;
  }
  constructor(obj?: any) {
    super(obj);
  }
  get asString() {
    return this.title;
  }
}