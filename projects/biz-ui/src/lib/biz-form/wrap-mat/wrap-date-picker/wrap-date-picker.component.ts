import {AfterViewInit, Component, OnInit, Optional, Self} from '@angular/core';
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {NgControl} from "@angular/forms";
import {BizDataService} from "../../../biz-data.service";
import * as moment from 'moment';
import {DateAdapter, ThemePalette} from "@angular/material/core";
@Component({
  selector: 'wrap-date-picker',
  templateUrl: './wrap-date-picker.component.html',
  styleUrls: ['./wrap-date-picker.component.css']
})
export class WrapDatePickerComponent  extends WrapBaseComponent implements  AfterViewInit {
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  constructor(@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService,private _adapter: DateAdapter<any>) {
    super(ngControl,bizDataServe)
  }

  ngOnInit(): void {
    this._adapter.setLocale("cn-ZH")
  }

  ngAfterViewInit(): void {
  }

  writeValue(obj: any): void {
  }

}
