import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from './consulta';
import { Create } from './create';
import { Medico } from './medico';
import { Agenda } from './agenda';
import { Especialidade } from './especialidade';
import { AuthService } from 'src/app/authenticate/authenticate.service';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private httpCliente: HttpClient,
    private authService: AuthService,
    private toast: ToastService) { }


  errorHandler(e: any): Observable<any> {
    const codeStatus = e.status
    console.log(codeStatus)
    if (codeStatus == 400) {
      this.toast.messageError("Erro de requisição");
    }
    else if (codeStatus == 500) {
      this.toast.messageError("Erro interno");
    } else {
      this.toast.messageError("Erro de comunicação");
    }

    return EMPTY;
  }

  list(): Observable<Consulta[]> {
    return this.httpCliente.get<Consulta[]>(`${environment.apiURL}/api/v1/consultas/`,
      { headers: { "Authorization": `Token ${this.authService.getToken()}` } })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e)))
  }

  getMedicosByEspecialidade(especialidadeId: number): Observable<Medico[]> {
    return this.httpCliente.get<Medico[]>(`${environment.apiURL}/api/v1/medicos?especialidade=${especialidadeId}`,
      { headers: { "Authorization": `Token ${this.authService.getToken()}` } })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      )
  }

  getEspecialidades(): Observable<Especialidade[]> {
    return this.httpCliente.get<Especialidade[]>(`${environment.apiURL}/api/v1/especialidades/`,
      { headers: { "Authorization": `Token ${this.authService.getToken()}` } })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      )
  }

  getAgendas(medicoId: string): Observable<Agenda[]> {
    return this.httpCliente.get<Agenda[]>(`${environment.apiURL}/api/v1/agendas?medico=${medicoId}`,
      { headers: { "Authorization": `Token ${this.authService.getToken()}` } })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      )
  }

  createConsulta(consulta: Create): Observable<Consulta> {
    return this.httpCliente.post<Consulta>(`${environment.apiURL}/api/v1/consultas/`,
      consulta,
      { headers: { "Authorization": `Token ${this.authService.getToken()}` } })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      )
  }

  deleteConsultaById(consulta_id: number): Observable<any> {
    return this.httpCliente.delete(`${environment.apiURL}/api/v1/consultas/${consulta_id}`,
      { headers: { "Authorization": `Token ${this.authService.getToken()}` } })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      )
  }
}
