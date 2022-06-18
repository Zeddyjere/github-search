import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: [ './search.page.css' ]
})
export class SearchPageComponent {
  
  constructor(private _router: Router) {}

  search = (searchTerm: string) => {
    this._router.navigate([ 'search', searchTerm ]); 
  }
}
