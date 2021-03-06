import { Component, OnInit, Inject } from '@angular/core';
import { UserSignup } from 'src/app/dashboard/models/User-signout/user-signup';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UsersTableComponent } from '../../tables/users-table/users-table.component';

@Component({
  selector: 'app-disable-user',
  templateUrl: './disable-user.component.html',
  styleUrls: ['./disable-user.component.css']
})
export class DisableUserComponent {

    element:UserSignup;
    name: string;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = this.data.element.name; 
    }

}
