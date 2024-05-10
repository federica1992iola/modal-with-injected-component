import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, Type, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from '../../directive/dynamic.directive';
import { DynamicComponent } from '../../directive/dynamic.def';
import { SmartParkingSummarySheetComponent } from '../smart-parking-summary-sheet/smart-parking-summary-sheet';
import { AccessPointSummarySheetComponent } from '../access-point-summary-sheet/access-point-summary-sheet';
import { MessageItem, MessageType } from '../common/Message';

// @Component({
//   selector: 'app-son',
//   standalone: true,
//   template: `
//     <div appSonDirective>
//       <p> son <p>
//     </div>
//   `,
// })
// export class AppSonComponent {
//   @ViewChild(AppSonDirective,{static: true}) childRef : AppSonDirective;
//   constructor() {}
// }

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
export class SummarySheetComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {  
  @ViewChild(DynamicDirective, {static: true}) private dynamicHost!: DynamicDirective;  
  @Input() public messages: MessageItem[];
  
  private interval: number| undefined;  
  
  constructor() {
    this.messages = [];
  }

  ngAfterViewInit(): void {
    console.log(this.dynamicHost); 
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['messages'].currentValue !== changes['messages'].previousValue){
      this.messages = changes['messages'].currentValue;
      console.log(changes)
      this.loadComponent();  
    }
  }
  
  public ngOnInit(): void {  
    this.loadComponent();  
  }  
  
  public ngOnDestroy(): void {  
    clearInterval(this.interval);  
  }  
  
  private loadComponent(): void {  
    if (this.messages.length > 0) {
    //ne prendiamo sempre uno
    const currentIndex: number = 0;  
    const message = this.messages[currentIndex];  
  
    const viewContainerRef = this.dynamicHost.viewContainerRef;  
    viewContainerRef.clear();  
    const componentRef = viewContainerRef.createComponent<DynamicComponent>(this.componentTypeFactory(message.type));  
    componentRef.instance.data = message.data;
    }  
  }  

  private componentTypeFactory(type: MessageType): Type<DynamicComponent> {  
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