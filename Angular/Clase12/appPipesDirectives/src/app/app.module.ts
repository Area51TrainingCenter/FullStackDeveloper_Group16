import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MayusculasPipe, MinusculasPipe } from './mayusculas.pipe';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-PE';
import { LetrasCapitalesPipe } from './letras-capitales.pipe';
import { ReducidorCaracteresPipe } from './reducidor-caracteres.pipe';

registerLocaleData(localeEs)

@NgModule({
  declarations: [
    AppComponent,
    MayusculasPipe,
    MinusculasPipe,
    LetrasCapitalesPipe,
    ReducidorCaracteresPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
