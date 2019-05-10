import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/dashboard/models/user'
import { UserSignup } from '../dashboard/models/user-signup';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private teacherUrl = 'http://localhost:8080/api/test/teacher';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private usersTable = 'http://localhost:8080/api/test/table';
  private upUser = 'http://localhost:8080/api/test/updateUser';
  private downUser = 'http://localhost:8080/api/test/downUser';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, {responseType: 'text'});
  }

  getTeacherBoard(): Observable<string> {
    return this.http.get(this.teacherUrl, { responseType: 'text'});
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, {responseType: 'text'});
  }

  getUserAll(): Observable<User>{
    return this.http.get<User>(this.usersTable);
  }

  updateUser(info: UserSignup): Observable<string>{
    return this.http.post<string>(this.upUser, info,httpOptions);
  }

  unsubscribeUser(info: any): Observable<string>{
    console.log(info)
    return this.http.post<string>(this.downUser, info,httpOptions);
  }
}
