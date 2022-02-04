import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { User } from '../models/user';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {

  // customers: Array<Customer> = [];
  // data: Customer[] = [];
  dataUsers: User[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'email', 'address', 'description'];

  constructor(
    private customerService: CustomerService,
    private userService: UserService
  ) { 

    this.userService.getUsers().subscribe(result => {
      this.dataUsers = result;
    })
   }

  ngOnInit(): void {
    
    this.userService.getUsers()
      .subscribe((data:any) => {
        data.map((res:any) => {
          const user: User = new User();
          user.id = res._id;
          user.name = res.name;
          user.email = res.email;
          user.address = res.address;
          user.description = res.description;
          user.createdTime = res.createdTime;

          this.dataUsers.push(user);
        })
        console.log(this.dataUsers);
      })
  }

}
