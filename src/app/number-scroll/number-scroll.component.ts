import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-number-scroll",
  templateUrl: "./number-scroll.component.html",
  styleUrls: ["./number-scroll.component.scss"],
})
export class NumberScrollComponent implements OnChanges {
  @Input() num: number = 0;

  @Input() showDecimal: boolean = false;

  numArr: Array<string> = [];
  decimalArr: Array<string> = [];
  isNegative: boolean = false;
  isDecimal: boolean = false;

  numberPercent: number | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let value = changes["num"].currentValue;

    let ViewDecimal = this.showDecimal;

    let wholeNum: number = 0;
    let decimalNum: number = 0;

    if (value < 0) {
      this.isNegative = true;
      value = value * -1;
    } else {
      this.isNegative = false;
    }

    value = ViewDecimal ? parseFloat(value.toFixed(2)) : value;

    console.log('value changed :: ', value);


    if ((value != Math.floor(value) && ViewDecimal) || ViewDecimal) {
      let splitNums = value.toString().split(".");
      wholeNum = parseInt(splitNums[0]);
      decimalNum = parseInt(splitNums[1]);
      this.isDecimal = true;
    } else {
      wholeNum = value != Math.floor(value) ? Math.floor(value) : value;
      decimalNum = 0;
      this.isDecimal = false;
    }

    this.numArr = wholeNum.toString().split("");

    if(!decimalNum && ViewDecimal){
      this.decimalArr = ['0','0']
    }else{
      decimalNum
      ? (this.decimalArr = decimalNum.toString().split(""))
      : (this.decimalArr = []);
    }

  }

  trackNumber(index: any, digit: any) {
    return digit;
  }
}
