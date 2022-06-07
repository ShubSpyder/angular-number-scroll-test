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

  numArr: Array<string> = []
  
  numberPercent: number | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    changes["num"].previousValue && console.log("previous value", changes["num"].previousValue);
    console.log("inside number-scroll-component ", changes["num"].currentValue);

    this.numArr = (changes["num"].currentValue).toString().split('');

  }

  trackNumber(index:any, digit:any){
    return digit;
  }
}
