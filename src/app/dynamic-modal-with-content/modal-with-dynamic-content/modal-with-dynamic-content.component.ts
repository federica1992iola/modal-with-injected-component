import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalWithDynamicContentService } from './modal-with-dynamic-content.service';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SummarySheetComponent } from '../summary-sheet/summary-sheet.component';
import { MessageService } from '../service/message.service';
import { MODAL_ACTION, MODAL_WITH_DYNAMIC_CONTENT_TABS_LABEL } from 'src/app/dynamic-modal-with-content/common/Common';
import { ModalWithDynamicContent, ModalWithDynamicContentConfiguration } from '../common/Modal.def';
import {MatTabsModule} from '@angular/material/tabs';
import { DynamicModalItem } from 'src/app/directive/dynamic.def';

@Component({
  selector: 'app-modal-with-dynamic-content',
  standalone: true,
  imports: [CommonModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatIconModule, MatListModule, 
    DragDropModule, 
    MatTabsModule,
    SummarySheetComponent],
  templateUrl: './modal-with-dynamic-content.component.html',
  styleUrls: ['./modal-with-dynamic-content.component.scss']
})
export class ModalWithDynamicContentComponent extends ModalWithDynamicContent {
  private _messageService: MessageService = inject(MessageService);
  readonly config: ModalWithDynamicContentConfiguration;

  tabsLabel: typeof MODAL_WITH_DYNAMIC_CONTENT_TABS_LABEL = MODAL_WITH_DYNAMIC_CONTENT_TABS_LABEL;

  public modalWithDynamicContentService = inject(ModalWithDynamicContentService);
  public messages: DynamicModalItem[];

  constructor( 
    public dialogRef: MatDialogRef<ModalWithDynamicContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
    console.log(dialogRef)
    console.log(data)
    this.config = data.config;
    this.messages = [];
  }

  override close(action: MODAL_ACTION.CLOSE): void {
    this.dialogRef.close({ action: action })
  }
  override dismiss(action: MODAL_ACTION.DISMISS): void {
    this.dialogRef.close({ action: action })
  }
  override save(action: MODAL_ACTION.SAVE): void {
    this.dialogRef.close({ action: action })
  }

  onSelectedTabChange(event: any): void {
    switch(event.tab.textLabel){
      case this.tabsLabel.PERSONAL_DATA:
        //qua riempiamo la struttura dinamica per fare vedere la lista di informazioni anagrafiche
        break;
      case this.tabsLabel.SUMMARY_SHEET:
        this.onSummarySheetTabClick(2);
        break;
      default:
        break;
    }
  }

  //solo quando l'utente preme sul tab scheda sintesi
  onSummarySheetTabClick(summarySheetType: number): void {
    //il valore summarySheetType deve essere scelto tra 1 e 2
    //1 per scheda sintesi aitek, 2 per varchi ztl
    this.messages = [...this._messageService.getMessages(summarySheetType)];
  }

}
