import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private roles: string[];
  private authority: string;
  errorMessage: string;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private router: Router) {}

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
