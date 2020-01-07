import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule, MatTooltipModule, MatDialogModule } from "@angular/material";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'

import { FlexLayoutModule } from "@angular/flex-layout";
import { ConfirmacionComponent } from './compartido/confirmacion/confirmacion.component';
import { EdicionNuevoUsuarioComponent } from './edicion-nuevo-usuario/edicion-nuevo-usuario.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConfirmacionComponent,
    EdicionNuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmacionComponent, EdicionNuevoUsuarioComponent]
})
export class AppModule { }
