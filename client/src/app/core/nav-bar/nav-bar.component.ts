import { Component, OnInit } from '@angular/core';
import { faCoffee, faShoppingCart, faShoppingBasket, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faShoppingBasket = faShoppingBasket;
  faShoppingBag = faShoppingBag;

  basket$: Observable<IBasket>;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
    console.log(this.basketService.basket$);
  }

}
