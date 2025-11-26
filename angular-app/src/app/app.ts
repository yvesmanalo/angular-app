import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TopHeaderComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
