import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/dashboard/models/Topic/topic';
import { TopicService } from 'src/app/services/auth/topic.service';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})

export class NewTopicComponent implements OnInit{

  newTopic:Topic;
  form: any = {};
  constructor(private topicService: TopicService) { }

  ngOnInit() {
  }

  //Nuevo Tema
  onNewTopic(){
    this.newTopic = new Topic(
      this.form.name);
      this.topicService.newTopic(this.newTopic).subscribe();
      window.location.reload();
  };

}
