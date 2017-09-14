import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsGridComponent } from './permissions-grid.component';
import { GridSearchPanelModule } from './../../controls/grid-search-panel/grid-search-panel.module';
import { TableColumnModule } from './../../controls/table-column/table-column.module';
import { GridRowButtonsModule } from './../../controls/grid-row-buttons/grid-row-buttons.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ConfirmModalModule } from './../../modals/confirm-modal/confirm-modal.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule.forRoot(), GridSearchPanelModule.forRoot(), ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(), GridRowButtonsModule.forRoot(), PaginationModule.forRoot()
  ],

  declarations: [
    PermissionsGridComponent
  ],
  exports: [PermissionsGridComponent],
  entryComponents: [PermissionsGridComponent]
})
export class PermissionsGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PermissionsGridModule,
      providers: []
    };
  }
}
