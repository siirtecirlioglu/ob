import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbookTableComponent } from './orderbook-table.component';

describe('OrderbookTableComponent', () => {
  let component: OrderbookTableComponent;
  let fixture: ComponentFixture<OrderbookTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderbookTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderbookTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
