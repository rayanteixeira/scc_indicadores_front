import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { LocalUser } from '../user/local_user.model';
import { StorageService } from './storage.service';
import { JwtHelper } from 'angular2-jwt';
@Injectable()
export class AuthenticationService {
    url_login = environment.base_url_login;

    constructor(
        private http: HttpClient,
        private storage: StorageService,
        private jwtHelper: JwtHelper
    ) { }

    login(credentials) {
        return this.http.post(this.url_login, credentials,
            {
                observe: 'response',
                responseType: 'text'
            });

    }

    successfulLogin(token: string) {
        console.log("Token: ", token);

        const usertoken = token.substring(7); // pegar somente o token sem a palavra Bearer
        
        const user: LocalUser = {
            token: usertoken,
            username: this.jwtHelper.decodeToken(usertoken).sub
        };

        this.storage.setLocalUser(user);

    }

    logout() {
        // remove user from local storage to log user out
        this.storage.setLocalUser(null);
    }
}
