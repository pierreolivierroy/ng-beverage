import { Action, ActionReducer } from '@ngrx/store';

export const ADD_BEVERAGE = 'ADD_BEVERAGE';

export function orderReducer(state: number = 0, action: Action) {
    
    switch(action.type) {
        case ADD_BEVERAGE:
            return state + 1;
        default:
            return state;
    };
}