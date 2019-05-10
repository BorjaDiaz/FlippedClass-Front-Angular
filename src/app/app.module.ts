import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/pages/login/login.component';
import { UserComponent } from './core/pages/user/user.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { HomeComponent } from './core/pages/home/home.component';
import { TeacherComponent } from './core/pages/teacher/teacher.component';
import { AdminComponent } from './core/pages/admin/admin.component';
import { UsersTableComponent } from './shared/components/users-table/users-table.component';

import { httpInterceptorProviders } from './services/auth/auth-interceptor';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatButtonModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BajaComponent } from './shared/components/baja/baja.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    TeacherComponent,
    AdminComponent,
    UsersTableComponent,
    SidebarComponent,
    BajaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders,UsersTableComponent,RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
