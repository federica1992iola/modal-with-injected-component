export enum DYNAMIC_MODAL_CONTENT_TYPE {
    SMART_PARKING_SUMMARY_SHEET,
    ACCESS_POINT_SUMMARY_SHEET
}
export type DynamicModalContentType = 'SmartParkingSummarySheet' | 'AccessPointSummarySheet' ;  
  
export interface DynamicModalData {  
  url: string;  
  content?: any;  
  //qua ci passo la configurazione
}  
export class DynamicModalItem {  
  constructor(public type: DynamicModalContentType, public data: DynamicModalData) { }  
}

export interface DynamicComponent {
    data: DynamicModalData;  
}

export const DEFAULT_DYNAMIC_MODAL_ITEM: DynamicModalItem = new DynamicModalItem('AccessPointSummarySheet', {
    url: ''
});