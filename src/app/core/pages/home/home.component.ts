import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
