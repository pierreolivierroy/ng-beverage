import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import { Beverage } from './models/beverage';
import { Order } from './models/order';
import { BeverageService } from './services/beverage.service';

interface AppState {
  order: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bienvenue à la taverne Chez Michel!';
  order: Observable<number>;

  constructor(public store:Store<AppState>) {

    this.order = store.select('order');
  }    
}
 