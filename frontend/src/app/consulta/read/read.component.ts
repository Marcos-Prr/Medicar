import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ConsultaItem } from '../consulta-item';
import { AuthService } from 'src/app/authenticate/authenticate.service';
import { Router } from '@angular/router';
import { Consulta } from '../consulta';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { DeleteComponent } from '../delete/delete.component';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-read',
  templateUrl: 'read.component.html'
})
export class ReadComponent implements OnInit {
  userName: string = ""
  consultas: ConsultaItem[] = []
  displayedColumns = ['especialidade', 'profissional', 'data', 'hora', 'action'];

  constructor(private consultaService: ConsultaService,
    private matDialog: MatDialog,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.getConsultasList()
    this.userName = this.authService.getUserName()
  }


  logout(): void {
    this.router.navigate(['/login'])
  }

  private getConsultasList(): void {
    this.consultaService.list().subscribe(
      (consultas) => {
        this.consultas = consultas.map((consulta) => this.consultaToItem(consulta))
      }
    )
  }

  private consultaToItem(consulta: Consulta): ConsultaItem {
    return {
      id: consulta.id,
      data: consulta.dia,
      especialidade: consulta.medico.especialidade.nome,
      hora: consulta.horario,
      profissional: consulta.medico.nome
    }
  }

  dialogConsultaCreate(): void {
    const dialog = this.matDialog.open(CreateComponent)
    dialog.afterClosed().subscribe(
      (result) => {
        this.getConsultasList()
      }
    )
  }

  dialogDeletarConsulta(id: number) {
    const dialogRef = this.matDialog.open(DeleteComponent,
      {
        data: { consulta_id: id }
      })
    dialogRef.afterClosed().subscribe(
      (result) => {
        this.getConsultasList()
      }
    )
  }

}

