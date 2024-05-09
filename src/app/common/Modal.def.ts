import { Observable, Subject } from "rxjs";
import { MODAL_ACTION } from "./Common";
import { Type } from "@angular/core";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

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

export class ModalWithDynamicContentRef {
    private _result$: Subject<any>;

    constructor() {
        this._result$ = new Subject<any>();
    }
    
    close(...parameters: any[]): void {
        this._result$.next(parameters);
        this.destroy$();
    }

    dismiss(...parameters: any[]): void {
        this._result$.next(parameters); 
        this.destroy$();
    }

    save(...parameters: any[]): void {
        this._result$.next(parameters); 
        this.destroy$();
    }

    afterClosedAsObs(): Observable<any> {
        return this._result$.asObservable();
    }

    private destroy$(): void {
        this._result$.complete();
    }
}
export interface IModalHelper {
    open<T>(modalComponent: Type<T>, customDialogConfig: ModalBaseConfiguration): NgbModalRef 

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