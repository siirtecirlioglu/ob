import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { BookFeedIds, BookFeedSnapshotIds } from '../models/book-feeds';
import { CryptoData, CryptoDataRequest, CryptoSnapshotData } from '../models/crypto-data.model';
import { FuturesPairs, FuturesProductIds } from '../models/futures-pairs.model';
import { CryptoService } from './crypto.service';
import { NotificationService } from './notification.service';

@Injectable({
    providedIn: 'root'
})
export class FuturesService {

    constructor(private cryptoService: CryptoService,
                private notificationService: NotificationService) {
        this.cryptoService.connect();
    }

    // TODO Only works with 1 future pair. Can be extended.
    public getFutures(futurePair: FuturesPairs): Observable<CryptoData | CryptoSnapshotData> {
        const productId = FuturesProductIds[futurePair];
        const message: CryptoDataRequest = {
            event: 'subscribe',
            feed: BookFeedIds.FUTURES,
            product_ids: [productId]
        };

        return this.cryptoService.sendMessage(message).pipe(
            filter(data => data.product_id === productId),
            catchError((error) => {
                this.notificationService.notify(`Something went wrong while getting orderbook data for book feed[${BookFeedIds.FUTURES}] and product id[${productId}]: ${error}`);
                return [];
            })
        );
    }

}
