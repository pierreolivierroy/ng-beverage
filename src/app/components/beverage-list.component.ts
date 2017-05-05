import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import{ Beverage } from '../models/beverage';
import { BeverageService } from '../services/beverage.service';

import { ADD_BEVERAGE_TO_ORDER} from '../reducers/order.reducer';

@Component({
    selector: 'beverage-list',
    templateUrl: '../templates/beverage-list.component.html'
})

export class BeverageListComponent implements OnInit {

    title:string = 'Menu de ce soir:';
    selectedBeverage:Beverage; 
    beverages:Beverage[];
    
    @Output() action = new EventEmitter();

    constructor(private beverageService:BeverageService) {
    }
    
    ngOnInit() {
        this.beverageService.getAll().then((beverages) => {
            this.beverages = beverages;
            this.selectedBeverage = this.beverages[0];
        });
    }

    orderBeverage(beverage:Beverage) {
        this.action.emit({ type: ADD_BEVERAGE_TO_ORDER, payload: beverage });
    }
}