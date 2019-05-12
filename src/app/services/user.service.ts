import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSignup } from '../dashboard/models/user-signup';
import { Topic } from '../dashboard/models/topic';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersTable = 'http://localhost:8080/api/test/table';
  private topicsTable = 'http://localhost:8080/api/topic/table';
  private deletTopic = 'http://localhost:8080/api/topic/deleteTopic';
  private createTopic = 'http://localhost:8080/api/topic/newTopic';
  private upUser = 'http://localhost:8080/api/test/updateUser';
  private disUser = 'http://localhost:8080/api/test/disableUser';
  private enaUser = 'http://localhost:8080/api/test/enableUser';



  constructor(private http: HttpClient) { }

  getUserAll(): Observable<UserSignup>{
    return this.http.get<UserSignup>(this.usersTable);
  }

  updateUser(info: UserSignup): Observable<string>{
    return this.http.post<string>(this.upUser, info,httpOptions);
  }

  //Baja
  disableUser(info: any): Observable<string>{
    return this.http.post<string>(this.disUser, info,httpOptions);
  }

  //Alta
  enableUser(info: any): Observable<string>{
    return this.http.post<string>(this.enaUser, info,httpOptions);
  }

  getTopicAll(): Observable<Topic>{
    return this.http.get<Topic>(this.topicsTable);
  }

  deleteTopic(info: Topic): Observable<string>{
    return this.http.post<string>(this.deletTopic, info,httpOptions);
  }

  newTopic(info:Topic): Observable<string>{
    return this.http.post<string>(this.createTopic, info, httpOptions);
  }

}
