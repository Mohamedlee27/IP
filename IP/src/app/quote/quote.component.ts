import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote('Lee','Michael','The greatest glory in living lies not in never falling, but in rising every time we fall. ', new Date)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
