
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SvnHttpInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        console.info("intercepting http");

        const authReq = req.clone({ setHeaders: { Authorization: "token Mzo2NWEwZjY5NC0yYWU4LTQ4OTUtYmM3YS0zN2FjZmQzYjU1ZjU=" } });
        return next.handle(authReq);
    }
}