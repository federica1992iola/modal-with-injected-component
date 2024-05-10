export type MessageType = 'SmartParkingSummarySheet' 
| 'AccessPointSummarySheet' ;  
  
export interface MessageData {  
  url: string;  
  content?: any;  
}  
  
export class MessageItem {  
  constructor(public type: MessageType, public data: MessageData) { }  
}