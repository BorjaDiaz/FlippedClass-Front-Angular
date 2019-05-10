import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
  private status: string;

  constructor(private tokenStorage: TokenStorageService,private token: TokenStorageService, public router: Router) { }

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

  logout() {
    this.token.signOut();
    window.location.reload();
    this.router.navigate(['home']);
  }
}
