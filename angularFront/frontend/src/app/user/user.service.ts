import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserLogin } from './user-login';
import { ToastService } from '../toast/toast.service';
import { UserAuth } from './user-auth';
import { UserRegister } from './user-register';
import { environment } from 'src/environments/environment';
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
    if(codeStatus == 400){
      const error = e.error
      const errorObject = Object.keys(error)[0]
      const messageError= error[errorObject][0]
      this.toast.messageWarning(`${messageError}`)
    }else{
      this.toast.messageError("Erro de comunicação");
    }

    return EMPTY;
  }

  login(userCredentials: UserLogin): Observable<UserAuth> {
    return this.httpCliente.post<UserAuth>(`${environment.apiURL}/login/`, userCredentials).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  create(userInfo: UserRegister): Observable<any>{
    return this.httpCliente.post<any>(`${environment.apiURL}/register/`, userInfo).pipe(
      map((obj)=> obj),
      catchError((e)=>this.errorHandler(e))
    )
  }
}

