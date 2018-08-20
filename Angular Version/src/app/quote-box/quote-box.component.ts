import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Quote } from '../quote.class';

@Component({
  selector: 'app-qoute-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent implements OnInit {
  public quote = new Quote('', '');
  constructor(public quoteService: QuoteService) {
    this.getQuote();
  }

  public getQuote() {
    this.quoteService.getRandomQuote().subscribe((data: Quote) => {
      this.quote = new Quote(data.quote, data.author);
    });
  }

  ngOnInit() {
  }

}
