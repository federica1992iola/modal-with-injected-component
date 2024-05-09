import { Observable, Subject } from "rxjs";
import { MODAL_ACTION } from "./Common";

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
export interface ModalWithDynamicContentConfiguration {
    title: string,
    backdropConfig: 'static',
    isClosableOnlyFromHeaderButton: boolean,
    isDraggable: boolean,
    buttonsConfiguration: CTAModalConfiguration[],
    items: ModalItemsConfiguration[]
}
export interface ModalItemsConfiguration {

}