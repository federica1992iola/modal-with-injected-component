import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ModalWithDynamicContentConfiguration } from '../common/Modal.def';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalHelperService } from '../service/modal-helper.service';
import { MODAL_ACTION } from '../common/Common';

@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent {
  private _modalHelperService: ModalHelperService = inject(ModalHelperService);
  private _modalConfiguration: ModalWithDynamicContentConfiguration;

  constructor() {
    this._modalConfiguration = {
      title: 'Layer1_nomeOggetto',
      backdropConfig: 'static',
      isClosableOnlyFromHeaderButton: true,
      isDraggable: true,
      buttonsConfiguration: [],
      items: []
    };
  }

  openModalWithDynamicContent(): void {
    const modalRef: NgbModalRef | undefined = this._modalHelperService.onLayerObjectClickEvent(this._modalConfiguration);

    if (modalRef !== undefined) {
      modalRef.closed.subscribe({
        next: (output: any) => {
          if (output && output.action !== null && output.action !== undefined) {
            switch (output.action) {
              case MODAL_ACTION.SAVE:
                break;
              case MODAL_ACTION.DISMISS:
                break;
              case MODAL_ACTION.CLOSE:
                break;
            }
          }
        },
        error: (output: any) => console.error('dismissed', output)
      });
    }

  }

}
