import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  public mensaje: string = "Está seguro de eliminar?"

  constructor(private readonly dialogRef: MatDialogRef<ConfirmacionComponent>) { }

  ngOnInit() {
  }

}
