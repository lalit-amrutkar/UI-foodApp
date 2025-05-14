import { Component, OnInit } from '@angular/core';
import { TableViewComponent } from '../../common/table-view/table-view.component';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-management',
  imports: [TableViewComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit {

  tableData: any[] = []; // Array to hold user data

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Initialization logic here
    this.userService.getAllUsers().subscribe({
      next: (response: any) => {
        this.tableData = response.data; // Assuming the response contains user data in 'data' property
        console.log(this.tableData);
      },
      error: (error: any) => {
        console.error("Error fetching user data", error);
      }
    });
  }

}
