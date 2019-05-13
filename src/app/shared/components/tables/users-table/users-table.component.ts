import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource,MatSort, MatDialog} from '@angular/material';
import { RegisterComponent } from 'src/app/core/pages/register/register.component';
import { DisableUserComponent } from '../../dialogs/disable-user/disable-user.component';
import { EnableUserComponent } from '../../dialogs/enable-user/enable-user.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})

export class UsersTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  dataSource:any = [];
  displayedColumns: string[] = ['username', 'name', 'surname', 'email', 'rol','modify','enable'];
  element:any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private userService: UserService,private http: HttpClient,private dialog: MatDialog) { }

  openDialog(element:any): void {
    console.log(element);
    const dialogRef = this.dialog.open(RegisterComponent,{
      data:{
        element: element
      },
      width: '500px',height:'600px'});
  }

  openEnable(element:any):void{
    const dialogRef = this.dialog.open(EnableUserComponent,{
      width: '250px',
      data: {element: element}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'confirm'){
       this.userService. switchEnableUser(element).subscribe();
       window.location.reload();
      }
      
    });
  }

  openDisable(element:any){
    const dialogRef = this.dialog.open(DisableUserComponent,{
      width: '250px',
      data: {element: element}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'confirm'){
       this.userService.switchEnableUser(element).subscribe();
       window.location.reload();
      }
      
    });
  }

  ngOnInit() {
    this.userService.getUserAll().subscribe((data:any)=>{
      this.dataSource =  new MatTableDataSource(data)
      this.dataSource.sort = this.sort;
    });
  }

}
