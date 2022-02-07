import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {of} from "rxjs";
import {ActionInfo, ColumnInfo, ControlInfo, GroupInfo} from "./biz-data.service";
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pos = [
      {id:1,position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {id:1,position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {id:3,position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {id:4,position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {id:5,position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {id:6,position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {id:7,position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {id:8,position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {id:9,position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {id:10,position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
    ];
    const solutions=[
      {
        id:1,
        bizCode:"pos",
        name:'posList',
        cols:[//从元数据中解析formType是List的分组
          new ColumnInfo('position','position','',true,false,true,0),
          new ColumnInfo('weight','weight','',false,false,false,1),
          new ColumnInfo('symbol','symbol','',false,false,false,2),
          new ColumnInfo('name','name','',false,false,false,3),
          new ColumnInfo('Actions','actions','',false,true,false,4)
        ],actions:[//从元数据中解析formType是Actions的分组
          new ActionInfo('add','add','',"list"),
          new ActionInfo('edit','edit','',"list"),
          new ActionInfo('delete','delete','',"list"),
          new ActionInfo('detail','detail','',"editForm")
        ],
        searchGroups:[//从元数据中解析formType是SearchForm的分组
          new GroupInfo("baseinfo","student","基本信息","person",[
            new ControlInfo({
              default:"defaultvalue",
              key:"name",
              label:"姓名",
              order:0,
              controlType:"textbox",
              validators:["required|必输"],
            }),
            new ControlInfo({
              default:"15",
              key:"age",
              label:"年龄",
              order:1,
              controlType:"textbox",
              validators:["required|必输"],
            }),
          ]),
        ],
        readOnlyGroups:[//从元数据中解析formType是ReadOnlyForm的分组
          new GroupInfo("baseinfo","student","基本信息","person",[
            new ControlInfo({
              default:"defaultvalue",
              key:"name",
              label:"姓名",
              order:0,
              controlType:"textbox",
              validators:["required|必输"],
            }),
            new ControlInfo({
              default:"15",
              key:"age",
              label:"年龄",
              order:1,
              controlType:"textbox",
              validators:["required|必输"],
            }),
          ]),
        ]
        ,editGroups:[//从元数据中解析formType是EditForm的分组
          new GroupInfo("baseinfo","student","基本信息","person",[
            new ControlInfo({
              default:"defaultvalue",
              key:"name",
              label:"姓名",
              order:0,
              controlType:"textbox",
              validators:["required|必输"],
            }),
            new ControlInfo({
              default:"15",
              key:"age",
              label:"年龄",
              order:1,
              controlType:"textbox",
              validators:["required|必输"],
            }),
          ]),
          new GroupInfo("addressinfo","student","地址信息s","person",[
            new ControlInfo({
              default:"defaultvalue",
              key:"street",
              label:"街道",
              order:0,
              controlType:"textbox",
              validators:["required|必输"],
            }),
            new ControlInfo({
              default:"100100",
              key:"mailCode",
              label:"邮编",
              order:1,
              controlType:"textbox",
              validators:["required|必输"],
            }),
          ]),
        ]
      }
    ]
    return {pos,solutions};
  }
}
