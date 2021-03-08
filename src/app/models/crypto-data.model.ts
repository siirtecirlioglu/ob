export interface CryptoData {
    asks: CryptoOrder[];
    bids: CryptoOrder[];
    feed: string;
    product_id: string;
}

export interface CryptoSnapshotData extends CryptoData {
    numLevels: number;
}

export type CryptoOrder = [number, number];

export interface CryptoDataRequest {
    event: string;
    feed: string;
    product_ids: string[];
}
