import { Component } from '@angular/core';
import { Beverage } from './models/beverage';
import { Order } from './models/order';
import { BeverageService } from './services/beverage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Bienvenue à la taverne Chez Michel!';
}
