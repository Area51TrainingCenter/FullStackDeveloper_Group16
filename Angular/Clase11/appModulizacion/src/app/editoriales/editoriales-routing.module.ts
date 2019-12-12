import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorialesListadoComponent } from './editoriales-listado/editoriales-listado.component';
import { EditorialesEdicionComponent } from './editoriales-edicion/editoriales-edicion.component';
import { EditorialesNuevoComponent } from './editoriales-nuevo/editoriales-nuevo.component';

const routes: Routes = [
  { path: "listado", component: EditorialesListadoComponent },
  { path: "edicion", component: EditorialesEdicionComponent },
  { path: "nuevo", component: EditorialesNuevoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialesRoutingModule { }
