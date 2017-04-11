import { isSimpleTemplateString } from 'codelyzer/util/utils';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { AppService } from './../../../shared/app.service';
import { AccountService } from './../../../shared/account.service';
import { User } from './../../../shared/models/user.model';
import { ResouceEnumStatus } from './../../../shared/enums/resource.enums';


export class ResourceInputComponent implements OnInit {
  @ViewChild('inputElement')
  inputElement: ElementRef;
  @Input()
  lookupTooltip?: string;
  @Input()
  lookupIcon?: string = 'fa fa-search';
  @Input()
  focused: boolean = false;
  @Input()
  readonly: boolean = false;
  @Input()
  hardReadonly: boolean = false;
  @Input()
  inputReadonly: boolean = true;
  @Input()
  name: string = 'resource';
  @Input()
  placeholder: string = '';
  @Input()
  title: string = '';
  @Input()
  model: any = {};
  @Output()
  modelChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  modelAsString: string = '';
  @Output()
  modelAsStringChange: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  errors: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  info: EventEmitter<any> = new EventEmitter<any>();
  public errorsValue: any;
  public infoValue: any;
  public items: any[];
  public cachedResourcesService: any;

  ngOnInit() {
    this.errors.subscribe((data: any) => {
      this.errorsValue = data;
      let keys = Object.keys(data);
      if (keys[0] === this.name) {
        this.focus();
      }
    });
    this.info.subscribe((data: any) => {
      this.infoValue = data;
      let keys = Object.keys(data);
      if (keys[0] === this.name) {
        this.focus();
      }
    });
    this.init();
  }
  init() {
    setTimeout((out: any) => {
      if (this.focused === true) {
        this.focus();
      }
    }, 700);
    this.cachedResourcesService.loadAll();
  }
  focus() {
    if (this.inputElement) {
      this.inputElement.nativeElement.focus();
    }
  }
  get value() {
    return this.model;
  }
  set value(val) {
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
  get statusListMessage() {
    if (this.cachedResourcesService.statusList === ResouceEnumStatus.Ok) {
      return '';
    } else {
      return this.cachedResourcesService.statusListMessage;
    }
  }
}