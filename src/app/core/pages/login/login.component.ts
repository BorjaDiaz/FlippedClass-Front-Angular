import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth/auth.service';
import { TokenStorageService } from '../../../services/auth/token-storage.service';
import { UserLogin } from '../../../dashboard/models/user-login';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: UserLogin;

  constructor(private authService: AuthService,private router: Router, private tokenStorage: TokenStorageService,private dialog: MatDialog) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  openDialog(element:any): void {
    const dialogRef = this.dialog.open(RegisterComponent,{
      
      data:{
        element: element
      },
      width: '500px',height:'600px'});
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new UserLogin(
      this.form.username,
      this.form.password);

      this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
          this.tokenStorage.saveFirstLogin(data.firstLogin);
          if (this.tokenStorage.getFirstLogin() == '0') {
            console.log(this.tokenStorage.getFirstLogin());
            this.tokenStorage.saveUsername(data.username);
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUsername(data.username);
            this.tokenStorage.saveAuthorities(data.authorities);
            this.isLoginFailed = true;
            this.router.navigate(['editpassword']);
          } else {
            this.tokenStorage.saveUsername(data.username);
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUsername(data.username);
            this.tokenStorage.saveAuthorities(data.authorities);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
            location.reload();
            
          }
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );
  }

  reloadPage() {
    window.location.reload();
  }

}
