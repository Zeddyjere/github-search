import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() emitSearchTerm = new EventEmitter(); 

  searchTerm: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  search = () => {
    if(!this.searchTerm) return;
    this.emitSearchTerm.emit(this.searchTerm);
  } 
}
