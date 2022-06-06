import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-number-column',
  templateUrl: './number-column.component.html',
  styleUrls: ['./number-column.component.scss']
})
export class NumberColumnComponent implements OnChanges {

  constructor() { }

  @Input() numString: string = '8';

  numberPercent: number = 90;
  ngOnChanges(changes: SimpleChanges): void {
    const number = parseInt(this.numString);
    this.numberPercent = number * 10;
  }

  

}
