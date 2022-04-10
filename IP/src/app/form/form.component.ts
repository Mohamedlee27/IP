import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  Quote:string
  Name:string
  Author:string
  Date:any
  theWords:any
  onSubmit(){
    this.theWords = new Quote(this.Name,this.Author,this.Quote, this.Date)
    this.Quote=''
    this.Author=''
    this.Name=''
    this.Date=''
    this.emitQuote.emit(this.theWords)
    return false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
