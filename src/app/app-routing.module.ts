import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './core/pages/register/register.component';
import { LoginComponent } from './core/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { UserComponent } from './core/pages/user/user.component';
import { TeacherComponent } from './core/pages/teacher/teacher.component';
import { AdminComponent } from './core/pages/admin/admin.component';
import { DisableUserComponent } from './shared/components/dialogs/disable-user/disable-user.component';
import { EnableUserComponent } from './shared/components/dialogs/enable-user/enable-user.component';


import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { EditPasswordComponent } from './core/pages/edit-password/edit-password.component';
import { DeleteTopicComponent } from './shared/components/dialogs/delete-topic/delete-topic.component';
import { NewTopicComponent } from './shared/components/dialogs/new-topic/new-topic.component';
import { ModifyTopicComponent } from './shared/components/dialogs/modify-topic/modify-topic.component';

const routes: Routes = [
    {
        path: 'home',
        component: LoginComponent
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
        path: 'editpassword',
        component: EditPasswordComponent
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
        path: 'newTopic',
        component: NewTopicComponent
    },
    {
        path: 'deleteTopic',
        component: DeleteTopicComponent
    },
    {
        path: 'modTopic',
        component: ModifyTopicComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path:'**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
