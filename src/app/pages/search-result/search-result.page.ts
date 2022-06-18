import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserSearchResult } from '../../models/user-search-result.interface';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: [ './search-result.page.css' ]
})
export class SearchResultPageComponent {
  loading = true; 
  searchResults = <UserSearchResult>{};
  searchTerm: string = ''; 
  pageNo = 1;  
  error: string = ''; 

  constructor(private _searchService: SearchService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {}

  async ngOnInit() {
    this.searchTerm = this._activatedRoute.snapshot.params.searchTerm; 
    this._searchUsers(this.searchTerm, this.pageNo); 
  }

  private _searchUsers(searchTerm: string, pageNo: number) {
    this.error = ''; 
    this.loading = true; 
    this._searchService.searchUsers(searchTerm, pageNo)
        .then((res) => this._handleSuccess(res))
        .catch((err) => this._handleError(err.message)); 
  }

  private _handleSuccess(res: UserSearchResult): void {
    this.searchResults = res; 
    this.loading = false; 
  }

  private _handleError(errMessage: string): void {
    this.error = "You just hit the rate limit. Please try again later."; 
    console.error(errMessage); 
  }

  searchPage(pageNo: number) {
    this.loading = true; 
    this.pageNo = pageNo; 
    this._searchUsers(this.searchTerm, this.pageNo); 
  }

  performNewSearch(searchTerm: string) {
    this._router.navigate([ '/search', searchTerm ]); 
    this.searchTerm = searchTerm; 
    this.pageNo = 1; 
    this._searchUsers(this.searchTerm, this.pageNo);
  }

}
