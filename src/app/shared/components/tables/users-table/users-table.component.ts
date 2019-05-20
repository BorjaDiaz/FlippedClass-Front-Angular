import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,MatSort, MatDialog} from '@angular/material';
import { RegisterComponent } from 'src/app/core/pages/register/register.component';
import { DisableUserComponent } from '../../dialogs/disable-user/disable-user.component';
import { EnableUserComponent } from '../../dialogs/enable-user/enable-user.component';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})

export class UsersTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  private username: string;
  dataSource:any = [];
  displayedColumns: string[] = ['username', 'name', 'surname', 'email', 'rol','modify','enable'];
  element:any;


  constructor(private userService: UserService,
    private dialog: MatDialog, 
    private tokenStorage: TokenStorageService) { }

  //Cargar los datos de los usuarios en la tabla
  ngOnInit() {
    if (this.tokenStorage.getUsername) {
      this.username = this.tokenStorage.getUsername();
    }
    this.userService.getUserAll().subscribe((data:any)=>{
      this.dataSource =  new MatTableDataSource(data)
      this.dataSource.sort = this.sort;
    });
  }

  //Filtor
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Dialog para modificar usuario
  openModifyDialog(element:any): void {
    console.log(element);
    const dialogRef = this.dialog.open(RegisterComponent,{
      data:{
        element: element
      },
      width: '500px',height:'600px'});
  }

  //Habilitar usuario
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

  //Deshabilitar usuario
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
}
