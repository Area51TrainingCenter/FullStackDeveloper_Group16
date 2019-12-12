import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../modelos/producto';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ProductoService {

	constructor(private http: HttpClient, private auth: AuthService) { }

	listar() {
		/* 		const token = this.auth.obtenerToken()
				const headers = new HttpHeaders({ authorization: `Bearer ${token}` }) */

		const url = environment.apiRes

		return this.http.get("${url}/producto")
	}

	editar(_id: string) {
		/* 	const token = this.auth.obtenerToken()
			const headers = new HttpHeaders({ authorization: `Bearer ${token}` }) */

		return this.http.get(`http://clase.tibajodemanda.com/producto/${_id}`)
	}

	modificar(producto: Producto) {
		/* 		const token = this.auth.obtenerToken()
				const headers = new HttpHeaders({ authorization: `Bearer ${token}` }) */

		return this.http.put(`http://clase.tibajodemanda.com/producto/${producto._id}`, producto)
	}

	eliminar(_id: string) {
		/* 		const token = this.auth.obtenerToken()
				const headers = new HttpHeaders({ authorization: `Bearer ${token}` }) */

		return this.http.delete(`http://clase.tibajodemanda.com/producto/${_id}`)
	}

	nuevo(producto: Producto) {
		const token = this.auth.obtenerToken()
		const headers = new HttpHeaders({ authorization: `Bearer ${token}` })

		return this.http.post(`http://clase.tibajodemanda.com/producto`, producto, { headers })
	}
}
