import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '../directive/dynamic.def';
import { MatCardModule } from '@angular/material/card';
import { MessageData } from '../common/message';

@Component({
  selector: 'app-access-point-summary-sheet',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template:  `  
  <mat-card class="card">
    <label>access point</label>
    <img mat-card-image src="{{data.url}}" alt="Photo of a clawesome creature" >  
    <mat-card-content>
      <p>{{data.content}}</p>  
    </mat-card-content>
  </mat-card>
`,  
styles: [` .card { max-width: 300px; } `]  
})
export class AccessPointSummarySheetComponent implements DynamicComponent {
  @Input() data: MessageData;  

  constructor() {
    this.data = {
      url: ''
    }
  }
}
