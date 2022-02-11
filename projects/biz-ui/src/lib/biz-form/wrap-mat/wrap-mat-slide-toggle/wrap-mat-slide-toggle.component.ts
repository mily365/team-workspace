import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef, forwardRef,
  Input, OnChanges,
  OnDestroy,
  OnInit, Optional, Self,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {AutofillMonitor} from "@angular/cdk/text-field";
import {FormControl, NgControl} from "@angular/forms";
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {BizDataService} from "../../../biz-data.service";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {UtilDecorators} from "../../../common/util/util-descriptor/bizdescriptors";

@Component({
  selector: 'wrap-mat-slide-toggle',
  templateUrl: './wrap-mat-slide-toggle.component.html',
  styleUrls: ['./wrap-mat-slide-toggle.component.scss'],
})
export class WrapMatSlideToggleComponent extends WrapBaseComponent implements  AfterViewInit {
  @UtilDecorators.GetSet()
  @Input()
  value:any
  @Input() color:string
  @Input() label:string
  formCtl:FormControl
  disabled:boolean
  constructor(private _autofill: AutofillMonitor,@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService) {
    // Replace the provider from above with this.
     super(ngControl,bizDataServe)
  }
  ngAfterViewInit(): void {

  }
  slideToggleChange($evt:MatSlideToggleChange){
    console.log(this.value,"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx share")
    this.value=$evt.checked
    this.onChange(this.value)
  }
  writeValue(obj: any): void {
    console.log("write value.....",obj)
    if(this.value!=obj){
      //首次加载原始控件框架还没准备好
      //首次加载，先有初始值
      setTimeout(()=>{
        this.value=obj
        this.formCtl.setValue(obj)
      })
    }
  }
  setDisabledState?(isDisabled: boolean): void{
     this.disabled=isDisabled
  }
}
