import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderbookTableComponent } from './orderbook-table/orderbook-table.component';

const routes: Routes = [
  { path: '', component: OrderbookTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
