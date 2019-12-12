import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LoginComponent, MenuComponent, RegistroComponent, HomeComponent],
  exports: [MenuComponent]
})
export class NucleoModule { }
