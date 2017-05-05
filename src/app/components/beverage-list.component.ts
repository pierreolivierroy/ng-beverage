import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import{ Beverage } from '../models/beverage';
import { BeverageService } from '../services/beverage.service';
import { OrderService } from '../services/order.service';

import { ADD_BEVERAGE } from '../reducers/beverage.reducer';

@Component({
    selector: 'beverage-list',
    templateUrl: '../templates/beverage-list.component.html'
})

export class BeverageListComponent implements OnInit {

    title:string = 'Menu de ce soir:';
    selectedBeverage:Beverage; 
    beverages:Beverage[];
    
    @Output() action = new EventEmitter();

    constructor(private beverageService:BeverageService, private orderService:OrderService) {
    }
    
    ngOnInit() {
        this.beverageService.getAll().then((beverages) => {
            this.beverages = beverages;
            this.selectedBeverage = this.beverages[0];
        });
    }

    orderBeverage(beverage:Beverage) {
        console.log(`Ordering beverage: ${beverage}`);
        this.action.emit({ type: ADD_BEVERAGE, payload: beverage });
    }
}