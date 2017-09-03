import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectInputComponent } from './user-select-input.component';
import { TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { SelectInputModule } from './../../../controls/select-input/select-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { UsersListModalModule } from '../users-list-modal/users-list-modal.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, TranslateModule.forChild(), TooltipModule.forRoot(),
    SelectInputModule.forRoot(), UsersListModalModule.forRoot()
  ],
  declarations: [
    UserSelectInputComponent
  ],
  exports: [UserSelectInputComponent],
  entryComponents: [UserSelectInputComponent]
})
export class UserSelectInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserSelectInputModule,
      providers: []
    };
  }
}
