import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import {InMemoryDataService} from "./in-memory-data.service";


@NgModule({
  declarations: [
    BizTableComponent,
    BizAppFrameComponent,
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
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.

    ],
  exports:[
    BizTableComponent,
    BizAppFrameComponent,
  ]
})
export class BizUiModule { }
