import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges {
  public code: string | undefined;
  constructor () {
    
  }

@Input() name: string | undefined;
@Input() job: string | undefined;
@Input() email: string | undefined;
@Input() phones: any[] | undefined;
@Input() address: string | undefined;
@Input() website: string | undefined;
@Input() qrCode: string | undefined;



ngOnChanges() {
  this.code = this.qrCode ;
}

}
