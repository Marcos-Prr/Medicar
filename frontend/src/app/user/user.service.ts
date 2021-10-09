import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserLogin } from './user-login';
import { ToastService } from '../toast/toast.service';
import { UserAuth } from './user-auth';
import { UserRegister } from './user-register';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpCliente: HttpClient,
    private toast:ToastService

  ) { }
  
  errorHandler(e: any): Observable<any> {
    const codeStatus = e.status
    console.log(codeStatus)
    if(codeStatus == 400){
      this.toast.messageError("Credenciais fornecidas invalidas.");
    }
    else if(codeStatus == 500){
      this.toast.messageError("Erro interno");
    }else{
      this.toast.messageError("Erro de comunicação");
    }

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

