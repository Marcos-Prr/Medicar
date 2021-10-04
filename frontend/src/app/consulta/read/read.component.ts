import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ConsultaItem } from '../consulta-item';
import { Consulta } from '../consulta';

@Component({
  selector: 'app-read',
  templateUrl: 'read.component.html'
})
export class ReadComponent implements OnInit {

  consultas: ConsultaItem[] = []
  displayedColumns = ['especialidade', 'profissional','data','hora','action'];

  constructor(private consultaService: ConsultaService,) { }

  ngOnInit(): void {
    this.getConsultasList()
    console.log(this.consultas);
  }

  private getConsultasList(): void {
    this.consultaService.list().subscribe(
      (consultas) => {
        this.consultas = consultas.map((consulta) => this.consultaToItem(consulta))
      }
    )
  }

  private consultaToItem(consulta:Consulta):ConsultaItem{
    return {
              id: consulta.id,
              data: consulta.dia,
              especialidade: consulta.medico.especialidade.nome,
              hora: consulta.horario,
              profissional: consulta.medico.nome
           }
  }

}

