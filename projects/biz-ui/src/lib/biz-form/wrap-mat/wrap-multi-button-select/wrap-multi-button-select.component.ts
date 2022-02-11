import {AfterViewInit, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild} from '@angular/core';
import {FormControl, NgControl} from "@angular/forms";
import {fromEvent, Observable, of} from "rxjs";
import {debounceTime, map, pluck, startWith, switchMap, tap} from "rxjs/operators";
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {BizDataService} from "../../../biz-data.service";
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {UtilDecorators} from "../../../common/util/util-descriptor/bizdescriptors";
interface OptionData{
  key:string
  displayText:string
}
@Component({
  selector: 'wrap-multi-button-select',
  templateUrl: './wrap-multi-button-select.component.html',
  styleUrls: ['./wrap-multi-button-select.component.scss']
})
export class WrapMultiButtonSelectComponent extends WrapBaseComponent implements OnInit,  AfterViewInit {
  @UtilDecorators.GetSet()
  @Input()
  value:any
  filteredOptions:Observable<OptionData[]>
  selectedOptionValueToText:Map<string,string>
  @Input() label:string
  @Input() isMulti:boolean=false
  formCtl:FormControl
  constructor(@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService) {
    super(ngControl,bizDataServe)
  }
  ngOnInit(): void {
    //this.chipListData=this.data.split(",");
    this.selectedOptionValueToText=new Map<string, string>()
    this.formCtl=new FormControl()
    this.fetchData().subscribe(items=>{
      items.forEach(it=>{
        this.selectedOptionValueToText.set(it.key,it.displayText)
      })

    })
  }
  selChange($evt:MatButtonToggleChange){
    let selOps:string[]=[]
    if(this.isMulti){
      let values=$evt.value as Array<string>
      values.forEach(v=>{
        selOps.push(v+"_"+this.selectedOptionValueToText.get(v))
      })
      let tmp=selOps.join(",")
      this.value=tmp
    }else{
      this.value=$evt.value+"_"+this.selectedOptionValueToText.get($evt.value)
    }
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
        let vs=this.value.split(",") as Array<string>
        if(vs.length>1){
          // this.selectedOptionTexts=vs.map(it=>it.split("_")[1])
          // this.selectedOptionValues=vs
          this.formCtl.setValue(vs.map(it=>it.split("_")[0]))
        }else {
          this.formCtl.setValue(this.value.split("_")[0])
        }
      })
    }
  }
  setDisabledState?(isDisabled: boolean): void{

  }
}
