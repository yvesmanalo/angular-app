import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  name = 'John Doe';
  product = {
    name: 'iPhone 13',
    price: 789,
    color: 'Red',
    discount: 8.5,
    inStock: 1,
    pImage: '/images/iphone.png',
  };

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount) / 100;
  }
}
