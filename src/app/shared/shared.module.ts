import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { TopicComponent } from './components/tables/topic-table/topic.component';
import { UsersTableComponent } from './components/tables/users-table/users-table.component';
import { DisableUserComponent } from './components/dialogs/disable-user/disable-user.component';
import { EnableUserComponent } from './components/dialogs/enable-user/enable-user.component';
import { NewTopicComponent } from './components/dialogs/new-topic/new-topic.component';
import { DeleteTopicComponent } from './components/dialogs/delete-topic/delete-topic.component';
import { ModifyTopicComponent } from './components/dialogs/modify-topic/modify-topic.component';



@NgModule({
  declarations: [
    UsersTableComponent,
    TopicComponent, 
    DisableUserComponent, 
    EnableUserComponent,
    NewTopicComponent,
    DeleteTopicComponent,
    ModifyTopicComponent],
    
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
})
export class SharedModule { }
