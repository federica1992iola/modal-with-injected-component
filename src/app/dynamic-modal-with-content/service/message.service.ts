import { Injectable } from '@angular/core';
import { MessageItem, MessageType } from '../common/Message';

export class MessageService {
  private _messages: MessageItem[];
  private _departmentMapping: Map<number, MessageType[]> = new Map<number, MessageType[]>();  
  
  constructor() {
    this._messages = [  
      {  
        type: 'SmartParkingSummarySheet',
        data: {  
          url: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
          content: 'Cat ipsum dolor sit amet, meow for can opener to feed me',
        } 
      },  
      {  
        type: 'AccessPointSummarySheet',
        data: {  
          url: 'https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
          content: 'Cat ipsum dolor sit amet, find dog bed and sleep all day',
        }
      }
    ];
    this._departmentMapping.set(1, ['SmartParkingSummarySheet']);  
    this._departmentMapping.set(2, ['AccessPointSummarySheet']);  
   }

   public getMessages(department: number): MessageItem[] {  
    const messageTypes = this._departmentMapping.get(department) ?? [];  
    return this._messages.filter(m => messageTypes.includes(m.type));  
  }
}
