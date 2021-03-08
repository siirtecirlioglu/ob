(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/siirtecirlioglu/Development/orderbook/src/main.ts */"zUnb");


/***/ }),

/***/ "ALDA":
/*!**************************************************************!*\
  !*** ./src/app/orderbook-table/orderbook-table.component.ts ***!
  \**************************************************************/
/*! exports provided: OrderbookTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbookTableComponent", function() { return OrderbookTableComponent; });
/* harmony import */ var _models_futures_pairs_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/futures-pairs.model */ "pp5h");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_futures_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/futures.service */ "l9mb");
/* harmony import */ var _processors_futures_data_processor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../processors/futures-data.processor */ "sXqH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function OrderbookTableComponent_div_1_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ask_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ask_r6.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ask_r6.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ask_r6.total);
} }
function OrderbookTableComponent_div_1_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bid_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bid_r7.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bid_r7.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bid_r7.total);
} }
function OrderbookTableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Asks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, OrderbookTableComponent_div_1_tr_13_Template, 7, 3, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Bids ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, OrderbookTableComponent_div_1_tr_26_Template, 7, 3, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderbookData_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", orderbookData_r3.asks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", orderbookData_r3.bids);
} }
function OrderbookTableComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Loading... ");
} }
class OrderbookTableComponent {
    // TODO Potentially can accept an interface of a service so that the orderbook table can be more reusable
    constructor(futuresService, futuresDataProcessor) {
        this.futuresService = futuresService;
        this.futuresDataProcessor = futuresDataProcessor;
        this.orderbookData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
    }
    ngOnInit() {
        this.orderbookData$ = this.futuresService.getFutures(_models_futures_pairs_model__WEBPACK_IMPORTED_MODULE_0__["FuturesPairs"].XBT_USD).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(data => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.futuresDataProcessor.process(data))));
    }
}
OrderbookTableComponent.ɵfac = function OrderbookTableComponent_Factory(t) { return new (t || OrderbookTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_futures_service__WEBPACK_IMPORTED_MODULE_4__["FuturesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_processors_futures_data_processor__WEBPACK_IMPORTED_MODULE_5__["FuturesDataProcessor"])); };
OrderbookTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OrderbookTableComponent, selectors: [["app-orderbook-table"]], decls: 5, vars: 4, consts: [[1, "orderbook-table"], ["class", "orderbook-table__container", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "orderbook-table__container"], [1, "orderbook-table--asks"], [1, "orderbook-table__header"], [1, "orderbook-table__table"], [1, "orderbook-table__table-header"], ["class", "orderbook-table__table-values", 4, "ngFor", "ngForOf"], [1, "orderbook-table--bids"], [1, "orderbook-table__table-values"]], template: function OrderbookTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OrderbookTableComponent_div_1_Template, 27, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, OrderbookTableComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.orderbookData$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".orderbook-table__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n  margin: 2rem;\n}\n.orderbook-table__header[_ngcontent-%COMP%] {\n  background-color: #254942;\n  color: #fff;\n  padding: 0.5rem;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 100;\n  margin: 0;\n}\n.orderbook-table__table[_ngcontent-%COMP%] {\n  border: 1px solid #254942;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.orderbook-table__table-header[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #BAA6B1;\n  color: #fff;\n}\n.orderbook-table__table-values[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  min-width: 5rem;\n  width: 8rem;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29yZGVyYm9vay10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVhSO0FBY0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFaUjtBQWVJO0VBRUkseUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBZFI7QUFrQlk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFoQmhCO0FBdUJZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXJCaEIiLCJmaWxlIjoib3JkZXJib29rLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyYm9vay10YWJsZSB7XG5cbiAgICAmLS1hc2tzIHtcblxuICAgIH1cblxuICAgICYtLWJpZHMge1xuICAgIH1cblxuICAgICYtLWFza3MsICYtLWJpZHMge1xuICAgIH1cblxuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTQ5NDI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJl9fdGFibGUge1xuXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNTQ5NDI7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcblxuICAgICAgICAmLWhlYWRlciB7XG5cbiAgICAgICAgICAgICYgPiB0aCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JBQTZCMTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgJi12YWx1ZXMge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmID4gdGQge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOHJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MZe0":
/*!**************************************!*\
  !*** ./src/app/models/book-feeds.ts ***!
  \**************************************/
/*! exports provided: BookFeedIds, BookFeedSnapshotIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFeedIds", function() { return BookFeedIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFeedSnapshotIds", function() { return BookFeedSnapshotIds; });
const BookFeedIds = {
    FUTURES: 'book_ui_1'
};
const BookFeedSnapshotIds = {
    FUTURES: `${BookFeedIds.FUTURES}_snapshot`
};


/***/ }),

/***/ "OC8m":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotificationService {
    constructor() {
        this.notifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
    }
    notify(data) {
        this.notifications$.next(data);
    }
    getNotifications() {
        return this.notifications$;
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/notification.service */ "OC8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(notificationService, route) {
        this.notificationService = notificationService;
        this.route = route;
        this.title = 'orderbook';
        this.notifications$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
        this.productId = 'XBT-USD'; // TODO I'd normally want to get this from the URL param map
    }
    ngOnInit() {
        this.notifications$ = this.notificationService.getNotifications();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 1, consts: [[1, "app-header"], [1, "app-header--title"], [1, "app-header--details"], [1, "app-footer"], [1, "app-copyright"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Orderbook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "This was built by Siir Tecirlioglu in 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.productId);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".app-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: baseline;\n  background-color: #53424C;\n  color: #BAA6B1;\n  font-size: 2rem;\n  font-weight: 300;\n  padding: 1rem 2rem;\n}\n.app-header--details[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  border-left: #BAA6B1 1px solid;\n  padding-left: 0.3rem;\n}\n.app-footer[_ngcontent-%COMP%] {\n  height: 3rem;\n  background-color: #BAA6B1;\n  color: #fff;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURSO0FBTVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUpaO0FBU0k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVBSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xuXG4gICAgJi1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzNDI0QztcbiAgICAgICAgY29sb3I6ICNCQUE2QjE7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuXG4gICAgICAgICYtLXRpdGxlIHtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLWRldGFpbHMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6ICNCQUE2QjEgMXB4IHNvbGlkO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICYtZm9vdGVyIHtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFBNkIxO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAmLWNvcHlyaWdodCB7XG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _orderbook_table_orderbook_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orderbook-table/orderbook-table.component */ "ALDA");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/notification.service */ "OC8m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _orderbook_table_orderbook_table_component__WEBPACK_IMPORTED_MODULE_4__["OrderbookTableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "l9mb":
/*!*********************************************!*\
  !*** ./src/app/services/futures.service.ts ***!
  \*********************************************/
/*! exports provided: FuturesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuturesService", function() { return FuturesService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_book_feeds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/book-feeds */ "MZe0");
/* harmony import */ var _models_futures_pairs_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/futures-pairs.model */ "pp5h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _crypto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crypto.service */ "vZMD");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.service */ "OC8m");






class FuturesService {
    constructor(cryptoService, notificationService) {
        this.cryptoService = cryptoService;
        this.notificationService = notificationService;
        this.cryptoService.connect();
    }
    // TODO Only works with 1 future pair. Can be extended.
    getFutures(futurePair) {
        const productId = _models_futures_pairs_model__WEBPACK_IMPORTED_MODULE_2__["FuturesProductIds"][futurePair];
        const message = {
            event: 'subscribe',
            feed: _models_book_feeds__WEBPACK_IMPORTED_MODULE_1__["BookFeedIds"].FUTURES,
            product_ids: [productId]
        };
        return this.cryptoService.sendMessage(message).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(data => data.product_id === productId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((error) => {
            this.notificationService.notify(`Something went wrong while getting orderbook data for book feed[${_models_book_feeds__WEBPACK_IMPORTED_MODULE_1__["BookFeedIds"].FUTURES}] and product id[${productId}]: ${error}`);
            return [];
        }));
    }
}
FuturesService.ɵfac = function FuturesService_Factory(t) { return new (t || FuturesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_crypto_service__WEBPACK_IMPORTED_MODULE_4__["CryptoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
FuturesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FuturesService, factory: FuturesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pp5h":
/*!***********************************************!*\
  !*** ./src/app/models/futures-pairs.model.ts ***!
  \***********************************************/
/*! exports provided: FuturesPairs, FuturesProductIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuturesPairs", function() { return FuturesPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuturesProductIds", function() { return FuturesProductIds; });
var FuturesPairs;
(function (FuturesPairs) {
    FuturesPairs["XBT_USD"] = "XBT_USD";
})(FuturesPairs || (FuturesPairs = {}));
const FuturesProductIds = {
    [FuturesPairs.XBT_USD]: 'PI_XBTUSD'
};


/***/ }),

/***/ "sXqH":
/*!******************************************************!*\
  !*** ./src/app/processors/futures-data.processor.ts ***!
  \******************************************************/
/*! exports provided: FuturesDataProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuturesDataProcessor", function() { return FuturesDataProcessor; });
/* harmony import */ var _models_book_feeds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/book-feeds */ "MZe0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FuturesDataProcessor {
    constructor() {
        this.orderbook = { bids: [], asks: [], levels: 0 };
    }
    process(data) {
        if (data.feed === _models_book_feeds__WEBPACK_IMPORTED_MODULE_0__["BookFeedSnapshotIds"].FUTURES) {
            this.orderbook.asks = this.processNewOrders(data.asks);
            this.orderbook.bids = this.processNewOrders(data.bids);
            this.orderbook.levels = data.numLevels;
        }
        else if (data.feed === _models_book_feeds__WEBPACK_IMPORTED_MODULE_0__["BookFeedIds"].FUTURES) {
            this.processUpdates(data.asks, this.orderbook.asks, 'ASK');
            this.processUpdates(data.bids, this.orderbook.bids, 'BID');
        }
        const maxLevels = this.orderbook.levels || 100;
        const limitedOrderbook = {
            asks: this.orderbook.asks.slice(0, Math.min(maxLevels, this.orderbook.asks.length)),
            bids: this.orderbook.bids.slice(0, Math.min(maxLevels, this.orderbook.bids.length))
        };
        return limitedOrderbook;
    }
    processNewOrders(orders) {
        let total = 0;
        return orders.map((order) => {
            const size = order[1];
            total += size;
            return {
                price: order[0],
                size,
                total
            };
        });
    }
    processUpdates(orders, orderbookOrders, type) {
        orders.forEach((order) => {
            var _a;
            const price = order[0];
            const size = order[1];
            const orderToUpdate = orderbookOrders.findIndex(o => o.price === price);
            const oldSize = (_a = orderbookOrders[orderToUpdate]) === null || _a === void 0 ? void 0 : _a.size;
            if (size === 0 && orderToUpdate > -1) {
                this.updateTotals(orderToUpdate, -oldSize, orderbookOrders);
                orderbookOrders.splice(orderToUpdate, 1);
            }
            else if (size !== 0) {
                if (orderToUpdate > -1) {
                    const amountDif = size - oldSize;
                    orderbookOrders[orderToUpdate].size = size;
                    this.updateTotals(orderToUpdate, amountDif, orderbookOrders);
                }
                else {
                    for (let i = 0; i <= orderbookOrders.length; i++) {
                        if (type === 'ASK') {
                            if (i === orderbookOrders.length || price < orderbookOrders[i].price) {
                                this.insertOrder(i, price, size, orderbookOrders);
                                this.updateTotals(i + 1, size, orderbookOrders);
                                break;
                            }
                        }
                        else {
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
    insertOrder(index, price, size, orderbookOrders) {
        var _a, _b;
        orderbookOrders.splice(index, 0, {
            price,
            size,
            total: ((_b = (_a = orderbookOrders[index - 1]) === null || _a === void 0 ? void 0 : _a.total) !== null && _b !== void 0 ? _b : 0) + size
        });
    }
    updateTotals(startingIndex, difference, orderbookOrders) {
        for (let i = startingIndex; i >= 0 && i < orderbookOrders.length; i++) {
            orderbookOrders[i].total += difference;
        }
    }
}
FuturesDataProcessor.ɵfac = function FuturesDataProcessor_Factory(t) { return new (t || FuturesDataProcessor)(); };
FuturesDataProcessor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FuturesDataProcessor, factory: FuturesDataProcessor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orderbook_table_orderbook_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderbook-table/orderbook-table.component */ "ALDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _orderbook_table_orderbook_table_component__WEBPACK_IMPORTED_MODULE_1__["OrderbookTableComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vZMD":
/*!********************************************!*\
  !*** ./src/app/services/crypto.service.ts ***!
  \********************************************/
/*! exports provided: CryptoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoService", function() { return CryptoService; });
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/webSocket */ "3uOa");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CryptoService {
    constructor() {
        this.WS_API_URL = 'wss://www.cryptofacilities.com/ws/v1';
        this.RETRY_DELAY = 10;
    }
    connect() {
        if (!this.connection$) {
            this.connection$ = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_0__["webSocket"])(this.WS_API_URL);
        }
    }
    sendMessage(data) {
        if (this.connection$) {
            const payload = Object.assign({}, data);
            this.connection$.next(payload);
            return this.connection$;
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Nothing to send message to. Open the connection first.');
        }
    }
    closeConnection() {
        if (this.connection$) {
            this.connection$.complete();
            this.connection$ = undefined;
        }
        else {
            console.log('Nothing to close. Open the connection first.');
        }
    }
    ngOnDestroy() {
        this.closeConnection();
    }
}
CryptoService.ɵfac = function CryptoService_Factory(t) { return new (t || CryptoService)(); };
CryptoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CryptoService, factory: CryptoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map