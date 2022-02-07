import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from '@angular/core';
import {ToRenderDirective} from "./to-render.directive";
import {UtilDecorators} from "../util-descriptor/bizdescriptors";
import {ComponentDataInterface} from "./com-data";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-util-container',
  templateUrl: './util-container.component.html',
  styleUrls: ['./util-container.component.scss']
})
export class UtilContainerComponent implements OnInit {
  ngOnInit(): void {
    this.router.events.subscribe((evt)=>{
        if (evt instanceof NavigationEnd && evt.url.length>=2) {
          console.log(evt.url);
          this.loadComponent(this.router.routerState.snapshot.root.firstChild?.component as Type<any>)
        }
    })
    //this.loadComponent()
  }
  @Input()
  urlPath:string
  @Input()
  data:any
  @ViewChild(ToRenderDirective, { static: true })
  toRenderDirective: ToRenderDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private route: ActivatedRoute,
              private router:Router){ }
  loadComponent(com:Type<any>){
    //let comClassObject=this.route.component as Type<any>
    let comClassObject=null
    if(this.urlPath)
     comClassObject=UtilDecorators.ComInfos[this.urlPath]
    else {
      comClassObject=com
    }
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory<any>(comClassObject);

    const viewContainerRef = this.toRenderDirective.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<ComponentDataInterface>(componentFactory);
    componentRef.instance.data = this.data;
  }
}
