import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Order } from './models/order';
import { INIT_ORDER } from './reducers/order.reducer';
import { AppState } from './reducers/appstate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Bienvenue à la taverne Chez Michel!';
  order: Observable<Order>;
  
  constructor(public store:Store<AppState>) {
    this.order = store.select('order'); // or this.beverages = store.select(state => state.order);

    store.subscribe(s => console.log(s));
  } 

  ngOnInit() {
    this.store.dispatch({ type: INIT_ORDER, payload: new Order() });
  }
}
 