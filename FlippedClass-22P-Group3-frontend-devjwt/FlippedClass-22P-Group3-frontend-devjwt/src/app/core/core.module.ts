import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent, UserComponent, TeacherComponent, AdminComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
