import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWithDynamicContent, ModalWithDynamicContentConfiguration } from '../common/Modal.def';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MODAL_ACTION } from '../common/Common';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalWithDynamicContentService } from './modal-with-dynamic-content.service';

@Component({
  selector: 'app-modal-with-dynamic-content',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './modal-with-dynamic-content.component.html',
  styleUrls: ['./modal-with-dynamic-content.component.scss']
})
export class ModalWithDynamicContentComponent extends ModalWithDynamicContent {
  @Input() config: ModalWithDynamicContentConfiguration;
  
  public modalWithDynamicContentService = inject(ModalWithDynamicContentService);
  public activeModal = inject(NgbActiveModal);

  constructor() {
    super();
    this.config = this.modalWithDynamicContentService.modalConfiguration;
  }

  override close(action: MODAL_ACTION.CLOSE): void {
     this.activeModal.close({ action: action })
  }
  override dismiss(action: MODAL_ACTION.DISMISS): void {
    this.activeModal.dismiss({ action: action });
  }
  override save(action: MODAL_ACTION.SAVE): void {
    this.activeModal.close({ action: action })
  }

}
