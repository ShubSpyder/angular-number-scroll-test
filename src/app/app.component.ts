import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'number-scroll-demo';
  num: number = 5;

  generateRandom() {
    this.num = Math.trunc(Math.random() * (10000 - 100) + 100);
  }
}
