import { takeUntil } from 'rxjs/operators';

import { Component, Injector, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@rucken/core';
import * as lodashImported from 'lodash'; const _ = lodashImported;

import { BaseComponent } from './../../base-component/base-component.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'base-frame',
  template: ''
})
export class BaseFrameComponent extends BaseComponent {

  @Input()
  title?: string;
  @Input()
  customTitle?: string;

  activatedRoute: ActivatedRoute;
  router: Router;

  constructor(
    public injector: Injector
  ) {
    super(injector);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
  }
  afterCreate() {
    super.afterCreate();
    this.translateService.onLangChange.pipe(takeUntil(this.destroyed$)).subscribe(() => this.initTitle());
    this.app.onCurrentPageTitle.pipe(takeUntil(this.destroyed$)).subscribe(() => this.initTitle());
    if (this.accountService) {
      this.accountService.account$.pipe(takeUntil(this.destroyed$)).subscribe((account: any | User) => this.initTitle());
    }
  }
  initTitle() {
    let frameTitle = '';
    if (this.name === undefined && this.activatedRoute.snapshot.data.name) {
      this.name = this.activatedRoute.snapshot.data.name;
      this.app.currentFrameName = this.name ? this.name : '';
    }
    if (this.customTitle === undefined) {
      if (this.activatedRoute.snapshot.data.title) {
        frameTitle = this.activatedRoute.snapshot.data.title;
      } else {
        if (this.name) {
          frameTitle = _.upperFirst(this.name);
        }
      }
      this.app.currentFrameTitle = frameTitle;
      this.title =
        `${this.translateService.instant(this.app.currentPageTitle)}: ${this.translateService.instant(frameTitle)}`;
    } else {
      this.title = this.customTitle;
    }
  }
  init() {
    super.init();
    this.initTitle();
  }
}
