import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { StorageService } from './storage.service';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationService {
    url_login = environment.base_url_login;
    base_url_refresh_token = environment.base_url_refresh_token;

    constructor(
        private http: HttpClient,
        private localStorage: StorageService,
        private jwtHelper: JwtHelper
    ) { }

    login(credentials): Observable<any> {
        return this.http.post(this.url_login, credentials,{ observe: 'response',responseType: 'text'});
    }

    refreshToken(){
        //return this.http.post(this.base_url_refresh_token, { observe: 'response',responseType: 'text'});
    }


    public isAuthenticated(): boolean {
        // get the token
        const token = localStorage.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
        return tokenNotExpired(null, token);
    }
   /* successfulLogin(token: string) {
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
    }*/
}
