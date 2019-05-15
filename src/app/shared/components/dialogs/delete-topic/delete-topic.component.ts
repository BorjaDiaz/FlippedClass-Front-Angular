import { Component, OnInit, Inject } from '@angular/core';
import { Topic } from 'src/app/dashboard/models/topic';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TopicComponent } from '../../tables/topic-table/topic.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-topic',
  templateUrl: './delete-topic.component.html',
  styleUrls: ['./delete-topic.component.css']
})
export class DeleteTopicComponent{

  element:Topic;
  topic: string;

  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: TopicComponent) {
      
    this.topic = this.data.element.topic;
  }

  ngOnInit() {
  }

  onDeleteTopic(){
    this.userService.deleteTopic(this.data.element).subscribe();
    window.location.reload();
  }
}
