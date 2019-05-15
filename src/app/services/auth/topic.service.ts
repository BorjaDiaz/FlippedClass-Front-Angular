import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/dashboard/models/Topic/topic';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private topicsTable = 'http://localhost:8080/api/topic/table';
  private createTopic = 'http://localhost:8080/api/topic/newTopic';
  private upTopic = 'http://localhost:8080/api/topic/updateTopic';
  private deletTopic = 'http://localhost:8080/api/topic/deleteTopic';



  constructor(private http: HttpClient) { }


  updateTopic(info:Topic):  Observable<string> {
    console.log(info);
    return this.http.post<string>(this.upTopic, info,httpOptions);
  }

  getTopicAll(): Observable<Topic>{
    return this.http.get<Topic>(this.topicsTable);
  }

  deleteTopic(info:Topic): Observable<string>{
    console.log(info);
    return this.http.post<string>(this.deletTopic, info, httpOptions);
  }

  newTopic(info:Topic): Observable<string>{
    console.log(info);
    return this.http.post<string>(this.createTopic, info, httpOptions);
  }

}
