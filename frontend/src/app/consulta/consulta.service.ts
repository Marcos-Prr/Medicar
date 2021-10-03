import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private apiServer = "http://localhost:8000";
  constructor(private httpCliente: HttpClient) { }
}
