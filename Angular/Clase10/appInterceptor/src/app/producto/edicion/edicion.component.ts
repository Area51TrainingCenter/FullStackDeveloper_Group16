import { ProductoService } from '../../servicios/producto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

	grupo: FormGroup

	constructor(private readonly productoService: ProductoService, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {
		this.grupo = new FormGroup({
			_id: new FormControl(null),
			nombre: new FormControl(null, Validators.required),
			descripcion: new FormControl(null, Validators.required)
		})
	}

	ngOnInit() {
		const _id: string = this.activatedRoute.snapshot.paramMap.get("_id")
		this.productoService.editar(_id)
			.subscribe((resp: any) => {
				this.grupo.patchValue(resp.result)
			})
	}

	modificar() {
		this.productoService.modificar(this.grupo.value)
			.subscribe(resp => {
				this.router.navigate(["/producto"])
			})
	}

}
