import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AppRouting } from './app-routing.module';
import { NucleoModule } from './nucleo/nucleo.module';
import { LibrosModule } from './libros/libros.module';
import { AutoresModule } from './autores/autores.module';
import { EditorialesModule } from './editoriales/editoriales.module';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRouting,
    NucleoModule,
    LibrosModule,
    AutoresModule,
    EditorialesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
