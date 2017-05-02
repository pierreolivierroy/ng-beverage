import { Component, Input, OnInit } from '@angular/core';

import { Order } from '../models/order';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'order',
    templateUrl: '../templates/order.component.html'
})
export class OrderComponent implements OnInit {

    order:Order;

    constructor(private orderService:OrderService) {
        this.order = new Order();
    }

    ngOnInit() {
        this.orderService.getBeverages().then(beverages => this.order.beverages = beverages);
    }
}