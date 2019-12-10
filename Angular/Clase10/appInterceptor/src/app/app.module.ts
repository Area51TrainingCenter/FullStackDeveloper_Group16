import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { UsuarioEdicionComponent } from './usuario-edicion/usuario-edicion.component';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component'
import { AutenticacionGuard } from './seguridad/autenticacion.guard';
import { AutorizationGuard } from './seguridad/autorizacion.guard';
import { HttpClientModule } from "@angular/common/http";
import { RegistroComponent } from './registro/registro.component'
import { ReactiveFormsModule } from "@angular/forms";
import { ProductoComponent } from './producto/producto.component'

const routes: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "registro", component: RegistroComponent },
	{ path: "homeweb", component: HomeComponent, canActivate: [AutenticacionGuard] },
	{ path: "producto", component: ProductoComponent },
	{
		path: "usuario", component: UsuarioListadoComponent, canActivate: [AutenticacionGuard], children: [
			{ path: "edicion/:id", canActivate: [AutorizationGuard], component: UsuarioEdicionComponent },
			{ path: "nuevo", canActivate: [AutorizationGuard], component: UsuarioNuevoComponent },
		]
	},
	{ path: "cliente", component: ClienteComponent },
	{ path: "**", redirectTo: "" }
	/* { path: "**", component: RutaNoEncontradaComponent } */
]

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		UsuarioComponent,
		ClienteComponent,
		RutaNoEncontradaComponent,
		UsuarioListadoComponent,
		UsuarioEdicionComponent,
		UsuarioNuevoComponent,
		RegistroComponent,
		ProductoComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [AutenticacionGuard, AutorizationGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
