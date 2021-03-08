import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'orderbook';

  notifications$: Observable<string | undefined> = of();
  productId = 'XBT-USD'; // TODO I'd normally want to get this from the URL param map

  constructor(private notificationService: NotificationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.notifications$ = this.notificationService.getNotifications();
  }

}
