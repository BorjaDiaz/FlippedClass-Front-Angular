import { Component, OnInit, Inject } from '@angular/core';
import { Topic } from 'src/app/dashboard/models/topic';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TopicComponent } from '../../tables/topic-table/topic.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-topic',
  templateUrl: './delete-topic.component.html',
  styleUrls: ['./delete-topic.component.css']
})
export class DeleteTopicComponent implements OnInit {

  element:Topic;
  topic: string;

  constructor(private userService: UserService,private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data: TopicComponent) {
    this.topic = this.data.element.topic;
  }

  ngOnInit() {
  }

  onDeleteTopic(){
    this.userService.deleteTopic(this.data.element);
  }

}
