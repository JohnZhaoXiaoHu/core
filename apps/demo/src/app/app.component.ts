import { Component, ComponentFactoryResolver, Injector, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RuckenCoreRuI18n, translate } from '@rucken/core';
import { AlertModalComponent, BaseAppComponent, RuckenWebRuI18n } from '@rucken/web';
import * as _ from 'lodash';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

import { RuckenDemoRuI18n } from './i18n/ru.i18n';

@Component({
  selector: 'demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [AlertModalComponent],
  encapsulation: ViewEncapsulation.None
})
export class DemoAppComponent extends BaseAppComponent {

  languages = [{
    code: 'ru',
    title: translate('Russian'),
    dic: _.merge(RuckenCoreRuI18n, RuckenWebRuI18n, RuckenDemoRuI18n)
  }, {
    code: 'en',
    title: translate('English'),
    dic: null
  }];

  currentLang = 'en';

  constructor(
    public injector: Injector,
    public viewContainerRef: ViewContainerRef,
    public resolver: ComponentFactoryResolver,
    public router: Router
  ) {
    super(injector, viewContainerRef, resolver);
    router.events.pipe(takeUntil(this.destroyed$)).subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        document.body.scrollTop = 0;
      }
    });
  }
  init() {
    super.init();
    try {
      if (window && window['loading_screen'] && window['loading_screen'].finish !== false) {
        window['loading_screen'].finish();
      }
    } catch (error) {

    }
  }
}
