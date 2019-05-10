import { Component, OnInit, ViewChild, Renderer2, Inject, ElementRef, AfterViewInit } from '@angular/core';

import { AuthService } from '../../../services/auth/auth.service';
import { UserSignup } from '../../../dashboard/models/user-signup';
import { Role } from 'src/app/dashboard/models/role.model';
import { UsersTableComponent } from 'src/app/shared/components/users-table/users-table.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements AfterViewInit {
  @ViewChild("myDas") myDas: ElementRef;
  @ViewChild("btnSignUp") btnSignUp: ElementRef;
  @ViewChild("btnModify") btnModify: ElementRef;
  form: any = {};
  roles: Role[] = [
    {id: 'user', name: 'Usuario'},
    {id: 'teacher', name: 'Profesor'},
    {id: 'admin', name: 'Administrador'}
  ];
  signupInfo: UserSignup;
  updateUser: UserSignup;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  element:UserSignup;
  
  constructor(private userService: UserService,private authService: AuthService, @Inject(MAT_DIALOG_DATA) private data: UsersTableComponent, private renderer: Renderer2) {
    if(this.data.element != undefined){
      this.form.name = this.data.element.name;
      this.form.surname = this.data.element.surname;
      this.form.username = this.data.element.username;
      this.form.email = this.data.element.email;
      this.form.role = this.data.element.roles;
    }
   
  }

  ngAfterViewInit() {
    if(this.data.element != undefined){
      this.myDas.nativeElement.disabled = true;
      this.renderer.setStyle(this.btnSignUp.nativeElement, "display","none");
    }
    else{
      this.renderer.setStyle(this.btnModify.nativeElement, "display","none");
    }
  }

  onRegisterUser(){
    this.updateUser = new UserSignup(
      this.form.name,
      this.form.surname,
      this.form.username,
      this.form.email,
      this.form.role);

      this.userService.updateUser(this.updateUser).subscribe( data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );

    location.reload();
  }


  onSignUp() {

    this.signupInfo = new UserSignup(
      this.form.name,
      this.form.surname,
      this.form.username,
      this.form.email,
      this.form.role);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
