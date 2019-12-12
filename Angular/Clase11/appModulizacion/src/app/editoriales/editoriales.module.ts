import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialesRoutingModule } from './editoriales-routing.module';
import { EditorialesListadoComponent } from './editoriales-listado/editoriales-listado.component';
import { EditorialesNuevoComponent } from './editoriales-nuevo/editoriales-nuevo.component';
import { EditorialesEdicionComponent } from './editoriales-edicion/editoriales-edicion.component';

@NgModule({
  declarations: [EditorialesListadoComponent, EditorialesNuevoComponent, EditorialesEdicionComponent],
  imports: [
    CommonModule,
    EditorialesRoutingModule
  ]
})
export class EditorialesModule { }
