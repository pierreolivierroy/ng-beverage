import { Injectable } from '@angular/core';
import { Beverage } from '../models/beverage';
import { Order } from '../models/order';

@Injectable()
export class OrderService {

    private _beverages:Beverage[] = [];

    getBeverages(): Promise<Beverage[]>  {
        return Promise.resolve(this._beverages);
    }

    addBeverage(beverage:Beverage): void {
        this._beverages.push(beverage);
    }
}