import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from './consulta';
import { AuthService } from 'src/app/authenticate/authenticate.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private apiServer = "http://localhost:8000/api/v1/";
  constructor(private httpCliente: HttpClient,
    private authService: AuthService,) { }


  errorHandler(e: any): Observable<any> {

    return EMPTY;
  }

  list(): Observable<Consulta[]> {
    let request = this.httpCliente.get<Consulta[]>(`http://localhost:8000/api/v1/consultas/`,
      { headers: { "Authorization": `Token ${this.authService.getToken()}` } })
      .pipe(
        catchError((e) => this.errorHandler(e)))

    console.log(request);
    return this.httpCliente.get<Consulta[]>(`http://localhost:8000/api/v1/consultas/`,
      { headers: { "Authorization": `Token ${this.authService.getToken()}` } })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e)))
  }
}
