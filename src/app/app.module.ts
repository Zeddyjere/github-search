import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routes/routing.module';
import { AppComponent } from './components/root/app.component';
import { SearchPageComponent } from './pages/search/search.page';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultPageComponent } from './pages/search-result/search-result.page';
import { UserComponent } from './components/user/user.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingSearchComponent } from './components/loading-search/loading-search.component';
import { SearchService } from './services/search.service';
import { OctokitService } from './services/octokit.service';

@NgModule({
  declarations: [
    AppComponent, LogoComponent, SearchBarComponent,
    SearchPageComponent,
    SearchResultPageComponent,
    UserComponent,
    PaginationComponent,
    LoadingSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    CommonModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,
  ],
  providers: [
    SearchService, OctokitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
