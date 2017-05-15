import { isSimpleTemplateString } from 'codelyzer/util/utils';
import { Fontawesome } from './../../../shared/models/fontawesome.model';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { FontawesomesListModalComponent } from './../fontawesomes-list-modal/fontawesomes-list-modal.component';
import { AppService } from './../../../shared/app.service';
import { AccountService } from './../../../shared/account.service';
import { FontawesomesService } from './../../../shared/fontawesomes.service';
import { User } from './../../../shared/models/user.model';
import { ResouceEnumStatus } from './../../../shared/enums/resource.enums';
import { BaseResourceInputComponent } from './../../../base/base-resources-grid/base-resource-input/base-resource-input.component';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'fontawesome-input',
  templateUrl: './fontawesome-input.component.html',
  styleUrls: ['./fontawesome-input.component.scss'],
  entryComponents: [FontawesomesListModalComponent]
})

export class FontawesomeInputComponent extends BaseResourceInputComponent {

  @ViewChild('inputElement')
  inputElement: ElementRef;

  @Input()
  name = 'fontawesome';
  @Input()
  model: any | Fontawesome = new Fontawesome();
  @Output()
  modelChange: EventEmitter<any | Fontawesome> = new EventEmitter<any | Fontawesome>();

  items: any | Fontawesome[];
  cachedResourcesService: FontawesomesService;

  constructor(
    public app: AppService,
    public accountService: AccountService,
    public sanitizer: DomSanitizer,
    public fontawesomesService: FontawesomesService,
    public resolver: ComponentFactoryResolver,
    public translateService: TranslateService
  ) {
    super(sanitizer, translateService);
    this.cachedResourcesService = fontawesomesService.createCache();
  }
  get account(): any | User {
    return this.accountService.account;
  }
  onLookup() {
    const itemModal: FontawesomesListModalComponent =
      this.app.modals(this.resolver).create(FontawesomesListModalComponent);
    itemModal.name = 'selectFontawesomes';
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.account = this.account;
    itemModal.text = this.translateService.instant('Select');
    itemModal.title = this.translateService.instant('Fontawesomes');
    itemModal.onSave.subscribe(($event: any) => {
      this.value = itemModal.item;
      if (this.inputReadonly === false) {
        this.valueAsString = '';
      }
      itemModal.modal.hide();
    });
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = this.value;
    itemModal.modal.show();
  }
}
