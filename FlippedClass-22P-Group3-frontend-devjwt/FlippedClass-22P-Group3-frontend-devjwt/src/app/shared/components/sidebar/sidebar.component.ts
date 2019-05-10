import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  auth :string;
  info: any;
  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
    };
    this.auth = this.info.authorities;
    if(this.auth.includes('ROLE_ADMIN')){
      this.info.authorities = 'Administrador'
    }
  }

}
