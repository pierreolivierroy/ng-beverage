import { Action, ActionReducer } from '@ngrx/store';

import { Order } from '../models/order';

export const INIT_ORDER = 'INIT_ORDER';
export const ADD_BEVERAGE_TO_ORDER = 'ADD_BEVERAGE_TO_ORDER';

export function order(order:Order, action: Action) {

    switch(action.type) {

        case INIT_ORDER:
            console.log(`Initializing Order with id ${action.payload.id}`);
            return action.payload;

        case ADD_BEVERAGE_TO_ORDER:
            console.log(`Adding beverage: ${action.payload.name} to order`);
            order.beverages.push(action.payload);
            return order;
    };
}