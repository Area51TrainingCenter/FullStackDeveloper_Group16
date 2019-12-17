import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MayusculasPipe, MinusculasPipe } from './mayusculas.pipe';

import { FormsModule } from "@angular/forms"

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-PE';
import { LetrasCapitalesPipe } from './letras-capitales.pipe';
import { ReducidorCaracteresPipe } from './reducidor-caracteres.pipe';
import { ReducidorPalabrasPipe } from './reducidor-palabras.pipe';
import { BuscadorPipe } from './buscador.pipe';

registerLocaleData(localeEs)

@NgModule({
  declarations: [
    AppComponent,
    MayusculasPipe,
    MinusculasPipe,
    LetrasCapitalesPipe,
    ReducidorCaracteresPipe,
    ReducidorPalabrasPipe,
    BuscadorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
