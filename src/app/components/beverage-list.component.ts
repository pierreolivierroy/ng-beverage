import { Component, Input, OnInit } from '@angular/core';
import{ Beverage } from '../models/beverage';
import { BeverageService } from '../services/beverage.service';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'beverage-list',
    templateUrl: '../templates/beverage-list.component.html'
})

export class BeverageListComponent implements OnInit {

    title:string = 'Menu de ce soir:';
    selectedBeverage:Beverage; 
    beverages:Beverage[];
    
    constructor(private beverageService:BeverageService, private orderService:OrderService) {
    }
    
    ngOnInit() {
        this.beverageService.getAll().then((beverages) => {
            this.beverages = beverages;
            this.selectedBeverage = this.beverages[0];
        });
    }

    orderBeverage(beverage:Beverage) {
        this.orderService.addBeverage(beverage);
    }
}