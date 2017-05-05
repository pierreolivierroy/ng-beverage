import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Order } from '../models/order';
import { Beverage } from '../models/beverage';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'order',
    templateUrl: '../templates/order.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit {

    order:Order;
    @Input() beverages = [];
    // b: Observable<Beverage>;

    constructor(private orderService:OrderService) {
        this.order = new Order();
    }

    ngOnInit() {
        // this.orderService.getBeverages().then(beverages => this.order.beverages = beverages);
        this.order.beverages = this.beverages;
        console.log(this.order);
    }
}