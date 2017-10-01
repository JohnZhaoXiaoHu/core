import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@rucken/core';
import { PageHeaderModule } from '@rucken/web';
import { PipesModule } from '@rucken/web';

import { DemoHomePageComponent } from './home-page.component';
import { DemoHomePageRoutes } from './home-page.routes';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    PageHeaderModule.forRoot(),
    PipesModule.forRoot(),
    RouterModule.forChild(DemoHomePageRoutes)
  ],
  declarations: [DemoHomePageComponent],
  exports: [DemoHomePageComponent],
  entryComponents: [DemoHomePageComponent]
})
export class DemoHomePageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DemoHomePageModule,
      providers: []
    };
  }
}
