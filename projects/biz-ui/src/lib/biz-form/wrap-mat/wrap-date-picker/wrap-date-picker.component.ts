import {AfterViewInit, Component, Input, OnInit, Optional, Self} from '@angular/core';
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {FormControl, NgControl} from "@angular/forms";
import {BizDataService} from "../../../biz-data.service";
import * as moment from 'moment';
import {DateAdapter, ThemePalette} from "@angular/material/core";
import {UtilDecorators} from "../../../common/util/util-descriptor/bizdescriptors";
@Component({
  selector: 'wrap-date-picker',
  templateUrl: './wrap-date-picker.component.html',
  styleUrls: ['./wrap-date-picker.component.scss']
})
export class WrapDatePickerComponent  extends WrapBaseComponent implements  AfterViewInit {
  @UtilDecorators.GetSet()
  @Input()
  value:any
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  @Input()
  public touchUi = false;
  @Input()
  public placeHolder:string
  @Input()
  public label:string

  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  public formCtl:FormControl
  constructor(@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService,private _adapter: DateAdapter<any>) {
    super(ngControl,bizDataServe)
  }
  ngOnInit(): void {
    //this._adapter.setLocale("cn-ZH")
    this.formCtl=new FormControl()
    this.formCtl.valueChanges.subscribe(value=>{
      this.value=value
      this.onChange(value)
    })
  }
  ngAfterViewInit(): void {

  }

  writeValue(obj: any): void {
    if(this.value!=obj){
      //首次加载原始控件框架还没准备好
      //首次加载，先有初始值
      setTimeout(()=>{
        this.value=obj
        this.formCtl.setValue(this.value)
      })
    }
  }
  setDisabledState?(isDisabled: boolean): void{
    console.log("isDisabled...........................................")
    this.disabled=isDisabled
  }
}
