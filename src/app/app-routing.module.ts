import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './core/pages/register/register.component';
import { LoginComponent } from './core/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { UserComponent } from './core/pages/user/user.component';
import { TeacherComponent } from './core/pages/teacher/teacher.component';
import { AdminComponent } from './core/pages/admin/admin.component';
import { DisableUserComponent } from './shared/components/disable-user/disable-user.component';
import { EnableUserComponent } from './shared/components/enable-user/enable-user.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'teacher',
        component: TeacherComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'enable',
        component: DisableUserComponent
    },
    {
        path: 'disable',
        component: EnableUserComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
