# [3.9.0](https://github.com/rucken/core/compare/3.8.1...3.9.0) (2019-02-05)


### Bug Fixes

* Update more constants names to UPPER_CASE, change config in auth module ([084dce9](https://github.com/rucken/core/commit/084dce9))


### Features

* Add BindIoInner decorator for all classes, remove more getter and setter and change them to use ngOnChange, change all BehaviorSubjects to BindObservable ([4a98023](https://github.com/rucken/core/commit/4a98023))



## [3.8.1](https://github.com/rucken/core/compare/3.8.0...3.8.1) (2019-01-27)


### Bug Fixes

* Change use form-group without bindIO ([8ede3f2](https://github.com/rucken/core/commit/8ede3f2))



# [3.8.0](https://github.com/rucken/core/compare/3.7.2...3.8.0) (2019-01-27)


### Features

* Add ngx-bind-io and update all sources ([fb362de](https://github.com/rucken/core/commit/fb362de))



## [3.7.2](https://github.com/rucken/core/compare/3.7.1...3.7.2) (2019-01-19)


### Bug Fixes

* Remove duplicate validator NotEqualsToPassword ([9f47d57](https://github.com/rucken/core/commit/9f47d57))



## [3.7.1](https://github.com/rucken/core/compare/3.7.0...3.7.1) (2019-01-12)


### Bug Fixes

* Add clearExternalErrorsAsync if profile save is success ([f8ca8e1](https://github.com/rucken/core/commit/f8ca8e1))



# [3.7.0](https://github.com/rucken/core/compare/3.6.0...3.7.0) (2019-01-08)


### Bug Fixes

* Correct searchText value for onSearch in base-entity-list ([9bcf119](https://github.com/rucken/core/commit/9bcf119))
* Remove bad used code on getter and setter ([6420613](https://github.com/rucken/core/commit/6420613))
* Replace uri to url ([a925e4d](https://github.com/rucken/core/commit/a925e4d))
* Update transformDateToString ([d9f93c1](https://github.com/rucken/core/commit/d9f93c1))
* Update work onNextPage method ([7aa79a8](https://github.com/rucken/core/commit/7aa79a8))


### Features

* Add new Inputs for links ([206c4c2](https://github.com/rucken/core/commit/206c4c2))



# [3.6.0](https://github.com/rucken/core/compare/3.5.0...3.6.0) (2018-12-30)


### Bug Fixes

* Add prompt and confirm modal types in base modal service ([9b98995](https://github.com/rucken/core/commit/9b98995))
* Remove workaroud code for update nested groups and permissions ([fa907ea](https://github.com/rucken/core/commit/fa907ea))
* Update dependencies and fix sources for it ([3e988eb](https://github.com/rucken/core/commit/3e988eb))


### Features

* Move directives to [@rucken](https://github.com/rucken)/core ([b9d811e](https://github.com/rucken/core/commit/b9d811e))



# [3.5.0](https://github.com/rucken/core/compare/3.4.0...3.5.0) (2018-12-10)


### Bug Fixes

* Remove bootstrap styles from [@rucken](https://github.com/rucken)/core move it to [@rucken](https://github.com/rucken)/web ([215f892](https://github.com/rucken/core/commit/215f892))
* Replace BehaviorSubject to BindObservable for Input-s in components ([c9f13d1](https://github.com/rucken/core/commit/c9f13d1))
* **auth-modal:** Move auth modal to [@rucken](https://github.com/rucken)/core ([009ea5f](https://github.com/rucken/core/commit/009ea5f))
* **deps:** Update dependencies ([d7b206b](https://github.com/rucken/core/commit/d7b206b))


### Features

* Move base classes and pipes  to [@rucken](https://github.com/rucken)/core, add proxy class for create modal ([2f17a59](https://github.com/rucken/core/commit/2f17a59))



# [3.4.0](https://github.com/rucken/core/compare/3.3.5...3.4.0) (2018-11-17)

### Features

- **deps:** Update dependencies ([4809c3c](https://github.com/rucken/core/commit/4809c3c))

<a name="3.3.5"></a>

## [3.3.5](https://github.com/rucken/core/compare/3.3.4...3.3.5) (2018-10-12)

### Bug Fixes

- Change method of set current from value from storage ([e989b59](https://github.com/rucken/core/commit/e989b59))

<a name="3.3.4"></a>

## [3.3.4](https://github.com/rucken/core/compare/3.3.3...3.3.4) (2018-10-11)

### Bug Fixes

- **core:** Add dependencies ([56147f6](https://github.com/rucken/core/commit/56147f6))
- **core:** Move initCurrent to initializeApp ([8d3c5f3](https://github.com/rucken/core/commit/8d3c5f3))
- **deps:** Update dependencies and source for it ([3cf58c2](https://github.com/rucken/core/commit/3cf58c2))
- **modules:** Remove all empty forRoot() methods ([9a6a55b](https://github.com/rucken/core/commit/9a6a55b))
- **storages:** Change sync methods to async with Promise ([b3428a8](https://github.com/rucken/core/commit/b3428a8))

<a name="3.3.3"></a>

## [3.3.3](https://github.com/rucken/core/compare/3.3.2...3.3.3) (2018-09-28)

### Bug Fixes

- **deps:** Update dependencies ([a1a9b1d](https://github.com/rucken/core/commit/a1a9b1d))

<a name="3.3.2"></a>

## [3.3.2](https://github.com/rucken/core/compare/3.3.1...3.3.2) (2018-09-26)

### Bug Fixes

- **base:** Add check typeof searchText === 'string' in onSearch method ([9a859fd](https://github.com/rucken/core/commit/9a859fd))

<a name="3.3.1"></a>

## [3.3.1](https://github.com/rucken/core/compare/3.3.0...3.3.1) (2018-09-25)

### Bug Fixes

- **base-entity-list:** Add support default value on create and append ([3c87b8e](https://github.com/rucken/core/commit/3c87b8e))
- **guard:** Fix wrong work PermissionsGuard ([68095d8](https://github.com/rucken/core/commit/68095d8))

<a name="3.3.0"></a>

# [3.3.0](https://github.com/rucken/core/compare/3.2.0...3.3.0) (2018-09-23)

### Bug Fixes

- **user:** Add disable datepicker on readonly mode ([22eb4b6](https://github.com/rucken/core/commit/22eb4b6))
- **user-profile:** Add disabled attribute ([34523bb](https://github.com/rucken/core/commit/34523bb))

### Features

- **directives:** Add directive disableControl and use it in user profile forms ([6c22c3e](https://github.com/rucken/core/commit/6c22c3e))
- **modals:** Changed create modal options method ([5c0c69d](https://github.com/rucken/core/commit/5c0c69d))

<a name="3.2.0"></a>

# [3.2.0](https://github.com/rucken/core/compare/3.1.4...3.2.0) (2018-09-20)

### Bug Fixes

- **refactor:** Move titles from template to component Class [#215](https://github.com/rucken/core/issues/215) ([e9a2db7](https://github.com/rucken/core/commit/e9a2db7))

### Features

- **refactor:** Move used entryComponents to @Input properties and remove duplicate code from classes ([f4d72c5](https://github.com/rucken/core/commit/f4d72c5))
- Add all components for entities: group, user, permission ([5e7e85a](https://github.com/rucken/core/commit/5e7e85a))

<a name="3.1.4"></a>

## [3.1.4](https://github.com/rucken/core/compare/3.1.3...3.1.4) (2018-09-16)

### Bug Fixes

- **deps:** Update dependencies ([ac75f09](https://github.com/rucken/core/commit/ac75f09))
- **refactor:** Add onSearch and onChangeOrder method for replace call onChangeFilter ([ea31593](https://github.com/rucken/core/commit/ea31593))
- **refactor:** Remove usage repository from templates ([2d4db60](https://github.com/rucken/core/commit/2d4db60))
- **refactor:** Updated folder structure and change config type for models to inject config token ([f42ee5f](https://github.com/rucken/core/commit/f42ee5f))

<a name="3.1.3"></a>

## [3.1.3](https://github.com/rucken/core/compare/3.1.2...3.1.3) (2018-08-31)

### Bug Fixes

- Update @rucken/cli ([96cc79a](https://github.com/rucken/core/commit/96cc79a))

<a name="3.1.2"></a>

## [3.1.2](https://github.com/rucken/core/compare/3.1.1...3.1.2) (2018-08-30)

### Bug Fixes

- Update [@rucken](https://github.com/rucken)/cli version ([869fd7f](https://github.com/rucken/core/commit/869fd7f))

<a name="3.1.1"></a>

## [3.1.1](https://github.com/rucken/core/compare/3.1.0...3.1.1) (2018-08-18)

### Bug Fixes

- **lang:** Disable force update current language onLangChange ([4854335](https://github.com/rucken/core/commit/4854335))
- Add detect empty options on ThemesModule.forRoot ([3a59ed9](https://github.com/rucken/core/commit/3a59ed9))
- Update dependencies versions ([2382e38](https://github.com/rucken/core/commit/2382e38))

<a name="3.1.0"></a>

# [3.1.0](https://github.com/rucken/core/compare/3.0.2...3.1.0) (2018-08-12)

### Bug Fixes

- Remove unused storage classes ([c4b4682](https://github.com/rucken/core/commit/c4b4682))
- **auth:** Update defaultJwtConfig ([268a072](https://github.com/rucken/core/commit/268a072))

### Features

- **auth:** Add login with social network: google-plus, facebook [#104](https://github.com/rucken/core/issues/104) ([e2e03d2](https://github.com/rucken/core/commit/e2e03d2))

<a name="3.0.2"></a>

## [3.0.2](https://github.com/rucken/core/compare/3.0.1...3.0.2) (2018-07-12)

### Bug Fixes

- **libs:** Add types for correct work with tests ([e67c276](https://github.com/rucken/core/commit/e67c276))

<a name="3.0.1"></a>

## [3.0.1](https://github.com/rucken/core/compare/3.0.0...3.0.1) (2018-07-10)

### Bug Fixes

- **deps:** Update dependencies and refactor source for it ([1df92cc](https://github.com/rucken/core/commit/1df92cc))

<a name="3.0.0"></a>

# [3.0.0](https://github.com/rucken/core/compare/2.1.1...3.0.0) (2018-06-16)

### Bug Fixes

- **entity-grid:** Add check columns?.length in template ([3f787a8](https://github.com/rucken/core/commit/3f787a8))
- **form-group:** Add support autocomplete=on for inputs ([3ce76af](https://github.com/rucken/core/commit/3ce76af))
- **ssr:** Add PermissionsGuard for custom canActivate for check access to lazy route components, original NgxPermissionsGuard work is incorrect ([c7da58c](https://github.com/rucken/core/commit/c7da58c))
- **theme-module:** Update theme model ([2085a1a](https://github.com/rucken/core/commit/2085a1a))
- **themes:** Add support change them in ssr mode ([06d2d77](https://github.com/rucken/core/commit/06d2d77))
- **themes:** Remove apply theme css only in browser ([19e7b38](https://github.com/rucken/core/commit/19e7b38))

### Features

- Update to Angular 6 and Rx 6 ([c840b43](https://github.com/rucken/core/commit/c840b43))
- **ssr:** Add basic ssr support ([5061f3d](https://github.com/rucken/core/commit/5061f3d))

### BREAKING CHANGES

- Minimum required Node version: 8, npm: 6.1.0, angular: 6.0.3, rxjs: 6.0.0

<a name="2.1.1"></a>

## [2.1.1](https://github.com/rucken/core/compare/2.1.0...2.1.1) (2018-05-14)

### Bug Fixes

- **modules:** Remove duplicate providers ([b15c863](https://github.com/rucken/core/commit/b15c863))

<a name="2.1.0"></a>

# [2.1.0](https://github.com/rucken/core/compare/2.0.9...2.1.0) (2018-05-08)

### Bug Fixes

- **perm.pipe:** Add arguments for pipe: defaultValue: boolean = true, trueValue: any = true, falseValue: any = false ([4189e83](https://github.com/rucken/core/commit/4189e83))
- Add check variables to undefined ([6770db2](https://github.com/rucken/core/commit/6770db2))

### Features

- **pipes:** Add userPerm pipe, for check access to object ([92f06e4](https://github.com/rucken/core/commit/92f06e4))

<a name="2.0.9"></a>

## [2.0.9](https://github.com/rucken/core/compare/2.0.8...2.0.9) (2018-04-29)

### Bug Fixes

- **entity-grid:** Add other ng-templates for replace ([77f0eb6](https://github.com/rucken/core/commit/77f0eb6))

<a name="2.0.8"></a>

## [2.0.8](https://github.com/rucken/core/compare/2.0.7...2.0.8) (2018-04-27)

### Bug Fixes

- **error-extractor:** Change validation errors extractor ([5875f2d](https://github.com/rucken/core/commit/5875f2d))

<a name="2.0.7"></a>

## [2.0.7](https://github.com/rucken/core/compare/2.0.6...2.0.7) (2018-04-27)

### Bug Fixes

- **base-entity-list:** Set filter as optional ([3803ca1](https://github.com/rucken/core/commit/3803ca1))
- **custom-transforms:** Update "transformDateToString", add check exists "value.getDate" in convert date to string ([0f9f1aa](https://github.com/rucken/core/commit/0f9f1aa))
- **entity-grid:** Disable row onClick on action cell ([8ba739e](https://github.com/rucken/core/commit/8ba739e))
- **form-group:** Add tooltipPlacement input for change position of tooltip ([6558e0f](https://github.com/rucken/core/commit/6558e0f))
- **grid-modals:** Remove disabled modal with grid ([d8802b4](https://github.com/rucken/core/commit/d8802b4))

<a name="2.0.6"></a>

## [2.0.6](https://github.com/rucken/core/compare/2.0.5...2.0.6) (2018-04-26)

### Bug Fixes

- **entity-grid:** Update work with selected items ([48e5fc9](https://github.com/rucken/core/commit/48e5fc9))

<a name="2.0.5"></a>

## [2.0.5](https://github.com/rucken/core/compare/2.0.4...2.0.5) (2018-04-25)

### Bug Fixes

- **entiy-grid:** Run selectedChange on set items ([ab368cf](https://github.com/rucken/core/commit/ab368cf))

<a name="2.0.4"></a>

## [2.0.4](https://github.com/rucken/core/compare/2.0.3...2.0.4) (2018-04-25)

### Bug Fixes

- **entity-grid:** Add "selectFirst" for inited items, default is true ([b782e58](https://github.com/rucken/core/commit/b782e58))

<a name="2.0.3"></a>

## [2.0.3](https://github.com/rucken/core/compare/2.0.2...2.0.3) (2018-04-25)

### Bug Fixes

- **base-entity-list:** Add out event "selectedChange" ([8b9c465](https://github.com/rucken/core/commit/8b9c465))
- **entity-grid:** Add multiSelectColumns for multi select, fix html if create is not allow ([f6898df](https://github.com/rucken/core/commit/f6898df))
- **form-group:** Support append "form-control" class to textarea input type, add disable checkIsDirty on show errors ([9e53c24](https://github.com/rucken/core/commit/9e53c24))
- **forms:** Add checkIsDirty for disable show errors in form on init ([ae1bcd4](https://github.com/rucken/core/commit/ae1bcd4))

<a name="2.0.2"></a>

## [2.0.2](https://github.com/rucken/core/compare/2.0.1...2.0.2) (2018-04-22)

### Bug Fixes

- **modules:** Remove duplicated imports ([47b8ec1](https://github.com/rucken/core/commit/47b8ec1))

<a name="2.0.1"></a>

## [2.0.1](https://github.com/rucken/core/compare/2.0.0...2.0.1) (2018-04-21)

### Bug Fixes

- **directives:** Restore use Renderer ([e51aeff](https://github.com/rucken/core/commit/e51aeff))
- **errors:** Update error-extractor ([9fb6ff5](https://github.com/rucken/core/commit/9fb6ff5))
- **message-modal.service:** Add MessageService to all grid components ([91d13d4](https://github.com/rucken/core/commit/91d13d4))

<a name="2.0.0"></a>

# [2.0.0](https://github.com/rucken/core/compare/1.30.5...2.0.0) (2018-04-15)

### Bug Fixes

- **demo:** Fix work with mockapi ([be70758](https://github.com/rucken/core/commit/be70758))
- **modules:** Remove unused method "forChild()" ([55935ae](https://github.com/rucken/core/commit/55935ae))

### Features

- **ssr:** Add support store JWT in cookie for correct render with ssr ([187f136](https://github.com/rucken/core/commit/187f136))

### Performance Improvements

- Rewrite all project ([a5f4c89](https://github.com/rucken/core/commit/a5f4c89))

<a name="1.30.5"></a>

## [1.30.5](https://github.com/rucken/core/compare/1.30.4...1.30.5) (2018-01-28)

### Bug Fixes

- **package:** Remove cacheDirectories ([4a5f5d9](https://github.com/rucken/core/commit/4a5f5d9))
- **text-input:** Fix update if value is undefined ([0e9a966](https://github.com/rucken/core/commit/0e9a966))

<a name="1.30.4"></a>

## [1.30.4](https://github.com/rucken/core/compare/1.30.3...1.30.4) (2018-01-25)

### Bug Fixes

- **package:** Add copy index.html to 404.html for "gh:deploy" script ([d41a782](https://github.com/rucken/core/commit/d41a782))

<a name="1.30.3"></a>

## [1.30.3](https://github.com/rucken/core/compare/1.30.2...1.30.3) (2018-01-25)

### Bug Fixes

- **assets:** Remove no used assets ([f984785](https://github.com/rucken/core/commit/f984785))
- **deps:** Update dependencies and change sources for it ([e863c2b](https://github.com/rucken/core/commit/e863c2b))
- **links:** Add javascript:void(0) to links without href ([f958625](https://github.com/rucken/core/commit/f958625))
- **modals:** Fix errors on get item from null array ([89f7f20](https://github.com/rucken/core/commit/89f7f20))
- **ssr:** Add basic support ssr ([480efe0](https://github.com/rucken/core/commit/480efe0))
- **tsconfigs:** Update tsconfig ([69b8157](https://github.com/rucken/core/commit/69b8157))

<a name="1.30.2"></a>

## [1.30.2](https://github.com/rucken/core/compare/1.30.1...1.30.2) (2018-01-17)

### Bug Fixes

- **account.service:** Change response for account update ([4546de9](https://github.com/rucken/core/commit/4546de9))
- **account.service:** If email with password not found in users, clear token ([3fa960c](https://github.com/rucken/core/commit/3fa960c))
- **models:** Change format methods for models ([90a7938](https://github.com/rucken/core/commit/90a7938))
- **select-input:** Move translate select options to getter items ([bd82ddd](https://github.com/rucken/core/commit/bd82ddd))
- **select-input:** Add support change value on select-input in runtime ([8bd9553](https://github.com/rucken/core/commit/8bd9553))
- **select-input:** Remove resize from items setter ([6ce94f3](https://github.com/rucken/core/commit/6ce94f3))
- **user.model:** Convert bool properties to bool in constructor ([7a467be](https://github.com/rucken/core/commit/7a467be))

<a name="1.30.1"></a>

## [1.30.1](https://github.com/rucken/core/compare/1.30.0...1.30.1) (2018-01-12)

### Bug Fixes

- **base-resource-select-input:** Set default value for inputReadonly to false ([d70152a](https://github.com/rucken/core/commit/d70152a))
- **navbar:** Remove show changelog modal on first open site ([20d40e3](https://github.com/rucken/core/commit/20d40e3))
- **select-input:** Add ignore errors if item prop is readonly ([c4038fc](https://github.com/rucken/core/commit/c4038fc))

<a name="1.30.0"></a>

# [1.30.0](https://github.com/rucken/core/compare/1.29.1...1.30.0) (2018-01-10)

### Bug Fixes

- **base:** Add @Input to title for base page and frame ([3a6bd4f](https://github.com/rucken/core/commit/3a6bd4f))
- **base:** Remove interfaces change its to classes [#83](https://github.com/rucken/core/issues/83) ([aace802](https://github.com/rucken/core/commit/aace802))
- **base-resource-list:** If used mock items and not set perPage, set default to 10 items on per page ([22e4405](https://github.com/rucken/core/commit/22e4405))
- **deps:** Remove [@ngui](https://github.com/ngui)/auto-complete and angular2-ladda ([140abe6](https://github.com/rucken/core/commit/140abe6))
- **deps:** Update dependencies ([92b7850](https://github.com/rucken/core/commit/92b7850))
- **profile-frame:** Fix error in update profile [#82](https://github.com/rucken/core/issues/82) ([8eb1821](https://github.com/rucken/core/commit/8eb1821))
- **select-input:** Fix work typeahead and add async loading [#81](https://github.com/rucken/core/issues/81) ([bf2d031](https://github.com/rucken/core/commit/bf2d031))
- **styles:** Remove custom styles like "app-grid-...." and others [#101](https://github.com/rucken/core/issues/101) ([5ce1ee2](https://github.com/rucken/core/commit/5ce1ee2))
- **text-input:** Set null if date value is invalid ([9baed6d](https://github.com/rucken/core/commit/9baed6d))
- **user-components:** Add check userGroups before set/get values from its ([4bc7576](https://github.com/rucken/core/commit/4bc7576))
- Add update local items on change mock items ([6b55cbf](https://github.com/rucken/core/commit/6b55cbf))

### Features

- **base:** Add interfaces for service and model and implements all from its [#83](https://github.com/rucken/core/issues/83) ([f043bec](https://github.com/rucken/core/commit/f043bec))
- **text-input:** Change datepicker component for new ngx-bootstrap style [#81](https://github.com/rucken/core/issues/81) ([4272629](https://github.com/rucken/core/commit/4272629))
- **user.model:** Add checkGroups method ([7849399](https://github.com/rucken/core/commit/7849399))

<a name="1.29.1"></a>

## [1.29.1](https://github.com/rucken/core/compare/1.29.0...1.29.1) (2017-12-14)

### Bug Fixes

- **account:** Fix set fullAccess prop to account ([a48b6eb](https://github.com/rucken/core/commit/a48b6eb))
- **please-wait:** Add remove logo if not set ([3cd3be6](https://github.com/rucken/core/commit/3cd3be6))

<a name="1.29.0"></a>

# [1.29.0](https://github.com/rucken/core/compare/1.28.2...1.29.0) (2017-12-14)

### Features

- **access:** Add options for enable fullAccess for all with ignore permissions on roles ([f24504e](https://github.com/rucken/core/commit/f24504e))

<a name="1.28.2"></a>

## [1.28.2](https://github.com/rucken/core/compare/1.28.1...1.28.2) (2017-12-07)

### Bug Fixes

- **deps:** Update dependencies for Angular 5.1.0 ([2565d4f](https://github.com/rucken/core/commit/2565d4f))

<a name="1.28.1"></a>

## [1.28.1](https://github.com/rucken/core/compare/1.28.0...1.28.1) (2017-12-06)

### Bug Fixes

- **deps:** Update dependencies ([2bcba4d](https://github.com/rucken/core/commit/2bcba4d))

<a name="1.28.0"></a>

# [1.28.0](https://github.com/rucken/core/compare/1.27.1...1.28.0) (2017-12-04)

### Bug Fixes

- **deps:** Update dependencies ([c54156b](https://github.com/rucken/core/commit/c54156b))
- **shared.module:** Remove use translate.store ([12ac53f](https://github.com/rucken/core/commit/12ac53f))

### Features

- **deps:** Remove srcgen and ngm replace it with [@rucken](https://github.com/rucken)/cli ([646c6d5](https://github.com/rucken/core/commit/646c6d5))

<a name="1.27.1"></a>

## [1.27.1](https://github.com/rucken/core/compare/1.27.0...1.27.1) (2017-11-19)

### Bug Fixes

- **libs:** Change main file of [@rucken](https://github.com/rucken)/web ([78b111c](https://github.com/rucken/core/commit/78b111c))
- **rxjs:** Move create Subject from class body to constructor ([b2deac9](https://github.com/rucken/core/commit/b2deac9))

<a name="1.27.0"></a>

## [1.27.0](https://github.com/rucken/core/compare/1.26.0...1.27.0) (2017-11-19)

### Bug Fixes

- Bump version of angular, new version: Angular 5.0.2

### Bug Fixes

- **errors-handler:** Update method for detect errors ([d2c742a](https://github.com/rucken/core/commit/d2c742a))
- **refactor:** Update all usage '...rxjs/operators...' ([9aaec68](https://github.com/rucken/core/commit/9aaec68))

<a name="1.26.0"></a>

# [1.26.0](https://github.com/rucken/core/compare/1.25.1...1.26.0) (2017-11-18)

### Bug Fixes

- **account-profile:** Change ok button title ([b74de7b](https://github.com/rucken/core/commit/b74de7b))
- **entity-list-modal:** Remove onEnter from grid ([f461975](https://github.com/rucken/core/commit/f461975))
- Remove duplicate set value for account ([aa1067f](https://github.com/rucken/core/commit/aa1067f))
- **navbar:** Change get auth modal account property to user ([c036cb3](https://github.com/rucken/core/commit/c036cb3))
- **select-input:** Set height for autocomplete li elements ([4415531](https://github.com/rucken/core/commit/4415531))

### Features

- **http:** Change HttpModule to HttpClientModule ([880619b](https://github.com/rucken/core/commit/880619b))

<a name="1.25.1"></a>

## [1.25.1](https://github.com/rucken/core/compare/1.25.0...1.25.1) (2017-11-13)

### Bug Fixes

- **dummy:** Remove dummy for detect translate with [@biesbjerg](https://github.com/biesbjerg)/ngx-translate-extract, and refactor code for it ([21604a0](https://github.com/rucken/core/commit/21604a0))
- **mockItems:** Fix work with mockedItems ([e5ccdcd](https://github.com/rucken/core/commit/e5ccdcd))
- **user-groups-grid:** Change accessToCreate to accessToAdd in template ([c75b9a9](https://github.com/rucken/core/commit/c75b9a9))

<a name="1.25.0"></a>

# [1.25.0](https://github.com/rucken/core/compare/1.24.0...1.25.0) (2017-11-12)

### Bug Fixes

- **base-resource-list:** Change type of "onLoaded" property Input => Output ([2a8190c](https://github.com/rucken/core/commit/2a8190c))
- **downgrade:** Downgrade Angular to stable 4.4.5 and revert all changes, because it not worked with sub packages ([a7f8eb7](https://github.com/rucken/core/commit/a7f8eb7))
- **entity-select-input:** Fix error if selected empty value on modal for list ([73179ba](https://github.com/rucken/core/commit/73179ba))

### Features

- **base-resources-grid:** Move base methods and props to base-resources-list from base-resources-grid and base-resources-select-input ([60ad68f](https://github.com/rucken/core/commit/60ad68f))

<a name="1.24.0"></a>

# [1.24.0](https://github.com/rucken/core/compare/1.23.1...1.24.0) (2017-11-08)

### Bug Fixes

- **base-resource-grid:** Remove detect column for multiselect on selectItem method ([6286571](https://github.com/rucken/core/commit/6286571))
- **DI:** Add missing imports ([2a94383](https://github.com/rucken/core/commit/2a94383))

### Features

- **DI:** Move inject services from constructor to manual inject with Injector ([1a5ce48](https://github.com/rucken/core/commit/1a5ce48))

<a name="1.23.1"></a>

## [1.23.1](https://github.com/rucken/core/compare/1.23.0...1.23.1) (2017-10-31)

### Bug Fixes

- **components:** Add call super.afterCreate() in all afterCreate ([fd8f8fc](https://github.com/rucken/core/commit/fd8f8fc))

<a name="1.23.0"></a>

# [1.23.0](https://github.com/rucken/core/compare/1.22.2...1.23.0) (2017-10-30)

### Bug Fixes

- **base-repository-service:** Chenage run mockUpdate to mockCreate in create method ([b8505b4](https://github.com/rucken/core/commit/b8505b4))
- **base-resource-select-input:** If type is select change loadAll to true ([85d8452](https://github.com/rucken/core/commit/85d8452))

### Features

- **base-component:** Move subscribe from init to afterCreate ([6cc1d50](https://github.com/rucken/core/commit/6cc1d50))

<a name="1.22.2"></a>

## [1.22.2](https://github.com/rucken/core/compare/1.22.1...1.22.2) (2017-10-30)

### Bug Fixes

- **base-remote-repository:** Fix error in remoteCreate method ([a440efa](https://github.com/rucken/core/commit/a440efa))
- **base-resource-select:** Change check service exists in search method ([686c4ac](https://github.com/rucken/core/commit/686c4ac))

<a name="1.22.1"></a>

## [1.22.1](https://github.com/rucken/core/compare/1.22.0...1.22.1) (2017-10-27)

### Bug Fixes

- **account-service:** Add local validate before sent request to backend ([080acec](https://github.com/rucken/core/commit/080acec))
- **deps:** Downgrade angular dependencies, for fast build and stable work ([66a8f39](https://github.com/rucken/core/commit/66a8f39))
- **tooltip:** Fix show error in tooltip ([067ed35](https://github.com/rucken/core/commit/067ed35))

<a name="1.22.0"></a>

# [1.22.0](https://github.com/rucken/core/compare/1.21.0...1.22.0) (2017-10-27)

### Bug Fixes

- **permissions:** Change name Create to Add ([552640b](https://github.com/rucken/core/commit/552640b))
- **permissions:** Move check permissions from getter to init method in component ([c6786e2](https://github.com/rucken/core/commit/c6786e2))

### Features

- **controls:** Change ChangeDetectionStrategy to OnPush ([2ab7706](https://github.com/rucken/core/commit/2ab7706))

<a name="1.21.0"></a>

# [1.21.0](https://github.com/rucken/core/compare/1.20.0...1.21.0) (2017-10-25)

### Features

- **configs:** Remove config classes from controls, for DI in others projects ([4c3fea4](https://github.com/rucken/core/commit/4c3fea4))

<a name="1.20.0"></a>

# [1.20.0](https://github.com/rucken/core/compare/1.19.1...1.20.0) (2017-10-25)

### Bug Fixes

- **home-guard:** Change firstHomeActivated to false if first visit is activated ([bf60ba7](https://github.com/rucken/core/commit/bf60ba7))
- **resource-grid:** Fix getter of columns ([0023de9](https://github.com/rucken/core/commit/0023de9))

### Features

- **acccount-service:** Add checkPermissions on accountService and store results in \_cachedPermissions ([a56041d](https://github.com/rucken/core/commit/a56041d))
- **repository-service:** Add setTimeout on call remote actions ([bd735ad](https://github.com/rucken/core/commit/bd735ad))

<a name="1.19.1"></a>

## [1.19.1](https://github.com/rucken/core/compare/1.19.0...1.19.1) (2017-10-23)

### Bug Fixes

- **base-repository-servce:** Change remoteUpdate => remoteCreate in create method ([3fbc516](https://github.com/rucken/core/commit/3fbc516))

<a name="1.19.0"></a>

# [1.19.0](https://github.com/rucken/core/compare/1.18.5...1.19.0) (2017-10-22)

### Bug Fixes

- **base-resources-grid:** Add check to undefined on change columns ([fd4438a](https://github.com/rucken/core/commit/fd4438a))
- **components:** Add takeUntil for all subscribe on Subject ([14eb1aa](https://github.com/rucken/core/commit/14eb1aa))
- **subscribe:** Add takeUntil to page and frame afterCreate method ([69be165](https://github.com/rucken/core/commit/69be165))
- **web:** Update set default values on afterCreate ([b29f3bf](https://github.com/rucken/core/commit/b29f3bf))

### Features

- **base-component:** Move getter to subscribe to change account ([d65d648](https://github.com/rucken/core/commit/d65d648))

<a name="1.18.5"></a>

## [1.18.5](https://github.com/rucken/core/compare/1.18.4...1.18.5) (2017-10-20)

### Bug Fixes

- **base-resources-grid:** Remove set default value for readonly property ([3007e10](https://github.com/rucken/core/commit/3007e10))

<a name="1.18.4"></a>

## [1.18.4](https://github.com/rucken/core/compare/1.18.3...1.18.4) (2017-10-20)

### Bug Fixes

- **components:** Move boolean properties to afterCreate ([e42f193](https://github.com/rucken/core/commit/e42f193))

<a name="1.18.3"></a>

## [1.18.3](https://github.com/rucken/core/compare/1.18.2...1.18.3) (2017-10-20)

### Bug Fixes

- **errors:** Add guards to frames and fix work with mock items on grid ([658171c](https://github.com/rucken/core/commit/658171c))

<a name="1.18.2"></a>

## [1.18.2](https://github.com/rucken/core/compare/1.18.1...1.18.2) (2017-10-19)

### Bug Fixes

- **base-service:** Change check validate to optionals method ([8c41d83](https://github.com/rucken/core/commit/8c41d83))
- **base-service:** Error wrong create action detect ([eccc683](https://github.com/rucken/core/commit/eccc683))
- **model:** Remove convert pk to number if it undefined or null ([ccf8d38](https://github.com/rucken/core/commit/ccf8d38))

<a name="1.18.1"></a>

## [1.18.1](https://github.com/rucken/core/compare/1.18.0...1.18.1) (2017-10-17)

### Bug Fixes

- **deps:** Update dependencies

<a name="1.18.0"></a>

# [1.18.0](https://github.com/rucken/core/compare/1.17.0...1.18.0) (2017-10-15)

### Bug Fixes

- **scripts:** Fix gulp task name ([9aecaab](https://github.com/rucken/core/commit/9aecaab))

### Features

- **refactor:** Move demo app to apps folder, update all files for correct work with him ([6a5c9d4](https://github.com/rucken/core/commit/6a5c9d4))

<a name="1.17.0"></a>

# [1.17.0](https://github.com/rucken/core/compare/1.16.0...1.17.0) (2017-10-14)

### Bug Fixes

- **components:** Move afterCreate from constructor to OnInit ([519bebd](https://github.com/rucken/core/commit/519bebd))

### Features

- **guards:** Add simple guard services ([cc82d7d](https://github.com/rucken/core/commit/cc82d7d))

<a name="1.16.0"></a>

# [1.16.0](https://github.com/rucken/core/compare/1.15.3...1.16.0) (2017-10-13)

### Bug Fixes

- **deps:** Update dependencies ([282a380](https://github.com/rucken/core/commit/282a380))
- **index:** Remove BaseAppModule from RuckenWebModules ([5816958](https://github.com/rucken/core/commit/5816958))

### Features

- **account.service:** Add attribute token in info method ([91ed8f7](https://github.com/rucken/core/commit/91ed8f7))
- **base-page:** Move load child routes to getter and setter ([b18bc13](https://github.com/rucken/core/commit/b18bc13))

<a name="1.15.3"></a>

## [1.15.3](https://github.com/rucken/core/compare/1.15.2...1.15.3) (2017-10-12)

### Bug Fixes

- **rename:** Service => GroupsService ([4ad4971](https://github.com/rucken/core/commit/4ad4971))
- **RuckenWebModules:** Add forRoot() on export ([c49464f](https://github.com/rucken/core/commit/c49464f))

<a name="1.15.2"></a>

## [1.15.2](https://github.com/rucken/core/compare/1.15.1...1.15.2) (2017-10-12)

### Bug Fixes

- **deps:** Update dependencies ([a2fc028](https://github.com/rucken/core/commit/a2fc028))
- **entities-select-input:** Update template for correct work in select mode ([821dadf](https://github.com/rucken/core/commit/821dadf))
- **rename:** Grous to Groups ([530d341](https://github.com/rucken/core/commit/530d341))
- **scripts:** Add modules to index.ts ([20e40a0](https://github.com/rucken/core/commit/20e40a0))

<a name="1.15.1"></a>

## [1.15.1](https://github.com/rucken/core/compare/1.15.0...1.15.1) (2017-10-08)

### Bug Fixes

- **package-lock:** Update dependencies ([800d66b](https://github.com/rucken/core/commit/800d66b))
- **select-input:** Add translate in options ([3432f1f](https://github.com/rucken/core/commit/3432f1f))

<a name="1.15.0"></a>

# [1.15.0](https://github.com/rucken/core/compare/1.14.1...1.15.0) (2017-10-04)

### Bug Fixes

- Returned accidentally deleted imports ([20a63fc](https://github.com/rucken/core/commit/20a63fc))
- **module:** Change compilerOptions on [@rucken](https://github.com/rucken)/core ([58aed72](https://github.com/rucken/core/commit/58aed72))
- **module:** Change module name to index.js, for correct native script import ([439a084](https://github.com/rucken/core/commit/439a084))

### Features

- **modules:** Move shared module and service to [@rucken](https://github.com/rucken)/web ([447f37d](https://github.com/rucken/core/commit/447f37d))

<a name="1.14.1"></a>

## [1.14.1](https://github.com/rucken/core/compare/1.14.0...1.14.1) (2017-09-30)

### Bug Fixes

- **deps:** Update dependencies ([7120a1b](https://github.com/rucken/core/commit/7120a1b))

<a name="1.14.0"></a>

# [1.14.0](https://github.com/rucken/core/compare/1.13.2...1.14.0) (2017-09-30)

### Bug Fixes

- **account-service:** Change status name getter ([03d56e6](https://github.com/rucken/core/commit/03d56e6))
- **alert-modal:** Fix show error message ([84b1648](https://github.com/rucken/core/commit/84b1648))
- **base-repository:** Change private prop to protected for use it in extended classes ([d3deaec](https://github.com/rucken/core/commit/d3deaec))
- **deps:** Update dependencies ([0ae9412](https://github.com/rucken/core/commit/0ae9412))
- **model:** Remove used on base properties, add translate error for incorrect re password ([7bac521](https://github.com/rucken/core/commit/7bac521))

### BREAKING CHANGES

- Package was divided into two core and web ([b0fde20](https://github.com/rucken/core/commit/b0fde20))

<a name="1.13.2"></a>

## [1.13.2](https://github.com/rucken/core/compare/1.13.1...1.13.2) (2017-09-19)

### Bug Fixes

- **deps:** Update dependencies ([52d9f3b](https://github.com/rucken/core/commit/52d9f3b))
- **refactor:** Change name cachedResourceService to cachedResourcesService ([ff15ada](https://github.com/rucken/core/commit/ff15ada))

<a name="1.13.1"></a>

## [1.13.1](https://github.com/rucken/core/compare/1.13.0...1.13.1) (2017-09-18)

### Bug Fixes

- **scripts:** Remove prepare from test script ([778df00](https://github.com/rucken/core/commit/778df00))

<a name="1.13.0"></a>

# [1.13.0](https://github.com/rucken/core/compare/1.12.0...1.13.0) (2017-09-18)

### Bug Fixes

- Add imports modules for list modals to input modules ([48702e4](https://github.com/rucken/core/commit/48702e4))
- check readonly by hardReadonly field ([910239d](https://github.com/rucken/core/commit/910239d))
- Detect focusabel components ([11c5508](https://github.com/rucken/core/commit/11c5508))
- **AoT:** Add shared service to demo app component, it is work as bridge ([2c9e435](https://github.com/rucken/core/commit/2c9e435))
- **base-resource:** Error if data not founded ([c3f02a8](https://github.com/rucken/core/commit/c3f02a8))
- **shared:** Add shared module to demo app ([d7261d1](https://github.com/rucken/core/commit/d7261d1))
- **text-input:** Add no emit change of model if date value is wrong ([27a9fa8](https://github.com/rucken/core/commit/27a9fa8))
- **translate:** For correct work with AoT, add sharedService.linkTranslateService() in any lazy component who use translate ([7d48224](https://github.com/rucken/core/commit/7d48224))

### Features

- **AoT:** Full support ngx-translate + hard code translate dic (not remote json file) + aot + lazy routes ([0ff23c9](https://github.com/rucken/core/commit/0ff23c9))
- **base-resource.model:** Add format date in methods for work with dates ([0c0b018](https://github.com/rucken/core/commit/0c0b018))

<a name="1.12.0"></a>

# [1.12.0](https://github.com/rucken/core/compare/1.11.1...1.12.0) (2017-09-02)

### Bug Fixes

- Change demo, remove safeHtml ([074a4e1](https://github.com/rucken/core/commit/074a4e1))

### Features

- Add getMockItemsNextPk for base repository service and move mockItems to getter ([e4acf46](https://github.com/rucken/core/commit/e4acf46))
- Remove all usage of DomSanitizer, change to use safeHtml pipe ([6777a23](https://github.com/rucken/core/commit/6777a23))
- Update dependencies ([6aa0f29](https://github.com/rucken/core/commit/6aa0f29))

<a name="1.11.1"></a>

## [1.11.1](https://github.com/rucken/core/compare/1.11.0...1.11.1) (2017-08-19)

### Bug Fixes

- Set npm and nodejs specific version in package.json engines ([d211f4e](https://github.com/rucken/core/commit/d211f4e))

<a name="1.11.0"></a>

# [1.11.0](https://github.com/rucken/core/compare/1.10.5...1.11.0) (2017-08-19)

### Bug Fixes

- Error in add custom translate pipes ([3103056](https://github.com/rucken/core/commit/3103056))
- Error in support custom api url ([bdf84e8](https://github.com/rucken/core/commit/bdf84e8))

### Features

- **custom-translate.pipe:** Add custom pipe for translate ([a42d058](https://github.com/rucken/core/commit/a42d058))
- Add get support custom api url on repositories ([fec86af](https://github.com/rucken/core/commit/fec86af))

<a name="1.10.5"></a>

## [1.10.5](https://github.com/rucken/core/compare/1.10.3...v1.10.5) (2017-08-07)

### Bug Fixes

- **base-resource.model:** Change detect used timezone fore date fields ([2264941](https://github.com/rucken/core/commit/2264941))
- **env:** Change demo host url in environment ([ca4dcce](https://github.com/rucken/core/commit/ca4dcce))
- **services:** Refactor helpers and account service ([5f489de](https://github.com/rucken/core/commit/5f489de))

<a name="1.10.4"></a>

## [1.10.4](https://github.com/rucken/core/compare/1.10.3...v1.10.4) (2017-07-02)

### Bug Fixes

- **refactor:** Change modal-footer-buttons to footer-buttons ([6df03cc](https://github.com/rucken/core/commit/6df03cc))
- **refactor:** Change name of ResouceEnumStatus to EndpointStatusEnum ([5218af3](https://github.com/rucken/core/commit/5218af3))

<a name="1.10.3"></a>

## [1.10.3](https://github.com/rucken/core/compare/1.10.2...v1.10.3) (2017-06-29)

### Bug Fixes

- **deps:** Updates all packages and downgrade typescript to 2.3.0 ([0a9e07f](https://github.com/rucken/core/commit/0a9e07f))

<a name="1.10.2"></a>

## [1.10.2](https://github.com/rucken/core/compare/1.10.1...v1.10.2) (2017-06-28)

### Bug Fixes

- **user.model:** Fix method "formatToAuth" type ([d778e4b](https://github.com/rucken/core/commit/d778e4b))

<a name="1.10.1"></a>

## [1.10.1](https://github.com/rucken/core/compare/1.10.0...v1.10.1) (2017-06-23)

### Bug Fixes

- **demo:** Fix errors and add integrations with rollbar.com

<a name="1.10.0"></a>

# [1.10.0](https://github.com/rucken/core/compare/1.9.1...v1.10.0) (2017-06-21)

### Bug Fixes

- **account-profile-form:** Fix dateOfBirth input type ([1677ce1](https://github.com/rucken/core/commit/1677ce1))
- **text-input:** Change default date style to native ([546ddf3](https://github.com/rucken/core/commit/546ddf3))

### Features

- **modal-footer-buttons:** Change all buttons in modals and forms, add loading spinner ([28cf5d8](https://github.com/rucken/core/commit/28cf5d8))

<a name="1.9.1"></a>

## [1.9.1](https://github.com/rucken/core/compare/1.9.0...v1.9.1) (2017-06-18)

### Bug Fixes

- **models:** Add detect className to model class constructor ([8021d59](https://github.com/rucken/core/commit/8021d59))
- **text-input:** Remove all usages ngx-mydatepicker, change to datepicker from ngx-bootstrap ([fb7ab51](https://github.com/rucken/core/commit/fb7ab51))

<a name="1.9.0"></a>

# [1.9.0](https://github.com/rucken/core/compare/1.8.3...v1.9.0) (2017-06-14)

### Bug Fixes

- **radio-input:** Change update value method ([ec7853e](https://github.com/rucken/core/commit/ec7853e))

### Features

- **app-modals:** Add set size of modal ([3f8ac1f](https://github.com/rucken/core/commit/3f8ac1f))
- **text-input:** Add ngx-mydatepicker mode for date type input ([bda7d95](https://github.com/rucken/core/commit/bda7d95))

<a name="1.8.3"></a>

## [1.8.3](https://github.com/rucken/core/compare/1.8.2...v1.8.3) (2017-05-28)

### Bug Fixes

- **deps:** Update deps for publish on npm packages ([db890e0](https://github.com/rucken/core/commit/db890e0))

<a name="1.8.2"></a>

## [1.8.2](https://github.com/rucken/core/compare/1.8.1...v1.8.2) (2017-05-28)

### Bug Fixes

- **paths:** Fix error path for source files ([57d12e3](https://github.com/rucken/core/commit/57d12e3))

<a name="1.8.1"></a>

## [1.8.1](https://github.com/rucken/core/compare/1.8.0...v1.8.1) (2017-05-27)

### Bug Fixes

- **lang:** Fix change language for labels on buttons ([2024af8](https://github.com/rucken/core/commit/2024af8))
- **navbar:** Add to navbar language switcher and fix error translate pages and frame on the fly ([76fe091](https://github.com/rucken/core/commit/76fe091))
- **text-input:** Remove mask directive from textarea ([e46c7b3](https://github.com/rucken/core/commit/e46c7b3))

<a name="1.8.0"></a>

# [1.8.0](https://github.com/rucken/core/compare/1.7.0...v1.8.0) (2017-05-23)

### Bug Fixes

- **refactoring:** Remove no used code and imports ([b54630e](https://github.com/rucken/core/commit/b54630e))

### Features

- **grids:** Add exclude: any[] options to BaseComponents, for exclude records by id on request to backend for fetch data ([c8d8109](https://github.com/rucken/core/commit/c8d8109))

<a name="1.7.0"></a>

# [1.7.0](https://github.com/rucken/core/compare/1.6.0...v1.7.0) (2017-05-15)

### Bug Fixes

- **refactoring:** Move more duplicate properties to base class ([e9e3aca](https://github.com/rucken/core/commit/e9e3aca))

### Features

- **refactoring:** Add base components for pages and frames and move base app component to base folder, add fill navigation list and frames list for page from routes ([02204f3](https://github.com/rucken/core/commit/02204f3))

<a name="1.6.0"></a>

# [1.6.0](https://github.com/rucken/core/compare/1.5.0...v1.6.0) (2017-05-14)

### Bug Fixes

- **contentModal:** Remove default focus from button ([a619f48](https://github.com/rucken/core/commit/a619f48))

### Features

- **refactoring:** Create base folder for base class of components, services and etc., change all places where it usage ([144d722](https://github.com/rucken/core/commit/144d722))

<a name="1.5.0"></a>

# [1.5.0](https://github.com/rucken/core/compare/1.4.4...v1.5.0) (2017-05-13)

### Bug Fixes

- **any:** Add any type for all place where used models, for extends ([0a6c10e](https://github.com/rucken/core/commit/0a6c10e))
- **className:** Add class name to model, change props names for detect pk key in model ([e28266d](https://github.com/rucken/core/commit/e28266d))
- **demo:** Change default lang to "en" ([32b5146](https://github.com/rucken/core/commit/32b5146))
- **deps:** Update dependencies ([b84f44b](https://github.com/rucken/core/commit/b84f44b))
- **pixel:** Remove pixel element for hook enter on table, changed to host hook ([02e9bb4](https://github.com/rucken/core/commit/02e9bb4))

### Features

- **refactoring:** Add BaseComponent and extends all components from it ([2a9141c](https://github.com/rucken/core/commit/2a9141c))
- **refactoring:** Move show tooltip for error and info to BaseComponent ([f4e8f3f](https://github.com/rucken/core/commit/f4e8f3f))

<a name="1.4.4"></a>

## [1.4.4](https://github.com/rucken/core/compare/1.4.3...v1.4.4) (2017-05-01)

### Bug Fixes

- **demo:** Change path for rucken ([5eaedc1](https://github.com/rucken/core/commit/5eaedc1))
- **deps:** Update dependencies ([0b619f2](https://github.com/rucken/core/commit/0b619f2))

<a name="1.4.3"></a>

## [1.4.3](https://github.com/rucken/core/compare/1.4.2...v1.4.3) (2017-04-28)

### Bug Fixes

- **demo:** Fix errors founded with ng lint ([c10ce96](https://github.com/rucken/core/commit/c10ce96))
- **deps:** Update dependencies ([05e5a45](https://github.com/rucken/core/commit/05e5a45))
- **deps:** Update dependencies, remove noused code from app.component ([f3fee28](https://github.com/rucken/core/commit/f3fee28))
- **lint:** Change tslint for this project ([8e098c9](https://github.com/rucken/core/commit/8e098c9))
- **lint:** Fix all errors founded with ng lint ([6886641](https://github.com/rucken/core/commit/6886641))
- **srcgen:** Fix scripts for gen list of ts files and po2ts converter ([dfafdf6](https://github.com/rucken/core/commit/dfafdf6))

<a name="1.4.2"></a>

## [1.4.2](https://github.com/rucken/core/compare/1.4.0...v1.4.2) (2017-04-23)

### Bug Fixes

- **grid-select-inputs:** Change properties names and extend it ([bc0eb68](https://github.com/rucken/core/commit/bc0eb68))
- **inputs:** Change properties names and extend it ([425364d](https://github.com/rucken/core/commit/425364d))
- **route:** Add please wait on lazy route changes as on first load application ([48f37f9](https://github.com/rucken/core/commit/48f37f9))
- **srcgen:** Remove extendable components from list of components ([feda93e](https://github.com/rucken/core/commit/feda93e))

<a name="1.4.1"></a>

## [1.4.1](https://github.com/rucken/core/compare/1.4.0...v1.4.1) (2017-04-18)

### Bug Fixes

- **srcgen:** Remove extendable components from list of components ([feda93e](https://github.com/rucken/core/commit/feda93e))

<a name="1.4.0"></a>

# [1.4.0](https://github.com/rucken/core/compare/1.3.0...v1.4.0) (2017-04-18)

### Bug Fixes

- **home-page:** Remove include README.md on home page ([9678199](https://github.com/rucken/core/commit/9678199))

### Features

- **AoT:** Add lazy load to pages and frames ([673fe54](https://github.com/rucken/core/commit/673fe54))
- **modules:** Move all components to modules, for AoT ([1e2ffb5](https://github.com/rucken/core/commit/1e2ffb5))

<a name="1.3.1"></a>

## [1.3.1](https://github.com/rucken/core/compare/1.3.0...v1.3.1) (2017-04-17)

### Bug Fixes

- **home-page:** Remove include README.md on home page ([9678199](https://github.com/rucken/core/commit/9678199))

<a name="1.3.0"></a>

# [1.3.0](https://github.com/rucken/core/compare/1.2.21...v1.3.0) (2017-04-15)

### Bug Fixes

- **demo:** Add new dependencies and click on version for show modal ([8eaf10d](https://github.com/rucken/core/commit/8eaf10d))

### Features

- **deps:** Update dependencies ([a89c151](https://github.com/rucken/core/commit/a89c151))
- **home-page:** Add render README.md on home page ([52afa09](https://github.com/rucken/core/commit/52afa09))
- **navbar:** Add show changelog modal window on click to version ([90540ac](https://github.com/rucken/core/commit/90540ac))
- **scripts:** Add script for build change log ([f0fc88a](https://github.com/rucken/core/commit/f0fc88a))
- **select-input:** Add support lazy load items to auto complete ([5ec843b](https://github.com/rucken/core/commit/5ec843b))
