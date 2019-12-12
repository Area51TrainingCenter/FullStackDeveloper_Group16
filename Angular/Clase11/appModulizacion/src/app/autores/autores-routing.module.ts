import { AutoresListadoComponent } from './autores-listado/autores-listado.component';
import { AutoresEdicionComponent } from './autores-edicion/autores-edicion.component';
import { AutoresNuevoComponent } from './autores-nuevo/autores-nuevo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "autores", children: [
      { path: "listado", component: AutoresListadoComponent },
      { path: "edicion", component: AutoresEdicionComponent },
      { path: "nuevo", component: AutoresNuevoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
