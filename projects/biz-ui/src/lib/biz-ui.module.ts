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
import {ReactiveFormsModule} from "@angular/forms";
import { WrapDatePickerComponent } from './biz-form/wrap-mat/wrap-date-picker/wrap-date-picker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {
  NgxMatDatetimePickerModule
} from "@angular-material-components/datetime-picker";
import {WrapDateSpanPickerComponent} from "./biz-form/wrap-mat/wrap-date-span-picker/wrap-date-span-picker.component";
import {WrapMultiSearchSelectComponent} from "./biz-form/wrap-mat/wrap-multi-search-select/wrap-multi-search-select.component";
import {WrapMultiButtonSelectComponent} from "./biz-form/wrap-mat/wrap-multi-button-select/wrap-multi-button-select.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {WrapMatSlideToggleComponent} from "./biz-form/wrap-mat/wrap-mat-slide-toggle/wrap-mat-slide-toggle.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";




@NgModule({
  declarations: [
    BizTableComponent,
    BizAppFrameComponent,
    BizFormComponent,
    WrapMatInputComponent,
    WrapChiplistInputComponent,
    WrapMatAutoCompleteComponent,
    WrapMultiSearchSelectComponent,
    WrapDatePickerComponent,
    WrapDateSpanPickerComponent,
    WrapMultiButtonSelectComponent,
    WrapMatSlideToggleComponent
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
    MatButtonToggleModule,
    MatSlideToggleModule,
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
    WrapMultiSearchSelectComponent,
    WrapDatePickerComponent,
    WrapDateSpanPickerComponent,
    WrapMultiButtonSelectComponent,
    WrapMatSlideToggleComponent
  ]
})
export class BizUiModule { }
