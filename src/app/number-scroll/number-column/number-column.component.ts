import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-number-column',
  templateUrl: './number-column.component.html',
  styleUrls: ['./number-column.component.scss'],
  animations: [
    trigger('animateNumber', [
      state('two', style({transform: 'translateY(20%)'})),
      state('four', style({transform: 'translateY(40%)'})),
      transition('* <=> *', animate('225ms cubic-bezier(0.37, 0.37, 0.11, 1.25)')),
    ]),
  ],
})
export class NumberColumnComponent implements OnChanges {

  constructor() { }

  @Input() numString: string = '8';

  numberPercent: number = 0;

  currentPosition :string = 'two';

  ngOnChanges(changes: SimpleChanges): void {
    const number = parseInt(this.numString);
    // setTimeout(()=>{
    //   this.numberPercent = number * 10;
    // },200)

    this.numberPercent = number * 10;

    // this.toggle();
  }

  toggle(){
    // this.currentPosition = 'two';
  }


  

}
