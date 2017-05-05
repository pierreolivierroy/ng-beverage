import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { order } from './reducers/order.reducer';

import { AppComponent } from './app.component';
import { BeverageListComponent } from './components/beverage-list.component';
import { OrderComponent } from './components/order.component';
import { BeverageService } from './services/beverage.service';

@NgModule({
  declarations: [
    AppComponent,
    BeverageListComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ order: order })
  ],
  providers: [BeverageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
