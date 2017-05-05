import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Beverage } from './models/beverage';
import { Order } from './models/order';
import { BeverageService } from './services/beverage.service';
import { ADD_BEVERAGE } from './reducers/beverage.reducer';
import { AppState } from './reducers/appstate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bienvenue à la taverne Chez Michel!';
  order: Observable<number>;
  beverages: Observable<Beverage[]>;

  constructor(public store:Store<AppState>) {
    
    this.beverages = store.select('beverages'); // or this.beverages = store.select(state => state.beverages);

    store.subscribe(v => console.log(v));
  }    
}
 