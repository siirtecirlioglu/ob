import { Component, OnInit } from '@angular/core';
import { FuturesPairs } from '../models/futures-pairs.model';
import { FuturesService } from '../services/futures.service';
import { switchMap } from 'rxjs/operators';
import { FuturesDataProcessor } from '../processors/futures-data.processor';
import { Observable, of } from 'rxjs';
import { Orderbook } from '../models/orderbook.model';

@Component({
  selector: 'app-orderbook-table',
  templateUrl: './orderbook-table.component.html',
  styleUrls: ['./orderbook-table.component.scss']
})
export class OrderbookTableComponent implements OnInit {

  orderbookData$: Observable<Orderbook> = of();

  // TODO Potentially can accept an interface of a service so that the orderbook table can be more reusable
  constructor(private futuresService: FuturesService,
              private futuresDataProcessor: FuturesDataProcessor) { }

  ngOnInit(): void {
    this.orderbookData$ = this.futuresService.getFutures(FuturesPairs.XBT_USD).pipe(
      switchMap(data => of(this.futuresDataProcessor.process(data))),
    );
  }

}
