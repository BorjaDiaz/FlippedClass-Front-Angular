import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  costCenter: string;
  jobPosition: string;
  fullName: string;
  lastName: string;
  mail: string;
  serviceLine: string;
  street: string;

  constructor(private token: TokenStorageService, private user:UserService) { }


  //Datos del token 
  ngOnInit() {
    this.user.getLdapUser(this.token.getUsername()).subscribe((data:any)=>{
      this.costCenter = data[0].costCenter;
      this.fullName = data[0].fullName;
      this.jobPosition =  data[0].jobPosition;
      this.lastName = data[0].lastName;
      this.mail = data[0].mail;
      this.serviceLine = data[0].serviceLine;
      this.street = data[0].street;
      
    });
    this.info = {
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  
  //Cerrar sesion
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
