import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from './../../shared/account.service';
import { AppService } from './../../shared/app.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'grid-row-buttons',
  templateUrl: './grid-row-buttons.component.html',
  styleUrls: ['./grid-row-buttons.component.scss']
})

export class GridRowButtonsComponent implements OnInit {
  @Input()
  public editTitle?: string;
  @Input()
  public removeTitle?: string;
  @Input()
  public editIcon?: string = 'fa fa-pencil-square-o';
  @Input()
  public removeIcon?: string = 'fa fa-remove';
  @Input()
  public editIconColor?: string = ''; // text-primary';
  @Input()
  public removeIconColor?: string = ''; // 'text-warning';
  @Output()
  public onEdit: EventEmitter<boolean | any> = new EventEmitter();
  @Output()
  public onRemove: EventEmitter<boolean | any> = new EventEmitter();
  @Input()
  public showEdit?: boolean = true;
  @Input()
  public showRemove?: boolean = true;

  constructor(public translateService: TranslateService) {
    if (this.editTitle === undefined) {
      this.editTitle = this.translateService.instant('Edit');
    }
    if (this.removeTitle === undefined) {
      this.removeTitle = this.translateService.instant('Remove');
    }
  }
  ngOnInit() {
  }

  edit() {
    this.onEdit.emit(true);
    return false;
  }

  remove() {
    this.onRemove.emit(true);
    return false;
  }
}