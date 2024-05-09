import { Injectable } from '@angular/core';
import { ModalWithDynamicContentConfiguration } from '../common/Modal.def';

@Injectable({
  providedIn: 'root'
})
export class ModalWithDynamicContentService {
  private readonly _defaultConfiguration: ModalWithDynamicContentConfiguration;
  private _modalConfiguration: ModalWithDynamicContentConfiguration;

  get modalConfiguration() {
    return this._modalConfiguration;
  }

  constructor() { 
    this._defaultConfiguration = {
      title: 'Layer1_nomeOggetto',
      backdropConfig: 'static',
      areMoreThanOneTab: true,
      isClosableOnlyFromHeaderButton: true,
      isDraggable: true,
      buttonsConfiguration: [],
      items: []
    };
    this._modalConfiguration = {...this._defaultConfiguration};
  }

  initialize(customConfiguration: ModalWithDynamicContentConfiguration): void {
    this._modalConfiguration = customConfiguration;
  }
}
