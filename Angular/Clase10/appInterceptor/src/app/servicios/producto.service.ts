import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../modelos/producto';

@Injectable({
	providedIn: 'root'
})
export class ProductoService {

	constructor(private http: HttpClient, private auth: AuthService) { }

	listar() {
		const token = this.auth.obtenerToken()
		const headers = new HttpHeaders({ authorization: `Bearer ${token}` })

		return this.http.get("http://clase.tibajodemanda.com/producto", { headers })
	}

	editar(_id: string) {
		const token = this.auth.obtenerToken()
		const headers = new HttpHeaders({ authorization: `Bearer ${token}` })

		return this.http.get(`http://clase.tibajodemanda.com/producto/${_id}`, { headers })
	}

	modificar(producto: Producto) {
		const token = this.auth.obtenerToken()
		const headers = new HttpHeaders({ authorization: `Bearer ${token}` })

		return this.http.put(`http://clase.tibajodemanda.com/producto/${producto._id}`, producto, { headers })
	}

	eliminar(_id: string) {
		const token = this.auth.obtenerToken()
		const headers = new HttpHeaders({ authorization: `Bearer ${token}` })

		return this.http.delete(`http://clase.tibajodemanda.com/producto/${_id}`, { headers })
	}

	nuevo(producto: Producto) {
		const token = this.auth.obtenerToken()
		const headers = new HttpHeaders({ authorization: `Bearer ${token}` })

		return this.http.post(`http://clase.tibajodemanda.com/producto`, producto, { headers })
	}
}
