import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from  '@angular/material/chips';



import {BizTableComponent} from './biz-table/biz-table.component';
import { MatTableModule} from  '@angular/material/table';
import { MatButtonModule} from  '@angular/material/button';
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import { BizAppFrameComponent } from './biz-app-frame/biz-app-frame.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { BizFormComponent } from './biz-form/biz-form.component';
import {WrapMatInputComponent} from "./biz-form/wrap-mat/wrap-mat-input/wrap-mat-input.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TextFieldModule} from '@angular/cdk/text-field';
import {WrapChiplistInputComponent} from "./biz-form/wrap-mat/wrap-chiplist-input/wrap-chiplist-input.component";
import {MatInputModule} from "@angular/material/input";
import { WrapMatAutoCompleteComponent } from './biz-form/wrap-mat/wrap-mat-auto-complete/wrap-mat-auto-complete.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule} from "@angular/material/core";
import { WrapMultiSelectComponent } from './biz-form/wrap-mat/wrap-multi-select/wrap-multi-select.component';
import {ReactiveFormsModule} from "@angular/forms";
import { WrapDatePickerComponent } from './biz-form/wrap-mat/wrap-date-picker/wrap-date-picker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {
  NgxMatDateAdapter,
  NgxMatDateFormats,
  NgxMatDatetimePickerModule
} from "@angular-material-components/datetime-picker";
import {
  CustomNgxDatetimeAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from "./biz-form/wrap-mat/wrap-date-picker/custom-moment-adapter";
import {NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS} from "@angular-material-components/moment-adapter";
const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: 'l, LTS'
  },
  display: {
    dateInput: 'YYYY-MM-DD HH:mm:ss',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};


@NgModule({
  declarations: [
    BizTableComponent,
    BizAppFrameComponent,
    BizFormComponent,
    WrapMatInputComponent,
    WrapChiplistInputComponent,
    WrapMatAutoCompleteComponent,
    WrapMultiSelectComponent,
    WrapDatePickerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatFormFieldModule,
    TextFieldModule,
    MatChipsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    MatDatepickerModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

  ],
  exports: [
    BizTableComponent,
    BizAppFrameComponent,
    WrapMatInputComponent,
    WrapChiplistInputComponent,
    WrapMatAutoCompleteComponent,
    WrapMultiSelectComponent,
    WrapDatePickerComponent
  ],
  providers:[
    {
      provide: NgxMatDateAdapter,
      useClass: CustomNgxDatetimeAdapter,
      deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  ]
})
export class BizUiModule { }
