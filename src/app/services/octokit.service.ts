import { Injectable } from "@angular/core";
import { Octokit } from "octokit";

const octokit = new Octokit(); 

@Injectable()
export class OctokitService {
  private _endPoint  = 'GET /search/users'; 
  private _pageLimit = 10; 

  constructor() {}

  public async search(searchTerm: string, page: number) {
    return await octokit.request(this._endPoint, { q: searchTerm, per_page: this._pageLimit, page }); 
  }
}