import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private notifications$ = new BehaviorSubject<string | undefined>(undefined);

    notify(data: string | undefined): void {
        this.notifications$.next(data);
    }

    getNotifications(): Observable<string | undefined> {
        return this.notifications$;
    }

}
