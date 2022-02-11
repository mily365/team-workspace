import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, Optional, Self} from "@angular/core";
import {ControlValueAccessor, FormControl, NgControl} from "@angular/forms";
import {ComponentDataInterface} from "../../common/util/util-container/com-data";
import {UtilDecorators} from "../../common/util/util-descriptor/bizdescriptors";
import {BizDataService} from "../../biz-data.service";
import {Observable} from "rxjs";
import {flatMap} from "rxjs/internal/operators";
import {map} from "rxjs/operators";


@Component({
  template: ''
})
export abstract class WrapBaseComponent implements ComponentDataInterface, ControlValueAccessor{
    @Input()
    data: any;
    onChange: (_: any) => {};
    onTouch: () => {};
    protected constructor(public ngControl:NgControl,public bizDataServe:BizDataService) {

      if (this.ngControl != null) {
        // Setting the value accessor directly (instead of using
        // the providers) to avoid running into a circular import.
        this.ngControl.valueAccessor = this;
      }
    }
    abstract writeValue(obj: any): void
    registerOnChange(fn: any): void {
      this.onChange=fn;
    }

    registerOnTouched(fn: any): void {
      this.onTouch=fn;
    }
    errorMsg(errCode:string,toReplace:string=""):Observable<any>{
      console.log(errCode,"xxxxxxxxxxxxxxxxxx",toReplace)
       let lang="zh-CN"
       return this.bizDataServe.fetchErrorMsg(errCode,lang)
         .pipe(map(item=>{return item.replace("{}",toReplace)}))
    }
    abstract setDisabledState?(isDisabled: boolean): void;
}
