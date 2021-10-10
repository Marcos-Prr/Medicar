import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-delete',
  templateUrl: 'delete.component.html',
  styleUrls: ['delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    private dialog: MatDialogRef<DeleteComponent>,
    private consultaService: ConsultaService,
    @Inject(MAT_DIALOG_DATA) private data: { consulta_id: number }
  ) { }

  ngOnInit(): void {
  }

  cancelClick(): void {
    this.dialog.close();
  }

  deleteClick(): void {
    this.consultaService.deleteConsultaById(this.data.consulta_id).subscribe(
      (result) => {
        this.dialog.close()
      }
    )
  }
}
