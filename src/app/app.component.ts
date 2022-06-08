import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'number-scroll-demo';
  num: number = -25;



  generateRandom() {
    this.num = Math.random() * (10000 - 100) + 100;
  }
}
