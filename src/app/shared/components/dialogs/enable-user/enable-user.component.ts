import { Component, OnInit, Inject } from '@angular/core';
import { UserSignup } from 'src/app/dashboard/models/user-signup';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UsersTableComponent } from '../../tables/users-table/users-table.component';

@Component({
  selector: 'app-enable-user',
  templateUrl: './enable-user.component.html',
  styleUrls: ['./enable-user.component.css']
})
export class EnableUserComponent implements OnInit {

  element:UserSignup;
  name: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: UsersTableComponent) {
  this.name = this.data.element.name; 
  }

  ngOnInit() {
  }

}
