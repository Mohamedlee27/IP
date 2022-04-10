import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote('We are all like fireworks: We climb, we shine and always go our separate ways and become further apart','Fear is not evil','To know sorrow is not terrifying. ', new Date)
  ]
  add(theQuote) {
    this.quotes.push(theQuote)
  }
  add(theQuote) {
    this.quotes.push(theQuote)
  }
  Up(i) {
    this.quotes[i].Up +=1;
  }
  Down(i) {
    this.quotes[i].Down +=1;
  }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
