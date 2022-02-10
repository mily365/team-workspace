import {AfterViewInit, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild} from '@angular/core';
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {AutofillMonitor} from "@angular/cdk/text-field";
import {NgControl} from "@angular/forms";
import {Observable, of,fromEvent} from "rxjs";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {debounce, debounceTime, filter, pluck, switchMap,tap} from "rxjs/operators";
import {flatMap} from "rxjs/internal/operators";
import {BizDataService} from "../../../biz-data.service";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

interface OptionData{
  key:string
  displayText:string
}
@Component({
  selector: 'wrap-mat-auto-complete',
  templateUrl: './wrap-mat-auto-complete.component.html',
  styleUrls: ['./wrap-mat-auto-complete.component.css']
})
export class WrapMatAutoCompleteComponent  extends WrapBaseComponent implements  AfterViewInit,OnInit {
  filteredOptions:Observable<OptionData[]>
  @ViewChild('inputRef') inputCtlRef: ElementRef;
  @Input()
  keyField:string
  @Input()
  valueField:string
  @Input()
  label:string
  @Input()
  placeHolder:string
  _inputCtlRefDom: any;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService) {
    super(ngControl,bizDataServe)

  }


  onSelect($evt:MatAutocompleteSelectedEvent){
    this._inputCtlRefDom.value=$evt.option.viewValue
    this.value=$evt.option.value+"_"+$evt.option.viewValue
    this.onChange(this.value)
  }
  ngOnInit(): void {
    this.fetchData()
  }
  ngAfterViewInit(): void {
    if(!this._inputCtlRefDom){
      this._inputCtlRefDom= this.inputCtlRef.nativeElement
      fromEvent(this._inputCtlRefDom,"input").pipe(
        debounceTime(500),
        pluck('target', 'value'),
        tap(v=>console.log(v)),
        switchMap(value=>this.fetchData(value as string)),
      ).subscribe((items)=>{
        this.filteredOptions=of(items)
      })
      // this._inputCtlRefDom.oninput=($ev:any)=>{
      //   console.log("query.......",$ev.target.value)
      //   //按照输入去查询构造选项对象数组
      //   this.fetchData($ev.target.value)
      //   this.filteredOptions.subscribe((items)=>{
      //     let x=items.filter(item=>item.displayText.indexOf($ev.target.value)>=0)
      //     this.filteredOptions=of(x)
      //   })
      //   //this.onChange($ev.target.value)
      // }

    }
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
  clearValue():void{
    this.value="";
    this._inputCtlRefDom.value=""
    this.onChange("")
    console.log(this.ngControl.errors)
  }
  writeValue(obj: any): void {
    console.log("write value.....",obj)
    if(this.value!=obj){
      //首次加载原始控件框架还没准备好
      //首次加载，先有初始值
      setTimeout(()=>{
          let array=obj.split("_")
          if(array.length==2){
            this.value=obj
            this._inputCtlRefDom.value=array[1]
          }else {
            this.value=""
            this._inputCtlRefDom.value=""
          }
      })
    }
  }
  setDisabledState?(isDisabled: boolean): void{

  }

}
