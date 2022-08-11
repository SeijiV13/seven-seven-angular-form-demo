import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent {
  // BUILT IN PIPES
  //  DatePipe
  date1 = new Date();
  //  UpperCasePipe
  textUpper = "john doe";
  //  LowerCasePipe
  textLower = "JANE DOE";
  //  CurrencyPipe
  currencyValue = 100;
  // DecimalPipe
  decimalValue = 3.14159
   // PercentPipe
  percentValue = 0.25345677;
  // CUSTOM

  customValue = 3;


  getExampleFunction(name: string, age?: number) {

  }

  execute() {
    this.getExampleFunction("John");
  }
}
