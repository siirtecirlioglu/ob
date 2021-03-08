export interface Orderbook {
    asks: Order[];
    bids: Order[];
    levels?: number;
}

export interface Order {
    price: number;
    size: number;
    total: number;
}
