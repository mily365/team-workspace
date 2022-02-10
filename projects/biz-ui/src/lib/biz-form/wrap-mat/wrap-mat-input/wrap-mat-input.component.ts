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
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {BizDataService} from "../../../biz-data.service";




// export const BIZ_INPUT_VALUE_ACCESSOR: any = {
//   provide: NG_VALUE_ACCESSOR,
//   useExisting: forwardRef(() => BizMatInputComponent),
//   multi: true
// };
@Component({
  selector: 'app-wrap-mat-input',
  templateUrl: './wrap-mat-input.component.html',
  styleUrls: ['./wrap-mat-input.component.scss'],
  // providers: [BIZ_INPUT_VALUE_ACCESSOR]
})
export class WrapMatInputComponent extends WrapBaseComponent implements  AfterViewInit, OnDestroy, OnChanges {
  // @ViewChild('inputRef') inputRef:ElementRef;
  @Input() placeHolder:string
  @Input() label:string
  @ViewChild('inputRef') inputCtlRef: ElementRef;
  inputCtlRefDom: any;
  inputCtlAutoFilled: boolean = false;

  constructor(private _autofill: AutofillMonitor,@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService) {
    // Replace the provider from above with this.
     super(ngControl,bizDataServe)
  }

  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes)
  }

  ngOnDestroy(): void {
    this._autofill.stopMonitoring(this.inputCtlRef);
    }

  ngAfterViewInit(): void {
    if(this.inputCtlRef){
      this._autofill.monitor(this.inputCtlRef)
        .subscribe(e => this.inputCtlAutoFilled = e.isAutofilled);
    }
    if(!this.inputCtlRefDom){
      this.inputCtlRefDom= this.inputCtlRef.nativeElement

      this.inputCtlRefDom.onchange=($ev:any)=>{
        console.log("change.......")
        this.onChange($ev.target.value)
      }
    }
  }
  writeValue(obj: any): void {
    console.log("write value.....",obj)
    if(this.value!=obj){
      //首次加载原始控件框架还没准备好
      //首次加载，先有初始值
      setTimeout(()=>{
        this.value=obj
        this.inputCtlRefDom.value=this.value
      })
    }
  }
  setDisabledState?(isDisabled: boolean): void{

  }
}
