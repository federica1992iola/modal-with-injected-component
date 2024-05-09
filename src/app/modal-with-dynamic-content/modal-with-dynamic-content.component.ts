import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWithDynamicContent } from '../common/Modal.def';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MODAL_ACTION } from '../common/Common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal-with-dynamic-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-with-dynamic-content.component.html',
  styleUrls: ['./modal-with-dynamic-content.component.scss']
})
export class ModalWithDynamicContentComponent extends ModalWithDynamicContent {
  public activeModal = inject(NgbActiveModal);

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
