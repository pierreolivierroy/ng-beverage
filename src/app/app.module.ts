import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeverageListComponent } from './components/beverage-list.component';
import { OrderComponent } from './components/order.component';
import { BeverageService } from './services/beverage.service';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    BeverageListComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BeverageService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
