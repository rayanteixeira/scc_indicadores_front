import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private storage: StorageService, 
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch((error, caught) => {
                
                let errorObj = error;
                console.log(errorObj.error);

                if (errorObj.error) {
                    errorObj = errorObj.error;
                }
                if (!errorObj.status) {
                    errorObj = JSON.parse(errorObj);
                }
                console.log('Erro dectado pelo Interceptor');
                console.log(errorObj.status);

                switch (errorObj.status) {
                    case 403:
                        this.handle403(errorObj.status);
                        break;
                    case 401:
                        this.handle401(errorObj.status);
                        break;
                    default:
                        break;
                }
                return Observable.throw(errorObj);
            }) as any;
    }

    handle403(status: any) {
        
        this.authenticationService.refreshToken()
        
        this.storage.removeToken();
    }

    handle401(status: any) {
        console.log(status);
    
        this.router.navigate(['/login']);
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};