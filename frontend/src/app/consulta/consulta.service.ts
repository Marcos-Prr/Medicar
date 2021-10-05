import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from './consulta';
import { Medico } from './medico';
import { Agenda } from './agenda';
import { Especialidade } from './especialidade';
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
    return this.httpCliente.get<Consulta[]>(`http://localhost:8000/api/v1/consultas/`,
      { headers: { "Authorization": `Token ${this.authService.getToken()}` } })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e)))
  }

  getMedicosByEspecialidade(especialidadeId:number):Observable<Medico[]>{
    return this.httpCliente.get<Medico[]>(`http://localhost:8000/api/v1/medicos?especialidade=${especialidadeId}`,
                                          {headers:{"Authorization":`Token ${this.authService.getToken()}` }})
                                          .pipe(
                                            map((obj)=>obj),
                                            catchError((e)=>this.errorHandler(e))
                                          )
  }

  getEspecialidades():Observable<Especialidade[]>{
    return this.httpCliente.get<Especialidade[]>(`http://localhost:8000/api/v1/especialidades/`,
                                          {headers:{"Authorization":`Token ${this.authService.getToken()}` }})
                                          .pipe(
                                            map((obj)=>obj),
                                            catchError((e)=>this.errorHandler(e))
                                          )
  }

  getAgendas(medicoId:string):Observable<Agenda[]>{
    return this.httpCliente.get<Agenda[]>(`http://localhost:8000/api/v1/agendas?medico=${medicoId}`,
                                          {headers:{"Authorization":`Token ${this.authService.getToken()}` }})
                                          .pipe(
                                            map((obj)=>obj),
                                            catchError((e)=>this.errorHandler(e))
                                          )
  }
}
