import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { environment } from 'environments/environment.prod';
import { StorageService } from '../_services/storage.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';





@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor(private localStorage: StorageService, private router: Router ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //const requestUrl: Array<any> = request.url.split('/');
        //const token = this.localStorage.getToken();
        //const apiUrl: Array<any> = environment.base_url.split('/')

     
            request = request.clone({ setHeaders: { Authorization: `Bearer ${this.localStorage.getToken()}` } });
            return next.handle(request);
            /*.do(
                (err: HttpEvent<any>) => {
                  if (err instanceof HttpErrorResponse) {
    
                    if (err.status === 401) {
                      this.router.navigate(['/login']); // confimar essa rota
                    }
                  }
                }
              );
        }*/
    }
        
}
