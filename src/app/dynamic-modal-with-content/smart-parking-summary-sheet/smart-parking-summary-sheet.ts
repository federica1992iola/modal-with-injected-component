import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent, DynamicModalData } from '../../directive/dynamic.def';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-smart-parking-summary-sheet',
  standalone: true,
  imports: [CommonModule, MatCardModule],
    template:  `  
    <mat-card class="card">
      <label>smart parking</label>
      <img mat-card-image src="{{data.url}}" alt="Photo of a clawesome creature" >  
      <mat-card-content>
        <p>{{data.content}}</p>  
      </mat-card-content>
    </mat-card>
  `,  
  styles: [` .card { max-width: 300px; } `]  
})
export class SmartParkingSummarySheetComponent implements DynamicComponent {
  @Input() data: DynamicModalData;  

  constructor() {
    this.data = {
      url: ''
    }
  }
}
