import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { BaseRepositoryService } from './../base/services/base-repository.service';
import { RepositoryHelper } from './../helpers/repository.helper';
import { User } from './../models/user.model';

@Injectable()
export class UsersService extends BaseRepositoryService {
  items$: Subject<User[]>;
  items: User[];
  apiUrl: string;

  constructor(public repositoryHelper: RepositoryHelper) {
    super(repositoryHelper);
    this.pluralName = 'users';
    this.name = 'user';
    this.apiUrl = `${repositoryHelper.apiUrl}/${this.pluralName}`;
    this.items$ = <Subject<User[]>>new Subject();
  }
  transformModel(item: any) {
    return new User(item);
  }
  newCache() {
    return new UsersService(this.repositoryHelper);
  }
}