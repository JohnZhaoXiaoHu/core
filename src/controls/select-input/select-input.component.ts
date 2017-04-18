import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NguiAutoCompleteComponent } from '@ngui/auto-complete';
import * as _ from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';
import { SelectInputConfig } from './select-input.config';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  encapsulation: ViewEncapsulation.None  // Enable dynamic HTML styles
})

export class SelectInputComponent implements OnInit {
  @Input()
  public debounceTime?: number = 300;
  @Output()
  public onChangeInputValue: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  public labelClass?: string = 'control-label';
  @Input()
  public inputClass?: string = 'form-control';
  @ViewChild('tooltip')
  public tooltip: TooltipDirective;
  @ViewChild('autoComplete')
  public autoComplete: NguiAutoCompleteComponent;
  @ViewChild('inputElement')
  public inputElement: ElementRef;
  @Input()
  public inFormGroup: boolean = true;
  @Input()
  public focused: boolean = false;
  @Input()
  public readonly: boolean = false;
  @Input()
  public name: string = 'select';
  @Input()
  public placeholder: string = '';
  @Input()
  public valueField: string
  @Input()
  public title: string;
  @Input()
  public model: any;
  @Input()
  public hardValue: any = null;
  @Input()
  public titleField: string;
  @Input()
  public inputTitleField: string;
  @Output()
  public modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  public errors: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  public info: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  public width: string = null;
  @Input()
  public tooltipEnable: boolean;
  @Input()
  public tooltipText: string = '';
  @Input()
  public tooltipPlacement: string = 'bottom';
  @Input()
  public tooltipTriggers: string = 'hover focus';
  @Input()
  public set items(items: any[]) {
    this._items = items;
    if (this.autoComplete) {
      if (JSON.stringify(this.autoComplete.source) === JSON.stringify(items)) {
        return;
      }
      this.autoComplete.source = items;
      if (this.showMe) {
        this._showMe = false;
        this.autoComplete.reloadList('');
        setTimeout(() => {
          this.resizeList();
          this._showMe = true;
        }, 300);
      } else {
        this.autoComplete.reloadList('');
        setTimeout(() => {
          this.resizeList();
        }, 300);
      }
    }
  }
  public get items() {
    return this._items;
  }
  private _items: any[] = [];
  public errorsValue: any;
  public infoValue: any;
  private _showMe: boolean = false;
  private debouncer: Subject<string> = new Subject<string>();
  public getTitle: any;
  constructor(
    public sanitizer: DomSanitizer,
    public translateService: TranslateService,
    public config: SelectInputConfig
  ) {
    if (this.tooltipEnable === undefined) {
      this.tooltipEnable = config.errorInTooltip;
    }
    if (this.valueField === undefined) {
      this.valueField = config.valueField;
    }
    if (this.titleField === undefined) {
      this.titleField = config.titleField;
    }
    if (this.inputTitleField === undefined) {
      this.inputTitleField = config.inputTitleField;
    }
    this.debouncer
      .debounceTime(this.debounceTime)
      .subscribe((value: string) => this.onChangeInputValue.emit(value));
  }
  ngOnInit() {
    this.errors.subscribe((data: any) => {
      this.errorsValue = data;
      let keys = Object.keys(data);
      if (keys[0] === this.name) {
        this.focus();
      }
      this.tooltipText = this.errorMessage;
    });
    this.info.subscribe((data: any) => {
      this.infoValue = data;
      let keys = Object.keys(data);
      if (keys[0] === this.name) {
        this.focus();
      }
      this.tooltipText = this.infoMessage;
    });
    this.init();
  }
  get inputReadonly() {
    return this.onChangeInputValue.observers && this.onChangeInputValue.observers.length == 0;
  }
  onKey(value: string) {
    if (!value && !this.inputReadonly) {
      this.value = null;
    }
    this.debouncer.next(value);
  }
  showTooltip() {
    let tooltip: any = this.tooltip;
    if (!tooltip._tooltip || !tooltip._tooltip._componentRef || !tooltip._tooltip._componentRef.location.nativeElement) {
      return;
    }
    let tooltipInner: any = tooltip._tooltip._componentRef.location.nativeElement.getElementsByClassName('tooltip-inner')[0];
    let tooltipArrow: any = tooltip._tooltip._componentRef.location.nativeElement.getElementsByClassName('tooltip-arrow')[0];
    tooltipInner.style.backgroundColor = getComputedStyle(this.inputElement.nativeElement).borderColor;
    tooltipArrow.style.borderTopColor = getComputedStyle(this.inputElement.nativeElement).borderColor;
    tooltipArrow.style.borderBottomColor = getComputedStyle(this.inputElement.nativeElement).borderColor;
  }
  get showMe() {
    return this._showMe;
  }
  set showMe(val: any) {
    setTimeout(() => {
      this.resizeList();
      this._showMe = val;
    }, 300);
  }
  get value() {
    return this.model;
  }
  set value(val: any) {
    if (this.errorsValue && this.errorsValue[this.name]) {
      delete this.errorsValue[this.name];
      this.tooltipText = '';
    }
    this.model = val;
    this.modelChange.emit(this.model);
  }
  safeHtml(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  get errorMessage(): any {
    let arr: string[] = [];
    let text: string = '';
    if (this.errorsValue && this.errorsValue[this.name]) {
      for (let i = 0; i < this.errorsValue[this.name].length; i++) {
        if (this.errorsValue[this.name][i]) {
          text = this.translateService.instant(this.errorsValue[this.name][i]);
          arr.push(text);
        }
      }
    }
    if (arr.length > 0) {
      return arr.join(', ');
    }
    return false;
  }
  get infoMessage(): any {
    let arr: string[] = [];
    let text: string = '';
    if (this.infoValue && this.infoValue[this.name]) {
      for (let i = 0; i < this.infoValue[this.name].length; i++) {
        if (this.infoValue[this.name][i]) {
          text = this.translateService.instant(this.infoValue[this.name][i]);
          arr.push(text);
        }
      }
    }
    if (arr.length > 0) {
      return arr.join(', ');
    }
    return false;
  }
  init() {
    this.getTitle = (item: any) => {
      if (item && item[this.titleField]) {
        return this.safeHtml(item[this.titleField]);
      }
      if (item && item[this.inputTitleField]) {
        return this.safeHtml(item[this.inputTitleField]);
      }
      return '';
    };
    if (this.hardValue) {
      this.value = this.hardValue;
    }
    setTimeout((out: any) => {
      if (this.focused === true) {
        this.focus();
      }
    }, 700);
  }
  resizeList() {
    if (this.value && this.value.pk) {
      this.items.map((item: any, index: number) => {
        if (item && this.value && item.pk === this.value.pk) {
          this.autoComplete.itemIndex = index;
        }
      });
    }
    if (this.autoComplete && this.autoComplete.el &&
      this.autoComplete.el.children[0] && this.autoComplete.el.children[0].children[0] &&
      this.inputElement && this.inputElement.nativeElement) {
      let options: any = this.autoComplete.el.children[0].children[0].children;
      let select: any = this.autoComplete.el.children[0];
      //if (this.items && options.length >= this.items.length) {
      for (let i = 0; i < options.length; i++) {
        if (this.width === null) {
          options[i].style.width = this.inputElement.nativeElement.offsetWidth + 'px';
        } else {
          options[i].style.width = this.width;
        }
      }
      select.style.display = '';
      //}
    } else {
      setTimeout(() => {
        this.resizeList();
      }, 200);
    }
  }
  focus() {
    if (this.autoComplete) {
      this.autoComplete.dropdownVisible = true;
    }
  }
  getInputTitle(item: any) {
    if (item && item[this.inputTitleField]) {
      return item[this.inputTitleField];
    }
    if (item && item[this.titleField]) {
      return item[this.titleField];
    }
    return '';
  }
}
