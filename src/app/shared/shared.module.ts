import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { UsersTableComponent } from './components/tables/users-table/users-table.component';
import { TopicComponent } from './components/tables/topic-table/topic.component';
import { DisableUserComponent } from './components/dialogs/disable-user/disable-user.component';
import { NewTopicComponent } from './components/dialogs/new-topic/new-topic.component';


@NgModule({
  declarations: [UsersTableComponent, TopicComponent, DisableUserComponent, NewTopicComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ]
})
export class SharedModule { }
