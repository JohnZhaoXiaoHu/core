import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentType, CONTENT_TYPES_CONFIG_TOKEN, ErrorsExtractor, translate } from '@rucken/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { BaseEntityListComponent } from '../../../base/base-entity-list.component';
import { MessageModalService } from '../../../modals/message-modal/message-modal.service';
import { ContentTypeModalComponent } from '../content-type-modal/content-type-modal.component';

@Component({
  selector: 'content-types-grid',
  templateUrl: './content-types-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentTypesGridComponent
  extends BaseEntityListComponent<ContentType>
  implements OnInit {
  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected messageModalService: MessageModalService,
    @Inject(CONTENT_TYPES_CONFIG_TOKEN) protected contentTypesConfig: IRestProviderOptions<ContentType>
  ) {
    super(
      dynamicRepository.fork<ContentType>(ContentType),
      modalService,
      ContentType
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        ...this.contentTypesConfig
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.contentTypesConfig
      });
    }
  }
  createDeleteModal(item: ContentType): BsModalRef {
    return this.modalService.show(ContentTypeModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.deleteTitle,
        message: this.strings.deleteMessage,
        yesTitle: translate('Delete'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createCreateModal(): BsModalRef {
    const item = new ContentType();
    return this.modalService.show(ContentTypeModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.createTitle,
        yesTitle: translate('Create'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createUpdateModal(item?: ContentType): BsModalRef {
    return this.modalService.show(ContentTypeModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.updateTitle,
        yesTitle: translate('Save'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createViewModal(item?: ContentType): BsModalRef {
    return this.modalService.show(ContentTypeModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.viewTitle,
        noTitle: translate('Close'),
        readonly: true,
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
}