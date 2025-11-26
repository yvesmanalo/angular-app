import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'product-list',
  imports: [SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  addToCart: number = 0;
  product = {
    name: 'iPhone 13',
    price: 789,
    color: 'Red',
    discount: 8.5,
    inStock: 3,
    pImage: '/images/iphone.png',
  };

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount) / 100;
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
}
