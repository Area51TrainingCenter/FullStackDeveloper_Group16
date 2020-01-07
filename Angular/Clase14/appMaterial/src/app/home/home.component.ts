import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmacionComponent } from '../compartido/confirmacion/confirmacion.component';
import { EdicionNuevoUsuarioComponent } from '../edicion-nuevo-usuario/edicion-nuevo-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource = [
    { id: 1, name: "user01", email: "email01@email.com" },
    { id: 2, name: "user02", email: "email02@email.com" },
    { id: 3, name: "user03", email: "email03@email.com" },
    { id: 4, name: "user04", email: "email04@email.com" }
  ]

  columnasAMostrar: Array<string> = ["name", "email", "actions"]

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit() {
  }

  editar(id: number = null) {
    const indice = this.dataSource.findIndex(el => el.id === id)

    let data

    if (id) {
      data = {
        accion: "edición",
        registro: this.dataSource[indice]
      }
    } else {
      data = {
        accion: "nuevo",
        registro: {}
      }
    }

    const modal: MatDialogRef<EdicionNuevoUsuarioComponent> = this.dialog.open(EdicionNuevoUsuarioComponent, {
      panelClass: "contenedor_usuario",
      disableClose: true,
      data: data
    })

    modal.afterClosed().subscribe(
      (resultados: any) => {
        if (!resultados) return

        if (resultados.accion == "edición") {
          const id = resultados.datos.id
          const indice = this.dataSource.findIndex(el => el.id == id)
          const usuarios = [...this.dataSource]
          usuarios[indice].name = resultados.datos.name
          usuarios[indice].email = resultados.datos.email

          this.dataSource = usuarios
        } else {
          const id = this.dataSource.length + 1
          const usuarios = [...this.dataSource]
          usuarios.push({ id, name: resultados.datos.name, email: resultados.datos.email })

          this.dataSource = usuarios
        }
      }
    )

  }

  eliminar(id: number) {
    const modal: MatDialogRef<ConfirmacionComponent> = this.dialog.open(ConfirmacionComponent, {
      disableClose: true
    })

    modal.componentInstance.mensaje = "El registro se eliminará, está seguro?"

    modal.afterClosed().subscribe(
      (respuesta: boolean) => {
        if (!respuesta) return

        const indice = this.dataSource.findIndex(el => el.id === id)
        const usuarios = [...this.dataSource]
        usuarios.splice(indice, 1)
        this.dataSource = usuarios
      }
    )




    /* if (confirm("Está seguro de eliminar?")) {
      const indice = this.dataSource.findIndex(el => el.id === id)
      if (indice > -1) { */
    // const usuarios = Object.assign([], this.dataSource)
    /*        const usuarios = [...this.dataSource]
           usuarios.splice(indice, 1)
           this.dataSource = usuarios
         }
       } */
  }

}
