import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/auth/user.service';
import { UserPassword } from 'src/app/dashboard/models/User-password/user-password';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  isUsername: boolean;
  updateUser: UserPassword;
  form: any = {};
  errorMessage = '';

  constructor(private userService: UserService,
     private tokenStorage: TokenStorageService, 
     private router: Router) { }

  ngOnInit() {
    if(this.tokenStorage.getUsername()) {
      this.isUsername = true;
    }
  }

  onUpdatePassword(){
    this.updateUser = new UserPassword(
      this.tokenStorage.getUsername(),
      this.form.password);
      console.log(this.tokenStorage.getUsername());
      this.userService.updatePassword(this.updateUser).subscribe();
      this.tokenStorage.signOut();
      this.router.navigate(['login']);
      window.location.reload();
  }

}
