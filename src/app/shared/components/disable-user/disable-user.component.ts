import { Component, OnInit, Inject } from '@angular/core';
import { UserSignup } from 'src/app/dashboard/models/user-signup';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UsersTableComponent } from '../users-table/users-table.component';

@Component({
  selector: 'app-disable-user',
  templateUrl: './disable-user.component.html',
  styleUrls: ['./disable-user.component.css']
})
export class DisableUserComponent implements OnInit {

    element:UserSignup;
    name: string;
    constructor(@Inject(MAT_DIALOG_DATA) public data: UsersTableComponent) {
    this.name = this.data.element.name; 
    }
   

  ngOnInit() {
  }

}
