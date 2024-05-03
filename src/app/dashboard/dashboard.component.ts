import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit  {
  userData: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Subscribe to changes in user data
    this.userService.getUserData().subscribe(userData => {
      this.userData = userData;
    });
  }
}
