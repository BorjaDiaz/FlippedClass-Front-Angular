import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { TopicComponent } from './components/topic/topic.component';
import { DisableUserComponent } from './components/disable-user/disable-user.component';
import { EnableUserComponent } from './components/enable-user/enable-user.component';

@NgModule({
  declarations: [UsersTableComponent, TopicComponent, DisableUserComponent, EnableUserComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ]
})
export class SharedModule { }
