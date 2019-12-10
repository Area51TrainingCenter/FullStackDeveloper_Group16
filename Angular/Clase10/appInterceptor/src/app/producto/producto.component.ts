import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../modelos/producto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-producto',
	templateUrl: './producto.component.html',
	styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

	lista: Producto[]

	constructor(private producto: ProductoService, private router: Router) { }

	ngOnInit() {
		this.listar()
	}

	listar() {
		this.producto.listar()
			.subscribe((resp: any) => {
				this.lista = resp.results
			},
				error => console.log(error))
	}

	editar(_id: string) {
		this.router.navigate(["/producto", "edicion", _id])
	}

	eliminar(_id: string) {
		if (confirm("Está seguro de querer eliminar"))
			this.producto.eliminar(_id)
				.subscribe(resp => {
					this.listar()
				})
	}

}
