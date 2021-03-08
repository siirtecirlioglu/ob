import { Injectable } from '@angular/core';
import { BookFeedIds, BookFeedSnapshotIds } from '../models/book-feeds';
import { CryptoData, CryptoOrder, CryptoSnapshotData } from '../models/crypto-data.model';
import { Order, Orderbook } from '../models/orderbook.model';

@Injectable({
    providedIn: 'root'
})
export class FuturesDataProcessor {

    private orderbook: Orderbook = { bids: [], asks: [], levels: 0 };

    public process(data: CryptoData | CryptoSnapshotData): Orderbook {
        if (data.feed === BookFeedSnapshotIds.FUTURES) {
            this.orderbook.asks = this.processNewOrders(data.asks);
            this.orderbook.bids = this.processNewOrders(data.bids);
            this.orderbook.levels = (data as CryptoSnapshotData).numLevels;
        } else if (data.feed === BookFeedIds.FUTURES) {
            this.processUpdates(data.asks, this.orderbook.asks, 'ASK');
            this.processUpdates(data.bids, this.orderbook.bids, 'BID');
        }

        const maxLevels = this.orderbook.levels || 100;

        const limitedOrderbook: Orderbook = {
            asks: this.orderbook.asks.slice(0, Math.min(maxLevels, this.orderbook.asks.length)),
            bids: this.orderbook.bids.slice(0, Math.min(maxLevels, this.orderbook.bids.length))
        };

        return limitedOrderbook;
    }

    private processNewOrders(orders: CryptoOrder[]): Order[] {
        let total = 0;
        return orders.map((order: CryptoOrder) => {
            const size = order[1];
            total += size;
            return {
                price: order[0],
                size,
                total
            };
        });
    }

    private processUpdates(orders: CryptoOrder[], orderbookOrders: Order[], type: 'ASK' | 'BID'): void {
        orders.forEach((order: CryptoOrder) => {
            const price = order[0];
            const size = order[1];
            const orderToUpdate = orderbookOrders.findIndex(o => o.price === price);
            const oldSize = orderbookOrders[orderToUpdate]?.size;

            if (size === 0 && orderToUpdate > -1) {
                this.updateTotals(orderToUpdate, -oldSize, orderbookOrders);
                orderbookOrders.splice(orderToUpdate, 1);
            } else if (size !== 0) {
                if (orderToUpdate > -1) {
                    const amountDif = size - oldSize;
                    orderbookOrders[orderToUpdate].size = size;
                    this.updateTotals(orderToUpdate, amountDif, orderbookOrders);
                } else {
                    for (let i = 0; i <= orderbookOrders.length; i++) {
                        if (type === 'ASK') {
                            if (i === orderbookOrders.length || price < orderbookOrders[i].price) {
                                this.insertOrder(i, price, size, orderbookOrders);
                                this.updateTotals(i + 1, size, orderbookOrders);
                                break;
                            }
                        } else {
                            if (i === orderbookOrders.length || price > orderbookOrders[i].price) {
                                this.insertOrder(i, price, size, orderbookOrders);
                                this.updateTotals(i + 1, size, orderbookOrders);
                                break;
                            }
                        }
                    }
                }
            }
        });
    }

    private insertOrder(index: number, price: number, size: number, orderbookOrders: Order[]): void {
        orderbookOrders.splice(index, 0, {
            price,
            size,
            total: (orderbookOrders[index - 1]?.total ?? 0) + size
        });
    }

    private updateTotals(startingIndex: number, difference: number, orderbookOrders: Order[]): void {
        for (let i = startingIndex; i >= 0 && i < orderbookOrders.length; i++) {
            orderbookOrders[i].total += difference;
        }
    }

}
