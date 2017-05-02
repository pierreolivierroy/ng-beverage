import { Beverage } from './beverage';

export class Order {

    id:number;
    beverages:Beverage[];

    constructor() {
        this.id = Math.floor(Math.random() * 999999) + 1;
        this.beverages = [];
    }
}