import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
	selector: 'app-nuevo',
	templateUrl: './nuevo.component.html',
	styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

	grupo: FormGroup

	constructor(private readonly productoService: ProductoService, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {
		this.grupo = new FormGroup({
			_id: new FormControl(null),
			nombre: new FormControl(null, Validators.required),
			descripcion: new FormControl(null, Validators.required)
		})
	}

	ngOnInit() {

	}

	agregar() {
		this.productoService.nuevo(this.grupo.value)
			.subscribe(
				resp => this.router.navigate(["/producto"])
			)
	}

}
