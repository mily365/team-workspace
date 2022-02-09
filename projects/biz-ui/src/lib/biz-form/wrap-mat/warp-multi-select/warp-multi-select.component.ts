import {AfterViewInit, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild} from '@angular/core';
import {FormControl, NgControl} from "@angular/forms";
import {fromEvent, Observable, of} from "rxjs";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {debounceTime, map, pluck, startWith, switchMap, tap} from "rxjs/operators";
import {MatChipInputEvent} from "@angular/material/chips";
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {BizDataService} from "../../../biz-data.service";
interface OptionData{
  key:string
  displayText:string
}
@Component({
  selector: 'warp-multi-select',
  templateUrl: './warp-multi-select.component.html',
  styleUrls: ['./warp-multi-select.component.css']
})
export class WarpMultiSelectComponent extends WrapBaseComponent implements OnInit,  AfterViewInit {
  selectable = true;
  removable = true;
  addOnBlur = true;
  chipListData:[string] ;
  filteredOptions:Observable<OptionData[]>
  selectedOptionTexts:string[]=[]
  selectedOptionValues:string[]=[]
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  @Input() label:string
  @Input() placeHolder:string
  @ViewChild('inputRef') inputCtlRef: ElementRef;
  _inputCtlRefDom: any;

  constructor(@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService) {
    super(ngControl,bizDataServe)
  }
  add(event: MatChipInputEvent): void {
// Clear the input value
    event.chipInput!.clear();
  }
  remove(item: string): void {
    const index = this.selectedOptionTexts.indexOf(item);
    if (index >= 0) {
      this.selectedOptionTexts.splice(index, 1);
      this.selectedOptionValues.splice(index, 1);
      let nv=this.selectedOptionValues.join(",")
      this.value=nv
      this.onChange(nv)
    }
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
  ngOnInit(): void {
    //this.chipListData=this.data.split(",");
    this.fetchData()
  }
  onSelect($evt:MatAutocompleteSelectedEvent){
    if(this.selectedOptionTexts.indexOf($evt.option.viewValue)<0){
      this.selectedOptionTexts.push($evt.option.viewValue)
      this.selectedOptionValues.push($evt.option.value+"_"+$evt.option.viewValue)
      this.value=this.selectedOptionValues.join(",")
      this.onChange(this.value)
    }
  }
  writeValue(obj: any): void {
    if(this.value!=obj){
      //首次加载原始控件框架还没准备好
      //首次加载，先有初始值
      setTimeout(()=>{
        this.value=obj
        let vs=this.value.split(",")
        if(vs.length>0){
          // @ts-ignore
          this.selectedOptionTexts=vs.map(it=>it.split("_")[1])
          this.selectedOptionValues=vs
        }
      })
    }
  }

}
