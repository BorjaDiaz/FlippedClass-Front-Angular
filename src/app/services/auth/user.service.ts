import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSignup } from 'src/app/dashboard/models/User-signout/user-signup';
import { UserPassword } from 'src/app/dashboard/models/User-password/user-password';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersTable = 'http://localhost:8080/api/test/table';
  private upUser = 'http://localhost:8080/api/test/updateUser';
  private upPassword = 'http://localhost:8080/api/user/updatePassword';
  private switchUser = 'http://localhost:8080/api/user/switchEnabled';
  private getUserByDas = 'http://localhost:8080/api/getUserByDas/';
  private authenticate = 'http://localhost:8080/api/authenticate/';



  constructor(private http: HttpClient) { }

  getLdapUser(info: any): Observable<any>{
    return this.http.get<any>(this.getUserByDas + info);
  }

  getAuthenticate(info: any): Observable<any>{
    return this.http.get<any>(this + info);
  }

  getUserAll(): Observable<UserSignup>{
    return this.http.get<UserSignup>(this.usersTable);
  }

  updateUser(info: UserSignup): Observable<string>{
    return this.http.post<string>(this.upUser, info ,httpOptions);
  }

  updatePassword(info: UserPassword): Observable<string>{
    return this.http.post<string>(this.upPassword, info,httpOptions);
  }

  //Alta y Baja
  switchEnableUser(info: any): Observable<string>{
    return this.http.post<string>(this.switchUser, info,httpOptions);
  }

}
