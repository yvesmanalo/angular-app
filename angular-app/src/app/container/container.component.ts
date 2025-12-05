import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  imports: [SearchComponent, ProductListComponent, ProductDetailComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Mary', 'John']

  searchText: string = ''

  setSearchText(value: string){
    this.searchText = value
  }
}
