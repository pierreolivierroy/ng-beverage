import { Injectable } from '@angular/core';
import { Beverage } from '../models/beverage';
import { BeverageType } from '../models/beverage-type';
import { BEVERAGES } from '../models/mock-beverages';

@Injectable()
export class BeverageService {

    getAll(): Promise<Beverage[]> {
        return Promise.resolve(BEVERAGES);
    }
}