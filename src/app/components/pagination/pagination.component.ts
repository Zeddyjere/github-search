import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalCount!: number; 
  @Input() currentPageNo!: number;
  
  @Output() emitSearchPage = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  getPageNumbers(currentPage: number, totalCount: number): number[] {
    const total = this._getTotalPages(totalCount); // Maximum pages upto 100 

    if(total <= 7) {
      return [ ...new Array(total).keys() ].map(x => ++x)
    }

    if(currentPage > 5) {
      if(currentPage >= total - 4) {
        return [1, -1, total - 4, total - 3, total - 2, total - 1, total]
      } else {
        return [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, total]
      }
    }

    return [1, 2, 3, 4, 5, -1, total]
  }

  private _getTotalPages(totalCount: number) {
    return Math.min(100, Math.ceil(totalCount / 10));
  }

  searchPageResults(pageNo: number) {
    if(pageNo < 0 || pageNo > this._getTotalPages(this.totalCount)) return; 
    this.emitSearchPage.emit(pageNo); 
  }
}
