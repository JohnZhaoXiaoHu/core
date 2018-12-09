import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityGridModule } from '../../../components/entity-grid/entity-grid.module';
import { WebModalsModule } from '../../../modals/modals/modals.module';
import { PermissionModalModule } from '../permission-modal/permission-modal.module';
import { PermissionsGridComponent } from './permissions-grid.component';

@NgModule({
  imports: [CommonModule, WebModalsModule, EntityGridModule, PermissionModalModule],
  declarations: [PermissionsGridComponent],
  exports: [PermissionsGridComponent, EntityGridModule, PermissionModalModule]
})
export class PermissionsGridModule {}
