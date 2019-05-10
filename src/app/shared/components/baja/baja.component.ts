import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog } from '@angular/material';
import { UserSignup } from 'src/app/dashboard/models/user-signup';
import { UsersTableComponent } from '../users-table/users-table.component';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {
  element:UserSignup;
  name: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: UsersTableComponent) {
    this.name = this.data.element.name; 
  }
  
  
  ngOnInit() {
    
  }

}
