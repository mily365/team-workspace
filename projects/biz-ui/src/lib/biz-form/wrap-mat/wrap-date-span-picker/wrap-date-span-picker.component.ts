import {AfterViewInit, Component, Input, OnInit, Optional, Self} from '@angular/core';
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {FormControl, NgControl} from "@angular/forms";
import {BizDataService} from "../../../biz-data.service";
import * as moment from 'moment';
import {DateAdapter, ThemePalette} from "@angular/material/core";
export interface DateSpan{
  startDate:Date
  endDate:Date
}
@Component({
  selector: 'wrap-date-span-picker',
  templateUrl: './wrap-date-span-picker.component.html',
  styleUrls: ['./wrap-date-span-picker.component.scss']
})
export class WrapDateSpanPickerComponent  extends WrapBaseComponent implements  AfterViewInit {
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
  public formCtlStart:FormControl
  public formCtlEnd:FormControl
  constructor(@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService,private _adapter: DateAdapter<any>) {
    super(ngControl,bizDataServe)
  }

  ngOnInit(): void {
    //this._adapter.setLocale("cn-ZH")
    this.formCtlStart=new FormControl()
    this.formCtlStart.valueChanges.subscribe(value=>{
      let cv=this.value as DateSpan
      cv.startDate=value
      cv.endDate=cv.endDate
      this.onChange(this.value)
    })
    this.formCtlEnd=new FormControl()
    this.formCtlEnd.valueChanges.subscribe(value=>{
      let cv=this.value as DateSpan
      cv.endDate=value
      cv.startDate=cv.startDate
      this.onChange(this.value)
    })
  }
  ngAfterViewInit(): void {

  }

  writeValue(obj: any): void {
    let objTransform=obj as DateSpan
    let curValue=this.value as DateSpan
    if(obj && (curValue.startDate!=objTransform.startDate || curValue.endDate!=objTransform.endDate)){
      //首次加载原始控件框架还没准备好
      //首次加载，先有初始值
      setTimeout(()=>{
        this.value=objTransform
        this.formCtlStart.setValue(this.value.startDate)
        this.formCtlEnd.setValue(this.value.endDate)
      })
    }else{
      setTimeout(()=>{
        this.value={startDate:null,endDate:null}
        this.formCtlStart.setValue(null)
        this.formCtlEnd.setValue(null)
      })

    }
  }
}
