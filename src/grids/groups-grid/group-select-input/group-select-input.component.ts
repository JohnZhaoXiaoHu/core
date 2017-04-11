import { isSimpleTemplateString } from 'codelyzer/util/utils';
import { SelectInputComponent } from '../../../controls/select-input/select-input.component';
import { Group } from '../../../shared/models/group.model';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { GroupsListModalComponent } from '../groups-list-modal/groups-list-modal.component';
import { AppService } from '../../../shared/app.service';
import { AccountService } from '../../../shared/account.service';
import { GroupsService } from '../../../shared/groups.service';
import { User } from '../../../shared/models/user.model';
import { ResouceEnumStatus } from '../../../shared/enums/resource.enums';
import { ResourceSelectInputComponent } from '../../resources-grid/resource-select-input/resource-select-input.component';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResourceSelectInputConfig } from '../../resources-grid/resource-select-input/resource-select-input.config';
import { TooltipDirective } from 'ng2-bootstrap/tooltip';

@Component({
  selector: 'group-select-input',
  templateUrl: './group-select-input.component.html',
  styleUrls: ['./group-select-input.component.scss'],
  entryComponents: [GroupsListModalComponent]
})

export class GroupSelectInputComponent extends ResourceSelectInputComponent {
  @Input()
  labelClass?: string = 'control-label';
  @Input()
  inputClass?: string;
  @ViewChild('inputElement')
  inputElement: SelectInputComponent;
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
  name: string = 'group';
  @Input()
  placeholder: string = '';
  @Input()
  title: string = '';
  @Input()
  model: Group = new Group();
  @Output()
  modelChange: EventEmitter<Group> = new EventEmitter<Group>();

  @Input()
  modelAsString: string = '';
  @Output()
  modelAsStringChange: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  hardValue: any = null;

  @ViewChild('tooltip')
  public tooltip: TooltipDirective;
  @Input()
  public tooltipEnable: boolean;
  @Input()
  public tooltipText: string = '';
  @Input()
  public tooltipPlacement: string = 'bottom';
  @Input()
  public tooltipTriggers: string = 'hover focus';

  @Input()
  errors: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  info: EventEmitter<any> = new EventEmitter<any>();
  public errorsValue: any;
  public infoValue: any;
  public items: Group[];
  public cachedResourcesService: GroupsService;
  constructor(
    public app: AppService,
    public accountService: AccountService,
    public groupsService: GroupsService,
    public resolver: ComponentFactoryResolver,
    public sanitizer: DomSanitizer,
    public translateService: TranslateService,
    public config: ResourceSelectInputConfig
  ) {
    super(sanitizer, translateService, config);
    if (this.lookupTooltip === undefined) {
      this.lookupTooltip = this.translateService.instant('Select');
    }
    this.cachedResourcesService = groupsService.createCache();
  }
  get account(): User {
    return this.accountService.account;
  }
  onLookup() {
    let itemModal: GroupsListModalComponent =
      this.app.modals(this.resolver).create(GroupsListModalComponent);
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.account = this.account;
    itemModal.text = this.translateService.instant('Select');
    itemModal.title = this.translateService.instant('Groups');
    itemModal.onSave.subscribe(($event: any) => {
      this.value = itemModal.item;
      if (this.inputElement) {
        this.inputElement.value = this.value.pk;
      }
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