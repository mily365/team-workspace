import {AfterViewInit, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild} from '@angular/core';
import {FormControl, NgControl} from "@angular/forms";
import {fromEvent, Observable, of} from "rxjs";
import {debounceTime, map, pluck, startWith, switchMap, tap} from "rxjs/operators";
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {BizDataService} from "../../../biz-data.service";
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {UtilDecorators} from "../../../common/util/util-descriptor/bizdescriptors";
import {MatRadioChange} from "@angular/material/radio";
interface OptionData{
  key:string
  displayText:string
}
@Component({
  selector: 'wrap-radio-select',
  templateUrl: './wrap-radio-select.component.html',
  styleUrls: ['./wrap-radio-select.component.scss']
})
export class WrapRadioSelectComponent extends WrapBaseComponent implements OnInit,  AfterViewInit {
  @UtilDecorators.GetSet()
  @Input()
  value:any
  @Input()
  radioCanSelects:OptionData[]=[]
  filteredOptions:Observable<OptionData[]>
  selectedOptionValueToText:Map<string,string>
  @Input() label:string

  constructor(@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService) {
    super(ngControl,bizDataServe)
  }
  ngOnInit(): void {
    //this.chipListData=this.data.split(",");
    this.selectedOptionValueToText=new Map<string, string>()
    this.fetchData().subscribe(items=>{
      items.forEach(it=>{
        if(this.radioCanSelects.length==0){
          this.radioCanSelects.push(it)
        }

        this.selectedOptionValueToText.set(it.key,it.displayText)
      })
    })
  }
  radioChange($evt:MatRadioChange){
    this.value=$evt.value
    this.onChange(this.value)
  }
  ngAfterViewInit(): void {
    this.fetchData()
  }
  fetchData(q:string=""){
    //按照输入去查询构造选项对象数组
    this.filteredOptions=of<OptionData[]>([
      {key:"001",displayText:"hello"},
      {key:"002",displayText:"world"}
    ]).pipe(
      switchMap(value=>{
        return of(value.filter(it=>{
          return it.displayText.indexOf(q)>=0
        }))
      })
    )
    return this.filteredOptions
  }
  writeValue(obj: any): void {
    if(this.value!=obj){
      //首次加载原始控件框架还没准备好
      //首次加载，先有初始值
      setTimeout(()=>{
        this.value=obj
      })
    }
  }
  setDisabledState?(isDisabled: boolean): void{

  }
}
