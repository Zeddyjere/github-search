import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!: User; 

  constructor() { }

  ngOnInit(): void {
  }

  navigateToGithubProfile(url: string) {
    window.location.href = url;
  }
}
