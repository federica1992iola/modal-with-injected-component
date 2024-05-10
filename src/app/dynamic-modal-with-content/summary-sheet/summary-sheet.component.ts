import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, Type, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from '../../directive/dynamic.directive';
import { DynamicComponent, DynamicModalContentType, DynamicModalItem } from '../../directive/dynamic.def';
import { SmartParkingSummarySheetComponent } from '../smart-parking-summary-sheet/smart-parking-summary-sheet';
import { AccessPointSummarySheetComponent } from '../access-point-summary-sheet/access-point-summary-sheet';



@Component({
  selector: 'app-summary-sheet',
  standalone: true,
  imports: [CommonModule, DynamicDirective],
  template: `  
    <h3 class="mat-headline">Relax, you got this</h3>
    <ng-template appDynamic></ng-template>
  `,  
  styleUrls: ['./summary-sheet.component.scss']
})
export class SummarySheetComponent implements OnInit, OnChanges {  
  @ViewChild(DynamicDirective, {static: true}) private dynamicHost!: DynamicDirective;  
  @Input() public dynamicModalItem!: DynamicModalItem;


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dynamicModalItem'].currentValue !== changes['dynamicModalItem'].previousValue){
      this.dynamicModalItem = changes['dynamicModalItem'].currentValue;
      this.loadComponent();  
    }
  }
  
  public ngOnInit(): void {  
    this.loadComponent();  
  }  
  

  private loadComponent(): void {  
    if (this.dynamicModalItem !== undefined) {
  
    const viewContainerRef = this.dynamicHost.viewContainerRef;  
    viewContainerRef.clear();  
    const componentRef = viewContainerRef.createComponent<DynamicComponent>(this.componentTypeFactory(this.dynamicModalItem.type));  
    componentRef.instance.data = this.dynamicModalItem.data;
    }  
  }  

  private componentTypeFactory(type: DynamicModalContentType): Type<DynamicComponent> {  
    let comp: Type<DynamicComponent> = AccessPointSummarySheetComponent;  
    
    if (type == 'SmartParkingSummarySheet') {  
      comp = SmartParkingSummarySheetComponent;  
    } 
    if(type == 'AccessPointSummarySheet') {
      comp = AccessPointSummarySheetComponent;  
    } 

    return comp;  
  }
}