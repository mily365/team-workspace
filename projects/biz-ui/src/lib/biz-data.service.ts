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
  inWhere:string
  constructor( text:string,
               identity:string,
               icon:string,
               inWhere:string="list",
               order:number=0) {
    this.text=text;
    this.identity=identity;
    this.icon=icon;
    this.inWhere=inWhere;
    this.order=order;

  }
}
export class GroupInfo{
  code:string
  modeName:string
  title:string
  icon:string
  children:ControlInfo<any>[]
  constructor(code:string,modelName:string,title:string,icon:string,children:ControlInfo<any>[]) {
    this.code=code;
    this.modeName=modelName;
    this.title=title;
    this.icon=icon;
    this.children=children;
  }
}
export class ControlInfo<T> {
  default: T;
  key: string;
  label: string;
  validators?: [string];
  order: number;
  controlType: string;
  type: string;
  refDic: string;
  refModel: string;
  options: { key: string; value: string }[];
  constructor(
    options: {
      default?: T;
      key?: string;
      label?: string;
      validators?:[string];
      order?: number;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
      refDic?: string;
      refModel?: string;
    } = {}
  ) {
    this.default = options.default as T;
    this.key = options.key || "";
    this.label = options.label || "";
    this.validators = options.validators;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.options = options.options || [];
    this.refDic = options.refDic || "";
    this.refModel = options.refModel || "";
  }
}
export interface Solution{
  id:number,
  bizCode:string,
  name:string,
  cols:ColumnInfo[],
  actions:ActionInfo[],
  searchGroups:GroupInfo[],
  readOnlyGroups: GroupInfo[],
  editGroups:GroupInfo[]
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
    //远程获取元数据，进行转换为solution
    return this.http.get<any>(this.metaApiUrl,this.httpOptions).pipe(concatAll<any>());
  }

  fetchListData(modelName:string):Observable<any>{
    let url=this.buildApiPath(modelName)
    return this.http.get<any>(url,this.httpOptions).pipe();
  }
}
