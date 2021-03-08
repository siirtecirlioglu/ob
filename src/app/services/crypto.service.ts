import { Injectable, OnDestroy } from '@angular/core';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CryptoService implements OnDestroy {

    private readonly WS_API_URL = 'wss://www.cryptofacilities.com/ws/v1';
    private readonly RETRY_DELAY = 10;

    private connection$: WebSocketSubject<any> | undefined;

    public connect(): void {
        if (!this.connection$) {
            this.connection$ = webSocket(this.WS_API_URL);
        }
    }

    public sendMessage(data: any): Observable<any> {
        if (this.connection$) {
            const payload = {...data};
            this.connection$.next(payload);
            return this.connection$;
        } else {
            return throwError('Nothing to send message to. Open the connection first.');
        }
    }

    public closeConnection(): void {
        if (this.connection$) {
            this.connection$.complete();
            this.connection$ = undefined;
        } else {
            console.log('Nothing to close. Open the connection first.');
        }
    }

    ngOnDestroy(): void {
        this.closeConnection();
    }

}
