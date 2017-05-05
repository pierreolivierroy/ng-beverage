import { Beverage } from '../models/beverage';
import { Order } from '../models/order';

export interface AppState {
  order: Order;
}