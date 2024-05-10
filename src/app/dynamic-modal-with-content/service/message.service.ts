import { DEFAULT_DYNAMIC_MODAL_ITEM, DYNAMIC_MODAL_CONTENT_TYPE, DynamicModalContentType, DynamicModalItem } from "src/app/directive/dynamic.def";

export class MessageService {
  private _dynamicModalItem: DynamicModalItem[];
  private _dynamicModalItemsMapping: Map<DYNAMIC_MODAL_CONTENT_TYPE, DynamicModalContentType>;
  
  constructor() {
    this._dynamicModalItem = [  
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
    this._dynamicModalItemsMapping = new Map<DYNAMIC_MODAL_CONTENT_TYPE, DynamicModalContentType>();
    this._dynamicModalItemsMapping.set(DYNAMIC_MODAL_CONTENT_TYPE.SMART_PARKING_SUMMARY_SHEET, 'SmartParkingSummarySheet');  
    this._dynamicModalItemsMapping.set(DYNAMIC_MODAL_CONTENT_TYPE.ACCESS_POINT_SUMMARY_SHEET, 'AccessPointSummarySheet');  
   }

   public getDynamicModalItemByType(type: DYNAMIC_MODAL_CONTENT_TYPE): DynamicModalItem {  
    const values =  this._dynamicModalItemsMapping.get(type) ?? 'AccessPointSummarySheet';  
    const result = this._dynamicModalItem.filter(dmi => values == dmi.type);
    
    return result.length > 0 ? result[0] : DEFAULT_DYNAMIC_MODAL_ITEM;  
  }
}
