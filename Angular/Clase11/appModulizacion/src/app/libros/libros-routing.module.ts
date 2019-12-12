import { LibrosListadoComponent } from './libros-listado/libros-listado.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { LibrosNuevoComponent } from './libros-nuevo/libros-nuevo.component';
import { LibrosEdicionComponent } from './libros-edicion/libros-edicion.component';

const routes: Routes = [
  { path: "nuevo", component: LibrosNuevoComponent },
  { path: "edicion", component: LibrosEdicionComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
