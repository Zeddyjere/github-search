export interface User {
  avatarUrl: string;
  profileUrl: string;  
  fullName: string; 
  username: string; 
  followers: number;
  repositories: number;  
  bio?: string; 
  location?: string; 
}