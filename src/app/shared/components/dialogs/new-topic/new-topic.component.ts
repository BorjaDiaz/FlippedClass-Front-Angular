import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/dashboard/models/topic';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

  newTopic:Topic;
  form: any = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onNewTopic(){
    this.newTopic = new Topic(
      this.form.name);
      this.userService.newTopic(this.newTopic).subscribe();
      window.location.reload();
  };

}
