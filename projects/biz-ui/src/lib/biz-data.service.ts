import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {concatAll, take, tap} from "rxjs/operators";
export class ColumnInfo{
  text:string
  identity:string
  icon:string
  isSort:boolean
  isAction:boolean
  isKey:boolean
  order:number
  isAllInOne:boolean
  constructor(text:string,
              identity:string,
              icon:string,
              isSort:boolean,
              isAction:boolean=false,isKey:boolean=false,order:number=0,allInOne=false) {
    this.text=text;
    this.identity=identity;
    this.icon=icon;
    this.isSort=isSort;
    this.isAction=isAction;
    this.isKey=isKey;
    this.order=order;
    this.isAllInOne=allInOne;
  }
}
export class ActionInfo{
  text:string
  identity:string
  icon:string
  order:number
  constructor( text:string,
               identity:string,
               icon:string,
               order:number=0) {
    this.text=text;
    this.identity=identity;
    this.icon=icon;
    this.order=order;
  }
}
export interface Solution{
  id:number,
  bizCode:string,
  name:string,
  cols:ColumnInfo[],
  actions:ActionInfo[]
}
@Injectable({
  providedIn: 'root'
})
export class BizDataService {
  metaApiUrl:string="api/solutions"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }
  buildApiPath(modelName:string){
    return  `api/${modelName}`
  }
  fetchListMetaData(bizCode:string,modelName:string):Observable<Solution>{
    //const params ={params:new HttpParams().set("bizCode",bizCode);}
    //this.httpOptions.params=new HttpParams().set("bizCode",bizCode);
    let urlPath=this.buildApiPath(modelName)
    return this.http.get<any>(this.metaApiUrl,this.httpOptions).pipe(concatAll<any>());
  }

  fetchListData(modelName:string):Observable<any>{
    let url=this.buildApiPath(modelName)
    return this.http.get<any>(url,this.httpOptions).pipe();
  }
}
