import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../_services/storage.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private storage: StorageService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Passou no Error Inteceptor');
        return next.handle(req)
            .catch((error, caught) => {
                let errorObj = error;
                if (errorObj.error) {
                    errorObj = errorObj.error;
                }
                if (!errorObj.status) {
                    errorObj = JSON.parse(errorObj);
                }
                console.log('Erro dectado pelo Interceptor');
                console.log(errorObj);

                switch (errorObj.status) {
                    case 403:
                        this.handle403(errorObj.status);
                        break;
                    case 401:
                        this.handle403(errorObj.status);
                        break;
                    default:
                        break;
                }
                return Observable.throw(errorObj);
            }) as any;
    }

    handle403(status: any) {
        console.log(status);
        
        this.storage.setLocalUser(null);
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};