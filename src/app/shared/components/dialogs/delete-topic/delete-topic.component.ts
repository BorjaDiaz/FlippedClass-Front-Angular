import { Component, OnInit, Inject } from '@angular/core';
import { Topic } from 'src/app/dashboard/models/Topic/topic';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TopicService } from 'src/app/services/auth/topic.service';
import { TopicComponent } from '../../tables/topic-table/topic.component';

@Component({
  selector: 'app-delete-topic',
  templateUrl: './delete-topic.component.html',
  styleUrls: ['./delete-topic.component.css']
})
export class DeleteTopicComponent{

  element:Topic;
  topic: string;

  constructor(
    private topicService: TopicService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
    this.topic = this.data.element.topic;
  }

  //Borrar Tema
  onDeleteTopic(){
    this.topicService.deleteTopic(this.data.element).subscribe();
    window.location.reload();
  }
}
