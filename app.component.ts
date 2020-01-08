import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  result: any = '';

  nula() {
    this.result += 0;
  }
  jedna() {
    this.result += 1;
  }
  dva() {
    this.result += 2;
  }
  tri() {
    this.result += 3;
  }
  ctyri() {
    this.result += 4;
  }
  pet() {
    this.result += 5;
  }
  sest() {
    this.result += 6;
  }
  sedm() {
    this.result += 7;
  }
  osm() {
    this.result += 8;
  }
  devet() {
    this.result += 9;
  }

  minus() {
    this.result +=  '-';
  }
  plus() {
    this.result += '+';
  }

  deleno() {
    this.result += '/';
  }

  krat() {
    this.result += '*';
  }

  vysledek() {
     const expression = this.result;
    // tslint:disable-next-line:no-eval
     this.result = eval(expression.toString());
  }



}





