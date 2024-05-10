import { Component, Type, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ModalWithDynamicContentService } from '../modal-with-dynamic-content/modal-with-dynamic-content.service';
import { IModalHelper, ModalWithDynamicContentConfiguration } from '../common/Modal.def';
import { ModalWithDynamicContentComponent } from '../modal-with-dynamic-content/modal-with-dynamic-content.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MODAL_ACTION } from '../common/Common';

@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements IModalHelper {
  private _dialogService: MatDialog = inject(MatDialog);
  modalWithDynamicContentService = inject(ModalWithDynamicContentService);

  onLayerObjectClickEvent(): void  {
    const modalRef: MatDialogRef<ModalWithDynamicContentComponent, any> = this.openModal(ModalWithDynamicContentComponent, this.modalWithDynamicContentService.modalConfiguration);
    modalRef.backdropClick().subscribe({
      next: (output: any) => {
        console.log('che sta a fa')
        console.log(output)
      },
      error: (output: any) => console.error('dismissed', output)
    });

    modalRef.beforeClosed().subscribe({
      next: (output: any) => {
        console.log('che sta a fa 2')
        console.log(output)
      },
      error: (output: any) => console.error('dismissed', output)
    });

    modalRef.afterClosed().subscribe({
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

  openModal<ModalWithDynamicContentComponent>(modalComponent: Type<ModalWithDynamicContentComponent>,  customDialogConfig: ModalWithDynamicContentConfiguration): MatDialogRef<ModalWithDynamicContentComponent, any> {
    const modalRef: MatDialogRef<ModalWithDynamicContentComponent, any> = 
    this._dialogService.open(modalComponent, { 
      backdropClass: 'disabled-backdrop', 
      disableClose: customDialogConfig.isClosableOnlyFromHeaderButton,
      data: { config: customDialogConfig }
    });

    return modalRef;
  }


}
