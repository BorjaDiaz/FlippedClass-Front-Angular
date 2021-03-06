import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/dashboard/models/User-login/user-login';
import { JwtResponse } from 'src/app/dashboard/models/jwt-response';
import { UserSignup } from 'src/app/dashboard/models/User-signout/user-signup';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: UserLogin): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: UserSignup): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}

