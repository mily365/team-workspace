import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[utilToRender]'
})
export class ToRenderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
