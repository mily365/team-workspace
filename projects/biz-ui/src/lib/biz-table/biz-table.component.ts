import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  QueryList, TemplateRef,
  ViewChild
} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {Observable, of} from "rxjs";
import {ActionInfo, BizDataService, ColumnInfo} from "../biz-data.service";
import {concatAll, map, take, tap} from "rxjs/operators";

@Component({
  selector: 'biz-table',
  templateUrl: './biz-table.component.html',
  styleUrls: ['./biz-table.component.css']
})
export class BizTableComponent<T> implements AfterContentInit,MetaDataForTable {
  // @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
  // @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;
  // @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
  // @ContentChild(MatNoDataRow) noDataRow: MatNoDataRow;
  @ContentChild(TemplateRef, {read: TemplateRef}) template: TemplateRef<{row: any}>;
  @ViewChild(MatTable, {static: true}) table: MatTable<T>;
  @Input() columns: string[];
  @Input() dataSource: Observable<any>;
  @Input() bizCode: string;
  @Input() modelName: string;
  @Input() toDisplayColumns: ColumnInfo[];
  @Input() displayedColumns: string[];
  @Input() actions: ActionInfo[];
  @Input() pageSizeOptions:number[]=[5, 10, 25, 100];
  resultCount:number=100;
  isShowLoading:boolean=false;
  constructor(private bizDataServe:BizDataService) {
  }
  pageChange($evt:any){
    console.log($evt)
    this.fetchListData();
  }
  handleClick(row:any){
     alert(row.position+"---"+this.primaryKey)
  }
  get primaryKey():string{
    let rtn="id"
    let ca=this.toDisplayColumns.filter(item=>{
      return item.isKey
    })
    rtn=ca[0].identity
    return rtn;
  }
  sortChanged($ev:any){
    console.log($ev)
    this.fetchListData();
  }
  fetchListData(){
    this.isShowLoading=true;
    this.dataSource=this.bizDataServe.fetchListData(this.modelName).pipe(tap(it=>{
      this.isShowLoading=false;
    }))
  }
  ngAfterContentInit() {
    this.isShowLoading=true;
    this.columnInfos().subscribe(cls=>{
      if(!this.toDisplayColumns){
        this.toDisplayColumns=cls.sort((a,b)=>a.order-b.order);
      }
      let allInOneFind=this.toDisplayColumns.filter((item)=>item.isAllInOne)
      if(allInOneFind.length>0 && this.toDisplayColumns.length>=3){
        throw new Error("biz table surport only one allInOne column!")
      }
      this.displayedColumns=this.toDisplayColumns.map(c=>c.identity);

      if(!this.dataSource){
         this.fetchListData();
      }

    })
    this.actionInfos().subscribe(actions=>{
      if(!this.actions){
        this.actions=actions;
      }
    })
    // this.columnDefs.forEach((columnDef: any) => this.table.addColumnDef(columnDef));
    // this.rowDefs.forEach((rowDef: any) => this.table.addRowDef(rowDef));
    // this.headerRowDefs.forEach((headerRowDef: any) => this.table.addHeaderRowDef(headerRowDef));
    // this.table.setNoDataRow(this.noDataRow);
  }
  /*
  ery columnInfo by biz-code
   */
  columnInfos(): Observable<ColumnInfo[]> {
    return this.bizDataServe.fetchListMetaData("x",'solution').pipe(
      tap((s)=>console.log(s)),
      map(item=>item.cols)
    )
    // return of([
    //   new ColumnInfo('all-in-one','name','',false,false,false,3,true),
    //   new ColumnInfo('Actions','actions','',false,true,false,4),
    // ])
  }
  actionInfos(): Observable<ActionInfo[]> {
    return this.bizDataServe.fetchListMetaData("x",'solution').pipe(
      tap((s)=>console.log(s)),
      map(item=>item.actions)
    )
  }
}
export interface MetaDataForTable{
  columnInfos(): Observable<ColumnInfo[]>
  actionInfos(): Observable<ActionInfo[]>
}
