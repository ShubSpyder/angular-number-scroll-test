import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberScrollComponent } from './number-scroll/number-scroll.component';
import { NumberColumnComponent } from './number-scroll/number-column/number-column.component';
import { DecimalColumnComponent } from './number-scroll/decimal-column/decimal-column.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberScrollComponent,
    NumberColumnComponent,
    DecimalColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
