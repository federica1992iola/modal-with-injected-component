export type DynamicModalContentType = 'SmartParkingSummarySheet' 
| 'AccessPointSummarySheet' ;  
  
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
