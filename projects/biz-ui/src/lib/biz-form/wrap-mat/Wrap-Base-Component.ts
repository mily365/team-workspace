import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, Optional, Self} from "@angular/core";
import {ControlValueAccessor, NgControl} from "@angular/forms";
import {ComponentDataInterface} from "../../common/util/util-container/com-data";
import {UtilDecorators} from "../../common/util/util-descriptor/bizdescriptors";


@Component({
  template: ''
})
export abstract class WrapBaseComponent implements ComponentDataInterface, ControlValueAccessor{
    @UtilDecorators.GetSet()
    @Input()
    value:any
    @Input()
    data: any;
    onChange: (_: any) => {};
    onTouch: () => {};
    protected constructor(public ngControl:NgControl) {
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


}
