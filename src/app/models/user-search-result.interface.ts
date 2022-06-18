import { User } from "./user.interface";

export interface UserSearchResult {
  totalCount: number; 
  users: User[]; 
}