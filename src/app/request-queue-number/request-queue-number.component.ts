import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {

  user: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getLastUser()
      .subscribe(data => {
        //get last record user
        data.slice((data.length-1)).map((res:any) => { 
          const user: User = new User();
          user.id = res._id;
          user.name = res.name;
          user.email = res.email;
          user.address = res.address;
          user.description = res.description;
          user.createdTime = res.createdTime;

          this.user.push(user);
        })
        console.log(this.user);
      })
  }

}
