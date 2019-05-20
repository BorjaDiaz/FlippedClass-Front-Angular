import { Component, OnInit, Inject } from '@angular/core';
import { TopicService } from 'src/app/services/auth/topic.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Topic } from 'src/app/dashboard/models/Topic/topic';

@Component({
  selector: 'app-modify-topic',
  templateUrl: './modify-topic.component.html',
  styleUrls: ['./modify-topic.component.css']
})
export class ModifyTopicComponent{

  form: any = {};
  topic: Topic;

  constructor(private topicService: TopicService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form.topic = data.element.topic
    }

    onModifyTopic(){
      this.topic = new Topic(
        this.form.topic,
        this.data.element.id
      )
      this.topicService.updateTopic(this.topic).subscribe();
      window.location.reload();
    }

}
