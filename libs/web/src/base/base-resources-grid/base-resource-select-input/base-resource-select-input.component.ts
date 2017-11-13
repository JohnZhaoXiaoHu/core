import 'rxjs/add/operator/takeUntil';

import { Component, EventEmitter, Input, Output, Inject, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EndpointStatusEnum, translate } from '@rucken/core';

import { BaseComponent } from './../../../base/base-component/base-component.component';
import { BaseResourceSelectInputConfig } from './base-resource-select-input.config';
import { BaseResourcesListComponent } from '../base-resources-list/base-resources-list.component';

@Component({
  selector: 'base-resource-select-input',
  template: ''
})
export class BaseResourceSelectInputComponent extends BaseResourcesListComponent {

  @Input()
  labelClass?= 'control-label';
  @Input()
  inputClass?= 'form-control';
  @Input()
  inputFrameClass?= '';
  @Input()
  lookupTooltip?: string;
  @Input()
  lookupIcon?= 'fa fa-search';
  @Input()
  readonly?: boolean;
  @Input()
  hardReadonly?: boolean;
  @Input()
  inputReadonly?: boolean;
  @Input()
  placeholder = '';
  @Input()
  title = '';
  @Input()
  model: any = {};
  @Output()
  modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  modelAsString = '';
  @Output()
  modelAsStringChange: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  hardValue: any = null;
  @Input()
  select?: boolean;
  @Input()
  width: string = null;

  config: BaseResourceSelectInputConfig;

  get value() {
    return this.model;
  }
  set value(val) {
    if (this.errorsValue && this.errorsValue[this.name]) {
      delete this.errorsValue[this.name];
      this.tooltipText = '';
    }
    this.model = val;
    this.modelChange.emit(this.model);
  }
  get valueAsString() {
    return this.modelAsString;
  }
  set valueAsString(val) {
    this.modelAsString = val;
    this.modelAsStringChange.emit(this.modelAsString);
  }

  constructor(
    public injector: Injector
  ) {
    super(injector);
    this.config = injector.get(BaseResourceSelectInputConfig);
  }
  afterCreate() {
    if (this.select === undefined) {
      this.select = this.config.select;
    }
    if (this.loadAll === undefined) {
      if (this.select) {
        this.loadAll = true;
      } else {
        this.loadAll = false;
      }
    }
    super.afterCreate();
    if (this.lookupIcon === undefined) {
      this.lookupIcon = this.config.lookupIcon;
    }
    if (this.tooltipEnable === undefined) {
      this.tooltipEnable = this.config.errorInTooltip;
    }
    if (this.readonly === undefined) {
      this.readonly = false;
    }
    if (this.hardReadonly === undefined) {
      this.hardReadonly = false;
    }
    if (this.inputReadonly === undefined) {
      this.inputReadonly = true;
    }
    if (this.inputElement) {
      this.inputElement.hardValue = this.hardValue;
    }
    this.translateService.onLangChange.takeUntil(this.destroyed$).subscribe(() => this.initSearch());
    this.onLoaded.subscribe((items: any[]) => {
      this.items = items;
      if (this.inputElement) {
        this.inputElement.items = this.items;
        this.inputElement.init();
      }
    });
  }
  initSearch() {
    if (this.lookupTooltip === undefined) {
      this.lookupTooltip = this.translateService.instant(translate('Select'));
    }
    if (this.select && this.loadAll) {
      this.search();
    }
  }
}
