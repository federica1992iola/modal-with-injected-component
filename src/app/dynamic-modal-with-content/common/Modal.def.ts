import { Observable, Subject } from "rxjs";
import { MODAL_ACTION } from "./Common";
import { Type } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

export type CTAModalConfiguration = {
    label: string,
    color: 'primary' | 'secondary'
    action: () => void
}
export abstract class ModalWithDynamicContent {
    abstract close(action: MODAL_ACTION.CLOSE): void;
    abstract dismiss(action: MODAL_ACTION.DISMISS): void;
    abstract save(action: MODAL_ACTION.SAVE): void;
}
export interface IModalHelper {
    openModal<T>(modalComponent: Type<T>, customDialogConfig: ModalBaseConfiguration): MatDialogRef<T, any>
}
export interface ModalBaseConfiguration {
    title: string,
    backdropConfig: 'static',
    isClosableOnlyFromHeaderButton: boolean,
    buttonsConfiguration: CTAModalConfiguration[],
}
export interface ModalWithDynamicContentConfiguration extends ModalBaseConfiguration {
    areMoreThanOneTab: boolean,
    isDraggable: boolean,
    items: ModalItemsConfiguration[]
}
export interface ModalItemsConfiguration {

}
