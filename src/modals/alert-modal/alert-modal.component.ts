import { BaseModalComponent } from './../../base/base-modal/base-modal.component';
import { Component, Input, Output, ViewChild, EventEmitter, ElementRef, ViewContainerRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})

export class AlertModalComponent extends BaseModalComponent {

  @ViewChild('focusElement')
  focusElement: ElementRef;
  @ViewChild('modal')
  modal: ModalDirective;

  @Input()
  name = 'alert';
  @Input()
  buttonClass = 'btn-default';
  @Input()
  buttonText: string;
  @Input()
  content: any = false;
  @Input()
  messageClass = 'text-danger';
  @Output()
  onClose: EventEmitter<AlertModalComponent | any> = new EventEmitter();
}