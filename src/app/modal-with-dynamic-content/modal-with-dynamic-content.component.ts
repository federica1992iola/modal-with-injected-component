import { Component, Inject, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWithDynamicContent, ModalWithDynamicContentConfiguration } from '../common/Modal.def';
import { MODAL_ACTION } from '../common/Common';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalWithDynamicContentService } from './modal-with-dynamic-content.service';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-modal-with-dynamic-content',
  standalone: true,
  imports: [CommonModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatIconModule, MatListModule, DragDropModule],
  templateUrl: './modal-with-dynamic-content.component.html',
  styleUrls: ['./modal-with-dynamic-content.component.scss']
})
export class ModalWithDynamicContentComponent extends ModalWithDynamicContent {
  readonly config: ModalWithDynamicContentConfiguration;

  public modalWithDynamicContentService = inject(ModalWithDynamicContentService);
  

  constructor( 
    public dialogRef: MatDialogRef<ModalWithDynamicContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
    console.log(dialogRef)
    console.log(data)
    this.config = data.config;
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

}
