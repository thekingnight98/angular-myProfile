import { Component, OnInit } from '@angular/core';
import { UserService } from '.././../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  Users: any = [];

  ngOnInit() {
    this.userService.GetUsers().subscribe((res) => {
      console.log(res);
      this.Users = res;
    });
  }
}
