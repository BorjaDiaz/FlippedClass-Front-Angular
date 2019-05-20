import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/pages/login/login.component';
import { UserComponent } from './core/pages/user/user.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { HomeComponent } from './core/pages/home/home.component';
import { TeacherComponent } from './core/pages/teacher/teacher.component';
import { AdminComponent } from './core/pages/admin/admin.component';
import { UsersTableComponent } from './shared/components/tables/users-table/users-table.component';
import { EnableUserComponent } from './shared/components/dialogs/enable-user/enable-user.component';
import { DisableUserComponent } from './shared/components/dialogs/disable-user/disable-user.component';
import { NewTopicComponent } from './shared/components/dialogs/new-topic/new-topic.component';
import { DeleteTopicComponent } from './shared/components/dialogs/delete-topic/delete-topic.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { EditPasswordComponent } from './core/pages/edit-password/edit-password.component';
import { TopicComponent } from './shared/components/tables/topic-table/topic.component';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatButtonModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { httpInterceptorProviders } from './services/auth/auth-interceptor';
import { ModifyTopicComponent } from './shared/components/dialogs/modify-topic/modify-topic.component';




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
    EnableUserComponent,
    DisableUserComponent,
    NewTopicComponent,
    ModifyTopicComponent,
    DeleteTopicComponent,
    PageNotFoundComponent,
    EditPasswordComponent,
    RegisterComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
