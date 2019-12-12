import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router"
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { LoginComponent } from './nucleo/login/login.component';
import { RegistroComponent } from './nucleo/registro/registro.component';
import { HomeComponent } from './nucleo/home/home.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "home", component: HomeComponent },
  {
    path: "libros", loadChildren: () => import("./libros/libros.module").then(mod => mod.LibrosModule)

  }
  /*   { path: "libros", loadChildren: "./libros/libros.module#LibrosModule" } */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
