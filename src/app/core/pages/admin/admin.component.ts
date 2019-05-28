import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private roles: string[];
  private authority: string;
  errorMessage: string;
  data: any =[];


  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,private user:UserService) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return true;
        } else {
          this.router.navigate(['home']);
          return false;
        }
      });
    }
  }
}
