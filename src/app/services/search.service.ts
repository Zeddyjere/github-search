import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { User } from "../models/user.interface";
import { UserSearchResult } from "../models/user-search-result.interface";
import { OctokitService } from "./octokit.service";

@Injectable()
export class SearchService {

  constructor(private _http: HttpClient,
              private _octokitService: OctokitService) {}

  public async searchUsers(searchTerm: string, page: number): Promise<UserSearchResult> {
    const { data } = await this._octokitService.search(searchTerm, page); 
    const promises = data.items.map((item: any) => this._getUserInformation(item));  
    const users = await Promise.all(promises); 

    return {
      totalCount: data.total_count,
      users
    }
  }

  private async _getUserInformation(item: any): Promise<User> {
    const userData: any = await this._http.get(item.url).toPromise(); 
    const { 
      avatar_url, 
      html_url,
      name, 
      login, 
      followers, 
      bio, 
      location,
      public_repos
    } = userData; 

    return {
      avatarUrl: avatar_url, 
      profileUrl: html_url,
      fullName: name, 
      username: login, 
      followers: followers,
      repositories: public_repos,
      bio,
      location
    }
  }
}