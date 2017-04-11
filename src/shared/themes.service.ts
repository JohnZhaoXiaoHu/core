import { Injectable, ViewContainerRef, ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event, Event as NavigationEvent } from '@angular/router';
import { Theme } from './models/theme.model';
import { RepositoryService } from '../shared/repository.service';
import { Subject } from 'rxjs/Subject';
import { ThemeItemsMock } from './mocks/theme-items.mock';
import { RepositoryHelper } from './helpers/repository.helper';
@Injectable()
export class ThemesService extends RepositoryService {
  public viewContainerRef: ViewContainerRef;
  public items$: Subject<Theme[]>;
  public items: Theme[];
  public apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = 'themes';
    this.name = 'theme';
    this.apiUrl = `${repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<Theme[]>>new Subject();
    this.mockedItems = ThemeItemsMock;
    this.meta.perPage = 100;
    if (localStorage.getItem('theme')) {
      this.setTheme(new Theme({ url: localStorage.getItem('theme'), name: 'User theme' }));
    }
  }
  transformModel(item: any) {
    return new Theme(item);
  }
  newCache() {
    return new ThemesService(this.repositoryHelper);
  }
  setTheme(theme: Theme) {
    if (!theme.url || theme.pk === this.getCurrentTheme().pk) {
      return;
    }
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      if (link.getAttribute('rel').indexOf('style') !== -1 && link.getAttribute('title')
        && link.getAttribute('title') === 'bootstrap') {
        link.setAttribute('href', theme.url);
        localStorage.setItem('theme', theme.url);
      }
    }
  }
  getCurrentTheme() {
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      if (link.getAttribute('rel').indexOf('style') !== -1 && link.getAttribute('title')
        && link.getAttribute('title') === 'bootstrap') {
        for (let j = 0; j < this.items.length; j++) {
          if (link.getAttribute('href') === this.items[j].url) {
            return this.items[j];
          }
        }
      }
    }
    return new Theme();
  }
}