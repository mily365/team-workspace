import {AfterViewInit, Component, Input, OnInit, Optional, Self} from '@angular/core';
import {NgControl} from "@angular/forms";
import {WrapBaseComponent} from "../Wrap-Base-Component";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {BizDataService} from "../../../biz-data.service";

@Component({
  selector: 'app-wrap-chiplist-input',
  templateUrl: './wrap-chiplist-input.component.html',
  styleUrls: ['./wrap-chiplist-input.component.scss']
})
export class WrapChiplistInputComponent extends WrapBaseComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;
  chipListData:[string] ;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  @Input() addHint:string
  constructor(@Optional() @Self() public ngControl: NgControl,public bizDataServe:BizDataService) {
     super(ngControl,bizDataServe)
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
// Add our fruit
    const index = this.chipListData.indexOf(value);
    if(index>=0){
      return
    }
    if (value) {
      this.chipListData.push(value);
      let nv=this.chipListData.join(",")
      this.value=nv
      this.onChange(nv)

    }
// Clear the input value
    event.chipInput!.clear();
  }
  remove(item: string): void {
    const index = this.chipListData.indexOf(item);
    if (index >= 0) {
      this.chipListData.splice(index, 1);
      let nv=this.chipListData.join(",")
      this.value=nv
      this.onChange(nv)

    }
  }
  ngOnInit(): void {
    //this.chipListData=this.data.split(",");
  }
  writeValue(obj: any): void {
    if(this.value!=obj){
      //首次加载原始控件框架还没准备好
      //首次加载，先有初始值
      setTimeout(()=>{
        this.value=obj
        this.chipListData=this.value.split(",")
      })
    }
  }

}
