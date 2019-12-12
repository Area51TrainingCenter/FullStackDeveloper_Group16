import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresListadoComponent } from './autores-listado/autores-listado.component';
import { AutoresNuevoComponent } from './autores-nuevo/autores-nuevo.component';
import { AutoresEdicionComponent } from './autores-edicion/autores-edicion.component';

@NgModule({
  declarations: [AutoresListadoComponent, AutoresNuevoComponent, AutoresEdicionComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
