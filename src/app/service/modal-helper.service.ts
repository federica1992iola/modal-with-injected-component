import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Type, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalWithDynamicContentConfiguration } from '../common/Modal.def';
import { ModalWithDynamicContentComponent } from '../modal-with-dynamic-content/modal-with-dynamic-content.component';

@Injectable({
  providedIn: 'root'
})
export class ModalHelperService {
  private _modalService: NgbModal = inject(NgbModal);
  private _document: any;

  constructor(@Inject(DOCUMENT) document: any) {
    this._document = document;
  }

  open<ModalWithDynamicContent>(modalComponent: Type<ModalWithDynamicContent>, customDialogConfig: ModalWithDynamicContentConfiguration): NgbModalRef {
    const modalRef: NgbModalRef = this._modalService.open(modalComponent, { centered: true });
    modalRef.componentInstance.config = customDialogConfig;
    return modalRef;
  }

  onLayerObjectClickEvent(config: ModalWithDynamicContentConfiguration): NgbModalRef | undefined {
    let result: NgbModalRef | undefined = undefined;
   
    result = this.open(ModalWithDynamicContentComponent, config);
      
    return result;
  }

}
