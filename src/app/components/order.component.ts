import { Component, Input } from '@angular/core';

import { Order } from '../models/order';

@Component({
    selector: 'order',
    templateUrl: '../templates/order.component.html'
})
export class OrderComponent {

    @Input() order:Order;

    constructor() {}
}