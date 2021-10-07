import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserLogin } from './user-login';
import { UserAuth } from './user-auth';
import { UserRegister } from './user-register';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpCliente: HttpClient,

  ) { }
  
  errorHandler(e: any): Observable<any> {
    return EMPTY;
  }

  login(userCredentials: UserLogin): Observable<UserAuth> {
    return this.httpCliente.post<UserAuth>(`http://localhost:8000/login/`, userCredentials).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  create(userInfo: UserRegister): Observable<any>{
    return this.httpCliente.post<any>(`http://localhost:8000/register/`, userInfo).pipe(
      map((obj)=> obj),
      catchError((e)=>this.errorHandler(e))
    )
  }
}

