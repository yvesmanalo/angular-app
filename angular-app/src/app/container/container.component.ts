import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  imports: [SearchComponent, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Mary', 'John']
}
