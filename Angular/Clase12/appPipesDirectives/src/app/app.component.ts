import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha: Date = new Date()

  tituloCurso: Observable<string>
  precio: number = 890.987
  matricula: number = 89.4
  seleccion: string = "sinopsis"

  novelas = [
    { titulo: "El Perfume", autor: "Patrick Suskind", anno: 1995, sinopsis: "Narra la historia de un asesino que mata mujeres para robarles su esencia y crear un perfume que domine al mundo." },
    { titulo: "El Sexto", autor: "José María Arguedas", anno: 1970, sinopsis: "Narra la historia de algunos presos de la antigua cárcel de Lima llamada 'El Sexto'" },
    { titulo: "Pantaleón y las visitadoras", autor: "Mario Vargas Llosa", anno: 1965, sinopsis: "Cuenta la historia de un comandante del Ejército al que le encomendaron la tarea de gestionar un prostíbulo para el Ejército" },
    { titulo: "Antígona", autor: "Hesidoto", anno: 100, sinopsis: "Recopilación de las narraciones de la mitología griega" }
  ]

  textoABuscar: string = ""


  ngOnInit() {
    this.tituloCurso = of("Curso de FullStack").pipe(delay(2000))
  }

}
