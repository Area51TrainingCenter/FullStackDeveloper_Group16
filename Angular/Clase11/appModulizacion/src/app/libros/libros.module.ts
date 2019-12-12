import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosListadoComponent } from './libros-listado/libros-listado.component';
import { LibrosNuevoComponent } from './libros-nuevo/libros-nuevo.component';
import { LibrosEdicionComponent } from './libros-edicion/libros-edicion.component';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosService } from './libros.service';

@NgModule({
  declarations: [LibrosListadoComponent, LibrosNuevoComponent, LibrosEdicionComponent],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ],
  providers: [LibrosService]
})
export class LibrosModule { }
