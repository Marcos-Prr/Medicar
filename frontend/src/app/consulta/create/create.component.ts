import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Agenda } from '../agenda';
import { Create } from '../create';
import { Horario } from '../horario';
import { ConsultaService } from '../consulta.service';
import { Especialidade } from '../especialidade';
import { Medico } from '../medico';

@Component({
  selector: 'app-create',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.css']
})
export class CreateComponent implements OnInit {

  especialidades: Especialidade[] = []
  medicos: Medico[] = []
  agendas: Agenda[] = []
  horarios: Horario[] = []

  consultaForm: any = {
    especialidade_id: '',
    medico_id: '',
    agenda_id: '',
    hora: ''
  }

  constructor(private consultaService:ConsultaService,
    ) { }

  ngOnInit(): void {
    this.consultaService.getEspecialidades().subscribe(
      (result) =>{
        this.especialidades= result
      }
    )
  }

  getMedicosByEspecialidade(): void {
    this.medicos = []
    this.agendas = []
    this.horarios = []
    this.consultaService.getMedicosByEspecialidade(this.consultaForm.especialidade_id)
      .subscribe(
        (medicosList) => {
          this.medicos = medicosList
        }
      )
  }

  getMedicoAgendas():void {
    this.agendas = []
    this.horarios = []
    this.consultaService.getAgendas(this.consultaForm.medico_id)
                        .subscribe(
                          (agendasMedico) => {
                            this.agendas = agendasMedico
                          }
                        )
  }

  getAgendaHorarios():void{
    const agendaSelecionada = this.agendas.find((agenda)=>agenda.id===this.consultaForm.agenda_id)
    this.horarios = agendaSelecionada !== undefined? agendaSelecionada.horarios : [] 
  }

}
