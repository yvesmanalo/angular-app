import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //Optional 2nd argument of @ViewChild()
  //1. read: Use it to read the difference token from the queried elements.
  //2. static: Determines when the query is resolved.
  //          True is when the view is initialized (before the first change detection) for the first time.
  //          False if you want it to be resolve after every change detection
  @ViewChild('searchInput') searchInputEl: ElementRef

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
