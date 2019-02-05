import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BindObservable } from 'bind-observable';
import { Observable } from 'rxjs';
import { STORAGE_CONFIG_TOKEN } from '../../storage/configs/storage.config';
import { IStorage } from '../../storage/interfaces/storage.interface';
import { LANG_CONFIG_TOKEN } from '../configs/lang.config';
import { ILangConfig } from '../interfaces/lang-config.interface';
import { ILanguagesItem } from '../interfaces/languages-item.interface';

export function langServiceInitializeApp(langService: LangService) {
  return () => langService.initializeApp();
}
@Injectable()
export class LangService {
  @BindObservable()
  current: string = undefined;
  current$: Observable<string>;
  @BindObservable()
  languages: ILanguagesItem[] = [];
  languages$: Observable<ILanguagesItem[]>;

  constructor(
    @Inject(LANG_CONFIG_TOKEN) private _langConfig: ILangConfig,
    @Inject(STORAGE_CONFIG_TOKEN) private _storage: IStorage,
    private _translateService: TranslateService
  ) { }
  async initLanguages() {
    this._translateService.setDefaultLang(this._langConfig.appLang);
    this._translateService.addLangs(this._langConfig.languages.map((lang: ILanguagesItem) => lang.code));
    this._langConfig.languages.map(lang => {
      let translations = {};
      lang.translations.map(translation => (translations = { ...translations, ...translation }));
      this._translateService.setTranslation(lang.code, translations);
    });
    return this._langConfig.languages;
  }
  initCurrent() {
    return new Promise((resolve, reject) => {
      this._storage.getItem(this._langConfig.storageKeyName).then((data: string) => {
        if (data && data !== 'undefined') {
          resolve(data);
        } else {
          resolve(this.getCurrent());
        }
      });
    });
  }
  initializeApp() {
    return new Promise((resolve, reject) => {
      this.initLanguages().then(languages => {
        this.setLanguages(languages);
        this.initCurrent().then(value => {
          this.setCurrent(value as string);
          resolve();
        });
      });
    });
  }
  getCurrent() {
    if (!this.current) {
      return this._langConfig.defaultLang;
    }
    return this.current;
  }
  setCurrent(value: string) {
    if (!value) {
      this._translateService.use(value);
      this._storage.removeItem(this._langConfig.storageKeyName).then(_ => {
        this.current = value;
      });
    } else {
      this._translateService.use(value);
      this._storage.setItem(this._langConfig.storageKeyName, value).then(_ => {
        this.current = value;
      });
    }
  }
  getLanguages() {
    if (!this.languages) {
      return this._langConfig.languages;
    }
    return this.languages;
  }
  setLanguages(langs: ILanguagesItem[]) {
    this.languages = langs;
  }
}
