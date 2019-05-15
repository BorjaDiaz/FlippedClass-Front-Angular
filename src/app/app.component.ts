import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from './core/pages/register/register.component';
import { TokenStorageService } from './services/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;

  constructor(
    private tokenStorage: TokenStorageService,
    private token: TokenStorageService, 
    public router: Router,
    private dialog: MatDialog) { }

  //Menu 
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_TEACHER') {
          this.authority = 'teacher';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  //Abrir dialog para registrar usuario
  openDialog(element:any): void {
    const dialogRef = this.dialog.open(RegisterComponent,{
      data:{
        element: element
      },
      width: '500px',height:'600px'});
  }

  //Cerrar sesion
  logout() {
    this.token.signOut();
    window.location.reload();
    this.router.navigate(['home']);
  }
}
