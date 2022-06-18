import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultPageComponent } from '../pages/search-result/search-result.page';
import { SearchPageComponent } from '../pages/search/search.page';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'search/:searchTerm', component: SearchResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
