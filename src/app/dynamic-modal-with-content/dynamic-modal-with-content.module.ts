import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessPointSummarySheetComponent } from './access-point-summary-sheet/access-point-summary-sheet';
import { SmartParkingSummarySheetComponent } from './smart-parking-summary-sheet/smart-parking-summary-sheet';
import { ModalWithDynamicContentComponent } from './modal-with-dynamic-content/modal-with-dynamic-content.component';
import { SummarySheetComponent } from './summary-sheet/summary-sheet.component';
import { ModalWithDynamicContentService } from './modal-with-dynamic-content/modal-with-dynamic-content.service';
import { MessageService } from './service/message.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccessPointSummarySheetComponent,
    SmartParkingSummarySheetComponent,
    ModalWithDynamicContentComponent,
    SummarySheetComponent
  ],
  providers: [
    ModalWithDynamicContentService,
    MessageService
  ]
})
export class DynamicModalWithContentModule { }
