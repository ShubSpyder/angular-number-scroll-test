import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";


@Component({
  selector: 'app-number-column',
  templateUrl: './number-column.component.html',
  styleUrls: ['./number-column.component.scss'],
  animations: [
    trigger("slideNumber", [
      state("zero", style({ transform: 'translateY(0%)' })),
      state("one", style({ transform: 'translateY(10%)' })),
      state("two", style({ transform: 'translateY(20%)' })),
      state("three", style({ transform: 'translateY(30%)' })),
      state("four", style({ transform: 'translateY(40%)' })),
      state("five", style({ transform: 'translateY(50%)' })),
      transition(
        "void => zero",
        animate("400ms cubic-bezier(0.4, 0.0, 0.2, 1)", style({ transform: 'translateY(0%)' }))
      ),
      transition(
        "void => one",
        animate("400ms cubic-bezier(0.4, 0.0, 0.2, 1)", style({ transform: 'translateY(10%)' }))
      ),
      transition(
        "void => two",
        animate("400ms cubic-bezier(0.4, 0.0, 0.2, 1)", style({ transform: 'translateY(20%)' }))
      ),
      transition(
        "void => three",
        animate("400ms cubic-bezier(0.4, 0.0, 0.2, 1)", style({ transform: 'translateY(30%)' }))
      ),
      transition(
        "void => four",
        animate("400ms cubic-bezier(0.4, 0.0, 0.2, 1)", style({ transform: 'translateY(40%)' }))
      ),
      transition(
        "void => five",
        animate("400ms cubic-bezier(0.4, 0.0, 0.2, 1)", style({ transform: 'translateY(50%)' }))
      ),
    ]),
  ],
})


export class NumberColumnComponent implements OnInit, OnChanges {

  constructor(private renderer: Renderer2) { }

  @Input() numString: string | undefined;

  numberPercent: number = 0;
  previousVal: number = 0;

  currentPosition: string = 'two';

  @ViewChild('numberColumn', { static: false }) numColumn: ElementRef | undefined;

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.numberPercent = parseInt(changes['numString'].currentValue) * 10
    });
  }
}
