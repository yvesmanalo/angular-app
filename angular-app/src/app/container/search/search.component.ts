import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText:string = ''

  //Search component to Container component

  //1.Create an Event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  //2. Raise event
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
  }
  

  updateSearchText(event:any){
    this.searchText = event.target.value
  }
}
