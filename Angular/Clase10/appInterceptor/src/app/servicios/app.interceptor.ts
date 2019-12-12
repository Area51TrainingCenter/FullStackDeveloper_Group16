import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
	constructor(private auth: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this.auth.obtenerToken()

		const peticionClonada = req.clone({ headers: req.headers.append("authorization", `Bearer ${token}`) })

		return next.handle(peticionClonada)
	}

}