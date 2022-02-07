import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgControl} from "@angular/forms";
import {MatFormFieldControl} from "@angular/material/form-field";
import {Observable} from "rxjs";

@Component({
  selector: 'app-error-hint',
  templateUrl: './error-hint.component.html',
  styleUrls: ['./error-hint.component.scss']
})
export class ErrorHintComponent implements  MatFormFieldControl<Object>,OnInit {
  @Input()   formCtl: AbstractControl
  constructor() { }

  ngOnInit(): void {
  }

  readonly autofilled: boolean;
  readonly controlType: string;
  readonly disabled: boolean;
  readonly empty: boolean;
  readonly errorState: boolean;
  readonly focused: boolean;
  static nextId = 0;

  @HostBinding() id = `error-hint-input-${ErrorHintComponent.nextId++}`;
  readonly ngControl: NgControl | null;

  onContainerClick(event: MouseEvent): void {
  }

  readonly placeholder: string;
  readonly required: boolean;

  setDescribedByIds(ids: string[]): void {
  }

  // readonly shouldLabelFloat: boolean;
  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.formCtl.invalid;
  }
  readonly stateChanges: Observable<void>;
  readonly userAriaDescribedBy: string;
  value: Object | null;

}
