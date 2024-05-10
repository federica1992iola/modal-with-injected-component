import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appDynamic]',
  standalone: true
})
export class DynamicDirective {
  public viewContainerRef: ViewContainerRef = inject(ViewContainerRef);


}
