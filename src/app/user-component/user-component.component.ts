import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent implements OnInit  {
  userData: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Subscribe to changes in user data
    this.userService.getUserData().subscribe(userData => {
      this.userData = userData;
    });
  }

  updateUser(): void {
    // Example of updating user data
    const updatedUserData = { name: 'John Doe', email: 'john@example.com' };
    this.userService.setUserData(updatedUserData);
  }
}
