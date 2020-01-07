import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edicion-nuevo-usuario',
  templateUrl: './edicion-nuevo-usuario.component.html',
  styleUrls: ['./edicion-nuevo-usuario.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EdicionNuevoUsuarioComponent implements OnInit {

  accion: string
  grupo: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) private datos: any, private dialogRef: MatDialogRef<EdicionNuevoUsuarioComponent>) { }

  ngOnInit() {
    if (this.datos.accion == "nuevo") {
      this.grupo = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        email: new FormControl(null)
      })
    } else {
      this.grupo = new FormGroup({
        id: new FormControl(this.datos.registro.id),
        name: new FormControl(this.datos.registro.name),
        email: new FormControl(this.datos.registro.email)
      })
    }
    this.accion = this.datos.accion
  }

  grabar() {
    const respuesta = {
      accion: this.accion,
      datos: this.grupo.value
    }

    this.dialogRef.close(respuesta)
  }

}
